import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

import MaterialIcon from '../ui/MaterialIcon'
import Button from '../ui/form-elements/Button'

import styles from './Layout.module.scss'
import Logo from './Navigation/Logo'
import MenuContainer from './Navigation/MenuContainer/MenuContainer'
import Navigation from './Navigation/Navigation'
import Search from './Sidebar/Search/Search'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)
  const router = useRouter()

  const mobileMenuOpenHandler = () => {
    window.scrollTo(0, 0)
    document.body.classList.add('no-scroll')
    setIsMobileMenuVisible(true)
  }

  const mobileMenuCloseHandler = () => {
    document.body.classList.remove('no-scroll')
    setIsMobileMenuVisible(false)
  }
  useEffect(() => {
    router.events.on('routeChangeComplete', mobileMenuCloseHandler)

    return () =>
      router.events.off('routeChangeComplete', mobileMenuCloseHandler)
  }, [])

  return (
    <div className={styles.layout}>
      {isMobileMenuVisible && (
        <div className={styles.mobileMenu}>
          <button
            className={styles.closeButton}
            onClick={mobileMenuCloseHandler}
          >
            <MaterialIcon size={30} name="MdClose" />
          </button>
          <MenuContainer />
        </div>
      )}
      <div className={styles.mobileHeader}>
        <div className={styles.visibleHeader}>
          <div className={styles.logoWrap}>
            <Logo />
          </div>
          <div className={styles.searchWrap}>
            <Search />
          </div>
          <button className={styles.burger} onClick={mobileMenuOpenHandler}>
            <MaterialIcon size={30} name="MdMenu" />
          </button>
        </div>
      </div>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.center}>{children}</div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
    </div>
  )
}
export default Layout
