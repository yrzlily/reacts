import React, {Suspense , lazy, Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import FrontendAuth from './FrontendAuth'

const routerList = [
    {name:'home', path:'/home', component:lazy(()=>import('../index')), children:[
        {name:'index', path:'/home/index', exact:true, component:lazy(()=>import('../home/index'))},
        {name:'main', path:'/home/main', exact:true, component:lazy(()=>import('../home/main'))},
    ]},
    {name:'login' , exact:true, path:'/login', component:lazy(()=>import('../login/index'))},
];
function BasicRoute () {
   
    return (
        <Suspense fallback={<div></div>}>
            <Router>
                <Switch>
                {FrontendAuth(routerList)}
                </Switch>
            </Router>
        </Suspense>
    );
}



export default BasicRoute