import React, {useEffect, useState} from 'react';
import { useLoggedInUser } from "../util/localStorage";
import { Link, useNavigate } from "react-router-dom";
import Logout from './Logout';
import PostList from "../component/post/PostList/PostList";
import NavBar from "../component/NavBar/NavBar";

const Dashboard = (props) => {
	const [loggedInUsername, isLoggedIn] = useLoggedInUser()
	const navigate = useNavigate();	

  	const [hearts, setHearts] = useState(0);

	const heartClick = (event) => {
		setHearts(hearts += 1)
	}
  
	useEffect(() => {
		if(isLoggedIn === 'no') {
				navigate("/login")
			};
		},[isLoggedIn])

	if(isLoggedIn === 'unknown') {
		return (
			<h1>Loading...</h1>
		)
	};

	return (
		<div>
			<PostList hearts={hearts} users={props.users}/>
			<NavBar users={props.users} handleSubmit={props.handleSubmit}/>
		</div>
	)
}

export default Dashboard;