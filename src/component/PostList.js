import React from "react";
import Post from "./Post/Post";

const PostList = ({robots}) => {
	const PostComponent = robots.map((robot, i) => {
		return(<Post key={i} name={robots[i].name} id={robots[i].id} />)
	})
	return (
		<div>
			{PostComponent}
		</div>
	);
}

export default PostList;