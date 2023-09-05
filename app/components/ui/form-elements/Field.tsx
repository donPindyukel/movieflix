import classNames from 'classnames'
import { forwardRef } from 'react'

import { IField } from './form.interface'
import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, type = 'text', style, ...rest }, ref) => {
    return (
      <div className={classNames(styles.common, styles.field)} style={style}>
        <label>
          <span>{placeholder}</span>
          <input ref={ref} {...rest} type={type} />
          {error && <div className={styles.error}>{error.message}</div>}
        </label>
      </div>
    )
  }
)

Field.displayName = 'Field'

export default Field
