import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { useRenderClient } from '@/hooks/useRenderClient'

import { TypeMaterialIconName } from '@/shared/types/icon.types'

const MaterialIcon: FC<{ name: TypeMaterialIconName; size?: number }> = ({
  name,
  size,
}) => {
  const { isRenderClient } = useRenderClient()

  const IconComponent = MaterialIcons[name]

  if (isRenderClient) {
    return <IconComponent size={size} /> || <MaterialIcons.MdDragIndicator />
  }
  return null
}

export default MaterialIcon
