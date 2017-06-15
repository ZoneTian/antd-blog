import React from 'react';
import {render} from 'react-dom';
import App from './App.js';
import Home from './Home.js';
//import Detail from './Detail.js';
import Directory from './Directory.js';

import Itisme from './Itisme.js';
//import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import './index.css';
import {Router,Route,browserHistory,IndexRoute} from "react-router"
//render(<App/>,document.getElementById("root"))
//class Index extends React.Component{
//	componentWillReceiveProps(nextProps){
// 		 console.log(nextProps.location.pathname)    // path/to/abc
//	}
//}

render(<Router history={browserHistory}>
	   <Route path="/" component={App}>
	      <IndexRoute component={Itisme} ></IndexRoute>
	      <Route path="home" component={Home}></Route>	
	       <Route path="itisme" component={Itisme}></Route>	       
	       <Route path="/directory/:dc" component={Directory}></Route> 
	   </Route>
       </Router>,document.getElementById("root"))
//registerServiceWorker();
