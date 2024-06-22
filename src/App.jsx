import { Button, Layout, theme } from 'antd'
import { useState } from 'react'
import Logo from './components/Logo'
import MenuList from './components/MenuList'
import ToogleThemeBouton from './components/ToogleThemeBouton'
import { AreaChartOutlined, MenuFoldOutlined, MenuOutlined, MenuUnfoldOutlined } from '@ant-design/icons'


const { Header, Footer, Sider, Content } = Layout
function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <>
      <Layout>
        <Sider className='sidebar' collapsed={collapsed} collapsible trigger={null} theme={ darkTheme ? 'dark' : 'light'}>
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToogleThemeBouton darkTheme={darkTheme} ToogleTheme={() => setDarkTheme(!darkTheme)} />
        </Sider>
        <Layout>
          <Header theme= 'light' style={{ padding: 0 , background: colorBgContainer}}>
            <Button icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} className='toggle' onClick={() => setCollapsed(!collapsed)}></Button>
          </Header>
          
        </Layout>

      </Layout>
    </>
  )
}

export default App
