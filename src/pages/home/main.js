import React from 'react';
import {Link} from 'react-router-dom';
import base from '../utils/base'

export default class Main extends React.Component {

    getData(e, obj) {
        console.log(obj)
    }

    render() {
        const param = base.decodeQuery(this.props.location.search);
        console.log(param)
        return (
            <div id="detail">
                <Link  to={{
                    pathname:'/index',
                    search:'?id=3'
                }} >index-detail</Link>
            </div>
        )
    }
}