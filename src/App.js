import React, {Component} from "react";
import PostList from "./component/post/PostList/PostList";
import Story from "./component/Story";
import SearchBar from "./component/SearchBar/SearchBar";
import NavBar from "./component/NavBar/NavBar";
import {robots} from "./component/robots";
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import Logout from './pages/Logout';

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
					<Routes>
						<Route path='/' element={<Home/>} />
						<Route path='/register' element={<Register/>} />
						<Route path='/login' element={<Login/>} />
						<Route path='/dashboard' element={<Dashboard/>} />
						<Route path='/logout' element={<Logout/>} />
						<Route path='/postlist' element={<PostList robots={this.state.robots} hearts={this.state.hearts}/>} />
					</Routes>
					<Story />
					<SearchBar />
					<PostList robots={this.state.robots} hearts={this.state.hearts} />
				</div>
			)
		} else {
			return(
				<div>
					<Routes>
						<Route path='/' element={<Home/>} />
						<Route path='/register' element={<Register/>} />
						<Route path='/login' element={<Login/>} />
						<Route path='/dashboard' element={<Dashboard/>} />
						<Route path='/logout' element={<Logout/>} />
						<Route path='/postlist' element={<PostList robots={this.state.robots} hearts={this.state.hearts}/>} />
					</Routes>

				</div>
			)
		}
	}
}

export default App;