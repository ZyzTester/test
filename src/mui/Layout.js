// in src/MyLayout.js
import { Layout, AppBar, Menu, Sidebar, MenuItemLink, UserMenu } from 'react-admin';
import './../styles/layout.css'
import beeLogo from './../assets/bee.svg'
import folderIcon from './../assets/folder.svg'
// import MySidebar from './MySidebar';
// import MyMenu from './MyMenu';
// import MyNotification from './MyNotification';
import authProvider from './../app/authProvider';
import Typography from '@material-ui/core/Typography';
import { forwardRef } from 'react';

const MyAppBar = (props) => {
    return(
        // <div id='appBar' >
        //     <img src={beeLogo} alt='bee pretty' fill='black' id='svg' width='20' />
        //     <p> Bee Pretty </p>
        // </div>
        <AppBar {...props} id='appBar' >
            <a href='/' >
            <img src={beeLogo} alt='bee pretty' fill='black' id='svg' width='20' />
            <p> Bee Pretty </p>
            </a>
            <UserMenu id='user-menu' />
        </AppBar>
    )
}
const MySidebar= (children) => {
    return(
        <Sidebar id='rest' >
            <ConfigurationMenu/>
        </Sidebar>
    )
}
const FolderIcon = () => {
    return(
        <img src={folderIcon} alt='table' fill='white' id='svg' width='20' />
    )
}

const ConfigurationMenu = forwardRef(({ onClick }, ref) => (
    <MenuItemLink
        ref={ref}
        to="/configuration"
        primaryText="Configuration"
        leftIcon={<FolderIcon/>}
        onClick={onClick} // close the menu on click
    />
));

const MyUserMenu = props => (
    <UserMenu {...props} id='rest' >
        <ConfigurationMenu />
    </UserMenu>
);


const MyLayout = props => <Layout 
    id='layout'
    {...props}
    appBar={MyAppBar}
    // menu={MyUserMenu}
    // sidebar={MySidebar}
/>;

export default MyLayout;