import { Menu } from 'antd'
import { HomeOutlined ,AppstoreOutlined ,AreaChartOutlined, ContactsOutlined, IdcardOutlined, BarsOutlined, BarChartOutlined, UserAddOutlined, PlusOutlined, UserOutlined, SettingOutlined, PoweroffOutlined} from '@ant-design/icons'
const MenuList = ({darkTheme}) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
      <Menu.Item key= 'home' icon={<HomeOutlined />}>Accueil</Menu.Item>
      <Menu.SubMenu key= 'activity' icon={<AppstoreOutlined />} title='Activité'>
        <Menu.Item key= 'activite' icon={<BarChartOutlined />}>Activités Dashboard</Menu.Item>
        <Menu.Item key= 'activiteList' icon={<BarsOutlined />}>Activités List</Menu.Item>
        <Menu.Item key= 'addactivite' icon={<PlusOutlined />}>Ajouter une Activité</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key= 'Responsables' icon={<UserOutlined />} title='Responsables'>
        <Menu.Item key= 'list' icon={<BarsOutlined />}>List des Responsables</Menu.Item>
       
        <Menu.Item key= 'add' icon={<UserAddOutlined />}>Ajouter un Responsable</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key= 'Students' icon={<UserOutlined />} title='Stagiaires'>
        <Menu.Item key= 'listStagiaire' icon={<BarsOutlined />}>List des Stagiaires</Menu.Item>
        <Menu.Item key= 'addStagiaire' icon={<UserAddOutlined />}>Ajouter un Stagiaire</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key= 'settings' icon={<SettingOutlined />}>Paramètres</Menu.Item>
      <Menu.Item key= 'singOut' icon={<PoweroffOutlined />}>Déconnexion</Menu.Item>
      
 
      
    </Menu>
  )
}

export default MenuList
