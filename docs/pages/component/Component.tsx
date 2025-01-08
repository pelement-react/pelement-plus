import { NavLink, Outlet } from 'react-router-dom'
import { Tag } from 'pelement-react';

function ComponentPage() {
  const sidebars = [
    {
      title: 'Overview 组件总览',
      children: [
        {
          title: 'Overview 组件总览',
          link: 'overview'
        }
      ]
    },
    {
      title: 'Basic 基础组件',
      children: [
        {
          title: 'Button 按钮',
          link: 'button'
        },
        {
          title: 'Border 边框',
          link: 'border'
        },
        {
          title: 'Color 色彩',
          link: 'color'
        },
        {
          title: 'Container 布局容器',
          link: 'container'
        },
        {
          title: 'Icon 图标',
          link: 'icon'
        },
        {
          title: 'Layout 布局',
          link: 'layout'
        },
        {
          title: 'Link 链接',
          link: 'link'
        },
        {
          title: 'Text 文本',
          link: 'text'
        },
        {
          title: 'Scrollbar 滚动条',
          link: 'scrollbar'
        },
        {
          title: 'Space 间距',
          link: 'space'
        },
        {
          title: 'Typography 排版',
          link: 'typography'
        }
      ]
    },
    {
      title: 'Form 表单组件',
      children: [
        {
          title: 'Autocomplete 自动补全输入框',
          link: 'autocomplete',
          status: 'wait'
        },
        {
          title: 'Cascader 级联选择器',
          link: 'cascader',
          status: 'wait'
        },
        {
          title: 'Checkbox 多选框',
          link: 'checkbox'
        },
        {
          title: 'ColorPicker 颜色选择器',
          link: 'color-picker'
        },
        {
          title: 'DatePicker 日期选择器',
          link: 'date-picker',
          status: 'wait'
        },
        {
          title: 'DateTimePicker 日期时间选择器',
          link: 'datetime-picker',
          status: 'wait'
        },
        {
          title: 'Form 表单',
          link: 'form',
          status: 'wait'
        },
        {
          title: 'Input 输入框',
          link: 'input'
        },
        {
          title: 'Input Number 数字输入框',
          link: 'input-number',
          status: 'wait'
        },
        {
          title: 'InputTag 标签输入框',
          link: 'input-tag',
          status: 'wait'
        },
        {
          title: 'Mention 提及',
          link: 'mention',
          status: 'wait'
        },
        {
          title: 'Radio 单选框',
          link: 'radio',
          status: 'wait'
        },
        {
          title: 'Rate 评分',
          link: 'rate'
        },
        {
          title: 'Select 选择器',
          link: 'select'
        },
        {
          title: 'Virtualized Select 虚拟化选择器',
          link: 'select-v2',
          status: 'wait'
        },
        {
          title: 'Slider 滑块',
          link: 'slider',
          status: 'wait'
        },
        {
          title: 'Switch 开关',
          link: 'switch'
        },
        {
          title: 'TimePicker 时间选择器',
          link: 'time-picker',
          status: 'wait'
        },
        {
          title: 'TimeSelect 时间选择',
          link: 'time-select'
        },
        {
          title: 'Transfer 穿梭框',
          link: 'transfer',
          status: 'wait'
        },
        {
          title: 'TreeSelect 树形选择',
          link: 'tree-select',
          status: 'wait'
        },
        {
          title: 'Upload 上传',
          link: 'upload',
          status: 'wait'
        },
      ]
    },
    {
      title: 'Data 数据展示',
      children: [
        {
          title: 'Avatar 头像',
          link: 'avatar'
        },
        {
          title: 'Badge 徽章',
          link: 'badge'
        },
        {
          title: 'Calendar 日历',
          link: 'calendar',
          status: 'wait'
        },
        {
          title: 'Card 卡片',
          link: 'card'
        },
        {
          title: 'Carousel 走马灯',
          link: 'carousel',
          status: 'wait'
        },
        {
          title: 'Collapse 折叠面板',
          link: 'collapse'
        },
        {
          title: 'Descriptions 描述列表',
          link: 'descriptions'
        },
        {
          title: 'Empty 空状态',
          link: 'empty'
        },
        {
          title: 'Image 图片',
          link: 'image'
        },
        {
          title: 'Infinite Scroll 无限滚动',
          link: 'infinite-scroll',
          status: 'wait'
        },
        {
          title: 'Pagination 分页',
          link: 'pagination',
          status: 'wait'
        },
        {
          title: 'Progress 进度条',
          link: 'progress'
        },
        {
          title: 'Result 结果',
          link: 'result'
        },
        {
          title: 'Skeleton 骨架屏',
          link: 'skeleton'
        },
        {
          title: 'Table 表格',
          link: 'table'
        },
        {
          title: 'Virtualized Table 虚拟化表格',
          link: 'table-v2',
          status: 'wait'
        },
        {
          title: 'Tag 标签',
          link: 'tag'
        },
        {
          title: 'Timeline 时间线',
          link: 'timeline'
        },
        {
          title: 'Tour 漫游式引导',
          link: 'tour',
          status: 'wait'
        },
        {
          title: 'Tree 树形控件',
          link: 'tree',
          status: 'wait'
        },
        {
          title: 'Tree V2 虚拟化树形控件',
          link: 'tree-v2',
          status: 'wait'
        },
        {
          title: 'Statistic 统计组件',
          link: 'statistic'
        },
        {
          title: 'Segmented 分段控制器',
          link: 'segmented'
        },
      ]
    },
    {
      title: 'Navigation 导航',
      children: [
        {
          title: 'Affix 固钉',
          link: 'affix'
        },
        {
          title: 'Anchor 锚点',
          link: 'anchor',
          status: 'wait'
        },
        {
          title: 'Backtop 回到顶部',
          link: 'backtop'
        },
        {
          title: 'Breadcrumb 面包屑',
          link: 'breadcrumb'
        },
        {
          title: 'Dropdown 下拉菜单',
          link: 'dropdown',
          status: 'wait'
        },
        {
          title: 'Menu 菜单',
          link: 'menu',
          status: 'wait'
        },
        {
          title: 'Page Header 页头',
          link: 'page-header'
        },
        {
          title: 'Steps 步骤条',
          link: 'steps',
          status: 'wait'
        },
        {
          title: 'Tabs 标签页',
          link: 'tabs',
          status: 'wait'
        },
      ]
    },
    {
      title: 'Feedback 反馈组件',
      children: [
        {
          title: 'Alert 提示',
          link: 'alert'
        },
        {
          title: 'Dialog 对话框',
          link: 'dialog'
        },
        {
          title: 'Drawer 抽屉',
          link: 'drawer'
        },
        {
          title: 'Loading 加载',
          link: 'loading'
        },
        {
          title: 'Message 消息提示',
          link: 'message'
        },
        {
          title: 'MessageBox 消息弹框',
          link: 'message-box'
        },
        {
          title: 'Notification 通知',
          link: 'notification'
        },
        {
          title: 'Popconfirm 气泡确认框',
          link: 'popconfirm'
        },
        {
          title: 'Popover 气泡卡片',
          link: 'popover'
        },
        {
          title: 'Tooltip 文字提示',
          link: 'tooltip'
        },
      ]
    },
    {
      title: 'Others 其他',
      children: [
        {
          title: 'Divider 分割线',
          link: 'divider'
        },
        {
          title: 'Watermark 水印',
          link: 'watermark'
        },
      ]
    }
  ]

  // 组件的总量
  let totalNum = 0
  // 待开发的组件数量
  let waitNum = 0
  sidebars.forEach((sidebar: any) => {
    sidebar.children.forEach((item: any) => {
      totalNum++
      if (item.status === 'wait') {
        waitNum++
      }
    })
  })

  console.info(`组件总量：${totalNum}`)
  console.warn(`待开发的组件数量：${waitNum}`)

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-groups">
          <section className="sidebar-group">
            {sidebars.map((sidebar: any, sidebarIndex: number) =>
              <div key={sidebarIndex}>
                <p className="sidebar-group__title">{sidebar.title}</p>
                {sidebar.children.map((item: any, index: number) =>
                  <NavLink key={index} to={item.link}>
                    {item.title}
                    {/* 组件状态待开发 */}
                    {item.status === 'wait' &&
                      <Tag style={{ marginLeft: '4px' }} type="warning">待</Tag>
                    }
                  </NavLink>
                )}
              </div>
            )}
          </section>
        </div>
      </aside>
      <main className="page-content">
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default ComponentPage