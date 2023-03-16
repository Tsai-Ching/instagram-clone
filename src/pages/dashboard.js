import React, {useEffect, useState} from 'react';
import { useLoggedInUser } from "../util/localStorage";
import { Link, useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import PostList from "../component/post/PostList/PostList";
import Story from "../component/Story";
import NavBar from "../component/NavBar/NavBar";
import {robots as robotsArray} from "../component/robots";


const Dashboard = () => {
	const [robots, setRobots] = useState(robotsArray);
	const [hearts, setHearts] = useState(0);

	const heartClick = (event) => {
		setHearts(hearts += 1)
	}

	const [loggedInUsername, isLoggedIn] = useLoggedInUser()
	const navigate = useNavigate();

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
		<NavBar />
		</div>
	)
}

export default Dashboard;