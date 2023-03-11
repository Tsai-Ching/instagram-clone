import React, {useEffect, useState} from 'react';
import { useLoggedInUser } from "../util/localStorage";
import { Link, useNavigate } from "react-router-dom";

import PostList from "../component/PostList";
import Story from "../component/Story";
import SearchBar from "../component/SearchBar/SearchBar";
import NavBar from "../component/NavBar/NavBar";
import {robots as robotsArray} from "../component/robots";


const Dashboard = () => {
	const [robots, setRobots] = useState(robotsArray);
	const [search, setSearch] = useState(false);
	const [hearts, setHearts] = useState(0);

	const isSearchClick = (event) => {
    	setSearch(true)
    	console.log(search)
 	}

	const heartClick = (event) => {
		setHearts(hearts += 1)
	}
	const onCloseClick = (event) => {
		setSearch(false)
		console.log(search)
	}


	const [loggedInUsername, isLoggedIn] = useLoggedInUser()
	const navigate = useNavigate();

	const isSearch = search === true

	useEffect(() => {
		if(isLoggedIn === 'no') {
			navigate("/")
		};
	},[isLoggedIn])

	if(isLoggedIn === 'unknown') {
			return (
				<h1>Loading...</h1>
			)
		};

	return (
		<div>
			<div style={{float: 'right'}}>
				<Link to='/logout'> Log out</Link>
			</div>
		<Story />
		<PostList robots={robots} hearts={hearts} />
		{isSearch && (<SearchBar closeclick={onCloseClick} />)}
		{!isSearch && (<NavBar searchclick={isSearchClick} />)}
		</div>
	)
}

export default Dashboard;