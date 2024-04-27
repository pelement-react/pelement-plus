import { lazy } from 'react'
const SuspenseContent = lazy(() => import('../SuspenseContent/SuspenseContent'))
const ButtonMdx = lazy(() => import('../../../packages/Button/index.zh-CN.mdx'))
const BorderMdx = lazy(() => import('../../pages/component/border/border.zh-CN.mdx'))
const ContainerMdx = lazy(() => import('../../../packages/Container/index.zh-CN.mdx'))
const IconMdx = lazy(() => import('../../../packages/Icon/index.zh-CN.mdx'))
const LayoutMdx = lazy(() => import('../../../packages/Layout/index.zh-CN.mdx'))
const LinkMdx = lazy(() => import('../../../packages/Link/index.zh-CN.mdx'))
const TextMdx = lazy(() => import('../../../packages/Text/index.zh-CN.mdx'))
const ScrollbarMdx = lazy(() => import('../../../packages/Scrollbar/index.zh-CN.mdx'))
const SpaceMdx = lazy(() => import('../../../packages/Space/index.zh-CN.mdx'))
const SwitchMdx = lazy(() => import('../../../packages/Switch/index.zh-CN.mdx'))
const RateMdx = lazy(() => import('../../../packages/Rate/index.zh-CN.mdx'))
const AvatarMdx = lazy(() => import('../../../packages/Avatar/index.zh-CN.mdx'))
const BadgeMdx = lazy(() => import('../../../packages/Badge/index.zh-CN.mdx'))
const CollapseMdx = lazy(() => import('../../../packages/Collapse/index.zh-CN.mdx'))
const ProgressMdx = lazy(() => import('../../../packages/Progress/index.zh-CN.mdx'))
const ResultMdx = lazy(() => import('../../../packages/Result/index.zh-CN.mdx'))
const TableMdx = lazy(() => import('../../../packages/Table/index.zh-CN.mdx'))
const TagMdx = lazy(() => import('../../../packages/Tag/index.zh-CN.mdx'))
const AlertMdx = lazy(() => import('../../../packages/Alert/index.zh-CN.mdx'))
const DialogMdx = lazy(() => import('../../../packages/Dialog/index.zh-CN.mdx'))
const DrawerMdx = lazy(() => import('../../../packages/Drawer/index.zh-CN.mdx'))
const MessageBox = lazy(() => import('../../../packages/MessageBox/index.zh-CN.mdx'))
const PopconfirmMdx = lazy(() => import('../../../packages/Popconfirm/index.zh-CN.mdx'))
const PopoverMdx = lazy(() => import('../../../packages/Popover/index.zh-CN.mdx'))
const TooltipMdx = lazy(() => import('../../../packages/Tooltip/index.zh-CN.mdx'))
const DividerMsx = lazy(() => import('../../../packages/Divider/index.zh-CN.mdx'))
import './Markdown.scss'

function DemoMdx({ name }) {
  let demo
  switch (name) {
    case 'button':
      demo = <SuspenseContent><ButtonMdx /></SuspenseContent>
      break
    case 'border':
      demo = <SuspenseContent><BorderMdx /></SuspenseContent>
      break
    case 'container':
      demo = <SuspenseContent><ContainerMdx /></SuspenseContent>
      break
    case 'icon':
      demo = <SuspenseContent><IconMdx /></SuspenseContent>
      break
    case 'layout':
      demo = <SuspenseContent><LayoutMdx /></SuspenseContent>
      break
    case 'link':
      demo = <SuspenseContent><LinkMdx /></SuspenseContent>
      break
    case 'text':
      demo = <SuspenseContent><TextMdx /></SuspenseContent>
      break
    case 'scrollbar':
      demo = <SuspenseContent><ScrollbarMdx /></SuspenseContent>
      break
    case 'space':
      demo = <SuspenseContent><SpaceMdx /></SuspenseContent>
      break
    case 'switch':
      demo = <SuspenseContent><SwitchMdx /></SuspenseContent>
      break
    case 'rate':
      demo = <SuspenseContent><RateMdx /></SuspenseContent>
      break
    case 'avatar':
      demo = <SuspenseContent><AvatarMdx /></SuspenseContent>
      break
    case 'badge':
      demo = <SuspenseContent><BadgeMdx /></SuspenseContent>
      break
    case 'collapse':
      demo = <SuspenseContent><CollapseMdx /></SuspenseContent>
      break
    case 'progress':
      demo = <SuspenseContent><ProgressMdx /></SuspenseContent>
      break
    case 'result':
      demo = <SuspenseContent><ResultMdx /></SuspenseContent>
      break
    case 'table':
      demo = <SuspenseContent><TableMdx /></SuspenseContent>
      break
    case 'tag':
      demo = <SuspenseContent><TagMdx /></SuspenseContent>
      break
    case 'alert':
      demo = <SuspenseContent><AlertMdx /></SuspenseContent>
      break
    case 'dialog':
      demo = <SuspenseContent><DialogMdx /></SuspenseContent>
      break
    case 'drawer':
      demo = <SuspenseContent><DrawerMdx /></SuspenseContent>
      break
    case 'message-box':
      demo = <SuspenseContent><MessageBox /></SuspenseContent>
      break
    case 'popconfirm':
      demo = <SuspenseContent><PopconfirmMdx /></SuspenseContent>
      break
    case 'popover':
      demo = <SuspenseContent><PopoverMdx /></SuspenseContent>
      break
    case 'tooltip':
      demo = <SuspenseContent><TooltipMdx /></SuspenseContent>
      break
    case 'divider':
      demo = <SuspenseContent><DividerMsx /></SuspenseContent>
      break;
  }
  return demo
}

function Markdown({ name }) {
  return (
    <>
      <div className="markdown-body">
        <DemoMdx name={name} />
      </div>
    </>
  )
}

export default Markdown