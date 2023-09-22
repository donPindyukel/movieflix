import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

import styles from './Logo.module.scss'

const Logo: FC = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src={logoImage}
        width={247}
        height={34}
        draggable={false}
        alt="Online cinema"
      />
    </Link>
  )
}
export default Logo
