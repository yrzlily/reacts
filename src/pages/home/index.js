import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss'
import base from '../utils/base'
import { Button } from 'antd';
class Index extends React.Component {

    getData(e, obj) {
        console.log(obj)
    }

    render() {
        
        const param = base.decodeQuery(this.props.location.search);
        console.log(param)

        return (
            <div id="detail">
                <Button type="primary">Primary Button</Button>
                <Link  to={{
                    pathname:'/main',
                    search:'?id=2'
                }} >Main</Link>
            </div>
        )
    }
}

export default Index