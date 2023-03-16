import React, {useState, useEffect} from "react";
import Post from "../Post/Post";
import "./PostList.css";
import PostForm from "../PostForm";
import {getComments as getPostsApi,
		createComment as createPostApi
} from "../../../api";

const PostList = () => {
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

	return (
		<div className='main-content'>
			<PostForm handleSubmit = {(postContent, photoURL) => addPost(postContent, photoURL)} />
			{backendPosts.map((backendPost) => 
				<Post key={backendPost.id} post={backendPost} />
			)}
		</div>
	);
}

export default PostList;