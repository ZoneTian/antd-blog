import React,{Component} from "react";
import $ from "n-zepto"


export default class Detail extends Component {
	constructor(){
		super()
		this.state = {imgSrc:""}
	}
	componentWillMount(){
		let that = this;
		let id = this.props.params.id;
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
			data:{goodsID:id},
			async:true,
			success(data){
				var thisdata = eval(data);
				console.log(thisdata);
				that.setState({
					imgSrc:thisdata[0].goodsListImg
				})
			}
		});
	}
		
	render(){
		return (<div><img src={this.state.imgSrc} /></div>)
	}
}
