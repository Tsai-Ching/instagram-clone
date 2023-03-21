import React, {useState, useEffect} from "react";
import Post from "../Post/Post";
import "./PostList.css";
import PostForm from "../postform/PostForm";

const PostList = ({users, hearts}) => {


	return (
		<div className='main-content'>
			{users.map((user) => 
				<Post key={user.id} user={user} />
			)}
		</div>
	);
}

export default PostList;