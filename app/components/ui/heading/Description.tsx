import classNames from 'classnames'
import parse from 'html-react-parser'
import { FC } from 'react'

const Description: FC<{ text: string; className?: string }> = ({
  text,
  className = '',
}) => {
  return (
    <div
      className={classNames(
        'text-lg font-light text-white text-opacity-60',
        className
      )}
    >
      {parse(text)}
    </div>
  )
}
export default Description
