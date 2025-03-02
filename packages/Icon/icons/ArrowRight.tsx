import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import ArrowRightSvg from '@element-plus/icons-svg/arrow-right.svg?react'

const ArrowRight: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    onClick,
  } = props

  return (
    <i
      ref={ref}
      style={style}
      className={
        clsx(
          'el-icon',
          className,
        )
      }
      onClick={onClick}
    >
      <ArrowRightSvg />
    </i>
  )
}

const ArrowRightComponent = forwardRef<HTMLDivElement, IconProps>(ArrowRight)

ArrowRightComponent.displayName = 'ArrowRight'

export default ArrowRightComponent