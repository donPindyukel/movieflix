import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery.interface'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
  return (
    <Link
      href={item.link}
      className={classNames(styles.item, {
        [styles.withText]: item.content,
        [styles.horizontal]: variant === 'horizontal',
        [styles.vertical]: variant === 'vertical',
      })}
    >
      <Image
        src={item.posterPath}
        alt={item.name}
        fill
        sizes="100%, 100%"
        draggable={false}
        priority
      />
      {item.content && (
        <div className={styles.content}>
          <div className={styles.title}>{item.content.title}</div>
          {item.content.subtitle && (
            <div className={styles.subTitle}>{item.content.subtitle}</div>
          )}
        </div>
      )}
    </Link>
  )
}
export default GalleryItem
