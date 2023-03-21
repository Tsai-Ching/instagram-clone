import React, {useState, useEffect} from "react";
import Post from "../Post/Post";
import "./PostList.css";
import PostForm from "../PostForm";

const PostList = ({post, hearts}) => {


	return (
		<div className='main-content'>
			{post.map((post) => 
				<Post key={post.id} post={post} />
			)}
		</div>
	);
}

export default PostList;