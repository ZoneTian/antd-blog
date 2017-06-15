import React, { Component } from 'react';
//import logo from './logo.svg';
import {Link} from "react-router"
import './App.css';
import github from './github.jpg'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  componentWillReceiveProps(nextProps){
   		 console.log(nextProps.location.pathname)    // path/to/abc
	}
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span className="nav-text">框架</span></span>}
            >
              <Menu.Item key="1" ><Link to='/directory/angular'>angular</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/detail'>react</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/home'>vue</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span className="nav-text">css/html基础</span></span>}
            >
              <Menu.Item key="4">css</Menu.Item>
              <Menu.Item key="5">htm</Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
              
               <Link to='/itisme'>This is me</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 ,textAlign:'right',fontSize:'20px',fontStyle:'italic'}} >
          			<span style={{paddingRight:'100px'}}>人啊 总想留下点什么</span>                              
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
             {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
              <span> 小眼也傲娇:</span><a class='git' target='_blank' href='https://github.com/zone94'><img src={github} style={{width:'20px'}} /></a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
