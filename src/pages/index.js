import React from 'react'
import './home/index.scss';
import { Layout } from 'antd';
import FrontendAuth from '../pages/utils/FrontendAuth'
export default class Home extends React.Component {

    render(){
        console.log(this.props.routes)
        const { Header, Footer, Sider, Content } = Layout;
        function debounce(func, time){
            let timer = null;
            return function(){
                if(timer){
                    clearTimeout(timer);
                }
                timer = setTimeout(func,time)
            }
        }

        function throttle(func, time) {
            let valid = false;
            return function(){
                if(valid){
                    return;
                }
                valid = true;
                setTimeout(function(){
                    valid = false;
                    console.log(document.documentElement.scrollTop)
                },time)
            }
        }

        function getHeight(){
            console.log(document.documentElement.scrollTop)
        }

        return (
            <div id="components-layout-demo-basic">
                <section className="code-box-demo">
                    <Layout>
                        <Header>Header</Header>
                        <Layout>
                            <Sider>Sider</Sider>
                            <Content>
                            {FrontendAuth(this.props.routes || [])}
                            </Content>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>
                </section>
            </div>
            
        )
    }
}