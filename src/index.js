import React from 'react'
import ReactDom from 'react-dom'
import BasicRoute from './pages/utils/basicRoute'
import 'antd/dist/antd.css';

class App extends React.Component {
    
    render(){
        return (
            <BasicRoute />
        )
    }
}
ReactDom.render(<App />, document.getElementById("App"));