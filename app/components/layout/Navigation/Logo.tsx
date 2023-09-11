import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
  return (
    <Link href="/" className="pl-2 mb-10 block">
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
