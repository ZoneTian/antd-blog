import React,{Component} from "react"
//import $ from 'n-zepto'
import { Table} from 'antd';
//import {Link} from 'react-router'
const columns = [{
	  title: '分类',
	  dataIndex: 'z_classification',
	  key: 'classification',
	  render: text => <a href="javascript:;">{text}</a>,
	}, {
	  title: '时间',
	  dataIndex: 'z_time',
	  key: 'time',
	}, {
	  title: '题目',
	  key: 'title',
	  render: (text, record) => (
	    <span>
	      <a href="javascript:;"> {record.title}</a>
	    </span>
	  ),
	}];

	const data = [{
	  key: '1',
	  z_classification: 'Angular',
	  z_time:'2017-6-14 20:13',
	  title: 'angular的指令系统',
	}, {
	  key: '2',
	  z_classification: 'Angular',
	  z_time:'2017-6-14 20:13',
	  title: 'angular的指令系统',
	}, {
	  key: '3',
	  z_classification: 'Angular',
	  z_time:'2017-6-14 20:13',
	  title: 'angular的指令系统',
	}];
export default class Home extends Component{
	render(){
		return (<Table columns={columns} dataSource={data} />)
	};
}

