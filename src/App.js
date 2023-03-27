import React, {Component,useState, useEffect} from "react";
import './App.css';
import {Routes, Route, useParams} from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard';
import Logout from './pages/Logout';
import MainPage from './component/mainpage/MainPage';
import PostList from "./component/post/PostList/PostList";
import {getUsers as getUsersApi,
		createUser as createUserApi
} from "./util/api";

const App = () => {
	let {username} = useParams();
	const [users, setUsers] = useState([])

	const addUser = (postContent, photoURL) => {
	createUserApi(postContent, photoURL).then((user) => {
		setUsers([user, ...users]);
	});
};

	useEffect(() => {
		getUsersApi().then((data) => {
			setUsers(data)
		})
	},[])
	return(

		<div>
			<Routes>
				<Route path='/register' element={<Register/>} />
				<Route path='/login' element={<Login/>} />
				<Route path='/dashboard' element={<Dashboard users={users} handleSubmit={addUser} />} />
				<Route path='/logout' element={<Logout/>} />
				<Route path='/postlist' element={<PostList />} />
				<Route path="/mainpage/:username" element={<MainPage users={users} />} />
			<Route path='/logout' element={<Logout/>} />
			</Routes>
		</div>
	)
}

export default App;