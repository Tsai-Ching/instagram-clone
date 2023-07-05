import React, { useState, useEffect } from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard';
import Logout from './pages/Logout';
import MainPage from './component/mainpage/MainPage';
import PostList from "./component/post/PostList";
import {
	getPosts as getDataApi,
	createData as createDataApi,
	deleteData as deleteDataApi,
	updateData as updateDataApi
} from "./util/api";


const App = () => {
	const [users, setUsers] = useState([])

	const addPost = (postContent, photoURL) => {
		createDataApi(postContent, photoURL).then((user) => {
			setUsers([user, ...users]);
		});
	};

	useEffect(() => {
		getDataApi().then((data) => {
			setUsers(data)
		})
	},[])
	return(

		<div>
			<Routes>
				<Route path='/' element={<Register/>} />
				<Route path='/register' element={<Register/>} />
				<Route path='/login' element={<Login/>} />
				<Route path='/dashboard' element={<Dashboard users={users} handleSubmit={addPost} />} />
				<Route path='/logout' element={<Logout/>} />
				<Route path='/postlist' element={<PostList />} />
				<Route path="/mainpage/:username" element={<MainPage users={users} />} />
			<Route path='/logout' element={<Logout/>} />
			</Routes>
		</div>
	)
}

export default App;