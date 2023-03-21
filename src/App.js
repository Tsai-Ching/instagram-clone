import React, {Component,useState, useEffect} from "react";
import './App.css';
import {Routes, Route, useParams} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import Logout from './pages/Logout';
import MainPage from './component/mainpage/MainPage';
import PostList from "./component/post/PostList/PostList";
import {getComments as getPostsApi,
		createComment as createPostApi
} from "./api";

const App = () => {
	let {username} = useParams();
	const [backendPosts, setBackendPosts] = useState([])

	const addPost = (postContent, photoURL) => {
	createPostApi(postContent, photoURL).then((post) => {
		setBackendPosts([post, ...backendPosts]);
	});
};

	useEffect(() => {
		getPostsApi().then((data) => {
			setBackendPosts(data)
		})
	},[])
	return(

		<div>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/register' element={<Register/>} />
				<Route path='/login' element={<Login/>} />
				<Route path='/dashboard' element={<Dashboard post={backendPosts} handleSubmit={addPost} />} />
				<Route path='/logout' element={<Logout/>} />
				<Route path='/postlist' element={<PostList />} />
				<Route path="/mainpage/:username" element={<MainPage post={backendPosts} />} />
				<Route path='/logout' element={<Logout/>} />
			</Routes>
		</div>
	)
}

export default App;