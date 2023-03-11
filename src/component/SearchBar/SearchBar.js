import React, {Component, useEffect, useRef} from "react";
import { HouseDoorFill } from "react-bootstrap-icons";
import { Compass } from "react-bootstrap-icons";
import { ChatDots } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import { PlusSquare } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import './SearchBar.css';
import 'animate.css';
import SearchResult from '../SearchResult';
import SearchBox from '../SearchBox';
import {robots} from "../robots";


class SearchBar extends Component {
 	constructor(props) {
    	super(props)
    	this.myRef = React.createRef();
    	this.state = {
     		robots: robots,
     		searchfield: '',
      		search: false,
      		isOpen: true
    	}
  	}

	onButtonClick = () => {
    	document.getElementById('myInput').value = '';
  	};
  	onSearchChange = (event) => {
    	this.setState({ searchfield: event.target.value })
  	}

 //  	componentDidMount(){
 //  		const closeDropdown = () => {
	//   		document.body.addEventListener('click', () => {
	//   			console.log('click')
	//   			this.setState({isOpen: false})
	//   		});
	//   	}
	// }
  	

	render() {
		const filterRobots = robots.filter(robot => {
	    	return(robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
	    })
	    const {closeclick} = this.props
	    const closeDropdown = (event) => {
	  		this.setState({ isOpen: false })
	  		console.log('click')
	  		console.log(this.state.isOpen)
	  	}
		return (
			<div id="content">
				<div >
					<nav id='sidebar' className="h-100 stretch br ma0 bg-black b--dark-gray">
						<div className="pl0 flex flex-column flex-wrap content-center">
							<div className="mt2 pb3-ns">
								<Instagram id='icon' color="white" size={24} className="dib tc" />
							</div>
							<div>
								<HouseDoorFill id='icon' color="white" size={24} className="dib pt3 pb3 tc " />
							</div>
							<div>
								<Search id='icon' color="white" size={24} className="dib pt3 pb3 tc" />
							</div>
							<div>
								<Compass id='icon' color="white" size={24} className="dib pt3 pb3 tc" />
							</div>
							<div>
								<ChatDots id='icon' color="white" size={24} className="dib pt3 pb3 tc" />
							</div>
							<div>
								<Heart id='icon' color="white" size={24} className="dib pt3 pb3 tc" />
							</div>
							<div>
								<PlusSquare id='icon' color="white" size={24} className="dib pt3 pb3 tc" />
							</div>
						</div>
					</nav>
				</div>

				<div id="slideleft" className="fixed + ({this.state.isOpen}? open : close)" ref={this.myRef}>
					<article id="searchbar" className="absolute br3 br--right h-100 bg-black ba b--black-10">
						<div>
							<h2 id="searchbar2" className="white mv2">搜尋</h2>
							<h4 onClick= {closeDropdown}>關掉</h4>
							<div className='mh3 mb3'>
								<div className="flex pv1 ph3 bg-dark-gray silver br3">
									<Search size={16} className="self-center mr2 moon-gray" />
									<SearchBox searchChange={this.onSearchChange} />
								</div>
							</div>
						</div>

						<div id="searchbar3" className="bt b--mid-gray" >
							<div className="mh4-ns mv2-ns flex justify-between">
								<h4 className="white ma0 dib">最近</h4>
								<button className="bw0 pa0 dib bg-inherit blue b" onClick={this.onButtonClick}>全部清除</button>
							</div>
						</div>
						
					

						<div className="mh4-ns mv2-ns flex justify-between">
							<SearchResult robots={filterRobots}/>
						</div>

					</article>
				</div>
			</div>
		);	
	}
}

export default SearchBar;