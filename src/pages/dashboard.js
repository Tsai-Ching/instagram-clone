import React, {useEffect, useState} from 'react';
import { useLoginUser } from "../util/localStorage";
import { useNavigate } from "react-router-dom";
import PostList from "../component/post/PostList";
import NavBar from "../component/navBar/NavBar";

const Dashboard = (props) => {
	const [loginUsername, isLogin] = useLoginUser()
	const navigate = useNavigate();	
  
	useEffect(() => {
		if(isLogin === 'no') {
				navigate("/login")
			};
		},[isLogin])

	if(isLogin === 'unknown') {
		return (
			<h1>Loading...</h1>
		)
	};

	return (
		<div>
			<PostList users={props.users} />
			<NavBar users={props.users} setUsers={props.setUsers} handleSubmit={props.handleSubmit} />
		</div>
	)
}

export default Dashboard;