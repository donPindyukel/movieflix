import Head from 'next/head'
import NextProgressBar from 'nextjs-progressbar'
import { FC, PropsWithChildren } from 'react'

import { accentColor } from '@/config/constants'

import FavIcons from './Favicons'

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NextProgressBar
        color={accentColor}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=5" />
        <FavIcons />
        <meta name="theme-color" content={'#181B1E'} />
        <meta name="msapplication-navbutton-color" content={'#181B1E'} />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={'#181B1E'}
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      {children}
    </>
  )
}
export default HeadProvider
