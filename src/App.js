import React, {Component} from "react";
import PostList from "./component/PostList";
import Story from "./component/Story";
import SearchBar from "./component/SearchBar/SearchBar";
import NavBar from "./component/NavBar/NavBar";
import {robots} from "./component/robots";

class App extends Component {
 	constructor() {
    	super()
    	this.state = {
    		robots: robots,
      		search: false,
      		hearts: 0
    	}
  	}

 	isSearchClick = (event) => {
    	this.setState({ search: true })
 	}

	heartClick = (event) => {
		this.setState({ hearts: this.state.hearts += 1 })
	}

	render() {
		if(this.state.search === true) {
			return(
				<div>
					<Story />
					<SearchBar />
					<PostList robots={this.state.robots} hearts={this.state.hearts} />
				</div>
			)
		} else {
			return(
				<div>
					<Story />
					<NavBar searchclick={this.isSearchClick} />
					<PostList robots={this.state.robots} />
				</div>
			)
		}
	}
}

export default App;