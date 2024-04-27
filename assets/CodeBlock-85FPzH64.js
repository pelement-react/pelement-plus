import{g as ar,r as oe,j as S}from"./index-qpupek7l.js";const or=`import { Alert } from 'pelement-react'\r
import './AlertBasic.scss'\r
\r
function AlertBasic() {\r
  return (\r
    <>\r
      <Alert title="success alert" type="success" />\r
      <Alert title="info alert" type="info" />\r
      <Alert title="warning alert" type="warning" />\r
      <Alert title="error alert" type="error" />\r
    </>\r
  )\r
}\r
\r
export default AlertBasic`,ir=`import { Alert } from 'pelement-react'\r
\r
function AlertCenter() {\r
  return (\r
    <>\r
      <Alert title="success alert" type="success" center showIcon />\r
      <Alert title="info alert" type="info" center showIcon />\r
      <Alert title="warning alert" type="warning" center showIcon />\r
      <Alert title="error alert" type="error" center showIcon />\r
    </>\r
  )\r
}\r
\r
export default AlertCenter`,sr=`import { Alert } from 'pelement-react'\r
\r
function AlertClose() {\r
  function hello() {\r
    alert('Hello World!')\r
  }\r
\r
  return (\r
    <>\r
      <Alert title="unclosable alert" type="success" closable={false} />\r
      <Alert title="customized close-text" type="info" closeText="Gotcha" />\r
      <Alert title="alert with callback" type="warning" close={hello} />\r
    </>\r
  )\r
}\r
\r
export default AlertClose`,lr=`import { Alert } from 'pelement-react'\r
\r
function AlertDescription() {\r
  return (\r
    <>\r
      <Alert\r
        title="with description"\r
        type="success"\r
        description="This is a description."\r
      />\r
    </>\r
  )\r
}\r
\r
export default AlertDescription`,cr=`import { Alert } from 'pelement-react'\r
\r
function AlertEffect() {\r
  return (\r
    <>\r
      <Alert title="success alert" type="success" effect="dark" />\r
      <Alert title="info alert" type="info" effect="dark" />\r
      <Alert title="warning alert" type="warning" effect="dark" />\r
      <Alert title="error alert" type="error" effect="dark" />\r
    </>\r
  )\r
}\r
\r
export default AlertEffect`,pr=`import { Alert } from 'pelement-react'\r
\r
function AlertIconDescription() {\r
  return (\r
    <>\r
      <Alert\r
        title="success alert"\r
        type="success"\r
        description="more text description"\r
        showIcon\r
      />\r
      <Alert\r
        title="info alert"\r
        type="info"\r
        description="more text description"\r
        showIcon\r
      />\r
      <Alert\r
        title="warning alert"\r
        type="warning"\r
        description="more text description"\r
        showIcon\r
      />\r
      <Alert\r
        title="error alert"\r
        type="error"\r
        description="more text description"\r
        showIcon\r
      />\r
    </>\r
  )\r
}\r
\r
export default AlertIconDescription`,ur=`import { Alert } from 'pelement-react'\r
\r
function AlertIcon() {\r
  return (\r
    <>\r
      <Alert title="success alert" type="success" showIcon />\r
      <Alert title="info alert" type="info" showIcon />\r
      <Alert title="warning alert" type="warning" showIcon />\r
      <Alert title="error alert" type="error" showIcon />\r
    </>\r
  )\r
}\r
\r
export default AlertIcon`,dr=`import { Avatar, Col, Row } from 'pelement-react'\r
import './AvatarBasic.scss'\r
\r
function AvatarBasic() {\r
  const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'\r
  const squareUrl = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'\r
  const sizeList = ['small', '', 'large']\r
\r
  const sizeAvatars = sizeList.map((item: any, index: number) => {\r
    return (\r
      <div className="block" key={index}>\r
        <Avatar size={item} src={circleUrl} />\r
      </div>\r
    )\r
  })\r
\r
  const squareAvatars = sizeList.map((item: any, index: number) => {\r
    return (\r
      <div className="block" key={index}>\r
        <Avatar shape="square" size={item} src={squareUrl} />\r
      </div>\r
    )\r
  })\r
\r
  return (\r
    <>\r
      <Row className="common-avatar">\r
        <Col span={12}>\r
          <div className="sub-title">circle</div>\r
          <div className="demo-basic--circle">\r
            <div className="block">\r
              <Avatar size={50} src={circleUrl} />\r
            </div>\r
            {sizeAvatars}\r
          </div>\r
        </Col>\r
        <Col span={12}>\r
          <div className="sub-title">square</div>\r
          <div className="demo-basic--circle">\r
            <div className="block">\r
              <Avatar shape="square" size={50} src={squareUrl} />\r
            </div>\r
            {squareAvatars}\r
          </div>\r
        </Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default AvatarBasic`,gr=`import { Avatar } from 'pelement-react'\r
\r
function AvatarError() {\r
\r
  function errorHandler() {\r
    console.log('error')\r
  }\r
\r
  return (\r
    <>\r
      <div className="demo-type">\r
        <Avatar size={60} src="https://empty" onError={errorHandler}>\r
          <img\r
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"\r
          />\r
        </Avatar>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default AvatarError`,mr=`import { Avatar } from "pelement-react"\r
\r
function AvatarFit() {\r
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']\r
  const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\r
\r
  const fitAvatars = fits.map((item: any, index: number) => {\r
    return (\r
      <div className="block" key={index}>\r
        <span className="title">{item}</span>\r
        <Avatar shape="square" size={100} fit={item} src={url} />\r
      </div>\r
    )\r
  })\r
\r
  return (\r
    <>\r
      <div className="avatar-fit">\r
        {fitAvatars}\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default AvatarFit`,fr=`import { Avatar, UserFilled } from 'pelement-react'\r
\r
function AvatarType() {\r
  return (\r
    <>\r
      <div className="common-avatar">\r
        <div>\r
          <Avatar icon={<UserFilled />} />\r
        </div>\r
        <div>\r
          <Avatar\r
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"\r
          />\r
        </div>\r
        <div>\r
          <Avatar> user </Avatar>\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default AvatarType`,hr=`import { Badge, Button } from 'pelement-react'\r
import './BadgeBasic.scss'\r
\r
function BadgeBasic() {\r
  return (\r
    <>\r
      <div className="common-badge">\r
        <Badge value={12} className="item">\r
          <Button>comments</Button>\r
        </Badge>\r
        <Badge value={3} className="item">\r
          <Button>replies</Button>\r
        </Badge>\r
        <Badge value={1} className="item" type="primary">\r
          <Button>comments</Button>\r
        </Badge>\r
        <Badge value={2} className="item" type="warning">\r
          <Button>replies</Button>\r
        </Badge>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BadgeBasic`,_r=`import { Badge, Button, Share } from 'pelement-react'\r
\r
function BadgeIsDot() {\r
  return (\r
    <>\r
      <div className="common-badge">\r
        <Badge isDot className="item">query</Badge>\r
        <Badge isDot className="item">\r
          <Button className="share-button" icon={<Share />} type="primary" />\r
        </Badge>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BadgeIsDot`,br=`import { Badge, Button } from 'pelement-react'\r
\r
function BadgeMax() {\r
  return (\r
    <>\r
      <div className="common-badge">\r
        <Badge value={200} max={99} className="item">\r
          <Button>comments</Button>\r
        </Badge>\r
        <Badge value={100} max={10} className="item">\r
          <Button>replies</Button>\r
        </Badge>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BadgeMax`,xr=`import { Badge, Button } from 'pelement-react'\r
\r
function BadgeValue() {\r
  return (\r
    <>\r
      <div className="common-badge">\r
        <Badge value="new" className="item">\r
          <Button>comments</Button>\r
        </Badge>\r
        <Badge value="hot" className="item">\r
          <Button>replies</Button>\r
        </Badge>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BadgeValue`,vr=`import { Button, Check, Delete, Edit, Message, Search, Star } from 'pelement-react'\r
\r
function ButtonBasic() {\r
  return (\r
    <>\r
      <div className="mb-4">\r
        <Button>Default</Button>\r
        <Button type="primary">Primary</Button>\r
        <Button type="success">Success</Button>\r
        <Button type="info">Info</Button>\r
        <Button type="warning">Warning</Button>\r
        <Button type="danger">Danger</Button>\r
      </div>\r
      <div className="mb-4">\r
        <Button plain>Plain</Button>\r
        <Button type="primary" plain>Primary</Button>\r
        <Button type="success" plain>Success</Button>\r
        <Button type="info" plain>Info</Button>\r
        <Button type="warning" plain>Warning</Button>\r
        <Button type="danger" plain>Danger</Button>\r
      </div>\r
      <div className="mb-4">\r
        <Button round>Round</Button>\r
        <Button type="primary" round>Primary</Button>\r
        <Button type="success" round>Success</Button>\r
        <Button type="info" round>Info</Button>\r
        <Button type="warning" round>Warning</Button>\r
        <Button type="danger" round>Danger</Button>\r
      </div>\r
      <div>\r
        <Button icon={<Search />} circle></Button>\r
        <Button type="primary" icon={<Edit />} circle></Button>\r
        <Button type="success" icon={<Check />} circle></Button>\r
        <Button type="info" icon={<Message />} circle></Button>\r
        <Button type="warning" icon={<Star />} circle></Button>\r
        <Button type="danger" icon={<Delete />} circle></Button>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ButtonBasic`,Br=`import { Button } from 'pelement-react'\r
\r
function ButtonDisabled() {\r
  return (\r
    <>\r
      <div className="mb-4">\r
        <Button disabled>Default</Button>\r
        <Button type="primary" disabled>Primary</Button>\r
        <Button type="success" disabled>Success</Button>\r
        <Button type="info" disabled>Info</Button>\r
        <Button type="warning" disabled>Warning</Button>\r
        <Button type="danger" disabled>Danger</Button>\r
      </div>\r
      <div>\r
        <Button plain disabled>Plain</Button>\r
        <Button type="primary" plain disabled>Primary</Button>\r
        <Button type="success" plain disabled>Success</Button>\r
        <Button type="info" plain disabled>Info</Button>\r
        <Button type="warning" plain disabled>Warning</Button>\r
        <Button type="danger" plain disabled>Danger</Button>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ButtonDisabled`,yr=`import { Button } from 'pelement-react'\r
\r
function ButtonLink() {\r
  return (\r
    <>\r
      <p>Basic link button</p>\r
      <Button link>Default</Button>\r
      <Button type="primary" link>Primary</Button>\r
      <Button type="success" link>Success</Button>\r
      <Button type="info" link>Info</Button>\r
      <Button type="warning" link>Warning</Button>\r
      <Button type="danger" link>Danger</Button>\r
      <p>Disabled link button</p>\r
      <Button link disabled>Default</Button>\r
      <Button type="primary" link disabled>Primary</Button>\r
      <Button type="success" link disabled>Success</Button>\r
      <Button type="info" link disabled>Info</Button>\r
      <Button type="warning" link disabled>Warning</Button>\r
      <Button type="danger" link disabled>Danger</Button>\r
    </>\r
  )\r
}\r
\r
export default ButtonLink`,wr=`import { Button } from 'pelement-react'\r
\r
function ButtonText() {\r
  const buttons = [\r
    { type: '', text: 'plain' },\r
    { type: 'primary', text: 'primary' },\r
    { type: 'success', text: 'success' },\r
    { type: 'info', text: 'info' },\r
    { type: 'warning', text: 'warning' },\r
    { type: 'danger', text: 'danger' },\r
  ]\r
\r
  const textList = buttons.map((button, index) =>\r
    <Button\r
      key={index}\r
      type={button.type as any}\r
      text\r
    >\r
      {button.text}\r
    </Button>\r
  )\r
\r
  const bgList = buttons.map((button, index) =>\r
    <Button\r
      key={index}\r
      type={button.type as any}\r
      text\r
      bg\r
    >\r
      {button.text}\r
    </Button>\r
  )\r
\r
  const disabledList = buttons.map((button, index) =>\r
    <Button\r
      key={index}\r
      type={button.type as any}\r
      text\r
      disabled\r
    >\r
      {button.text}\r
    </Button>\r
  )\r
\r
  return (\r
    <>\r
      <p>Basic text button</p>\r
      <div className="flex justify-space-between mb-4 flex-wrap gap-4">\r
        {textList}\r
      </div>\r
\r
      <p>Background color always on</p>\r
      <div className="flex justify-space-between mb-4 flex-wrap gap-4">\r
        {bgList}\r
      </div>\r
\r
      <p>Disabled text button</p>\r
      <div className="flex justify-space-between flex-wrap gap-4">\r
        {disabledList}\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ButtonText`,Cr=`import { Collapse, CollapseItem } from 'pelement-react'\r
\r
function CollapseBasic() {\r
  return (\r
    <>\r
      <Collapse>\r
        <CollapseItem title="Consistency" name="1">\r
          <div>\r
            Consistent with real life: in line with the process and logic of real\r
            life, and comply with languages and habits that the users are used to;\r
          </div>\r
          <div>\r
            Consistent within interface: all elements should be consistent, such\r
            as: design style, icons and texts, position of elements, etc.\r
          </div>\r
        </CollapseItem>\r
        <CollapseItem title="Feedback" name="2">\r
          <div>\r
            Operation feedback: enable the users to clearly perceive their\r
            operations by style updates and interactive effects;\r
          </div>\r
          <div>\r
            Visual feedback: reflect current state by updating or rearranging\r
            elements of the page.\r
          </div>\r
        </CollapseItem>\r
        <CollapseItem title="Efficiency" name="3">\r
          <div>\r
            Simplify the process: keep operating process simple and intuitive;\r
          </div>\r
          <div>\r
            Definite and clear: enunciate your intentions clearly so that the\r
            users can quickly understand and make decisions;\r
          </div>\r
          <div>\r
            Easy to identify: the interface should be straightforward, which helps\r
            the users to identify and frees them from memorizing and recalling.\r
          </div>\r
        </CollapseItem>\r
        <CollapseItem title="Controllability" name="4">\r
          <div>\r
            Decision making: giving advices about operations is acceptable, but do\r
            not make decisions for the users;\r
          </div>\r
          <div>\r
            Controlled consequences: users should be granted the freedom to\r
            operate, including canceling, aborting or terminating current\r
            operation.\r
          </div>\r
        </CollapseItem>\r
      </Collapse>\r
    </>\r
  )\r
}\r
\r
export default CollapseBasic`,Tr=`import { Container, Header, Main } from 'pelement-react'\r
import './ContainerBasic.scss'\r
\r
function ContainerBasic() {\r
\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Header>Header</Header>\r
          <Main>Main</Main>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic`,Sr=`import { Container, Footer, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic1() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Header>Header</Header>\r
          <Main>Main</Main>\r
          <Footer>Footer</Footer>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic1`,kr=`import { Aside, Container, Main } from 'pelement-react'\r
\r
function ContainerBasic2() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Aside width="200px">Aside</Aside>\r
          <Main>Main</Main>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic2`,Nr=`import { Aside, Container, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic3() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Header>Header</Header>\r
          <Container>\r
            <Aside width="200px">Aside</Aside>\r
            <Main>Main</Main>\r
          </Container>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic3`,Er=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic4() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Header>Header</Header>\r
          <Container>\r
            <Aside width="200px">Aside</Aside>\r
            <Container>\r
              <Main>Main</Main>\r
              <Footer>Footer</Footer>\r
            </Container>\r
          </Container>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic4`,Ar=`import { Aside, Container, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic5() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Aside width="200px">Aside</Aside>\r
          <Container>\r
            <Header>Header</Header>\r
            <Main>Main</Main>\r
          </Container>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic5`,Dr=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic6() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Aside width="200px">Aside</Aside>\r
          <Container>\r
            <Header>Header</Header>\r
            <Main>Main</Main>\r
            <Footer>Footer</Footer>\r
          </Container>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic6`,Rr=`import { Button, Dialog } from 'pelement-react'\r
import { useState } from 'react'\r
import './DialogBasic.scss'\r
\r
function DialogBasic() {\r
  const [dialogVisible, setDialogVisible] = useState(false)\r
\r
  function handlerClick() {\r
    setDialogVisible(true)\r
  }\r
\r
  function handleClose() {\r
    setDialogVisible(false)\r
  }\r
\r
  function handleOk() {\r
    setDialogVisible(false)\r
  }\r
\r
  function handleCancel() {\r
    setDialogVisible(false)\r
  }\r
\r
  // footer\r
  function Footer() {\r
    return (\r
      <>\r
        <span className="dialog-footer">\r
          <button aria-disabled="false" type="button" className="el-button" onClick={handleOk}>\r
            <span className="">Cancel</span>\r
          </button>\r
          <button aria-disabled="false" type="button" className="el-button el-button--primary" onClick={handleCancel}>\r
            <span className=""> Confirm </span>\r
          </button>\r
        </span>\r
      </>\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button text onClick={handlerClick}>\r
        click to open the Dialog\r
      </Button>\r
\r
      <Dialog\r
        open={dialogVisible}\r
        title="Tips"\r
        width="30%"\r
        onClose={handleClose}\r
        footer={<Footer />}\r
      >\r
        <span>This is a message</span>\r
      </Dialog>\r
    </>\r
  )\r
}\r
\r
export default DialogBasic`,Lr=`import { useState } from 'react'\r
import { Button, Dialog } from 'pelement-react'\r
\r
function DialogContent() {\r
  const [dialogTableVisible, setDialogTableVisible] = useState(false)\r
  const [dialogFormVisible, setDialogFormVisible] = useState(false)\r
\r
  function handlerTable() {\r
    setDialogTableVisible(true)\r
  }\r
\r
  function handlerForm() {\r
    setDialogFormVisible(true)\r
  }\r
\r
  function FormFooter() {\r
    return (\r
      <>\r
        <span className="dialog-footer">\r
          <Button onClick={() => { setDialogFormVisible(false) }}>Cancel</Button>\r
          <Button type="primary" onClick={() => { setDialogFormVisible(false) }}>\r
            Confirm\r
          </Button>\r
        </span>\r
      </>\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button text onClick={handlerTable}>\r
        open a Table nested Dialog\r
      </Button>\r
\r
      <Dialog\r
        open={dialogTableVisible}\r
        title="Shipping address"\r
        onClose={() => { setDialogTableVisible(false) }}\r
      >\r
        Table组件\r
      </Dialog>\r
\r
      <Button text onClick={handlerForm}>\r
        open a Form nested Dialog\r
      </Button>\r
\r
      <Dialog\r
        open={dialogFormVisible}\r
        title="Shipping address"\r
        footer={<FormFooter />}\r
        onClose={() => { setDialogFormVisible(false) }}\r
      >\r
        Form 表单\r
      </Dialog>\r
    </>\r
  )\r
}\r
\r
export default DialogContent`,Mr=`import { useState } from 'react'\r
import { Button, CircleCloseFilled, Dialog } from 'pelement-react'\r
\r
function DialogHeader() {\r
  const [visible, setVisible] = useState(false)\r
\r
  function onClose() {\r
    setVisible(false)\r
  }\r
\r
  function Header() {\r
    return (\r
      <>\r
        <div className="dialog-header">\r
          <h4 className="el-dialog__title">This is a custom header!</h4>\r
          <Button type="danger" onClick={onClose}>\r
            <CircleCloseFilled />\r
            Close\r
          </Button>\r
        </div>\r
      </>\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button onClick={() => setVisible(true)}>\r
        Open Dialog with customized header\r
      </Button>\r
      <Dialog open={visible} showClose={false} header={<Header />} onClose={onClose}>\r
        This is dialog content.\r
      </Dialog>\r
    </>\r
  )\r
}\r
\r
export default DialogHeader`,Ir=`import { Divider } from 'pelement-react'\r
\r
function DividerBasic() {\r
  return (\r
    <>\r
      <div>\r
        <span>\r
          I sit at my window this morning where the world like a passer-by stops\r
          for a moment, nods to me and goes.\r
        </span>\r
        <Divider />\r
        <span>\r
          There little thoughts are the rustle of leaves; they have their whisper\r
          of joy in my mind.\r
        </span>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DividerBasic`,Or=`import { Divider } from 'pelement-react'\r
\r
function DividerBorder() {\r
  return (\r
    <>\r
      <div>\r
        <span>What language is thine, O sea?</span>\r
        <Divider borderStyle="dashed" />\r
        <span>The language of eternal question.</span>\r
      </div>\r
      <Divider borderStyle="dotted" />\r
      <span>What language is thy answer, O sky?</span>\r
      <Divider borderStyle="double" />\r
      <span>The language of eternal silence.</span>\r
    </>\r
  )\r
}\r
\r
export default DividerBorder`,Pr=`import { Divider, StarFilled } from 'pelement-react'\r
\r
function DividerContent() {\r
  return (\r
    <>\r
      <div>\r
        <span>What you are you do not see, what you see is your shadow. </span>\r
        <Divider contentPosition="left">Rabindranath Tagore</Divider>\r
        <span>\r
          My wishes are fools, they shout across thy song, my Master. Let me but\r
          listen.\r
        </span>\r
        <Divider>\r
          <StarFilled />\r
        </Divider>\r
        <span>I cannot choose the best. The best chooses me.</span>\r
        <Divider contentPosition="right">Rabindranath Tagore</Divider>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DividerContent`,zr=`import { Divider } from 'pelement-react'\r
\r
function DividerDirection() {\r
  return (\r
    <>\r
      <div>\r
        <span>Rain</span>\r
        <Divider direction="vertical" />\r
        <span>Home</span>\r
        <Divider direction="vertical" border-style="dashed" />\r
        <span>Grass</span>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DividerDirection`,Fr=`import { useState } from 'react'\r
import { Button, Drawer } from 'pelement-react'\r
\r
function DrawerBasic() {\r
  const [direction, setDirection] = useState('')\r
  const [drawer, setDrawer] = useState(false)\r
  const [drawer2, setDrawer2] = useState(false)\r
\r
  function handlerLeftToRight() {\r
    setDirection('ltr')\r
    setDrawer(true)\r
  }\r
\r
  function handlerRightToLeft() {\r
    setDirection('rtl')\r
    setDrawer(true)\r
  }\r
\r
  function handlerTopToBottom() {\r
    setDirection('ttb')\r
    setDrawer(true)\r
  }\r
\r
  function handlerBottomToTop() {\r
    setDirection('btt')\r
    setDrawer(true)\r
  }\r
\r
  function handlerLeftToRightFooter() {\r
    setDirection('ltr')\r
    setDrawer2(true)\r
  }\r
\r
  function handlerRightToLeftFooter() {\r
    setDirection('rtl')\r
    setDrawer2(true)\r
  }\r
\r
  function handlerTopToBottomFooter() {\r
    setDirection('ttb')\r
    setDrawer2(true)\r
  }\r
\r
  function handlerBottomToTopFooter() {\r
    setDirection('btt')\r
    setDrawer2(true)\r
  }\r
\r
  function handlerClose() {\r
    setDrawer(false)\r
  }\r
\r
  function handlerClose2() {\r
    setDrawer2(false)\r
  }\r
\r
  function cancelClick() {\r
    setDrawer2(false)\r
  }\r
\r
  function confirmClick() {\r
    setDrawer2(false)\r
  }\r
\r
  return (\r
    <>\r
      <div>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerLeftToRight}>\r
          open left to right\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerRightToLeft}>\r
          open right to left\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerTopToBottom}>\r
          open top to bottom\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerBottomToTop}>\r
          open bottom to top\r
        </Button>\r
      </div>\r
      <div style={{ marginTop: '20px' }}>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerLeftToRightFooter}>\r
          open left to right footer\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerRightToLeftFooter}>\r
          open right to left footer\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerTopToBottomFooter}>\r
          open top to bottom footer\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerBottomToTopFooter}>\r
          open bottom to top footer\r
        </Button>\r
      </div>\r
\r
      <Drawer\r
        open={drawer}\r
        title="I am the title"\r
        direction={direction as any}\r
        onClose={handlerClose}\r
      >\r
        <span>Hi, there!</span>\r
      </Drawer>\r
      <Drawer\r
        open={drawer2}\r
        direction={direction as any}\r
        onClose={handlerClose2}\r
        header={<h4>set title by slot</h4>}\r
        footer={\r
          <div style={{ flex: 'auto' }}>\r
            <Button onClick={cancelClick}>cancel</Button>\r
            <Button type="primary" onClick={confirmClick}>confirm</Button>\r
          </div>\r
        }\r
      >\r
        radio\r
      </Drawer>\r
    </>\r
  )\r
}\r
\r
export default DrawerBasic`,Hr=`import { useState } from 'react'\r
import { Button, Drawer } from 'pelement-react'\r
\r
function DrawerContent() {\r
  const [table, setTable] = useState(false)\r
  const [dialog, setDialog] = useState(false)\r
\r
  function closeTable() {\r
    setTable(false)\r
  }\r
\r
  function closeDialog() {\r
    setDialog(false)\r
  }\r
\r
  return (\r
    <>\r
      <Button text onClick={() => { setTable(true) }}>\r
        Open Drawer with nested table\r
      </Button>\r
\r
      <Button text onClick={() => { setDialog(true) }}>\r
        Open Drawer with nested form\r
      </Button>\r
\r
      <Drawer\r
        open={table}\r
        title="I have a nested table inside!"\r
        direction="rtl"\r
        size="50%"\r
        onClose={closeTable}\r
      >\r
        table\r
      </Drawer>\r
\r
      <Drawer\r
        open={dialog}\r
        title="I have a nested form inside!"\r
        direction="ltr"\r
        className="demo-drawer"\r
        onClose={closeDialog}\r
      >\r
        <div className="demo-drawer__content">\r
          form\r
          <div className="demo-drawer__footer">\r
            <Button onClick={closeDialog}>Cancel</Button>\r
            <Button type="primary" onClick={closeDialog}>\r
              Submit\r
            </Button>\r
          </div>\r
        </div>\r
      </Drawer>\r
    </>\r
  )\r
}\r
\r
export default DrawerContent`,Ur=`import { useState } from 'react'\r
import { Button, CircleCloseFilled, Drawer } from 'pelement-react'\r
\r
function DrawerHeader() {\r
  const [visible, setVisible] = useState(false)\r
\r
  function handlerClose() {\r
    setVisible(false)\r
  }\r
\r
  return (\r
    <>\r
      <Button onClick={() => { setVisible(true) }}>\r
        Open Drawer with customized header\r
      </Button>\r
\r
      <Drawer\r
        open={visible}\r
        showClose={false}\r
        header={\r
          <>\r
            <h4>This is a custom header!</h4>\r
            <Button type="danger" onClick={handlerClose}>\r
              <CircleCloseFilled />\r
              Close\r
            </Button>\r
          </>\r
        }\r
      >\r
        This is drawer content.\r
      </Drawer>\r
    </>\r
  )\r
}\r
\r
export default DrawerHeader`,jr=`import { useState } from 'react'\r
import { Button, Drawer } from 'pelement-react'\r
\r
function DrawerWithHeader() {\r
  const [drawer, setDrawer] = useState(false)\r
\r
  return (\r
    <>\r
      <Button type="primary" onClick={() => setDrawer(true)}>\r
        open\r
      </Button>\r
\r
      <Drawer open={drawer} title="I am the title" withHeader={false}>\r
        <span>Hi there!</span>\r
      </Drawer>\r
    </>\r
  )\r
}\r
\r
export default DrawerWithHeader`,Gr=`import { Edit, Search, Check, Message, Star, Delete, View, StarFilled, Loading, Hide, InfoFilled, WarningFilled, CircleCloseFilled, CircleCheckFilled, ArrowRight, CircleCheck, Close, Share } from 'pelement-react'\r
\r
function ButtonBasic() {\r
  return (\r
    <>\r
      <Edit style={{ fontSize: '20px' }} />\r
      <Search style={{ fontSize: '20px' }} />\r
      <Check style={{ fontSize: '20px' }} />\r
      <Message style={{ fontSize: '20px' }} />\r
      <Star style={{ fontSize: '20px' }} />\r
      <Delete style={{ fontSize: '20px' }} />\r
      <View style={{ fontSize: '20px' }} />\r
      <StarFilled style={{ fontSize: '20px' }} />\r
      <Loading style={{ fontSize: '20px' }} />\r
      <Hide style={{ fontSize: '20px' }} />\r
      <InfoFilled style={{ fontSize: '20px' }} />\r
      <WarningFilled style={{ fontSize: '20px' }} />\r
      <CircleCloseFilled style={{ fontSize: '20px' }} />\r
      <CircleCheckFilled style={{ fontSize: '20px' }} />\r
      <ArrowRight style={{ fontSize: '20px' }} />\r
      <CircleCheck style={{ fontSize: '20px' }} />\r
      <Close style={{ fontSize: '20px' }} />\r
      <Share style={{ fontSize: '20px' }} />\r
    </>\r
  )\r
}\r
\r
export default ButtonBasic`,Wr=`import { Col, Row } from 'pelement-react'\r
import './LayoutBasic.scss'\r
\r
function LayoutBasic() {\r
  return (\r
    <>\r
      <Row>\r
        <Col span={24}><div className="grid-content ep-bg-purple-dark" /></Col>\r
      </Row>\r
      <Row>\r
        <Col span={12}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={12}> <div className="grid-content ep-bg-purple-light" /></Col>\r
      </Row>\r
      <Row>\r
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={8}> <div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={8}> <div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}> <div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}> <div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}> <div className="grid-content ep-bg-purple-light" /></Col>\r
      </Row>\r
      <Row>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutBasic`,$r=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutBootstrap() {\r
  return (\r
    <>\r
      <Row gutter={10}>\r
        <Col xs={8} sm={6} md={4} lg={3} xl={1}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
        <Col xs={4} sm={6} md={8} lg={9} xl={11}>\r
          <div className="grid-content ep-bg-purple-light" />\r
        </Col>\r
        <Col xs={4} sm={6} md={8} lg={9} xl={11}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
        <Col xs={8} sm={6} md={4} lg={3} xl={1}>\r
          <div className="grid-content ep-bg-purple-light" />\r
        </Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutBootstrap`,Vr=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutGutter() {\r
  return (\r
    <>\r
      <Row gutter={20}>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutGutter`,Kr=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutJustify() {\r
  return (\r
    <>\r
      <Row className="row-bg">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="center">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="end">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="space-between">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="space-around">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="space-evenly">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutJustify`,Zr=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutMix() {\r
  return (\r
    <>\r
      <Row gutter={20}>\r
        <Col span={16}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row gutter={20}>\r
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row gutter={20}>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={16}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutMix`,Xr=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutOffset() {\r
  return (\r
    <>\r
      <Row gutter={20}>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6} offset={6}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
      </Row>\r
      <Row gutter={20}>\r
        <Col span={6} offset={6}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
        <Col span={6} offset={6}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
      </Row>\r
      <Row gutter={20}>\r
        <Col span={12} offset={6}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutOffset`,qr=`import { Link } from 'pelement-react'\r
import './LinkBasic.scss'\r
\r
function LinkBasic() {\r
  return (\r
    <>\r
      <div className="common-link">\r
        <Link href="https://pelement-react.github.io/pelement-react/" target="_blank">default</Link>\r
        <Link type="primary">primary</Link>\r
        <Link type="success">success</Link>\r
        <Link type="warning">warning</Link>\r
        <Link type="danger">danger</Link>\r
        <Link type="info">info</Link>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default LinkBasic`,Yr=`import { Link } from 'pelement-react'\r
\r
function LinkDisabled() {\r
  return (\r
    <>\r
      <div className="common-link">\r
        <Link disabled>default</Link>\r
        <Link type="primary" disabled>primary</Link>\r
        <Link type="success" disabled>success</Link>\r
        <Link type="warning" disabled>warning</Link>\r
        <Link type="danger" disabled>danger</Link>\r
        <Link type="info" disabled>info</Link>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default LinkDisabled`,Jr=`import { Edit, Link, View } from 'pelement-react'\r
\r
function LinkIcon() {\r
  return (\r
    <>\r
      <div className="common-link">\r
        <Link icon={<Edit />}>Edit</Link>\r
        <Link>\r
          Check<View className="el-icon--right" />\r
        </Link>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default LinkIcon`,Qr=`import { Link } from 'pelement-react'\r
\r
function LinkUnderline() {\r
  return (\r
    <>\r
      <div className="common-link">\r
        <Link underline={false}>Without Underline</Link>\r
        <Link>With Underline</Link>\r
      </div >\r
    </>\r
  )\r
}\r
\r
export default LinkUnderline`,et=`import { Button, MessageBox } from 'pelement-react'\r
\r
function MessageBoxBasic() {\r
  function open() {\r
    MessageBox.alert('This is a message', 'Title', {\r
      confirmButtonText: 'OK',\r
      callback: (action: string) => {\r
        alert(\`action: \${action}\`)\r
      },\r
    })\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open}>Click to open the Message Box</Button>\r
    </>\r
  )\r
}\r
\r
export default MessageBoxBasic`,rt=`import { Button, MessageBox } from 'pelement-react'\r
\r
function MessageBoxConfirm() {\r
  function open() {\r
    MessageBox.confirm(\r
      'proxy will permanently delete the file. Continue?',\r
      'Warning',\r
      {\r
        confirmButtonText: 'OK',\r
        cancelButtonText: 'Cancel',\r
        type: 'warning',\r
        onConfirm: () => {\r
          console.log('Delete completed')\r
        },\r
        onCancel: () => {\r
          console.log('Delete canceled')\r
        }\r
      }\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open}>Click to open the Message Box</Button>\r
    </>\r
  )\r
}\r
\r
export default MessageBoxConfirm`,tt=`import { Button, MessageBox, Switch } from 'pelement-react'\r
\r
function MessageBoxMessage() {\r
  function open() {\r
    MessageBox.alert(\r
      <><span>Message can be </span><i style={{ color: 'teal' }}>VNode</i></>,\r
      'Message',\r
    )\r
  }\r
\r
  function open1() {\r
    MessageBox.alert(\r
      <><Switch defaultChecked /></>,\r
      'Message',\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open}>Common VNode</Button>\r
      <Button plain onClick={open1}>Dynamic props</Button>\r
    </>\r
  )\r
}\r
\r
export default MessageBoxMessage`,nt=`import { Button, Popconfirm } from 'pelement-react'\r
\r
function PopconfirmBasic() {\r
  return (\r
    <>\r
      <Popconfirm title="Are you sure to delete this?">\r
        <Button>Delete</Button>\r
      </Popconfirm>\r
    </>\r
  )\r
}\r
\r
export default PopconfirmBasic`,at=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
\r
function PopconfirmEvent() {\r
  function confirmEvent() {\r
    console.log('confirm!')\r
  }\r
\r
  function cancelEvent() {\r
    console.log('cancel!')\r
  }\r
\r
  return (\r
    <>\r
      <Popconfirm\r
        confirmButtonText="Yes"\r
        cancelButtonText="No"\r
        icon={<InfoFilled />}\r
        iconColor="#626AEF"\r
        title="Are you sure to delete this?"\r
        onConfirm={confirmEvent}\r
        onCancel={cancelEvent}\r
      >\r
        <Button>Delete</Button>\r
      </Popconfirm >\r
    </>\r
  )\r
}\r
\r
export default PopconfirmEvent`,ot=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
\r
function PopconfirmIcon() {\r
  return (\r
    <>\r
      <Popconfirm\r
        width={220}\r
        confirmButtonText="OK"\r
        cancelButtonText="No, Thanks"\r
        icon={<InfoFilled />}\r
        iconColor="#626AEF"\r
        title="Are you sure to delete this?"\r
      >\r
        <Button>Delete</Button>\r
      </Popconfirm >\r
    </>\r
  )\r
}\r
\r
export default PopconfirmIcon`,it=`import { Button, Popover } from 'pelement-react'\r
\r
function PopoverBasic() {\r
  return (\r
    <>\r
      <Popover\r
        placement="top-start"\r
        title="Title"\r
        width={200}\r
        trigger="hover"\r
        content="this is content, this is content, this is content"\r
      >\r
        <Button className="m-2">Hover to activate</Button>\r
      </Popover>\r
      <Popover\r
        placement="bottom"\r
        title="Title"\r
        width={200}\r
        trigger="click"\r
        content="this is content, this is content, this is content"\r
      >\r
        <Button className="m-2">Click to activate</Button>\r
      </Popover>\r
      <Popover\r
        placement="right"\r
        title="Title"\r
        width={200}\r
        trigger="focus"\r
        content="this is content, this is content, this is content"\r
      >\r
        <Button className="m-2">Focus to activate</Button>\r
      </Popover>\r
      <Popover\r
        title="Title"\r
        width={200}\r
        trigger="contextmenu"\r
        content="this is content, this is content, this is content"\r
      >\r
        <Button className="m-2">contextmenu to activate</Button>\r
      </Popover>\r
    </>\r
  )\r
}\r
\r
export default PopoverBasic`,st=`import { Progress } from 'pelement-react'\r
import './ProgressBasic.scss'\r
\r
function ProgressBasic() {\r
  function format(percentage: number) {\r
    return (percentage === 100 ? 'Full' : \`\${percentage}%\`)\r
  }\r
\r
  return (\r
    <>\r
      <div className="common-progress">\r
        <Progress percentage={50} />\r
        <Progress percentage={100} format={format} />\r
        <Progress percentage={100} status="success" />\r
        <Progress percentage={100} status="warning" />\r
        <Progress percentage={50} status="exception" />\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ProgressBasic`,lt=`import { Progress } from 'pelement-react'\r
\r
function ProgressTextInside() {\r
  return (\r
    <>\r
      <div className="common-progress">\r
        <Progress textInside={true} strokeWidth={26} percentage={70} />\r
        <Progress\r
          textInside={true}\r
          strokeWidth={24}\r
          percentage={100}\r
          status="success"\r
        />\r
        <Progress\r
          textInside={true}\r
          strokeWidth={22}\r
          percentage={80}\r
          status="warning"\r
        />\r
        <Progress\r
          textInside={true}\r
          strokeWidth={20}\r
          percentage={50}\r
          status="exception"\r
        />\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ProgressTextInside`,ct=`import { Rate } from 'pelement-react'\r
\r
function RateBasic() {\r
  return (\r
    <>\r
      <Rate></Rate>\r
    </>\r
  )\r
}\r
\r
export default RateBasic`,pt=`import { Button, Col, Result, Row } from 'pelement-react'\r
\r
function ResultBasic() {\r
  return (\r
    <>\r
      <Row>\r
        <Col sm={12} lg={6}>\r
          <Result\r
            icon="success"\r
            title="Success Tip"\r
            subTitle="Please follow the instructions"\r
            extra={<Button type="primary">Back</Button>}\r
          ></Result>\r
        </Col>\r
        <Col sm={12} lg={6}>\r
          <Result\r
            icon="warning"\r
            title="Warning Tip"\r
            subTitle="Please follow the instructions"\r
            extra={<Button type="primary">Back</Button>}\r
          ></Result>\r
        </Col>\r
        <Col sm={12} lg={6}>\r
          <Result\r
            icon="error"\r
            title="Error Tip"\r
            subTitle="Please follow the instructions"\r
            extra={<Button type="primary">Back</Button>}\r
          ></Result>\r
        </Col>\r
        <Col sm={12} lg={6}>\r
          <Result\r
            icon="info"\r
            title="Info Tip"\r
            subTitle={<p>Using slot as subtitle</p>}\r
            extra={<Button type="primary">Back</Button>}\r
          ></Result>\r
        </Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default ResultBasic`,ut=`import { Button, Result } from 'pelement-react'\r
\r
function ResultIcon() {\r
  return (\r
    <>\r
      <Result\r
        icon={<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />}\r
        title="404"\r
        subTitle="Sorry, request error"\r
        extra={<Button type="primary">Back</Button>}\r
      ></Result>\r
    </>\r
  )\r
}\r
\r
export default ResultIcon`,dt=`import { Scrollbar } from 'pelement-react'\r
import './ScrollbarBasic.css'\r
\r
function ScrollbarBasic() {\r
  return (\r
    <>\r
      <Scrollbar height="400px">\r
        {\r
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) =>\r
\r
            <p key={index} className="scrollbar-demo-item">{item}</p>\r
          )\r
        }\r
      </Scrollbar>\r
    </>\r
  )\r
}\r
\r
export default ScrollbarBasic`,gt=`import { Button, Space } from 'pelement-react'\r
\r
function SpaceAlignment() {\r
  return (\r
    <>\r
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px', marginBottom: '10px' }}>\r
        <Space>\r
          string\r
          <Button> button </Button>\r
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>1</div>\r
        </Space>\r
      </div>\r
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px', marginBottom: '10px' }}>\r
        <Space alignment="flex-start">\r
          string\r
          <Button> button </Button>\r
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>2</div>\r
        </Space>\r
      </div>\r
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px' }}>\r
        <Space alignment="flex-end">\r
          string\r
          <Button> button </Button>\r
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>3</div>\r
        </Space>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default SpaceAlignment`,mt=`import { Space } from 'pelement-react'\r
\r
function SpaceBasic() {\r
  return (\r
    <>\r
      <Space wrap>\r
        {\r
          [1, 2, 3].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceBasic`,ft=`import { Space } from 'pelement-react'\r
\r
function SpaceDirection() {\r
  return (\r
    <>\r
      <Space direction="vertical">\r
        {\r
          [1, 2, 3].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceDirection`,ht=`import { Space } from 'pelement-react'\r
\r
function SpaceSize() {\r
  return (\r
    <>\r
      <Space wrap size="large">\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
      <Space wrap size="default">\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
      <Space wrap size="small">\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceSize`,_t=`import { Space } from 'pelement-react'\r
\r
function SpaceSize2() {\r
  return (\r
    <>\r
      <Space wrap size={0}>\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
      <Space wrap size={50}>\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
      <Space wrap size={100}>\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceSize2`,bt=`import { Button, Space } from 'pelement-react'\r
\r
function SpaceSpacer() {\r
  return (\r
    <>\r
      <Space size={10} spacer="|">\r
        <Button> button 1 </Button>\r
        <Button> button 2 </Button>\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceSpacer`,xt=`import { Button, Divider, Space } from 'pelement-react'\r
\r
function SpaceSpacer2() {\r
  return (\r
    <>\r
      <Space size={10} spacer={<Divider direction="vertical" />}>\r
        <Button> button 1 </Button>\r
        <Button> button 2 </Button>\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceSpacer2`,vt=`import { Button, Space } from 'pelement-react'\r
\r
function SpaceWrap() {\r
  return (\r
    <>\r
      <Space wrap>\r
        {\r
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) =>\r
            <div key={index}>\r
              <Button text> Text button {item} </Button>\r
            </div>\r
          )\r
        }\r
      </Space >\r
    </>\r
  )\r
}\r
\r
export default SpaceWrap`,Bt=`import { Hide, Switch, View } from 'pelement-react'\r
\r
function SwitchActionIcon() {\r
  return (\r
    <>\r
      <Switch\r
        defaultChecked\r
        activeActionIcon={<View />}\r
        inactiveActionIcon={<Hide />}\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        activeActionIcon={<><span className="custom-active-action">T</span></>}\r
        inactiveActionIcon={<><span className="custom-inactive-action">F</span></>}\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchActionIcon`,yt=`import { Switch } from 'pelement-react'\r
\r
function SwitchBasic() {\r
  return (\r
    <>\r
      <Switch defaultChecked />\r
      <Switch\r
        defaultChecked\r
        className="ml-2"\r
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchBasic`,wt=`import { useState } from 'react'\r
import { Switch } from 'pelement-react'\r
\r
function SwitchBeforeChange() {\r
  const [loading1, setLoading1] = useState(false)\r
  const [loading2, setLoading2] = useState(false)\r
\r
  function beforeChange1(): Promise<boolean> {\r
    setLoading1(true)\r
    return new Promise((resolve) => {\r
      setTimeout(() => {\r
        setLoading1(false)\r
        console.log('Switch success')\r
        return resolve(true)\r
      }, 1000)\r
    })\r
  }\r
\r
  function beforeChange2(): Promise<boolean> {\r
    setLoading2(true)\r
    return new Promise((_, reject) => {\r
      setTimeout(() => {\r
        setLoading2(false)\r
        console.log('Switch failed')\r
        return reject(new Error('Error'))\r
      }, 1000)\r
    })\r
  }\r
\r
  return (\r
    <>\r
      <Switch\r
        loading={loading1}\r
        beforeChange={beforeChange1}\r
      />\r
      <Switch\r
        className="ml-2"\r
        loading={loading2}\r
        beforeChange={beforeChange2}\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchBeforeChange`,Ct=`import { Switch } from 'pelement-react'\r
\r
function SwitchDisabled() {\r
  return (\r
    <>\r
      <Switch defaultChecked disabled />\r
      <Switch defaultChecked className="ml-2" />\r
    </>\r
  )\r
}\r
\r
export default SwitchDisabled`,Tt=`import { Check, Close, Switch } from 'pelement-react'\r
\r
function SwitchIcon() {\r
  return (\r
    <>\r
      <Switch\r
        defaultChecked\r
        activeIcon={<Check />}\r
        inactiveIcon={<Close />}\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        className="mt-2"\r
        style={{ marginLeft: '24px' }}\r
        inlinePrompt\r
        activeIcon={<Check className="is-icon" />}\r
        inactiveIcon={<Close className="is-icon" />}\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchIcon`,St=`import { Switch } from 'pelement-react'\r
\r
function SwitchLoading() {\r
  return (\r
    <>\r
      <Switch defaultChecked loading />\r
      <Switch loading className="ml-2" />\r
    </>\r
  )\r
}\r
\r
export default SwitchLoading`,kt=`import { Switch } from 'pelement-react'\r
\r
function SwitchSize() {\r
  return (\r
    <>\r
      <Switch\r
        defaultChecked\r
        size="large"\r
        activeText="Open"\r
        inactiveText="Close"\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        activeText="Open"\r
        inactiveText="Close" />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        size="small"\r
        activeText="Open"\r
        inactiveText="Close"\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchSize`,Nt=`import { Switch } from 'pelement-react'\r
\r
function SwitchText() {\r
  return (\r
    <>\r
      <Switch\r
        defaultChecked\r
        className="mb-2"\r
        activeText="Pay by month"\r
        inactiveText="Pay by year"\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        className="mb-2"\r
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}\r
        activeText="Pay by month"\r
        inactiveText="Pay by year"\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        inlinePrompt\r
        activeText="是"\r
        inactiveText="否"\r
      />\r
      <Switch\r
        defaultChecked\r
        className="ml-2"\r
        inlinePrompt\r
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}\r
        activeText="Y"\r
        inactiveText="N"\r
      />\r
      <Switch\r
        defaultChecked\r
        className="ml-2"\r
        width={60}\r
        inlinePrompt\r
        activeText="超出省略"\r
        inactiveText="超出省略"\r
      />\r
      <Switch\r
        defaultChecked\r
        className="ml-2"\r
        inlinePrompt\r
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}\r
        activeText="完整展示多个内容"\r
        inactiveText="多个内容"\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchText`,Et=`import { Table } from 'pelement-react'\r
\r
function TableBasic() {\r
  const columns = [\r
    {\r
      key: 'date',\r
      dataIndex: 'date',\r
      label: 'Date',\r
      width: 180,\r
    },\r
    {\r
      key: 'name',\r
      dataIndex: 'name',\r
      label: 'Name',\r
      width: 180,\r
    },\r
    {\r
      key: 'address',\r
      dataIndex: 'address',\r
      label: 'Address',\r
    },\r
  ]\r
\r
  const data = [\r
    {\r
      date: '2016-05-03',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-02',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-01',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <Table columns={columns} data={data}>\r
      </Table>\r
    </>\r
  )\r
}\r
\r
export default TableBasic`,At=`import { Table } from 'pelement-react'\r
\r
function TableBorder() {\r
  const columns = [\r
    {\r
      key: 'date',\r
      dataIndex: 'date',\r
      label: 'Date',\r
      width: 180,\r
    },\r
    {\r
      key: 'name',\r
      dataIndex: 'name',\r
      label: 'Name',\r
      width: 180,\r
    },\r
    {\r
      key: 'address',\r
      dataIndex: 'address',\r
      label: 'Address',\r
    },\r
  ]\r
\r
  const data = [\r
    {\r
      date: '2016-05-03',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-02',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-01',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <Table columns={columns} data={data} border>\r
      </Table>\r
    </>\r
  )\r
}\r
\r
export default TableBorder`,Dt=`import { Table } from 'pelement-react'\r
\r
function TableStripe() {\r
  const columns = [\r
    {\r
      key: 'date',\r
      dataIndex: 'date',\r
      label: 'Date',\r
      width: 180,\r
    },\r
    {\r
      key: 'name',\r
      dataIndex: 'name',\r
      label: 'Name',\r
      width: 180,\r
    },\r
    {\r
      key: 'address',\r
      dataIndex: 'address',\r
      label: 'Address',\r
    },\r
  ]\r
\r
  const data = [\r
    {\r
      date: '2016-05-03',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-02',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-01',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <Table columns={columns} data={data} stripe>\r
      </Table>\r
    </>\r
  )\r
}\r
\r
export default TableStripe`,Rt=`import { Tag } from 'pelement-react'\r
\r
function TagBasic() {\r
  return (\r
    <>\r
      <Tag>Tag 1</Tag>\r
      <Tag className="ml-2" type="success">Tag 2</Tag>\r
      <Tag className="ml-2" type="info">Tag 3</Tag>\r
      <Tag className="ml-2" type="warning">Tag 4</Tag>\r
      <Tag className="ml-2" type="danger">Tag 5</Tag>\r
    </>\r
  )\r
}\r
\r
export default TagBasic`,Lt=`import { Tag } from 'pelement-react'\r
\r
function TagClosable() {\r
  const tagList = [\r
    { name: 'Tag 1', type: '' },\r
    { name: 'Tag 2', type: 'success' },\r
    { name: 'Tag 3', type: 'info' },\r
    { name: 'Tag 4', type: 'warning' },\r
    { name: 'Tag 5', type: 'danger' },\r
  ].map(tag =>\r
    <Tag\r
      className="mx-1"\r
      closable\r
      type={tag.type as any}\r
    >\r
      {tag.name}\r
    </Tag>\r
  )\r
\r
  return (\r
    <>\r
      {tagList}\r
    </>\r
  )\r
}\r
\r
export default TagClosable`,Mt=`import { Tag } from 'pelement-react'\r
\r
function TagEffect() {\r
  const items = [\r
    { type: '', label: 'Tag 1' },\r
    { type: 'success', label: 'Tag 2' },\r
    { type: 'info', label: 'Tag 3' },\r
    { type: 'danger', label: 'Tag 4' },\r
    { type: 'warning', label: 'Tag 5' },\r
  ]\r
\r
  const darkList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="dark"\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const darkClosable = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="dark"\r
      closable\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const lightList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="light"\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const lightClosable = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="light"\r
      closable\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const plainList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="plain"\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const plainClosable = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="plain"\r
      closable\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  return (\r
    <>\r
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">\r
        <span className="tag-group__title m-1 line-height-2">Dark</span>\r
        {darkList}\r
        {darkClosable}\r
      </div>\r
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">\r
        <span className="tag-group__title m-1">Light</span>\r
        {lightList}\r
        {lightClosable}\r
      </div>\r
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">\r
        <span className="tag-group__title m-1">Plain</span>\r
        {plainList}\r
        {plainClosable}\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TagEffect`,It=`import { Tag } from 'pelement-react'\r
\r
function TagRound() {\r
  const items = [\r
    { type: '', label: 'Tag 1' },\r
    { type: 'success', label: 'Tag 2' },\r
    { type: 'info', label: 'Tag 3' },\r
    { type: 'danger', label: 'Tag 4' },\r
    { type: 'warning', label: 'Tag 5' },\r
  ]\r
\r
  const darkList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="dark"\r
      round\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const lightList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="light"\r
      round\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const plainList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="plain"\r
      round\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  return (\r
    <>\r
      <div className="flex flex-wrap gap-2 my-2">\r
        {darkList}\r
      </div>\r
      <div className="flex flex-wrap gap-2">\r
        {lightList}\r
      </div>\r
      <div className="flex flex-wrap gap-2 my-2">\r
        {plainList}\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TagRound`,Ot=`import { Row, Tag } from 'pelement-react'\r
\r
function TagSize() {\r
  return (\r
    <>\r
      <Row>\r
        <Tag className="mx-1" size="large">Large</Tag>\r
        <Tag className="mx-1">Default</Tag>\r
        <Tag className="mx-1" size="small">Small</Tag>\r
      </Row>\r
\r
      <Row className="mt-4">\r
        <Tag className="mx-1" size="large" closable>Large</Tag>\r
        <Tag className="mx-1" closable>Default</Tag>\r
        <Tag className="mx-1" size="small" closable>Small</Tag>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default TagSize`,Pt=`import { Text } from 'pelement-react'\r
import './TextBasic.scss'\r
\r
function TextBasic() {\r
  return (\r
    <>\r
      <div className="common-text">\r
        <Text className="mx-1">Default</Text>\r
        <Text className="mx-1" type="primary">Primary</Text>\r
        <Text className="mx-1" type="success">Success</Text>\r
        <Text className="mx-1" type="info">Info</Text>\r
        <Text className="mx-1" type="warning">Warning</Text>\r
        <Text className="mx-1" type="danger">Danger</Text>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TextBasic`,zt=`import { Text } from 'pelement-react'\r
\r
function TextSize() {\r
  return (\r
    <>\r
      <div className="common-text">\r
        <Text className="mx-1" size="large">Large</Text>\r
        <Text className="mx-1">Default</Text>\r
        <Text className="mx-1" size="small">Small</Text>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TextSize`,Ft=`import { Row, Text } from 'pelement-react'\r
\r
function TextTruncated() {\r
  return (\r
    <>\r
      <div className="common-text">\r
        <Text className="w-150px mb-2" truncated>\r
          Self element set width 100px\r
        </Text>\r
        <Row className="w-150px mb-2">\r
          <Text truncated>Squeezed by parent element</Text>\r
        </Row>\r
        <Text lineClamp={2}>\r
          The -webkit-line-clamp CSS property<br />\r
          allows limiting of the contents of<br />\r
          a block to the specified number of lines.\r
        </Text>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TextTruncated`,Ht=`import { Button, Tooltip } from 'pelement-react'\r
import './TooltipBasic.scss'\r
\r
function TooltipBasic() {\r
  return (\r
    <>\r
      <div className="common-tooltip">\r
        <div className="row center">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Top Left prompts info"\r
            placement="top-start"\r
          >\r
            <Button>top-start</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Top Center prompts info"\r
            placement="top"\r
          >\r
            <Button>top</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Top Right prompts info"\r
            placement="top-end"\r
          >\r
            <Button>top-end</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="row">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Left Top prompts info"\r
            placement="left-start"\r
          >\r
            <Button>left-start</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Right Top prompts info"\r
            placement="right-start"\r
          >\r
            <Button>right-start</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="row">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Left Center prompts info"\r
            placement="left"\r
          >\r
            <Button className="mt-3 mb-3">left</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Right Center prompts info"\r
            placement="right"\r
          >\r
            <Button>right</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="row">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Left Bottom prompts info"\r
            placement="left-end"\r
          >\r
            <Button>left-end</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Right Bottom prompts info"\r
            placement="right-end"\r
          >\r
            <Button>right-end</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="row center">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Bottom Left prompts info"\r
            placement="bottom-start"\r
          >\r
            <Button>bottom-start</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Bottom Center prompts info"\r
            placement="bottom"\r
          >\r
            <Button>bottom</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Bottom Right prompts info"\r
            placement="bottom-end"\r
          >\r
            <Button>bottom-end</Button>\r
          </Tooltip>\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TooltipBasic`,Ut=`import { Button, Tooltip } from 'pelement-react'\r
\r
function TooltipContent() {\r
  return (\r
    <>\r
      <Tooltip placement="top" content={<>multiple lines<br />second line</>}>\r
        <Button>Top center</Button>\r
      </Tooltip>\r
    </>\r
  )\r
}\r
\r
export default TooltipContent`,jt=`import { useState } from 'react'\r
import { Button, Tooltip } from 'pelement-react'\r
\r
function TooltipDisabled() {\r
  const [disabled, setDisabled] = useState(true)\r
\r
  function changeDisabled() {\r
    setDisabled(!disabled)\r
  }\r
\r
  return (\r
    <>\r
      <Tooltip\r
        disabled={disabled}\r
        content="click to close tooltip function"\r
        placement="bottom"\r
        effect="light"\r
      >\r
        <Button onClick={changeDisabled}>\r
          click to {disabled ? 'active' : 'close'} tooltip function\r
        </Button>\r
      </Tooltip >\r
    </>\r
  )\r
}\r
\r
export default TooltipDisabled`,Gt=`import { Button, Tooltip } from 'pelement-react'\r
\r
function TooltipEffect() {\r
  return (\r
    <>\r
      <Tooltip content="Top center" placement="top">\r
        <Button>Dark</Button>\r
      </Tooltip>\r
      <Tooltip content="Bottom center" placement="bottom" effect="light">\r
        <Button>Light</Button>\r
      </Tooltip>\r
\r
      <Tooltip content="Bottom center" effect="customized">\r
        <Button>Customized theme</Button>\r
      </Tooltip>\r
    </>\r
  )\r
}\r
\r
export default TooltipEffect`;function Oe(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(r=>{const n=e[r],s=typeof n;(s==="object"||s==="function")&&!Object.isFrozen(n)&&Oe(n)}),e}class Ne{constructor(r){r.data===void 0&&(r.data={}),this.data=r.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Pe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function M(e,...r){const n=Object.create(null);for(const s in e)n[s]=e[s];return r.forEach(function(s){for(const f in s)n[f]=s[f]}),n}const Wt="</span>",Ee=e=>!!e.scope,$t=(e,{prefix:r})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${r}${n.shift()}`,...n.map((s,f)=>`${s}${"_".repeat(f+1)}`)].join(" ")}return`${r}${e}`};class Vt{constructor(r,n){this.buffer="",this.classPrefix=n.classPrefix,r.walk(this)}addText(r){this.buffer+=Pe(r)}openNode(r){if(!Ee(r))return;const n=$t(r.scope,{prefix:this.classPrefix});this.span(n)}closeNode(r){Ee(r)&&(this.buffer+=Wt)}value(){return this.buffer}span(r){this.buffer+=`<span class="${r}">`}}const Ae=(e={})=>{const r={children:[]};return Object.assign(r,e),r};class _e{constructor(){this.rootNode=Ae(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(r){this.top.children.push(r)}openNode(r){const n=Ae({scope:r});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(r){return this.constructor._walk(r,this.rootNode)}static _walk(r,n){return typeof n=="string"?r.addText(n):n.children&&(r.openNode(n),n.children.forEach(s=>this._walk(r,s)),r.closeNode(n)),r}static _collapse(r){typeof r!="string"&&r.children&&(r.children.every(n=>typeof n=="string")?r.children=[r.children.join("")]:r.children.forEach(n=>{_e._collapse(n)}))}}class Kt extends _e{constructor(r){super(),this.options=r}addText(r){r!==""&&this.add(r)}startScope(r){this.openNode(r)}endScope(){this.closeNode()}__addSublanguage(r,n){const s=r.root;n&&(s.scope=`language:${n}`),this.add(s)}toHTML(){return new Vt(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Z(e){return e?typeof e=="string"?e:e.source:null}function ze(e){return F("(?=",e,")")}function Zt(e){return F("(?:",e,")*")}function Xt(e){return F("(?:",e,")?")}function F(...e){return e.map(n=>Z(n)).join("")}function qt(e){const r=e[e.length-1];return typeof r=="object"&&r.constructor===Object?(e.splice(e.length-1,1),r):{}}function be(...e){return"("+(qt(e).capture?"":"?:")+e.map(s=>Z(s)).join("|")+")"}function Fe(e){return new RegExp(e.toString()+"|").exec("").length-1}function Yt(e,r){const n=e&&e.exec(r);return n&&n.index===0}const Jt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function xe(e,{joinWith:r}){let n=0;return e.map(s=>{n+=1;const f=n;let h=Z(s),i="";for(;h.length>0;){const a=Jt.exec(h);if(!a){i+=h;break}i+=h.substring(0,a.index),h=h.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?i+="\\"+String(Number(a[1])+f):(i+=a[0],a[0]==="("&&n++)}return i}).map(s=>`(${s})`).join(r)}const Qt=/\b\B/,He="[a-zA-Z]\\w*",ve="[a-zA-Z_]\\w*",Ue="\\b\\d+(\\.\\d+)?",je="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ge="\\b(0b[01]+)",en="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",rn=(e={})=>{const r=/^#![ ]*\//;return e.binary&&(e.begin=F(r,/.*\b/,e.binary,/\b.*/)),M({scope:"meta",begin:r,end:/$/,relevance:0,"on:begin":(n,s)=>{n.index!==0&&s.ignoreMatch()}},e)},X={begin:"\\\\[\\s\\S]",relevance:0},tn={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[X]},nn={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[X]},an={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},le=function(e,r,n={}){const s=M({scope:"comment",begin:e,end:r,contains:[]},n);s.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const f=be("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return s.contains.push({begin:F(/[ ]+/,"(",f,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s},on=le("//","$"),sn=le("/\\*","\\*/"),ln=le("#","$"),cn={scope:"number",begin:Ue,relevance:0},pn={scope:"number",begin:je,relevance:0},un={scope:"number",begin:Ge,relevance:0},dn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[X,{begin:/\[/,end:/\]/,relevance:0,contains:[X]}]},gn={scope:"title",begin:He,relevance:0},mn={scope:"title",begin:ve,relevance:0},fn={begin:"\\.\\s*"+ve,relevance:0},hn=function(e){return Object.assign(e,{"on:begin":(r,n)=>{n.data._beginMatch=r[1]},"on:end":(r,n)=>{n.data._beginMatch!==r[1]&&n.ignoreMatch()}})};var ie=Object.freeze({__proto__:null,APOS_STRING_MODE:tn,BACKSLASH_ESCAPE:X,BINARY_NUMBER_MODE:un,BINARY_NUMBER_RE:Ge,COMMENT:le,C_BLOCK_COMMENT_MODE:sn,C_LINE_COMMENT_MODE:on,C_NUMBER_MODE:pn,C_NUMBER_RE:je,END_SAME_AS_BEGIN:hn,HASH_COMMENT_MODE:ln,IDENT_RE:He,MATCH_NOTHING_RE:Qt,METHOD_GUARD:fn,NUMBER_MODE:cn,NUMBER_RE:Ue,PHRASAL_WORDS_MODE:an,QUOTE_STRING_MODE:nn,REGEXP_MODE:dn,RE_STARTERS_RE:en,SHEBANG:rn,TITLE_MODE:gn,UNDERSCORE_IDENT_RE:ve,UNDERSCORE_TITLE_MODE:mn});function _n(e,r){e.input[e.index-1]==="."&&r.ignoreMatch()}function bn(e,r){e.className!==void 0&&(e.scope=e.className,delete e.className)}function xn(e,r){r&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=_n,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function vn(e,r){Array.isArray(e.illegal)&&(e.illegal=be(...e.illegal))}function Bn(e,r){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function yn(e,r){e.relevance===void 0&&(e.relevance=1)}const wn=(e,r)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(s=>{delete e[s]}),e.keywords=n.keywords,e.begin=F(n.beforeMatch,ze(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},Cn=["of","and","for","in","not","or","if","then","parent","list","value"],Tn="keyword";function We(e,r,n=Tn){const s=Object.create(null);return typeof e=="string"?f(n,e.split(" ")):Array.isArray(e)?f(n,e):Object.keys(e).forEach(function(h){Object.assign(s,We(e[h],r,h))}),s;function f(h,i){r&&(i=i.map(a=>a.toLowerCase())),i.forEach(function(a){const p=a.split("|");s[p[0]]=[h,Sn(p[0],p[1])]})}}function Sn(e,r){return r?Number(r):kn(e)?0:1}function kn(e){return Cn.includes(e.toLowerCase())}const De={},z=e=>{console.error(e)},Re=(e,...r)=>{console.log(`WARN: ${e}`,...r)},G=(e,r)=>{De[`${e}/${r}`]||(console.log(`Deprecated as of ${e}. ${r}`),De[`${e}/${r}`]=!0)},se=new Error;function $e(e,r,{key:n}){let s=0;const f=e[n],h={},i={};for(let a=1;a<=r.length;a++)i[a+s]=f[a],h[a+s]=!0,s+=Fe(r[a-1]);e[n]=i,e[n]._emit=h,e[n]._multi=!0}function Nn(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw z("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),se;if(typeof e.beginScope!="object"||e.beginScope===null)throw z("beginScope must be object"),se;$e(e,e.begin,{key:"beginScope"}),e.begin=xe(e.begin,{joinWith:""})}}function En(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw z("skip, excludeEnd, returnEnd not compatible with endScope: {}"),se;if(typeof e.endScope!="object"||e.endScope===null)throw z("endScope must be object"),se;$e(e,e.end,{key:"endScope"}),e.end=xe(e.end,{joinWith:""})}}function An(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Dn(e){An(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Nn(e),En(e)}function Rn(e){function r(i,a){return new RegExp(Z(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(a?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,p){p.position=this.position++,this.matchIndexes[this.matchAt]=p,this.regexes.push([p,a]),this.matchAt+=Fe(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(p=>p[1]);this.matcherRe=r(xe(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const p=this.matcherRe.exec(a);if(!p)return null;const _=p.findIndex((k,E)=>E>0&&k!==void 0),x=this.matchIndexes[_];return p.splice(0,_),Object.assign(p,x)}}class s{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const p=new n;return this.rules.slice(a).forEach(([_,x])=>p.addRule(_,x)),p.compile(),this.multiRegexes[a]=p,p}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,p){this.rules.push([a,p]),p.type==="begin"&&this.count++}exec(a){const p=this.getMatcher(this.regexIndex);p.lastIndex=this.lastIndex;let _=p.exec(a);if(this.resumingScanAtSamePosition()&&!(_&&_.index===this.lastIndex)){const x=this.getMatcher(0);x.lastIndex=this.lastIndex+1,_=x.exec(a)}return _&&(this.regexIndex+=_.position+1,this.regexIndex===this.count&&this.considerAll()),_}}function f(i){const a=new s;return i.contains.forEach(p=>a.addRule(p.begin,{rule:p,type:"begin"})),i.terminatorEnd&&a.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&a.addRule(i.illegal,{type:"illegal"}),a}function h(i,a){const p=i;if(i.isCompiled)return p;[bn,Bn,Dn,wn].forEach(x=>x(i,a)),e.compilerExtensions.forEach(x=>x(i,a)),i.__beforeBegin=null,[xn,vn,yn].forEach(x=>x(i,a)),i.isCompiled=!0;let _=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),_=i.keywords.$pattern,delete i.keywords.$pattern),_=_||/\w+/,i.keywords&&(i.keywords=We(i.keywords,e.case_insensitive)),p.keywordPatternRe=r(_,!0),a&&(i.begin||(i.begin=/\B|\b/),p.beginRe=r(p.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(p.endRe=r(p.end)),p.terminatorEnd=Z(p.end)||"",i.endsWithParent&&a.terminatorEnd&&(p.terminatorEnd+=(i.end?"|":"")+a.terminatorEnd)),i.illegal&&(p.illegalRe=r(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(x){return Ln(x==="self"?i:x)})),i.contains.forEach(function(x){h(x,p)}),i.starts&&h(i.starts,a),p.matcher=f(p),p}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=M(e.classNameAliases||{}),h(e)}function Ve(e){return e?e.endsWithParent||Ve(e.starts):!1}function Ln(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(r){return M(e,{variants:null},r)})),e.cachedVariants?e.cachedVariants:Ve(e)?M(e,{starts:e.starts?M(e.starts):null}):Object.isFrozen(e)?M(e):e}var Mn="11.9.0";class In extends Error{constructor(r,n){super(r),this.name="HTMLInjectionError",this.html=n}}const he=Pe,Le=M,Me=Symbol("nomatch"),On=7,Ke=function(e){const r=Object.create(null),n=Object.create(null),s=[];let f=!0;const h="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Kt};function p(t){return a.noHighlightRe.test(t)}function _(t){let l=t.className+" ";l+=t.parentNode?t.parentNode.className:"";const d=a.languageDetectRe.exec(l);if(d){const m=A(d[1]);return m||(Re(h.replace("{}",d[1])),Re("Falling back to no-highlight mode for this block.",t)),m?d[1]:"no-highlight"}return l.split(/\s+/).find(m=>p(m)||A(m))}function x(t,l,d){let m="",B="";typeof l=="object"?(m=t,d=l.ignoreIllegals,B=l.language):(G("10.7.0","highlight(lang, code, ...args) has been deprecated."),G("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),B=t,m=l),d===void 0&&(d=!0);const C={code:m,language:B};j("before:highlight",C);const N=C.result?C.result:k(C.language,C.code,d);return N.code=C.code,j("after:highlight",N),N}function k(t,l,d,m){const B=Object.create(null);function C(o,c){return o.keywords[c]}function N(){if(!u.keywords){y.addText(v);return}let o=0;u.keywordPatternRe.lastIndex=0;let c=u.keywordPatternRe.exec(v),g="";for(;c;){g+=v.substring(o,c.index);const b=R.case_insensitive?c[0].toLowerCase():c[0],w=C(u,b);if(w){const[L,tr]=w;if(y.addText(g),g="",B[b]=(B[b]||0)+1,B[b]<=On&&(ae+=tr),L.startsWith("_"))g+=c[0];else{const nr=R.classNameAliases[L]||L;D(c[0],nr)}}else g+=c[0];o=u.keywordPatternRe.lastIndex,c=u.keywordPatternRe.exec(v)}g+=v.substring(o),y.addText(g)}function te(){if(v==="")return;let o=null;if(typeof u.subLanguage=="string"){if(!r[u.subLanguage]){y.addText(v);return}o=k(u.subLanguage,v,!0,ke[u.subLanguage]),ke[u.subLanguage]=o._top}else o=H(v,u.subLanguage.length?u.subLanguage:null);u.relevance>0&&(ae+=o.relevance),y.__addSublanguage(o._emitter,o.language)}function T(){u.subLanguage!=null?te():N(),v=""}function D(o,c){o!==""&&(y.startScope(c),y.addText(o),y.endScope())}function we(o,c){let g=1;const b=c.length-1;for(;g<=b;){if(!o._emit[g]){g++;continue}const w=R.classNameAliases[o[g]]||o[g],L=c[g];w?D(L,w):(v=L,N(),v=""),g++}}function Ce(o,c){return o.scope&&typeof o.scope=="string"&&y.openNode(R.classNameAliases[o.scope]||o.scope),o.beginScope&&(o.beginScope._wrap?(D(v,R.classNameAliases[o.beginScope._wrap]||o.beginScope._wrap),v=""):o.beginScope._multi&&(we(o.beginScope,c),v="")),u=Object.create(o,{parent:{value:u}}),u}function Te(o,c,g){let b=Yt(o.endRe,g);if(b){if(o["on:end"]){const w=new Ne(o);o["on:end"](c,w),w.isMatchIgnored&&(b=!1)}if(b){for(;o.endsParent&&o.parent;)o=o.parent;return o}}if(o.endsWithParent)return Te(o.parent,c,g)}function Ye(o){return u.matcher.regexIndex===0?(v+=o[0],1):(fe=!0,0)}function Je(o){const c=o[0],g=o.rule,b=new Ne(g),w=[g.__beforeBegin,g["on:begin"]];for(const L of w)if(L&&(L(o,b),b.isMatchIgnored))return Ye(c);return g.skip?v+=c:(g.excludeBegin&&(v+=c),T(),!g.returnBegin&&!g.excludeBegin&&(v=c)),Ce(g,o),g.returnBegin?0:c.length}function Qe(o){const c=o[0],g=l.substring(o.index),b=Te(u,o,g);if(!b)return Me;const w=u;u.endScope&&u.endScope._wrap?(T(),D(c,u.endScope._wrap)):u.endScope&&u.endScope._multi?(T(),we(u.endScope,o)):w.skip?v+=c:(w.returnEnd||w.excludeEnd||(v+=c),T(),w.excludeEnd&&(v=c));do u.scope&&y.closeNode(),!u.skip&&!u.subLanguage&&(ae+=u.relevance),u=u.parent;while(u!==b.parent);return b.starts&&Ce(b.starts,o),w.returnEnd?0:c.length}function er(){const o=[];for(let c=u;c!==R;c=c.parent)c.scope&&o.unshift(c.scope);o.forEach(c=>y.openNode(c))}let ne={};function Se(o,c){const g=c&&c[0];if(v+=o,g==null)return T(),0;if(ne.type==="begin"&&c.type==="end"&&ne.index===c.index&&g===""){if(v+=l.slice(c.index,c.index+1),!f){const b=new Error(`0 width match regex (${t})`);throw b.languageName=t,b.badRule=ne.rule,b}return 1}if(ne=c,c.type==="begin")return Je(c);if(c.type==="illegal"&&!d){const b=new Error('Illegal lexeme "'+g+'" for mode "'+(u.scope||"<unnamed>")+'"');throw b.mode=u,b}else if(c.type==="end"){const b=Qe(c);if(b!==Me)return b}if(c.type==="illegal"&&g==="")return 1;if(me>1e5&&me>c.index*3)throw new Error("potential infinite loop, way more iterations than matches");return v+=g,g.length}const R=A(t);if(!R)throw z(h.replace("{}",t)),new Error('Unknown language: "'+t+'"');const rr=Rn(R);let ge="",u=m||rr;const ke={},y=new a.__emitter(a);er();let v="",ae=0,P=0,me=0,fe=!1;try{if(R.__emitTokens)R.__emitTokens(l,y);else{for(u.matcher.considerAll();;){me++,fe?fe=!1:u.matcher.considerAll(),u.matcher.lastIndex=P;const o=u.matcher.exec(l);if(!o)break;const c=l.substring(P,o.index),g=Se(c,o);P=o.index+g}Se(l.substring(P))}return y.finalize(),ge=y.toHTML(),{language:t,value:ge,relevance:ae,illegal:!1,_emitter:y,_top:u}}catch(o){if(o.message&&o.message.includes("Illegal"))return{language:t,value:he(l),illegal:!0,relevance:0,_illegalBy:{message:o.message,index:P,context:l.slice(P-100,P+100),mode:o.mode,resultSoFar:ge},_emitter:y};if(f)return{language:t,value:he(l),illegal:!1,relevance:0,errorRaised:o,_emitter:y,_top:u};throw o}}function E(t){const l={value:he(t),illegal:!1,relevance:0,_top:i,_emitter:new a.__emitter(a)};return l._emitter.addText(t),l}function H(t,l){l=l||a.languages||Object.keys(r);const d=E(t),m=l.filter(A).filter(ee).map(T=>k(T,t,!1));m.unshift(d);const B=m.sort((T,D)=>{if(T.relevance!==D.relevance)return D.relevance-T.relevance;if(T.language&&D.language){if(A(T.language).supersetOf===D.language)return 1;if(A(D.language).supersetOf===T.language)return-1}return 0}),[C,N]=B,te=C;return te.secondBest=N,te}function q(t,l,d){const m=l&&n[l]||d;t.classList.add("hljs"),t.classList.add(`language-${m}`)}function U(t){let l=null;const d=_(t);if(p(d))return;if(j("before:highlightElement",{el:t,language:d}),t.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",t);return}if(t.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(t)),a.throwUnescapedHTML))throw new In("One of your code blocks includes unescaped HTML.",t.innerHTML);l=t;const m=l.textContent,B=d?x(m,{language:d,ignoreIllegals:!0}):H(m);t.innerHTML=B.value,t.dataset.highlighted="yes",q(t,d,B.language),t.result={language:B.language,re:B.relevance,relevance:B.relevance},B.secondBest&&(t.secondBest={language:B.secondBest.language,relevance:B.secondBest.relevance}),j("after:highlightElement",{el:t,result:B,text:m})}function Y(t){a=Le(a,t)}const ye=()=>{I(),G("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function $(){I(),G("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let V=!1;function I(){if(document.readyState==="loading"){V=!0;return}document.querySelectorAll(a.cssSelector).forEach(U)}function K(){V&&I()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",K,!1);function O(t,l){let d=null;try{d=l(e)}catch(m){if(z("Language definition for '{}' could not be registered.".replace("{}",t)),f)z(m);else throw m;d=i}d.name||(d.name=t),r[t]=d,d.rawDefinition=l.bind(null,e),d.aliases&&Q(d.aliases,{languageName:t})}function ce(t){delete r[t];for(const l of Object.keys(n))n[l]===t&&delete n[l]}function J(){return Object.keys(r)}function A(t){return t=(t||"").toLowerCase(),r[t]||r[n[t]]}function Q(t,{languageName:l}){typeof t=="string"&&(t=[t]),t.forEach(d=>{n[d.toLowerCase()]=l})}function ee(t){const l=A(t);return l&&!l.disableAutodetect}function pe(t){t["before:highlightBlock"]&&!t["before:highlightElement"]&&(t["before:highlightElement"]=l=>{t["before:highlightBlock"](Object.assign({block:l.el},l))}),t["after:highlightBlock"]&&!t["after:highlightElement"]&&(t["after:highlightElement"]=l=>{t["after:highlightBlock"](Object.assign({block:l.el},l))})}function ue(t){pe(t),s.push(t)}function de(t){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}function j(t,l){const d=t;s.forEach(function(m){m[d]&&m[d](l)})}function re(t){return G("10.7.0","highlightBlock will be removed entirely in v12.0"),G("10.7.0","Please use highlightElement now."),U(t)}Object.assign(e,{highlight:x,highlightAuto:H,highlightAll:I,highlightElement:U,highlightBlock:re,configure:Y,initHighlighting:ye,initHighlightingOnLoad:$,registerLanguage:O,unregisterLanguage:ce,listLanguages:J,getLanguage:A,registerAliases:Q,autoDetection:ee,inherit:Le,addPlugin:ue,removePlugin:de}),e.debugMode=function(){f=!1},e.safeMode=function(){f=!0},e.versionString=Mn,e.regex={concat:F,lookahead:ze,either:be,optional:Xt,anyNumberOfTimes:Zt};for(const t in ie)typeof ie[t]=="object"&&Oe(ie[t]);return Object.assign(e,ie),e},W=Ke({});W.newInstance=()=>Ke({});var Pn=W;W.HighlightJS=W;W.default=W;const Be=ar(Pn);function zn(e){const r=e.regex,n=r.concat(/[\p{L}_]/u,r.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),s=/[\p{L}0-9._:-]+/u,f={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},h={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(h,{begin:/\(/,end:/\)/}),a=e.inherit(e.APOS_STRING_MODE,{className:"string"}),p=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),_={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:s,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[f]},{begin:/'/,end:/'/,contains:[f]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[h,p,a,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[h,i,p,a]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},f,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[p]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[_],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[_],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:r.concat(/</,r.lookahead(r.concat(n,r.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:_}]},{className:"tag",begin:r.concat(/<\//,r.lookahead(r.concat(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Ie="[A-Za-z$_][0-9A-Za-z$_]*",Fn=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Hn=["true","false","null","undefined","NaN","Infinity"],Ze=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Xe=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],qe=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Un=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],jn=[].concat(qe,Ze,Xe);function Gn(e){const r=e.regex,n=(l,{after:d})=>{const m="</"+l[0].slice(1);return l.input.indexOf(m,d)!==-1},s=Ie,f={begin:"<>",end:"</>"},h=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(l,d)=>{const m=l[0].length+l.index,B=l.input[m];if(B==="<"||B===","){d.ignoreMatch();return}B===">"&&(n(l,{after:m})||d.ignoreMatch());let C;const N=l.input.substring(m);if(C=N.match(/^\s*=/)){d.ignoreMatch();return}if((C=N.match(/^\s+extends\s+/))&&C.index===0){d.ignoreMatch();return}}},a={$pattern:Ie,keyword:Fn,literal:Hn,built_in:jn,"variable.language":Un},p="[0-9](_?[0-9])*",_=`\\.(${p})`,x="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",k={className:"number",variants:[{begin:`(\\b(${x})((${_})|\\.)?|(${_}))[eE][+-]?(${p})\\b`},{begin:`\\b(${x})\\b((${_})\\b|\\.)?|(${_})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},E={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},H={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"xml"}},q={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"css"}},U={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"graphql"}},Y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,E]},$={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},V=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,H,q,U,Y,{match:/\$\d+/},k];E.contains=V.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(V)});const I=[].concat($,E.contains),K=I.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(I)}]),O={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:K},ce={variants:[{match:[/class/,/\s+/,s,/\s+/,/extends/,/\s+/,r.concat(s,"(",r.concat(/\./,s),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,s],scope:{1:"keyword",3:"title.class"}}]},J={relevance:0,match:r.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ze,...Xe]}},A={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Q={variants:[{match:[/function/,/\s+/,s,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[O],illegal:/%/},ee={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function pe(l){return r.concat("(?!",l.join("|"),")")}const ue={match:r.concat(/\b/,pe([...qe,"super","import"]),s,r.lookahead(/\(/)),className:"title.function",relevance:0},de={begin:r.concat(/\./,r.lookahead(r.concat(s,/(?![0-9A-Za-z$_(])/))),end:s,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},j={match:[/get|set/,/\s+/,s,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},O]},re="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",t={match:[/const|var|let/,/\s+/,s,/\s*/,/=\s*/,/(async\s*)?/,r.lookahead(re)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[O]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:K,CLASS_REFERENCE:J},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),A,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,H,q,U,Y,$,{match:/\$\d+/},k,J,{className:"attr",begin:s+r.lookahead(":"),relevance:0},t,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[$,e.REGEXP_MODE,{className:"function",begin:re,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:K}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:f.begin,end:f.end},{match:h},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},Q,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[O,e.inherit(e.TITLE_MODE,{begin:s,className:"title.function"})]},{match:/\.\.\./,relevance:0},de,{match:"\\$"+s,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[O]},ue,ee,ce,j,{match:/\$[(.]/}]}}Be.registerLanguage("xml",zn);Be.registerLanguage("javascript",Gn);function $n({language:e="javascript",name:r,children:n}){const s=oe.useRef(null),[f,h]=oe.useState(!1),[i,a]=oe.useState(""),p=Object.assign({"../../../packages/Alert/_example/AlertBasic.tsx":or,"../../../packages/Alert/_example/AlertCenter.tsx":ir,"../../../packages/Alert/_example/AlertClose.tsx":sr,"../../../packages/Alert/_example/AlertDescription.tsx":lr,"../../../packages/Alert/_example/AlertEffect.tsx":cr,"../../../packages/Alert/_example/AlertIconDescription.tsx":pr,"../../../packages/Alert/_example/AlertShowIcon.tsx":ur,"../../../packages/Avatar/_example/AvatarBasic.tsx":dr,"../../../packages/Avatar/_example/AvatarError.tsx":gr,"../../../packages/Avatar/_example/AvatarFit.tsx":mr,"../../../packages/Avatar/_example/AvatarType.tsx":fr,"../../../packages/Badge/_example/BadgeBasic.tsx":hr,"../../../packages/Badge/_example/BadgeIsDot.tsx":_r,"../../../packages/Badge/_example/BadgeMax.tsx":br,"../../../packages/Badge/_example/BadgeValue.tsx":xr,"../../../packages/Button/_example/ButtonBasic.tsx":vr,"../../../packages/Button/_example/ButtonDisabled.tsx":Br,"../../../packages/Button/_example/ButtonLink.tsx":yr,"../../../packages/Button/_example/ButtonText.tsx":wr,"../../../packages/Collapse/_example/CollapseBasic.tsx":Cr,"../../../packages/Container/_example/ContainerBasic.tsx":Tr,"../../../packages/Container/_example/ContainerBasic1.tsx":Sr,"../../../packages/Container/_example/ContainerBasic2.tsx":kr,"../../../packages/Container/_example/ContainerBasic3.tsx":Nr,"../../../packages/Container/_example/ContainerBasic4.tsx":Er,"../../../packages/Container/_example/ContainerBasic5.tsx":Ar,"../../../packages/Container/_example/ContainerBasic6.tsx":Dr,"../../../packages/Dialog/_example/DialogBasic.tsx":Rr,"../../../packages/Dialog/_example/DialogContent.tsx":Lr,"../../../packages/Dialog/_example/DialogHeader.tsx":Mr,"../../../packages/Divider/_example/DividerBasic.tsx":Ir,"../../../packages/Divider/_example/DividerBorder.tsx":Or,"../../../packages/Divider/_example/DividerContent.tsx":Pr,"../../../packages/Divider/_example/DividerDirection.tsx":zr,"../../../packages/Drawer/_example/DrawerBasic.tsx":Fr,"../../../packages/Drawer/_example/DrawerContent.tsx":Hr,"../../../packages/Drawer/_example/DrawerHeader.tsx":Ur,"../../../packages/Drawer/_example/DrawerWIthHeader.tsx":jr,"../../../packages/Icon/_example/IconBasic.tsx":Gr,"../../../packages/Layout/_example/LayoutBasic.tsx":Wr,"../../../packages/Layout/_example/LayoutBootstrap.tsx":$r,"../../../packages/Layout/_example/LayoutGutter.tsx":Vr,"../../../packages/Layout/_example/LayoutJustify.tsx":Kr,"../../../packages/Layout/_example/LayoutMix.tsx":Zr,"../../../packages/Layout/_example/LayoutOffset.tsx":Xr,"../../../packages/Link/_example/LinkBasic.tsx":qr,"../../../packages/Link/_example/LinkDisabled.tsx":Yr,"../../../packages/Link/_example/LinkIcon.tsx":Jr,"../../../packages/Link/_example/LinkUnderline.tsx":Qr,"../../../packages/MessageBox/_example/MessageBoxBasic.tsx":et,"../../../packages/MessageBox/_example/MessageBoxConfirm.tsx":rt,"../../../packages/MessageBox/_example/MessageBoxMessage.tsx":tt,"../../../packages/Popconfirm/_example/PopconfirmBasic.tsx":nt,"../../../packages/Popconfirm/_example/PopconfirmEvent.tsx":at,"../../../packages/Popconfirm/_example/PopconfirmIcon.tsx":ot,"../../../packages/Popover/_example/PopoverBasic.tsx":it,"../../../packages/Progress/_example/ProgressBasic.tsx":st,"../../../packages/Progress/_example/ProgressTextInside.tsx":lt,"../../../packages/Rate/_example/RateBasic.tsx":ct,"../../../packages/Result/_example/ResultBasic.tsx":pt,"../../../packages/Result/_example/ResultIcon.tsx":ut,"../../../packages/Scrollbar/_example/ScrollbarBasic.tsx":dt,"../../../packages/Space/_example/SpaceAlignment.tsx":gt,"../../../packages/Space/_example/SpaceBasic.tsx":mt,"../../../packages/Space/_example/SpaceDirection.tsx":ft,"../../../packages/Space/_example/SpaceSize.tsx":ht,"../../../packages/Space/_example/SpaceSize2.tsx":_t,"../../../packages/Space/_example/SpaceSpacer.tsx":bt,"../../../packages/Space/_example/SpaceSpacer2.tsx":xt,"../../../packages/Space/_example/SpaceWrap.tsx":vt,"../../../packages/Switch/_example/SwitchActionIcon.tsx":Bt,"../../../packages/Switch/_example/SwitchBasic.tsx":yt,"../../../packages/Switch/_example/SwitchBeforeChange.tsx":wt,"../../../packages/Switch/_example/SwitchDisabled.tsx":Ct,"../../../packages/Switch/_example/SwitchIcon.tsx":Tt,"../../../packages/Switch/_example/SwitchLoading.tsx":St,"../../../packages/Switch/_example/SwitchSize.tsx":kt,"../../../packages/Switch/_example/SwitchText.tsx":Nt,"../../../packages/Table/_example/TableBasic.tsx":Et,"../../../packages/Table/_example/TableBorder.tsx":At,"../../../packages/Table/_example/TableStripe.tsx":Dt,"../../../packages/Tag/_example/TagBasic.tsx":Rt,"../../../packages/Tag/_example/TagClosable.tsx":Lt,"../../../packages/Tag/_example/TagEffect.tsx":Mt,"../../../packages/Tag/_example/TagRound.tsx":It,"../../../packages/Tag/_example/TagSize.tsx":Ot,"../../../packages/Text/_example/TextBasic.tsx":Pt,"../../../packages/Text/_example/TextSize.tsx":zt,"../../../packages/Text/_example/TextTruncated.tsx":Ft,"../../../packages/Tooltip/_example/TooltipBasic.tsx":Ht,"../../../packages/Tooltip/_example/TooltipContent.tsx":Ut,"../../../packages/Tooltip/_example/TooltipDisabled.tsx":jt,"../../../packages/Tooltip/_example/TooltipEffect.tsx":Gt});let _={display:f?"":"none"};oe.useEffect(()=>{s.current&&(Object.keys(p).forEach(k=>{k.indexOf(r)!==-1&&a(p[k])}),setTimeout(()=>{Be.highlightElement(s.current)},0))},[r]);function x(){h(!f)}return S.jsx(S.Fragment,{children:S.jsxs("div",{className:"code-block",children:[S.jsx("div",{className:"code-block-component",children:n}),S.jsx("div",{className:"op-btns",children:S.jsx("button",{onClick:x,className:"reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger",children:S.jsx("i",{className:"el-icon",style:{fontSize:"16px"},children:S.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-5d9e4641":"",children:S.jsx("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"})})})})}),S.jsx("div",{className:"code-block-wrapper",style:_,children:S.jsx("div",{className:"code-block-pre language-react",children:S.jsx("pre",{children:S.jsx("code",{id:e,ref:s,className:e,children:i})})})})]})})}export{$n as C};
