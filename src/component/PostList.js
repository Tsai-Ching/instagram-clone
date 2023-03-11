import React from "react";
import Post from "./Post/Post";
import ostList from "./PostList.css";

const PostList = ({robots}) => {
	const PostComponent = robots.map((robot, i) => {
		return(<Post key={i} name={robots[i].name} id={robots[i].id} />)
	})
	return (
		<div className='main-content'>
			{PostComponent}
		</div>
	);
}

export default PostList;