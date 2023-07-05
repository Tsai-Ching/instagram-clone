import React from "react";
import Post from "./Post/Post";


const PostList = ({ users }) => {
	return (
		<div className='main-content'>
			{users.map((user) => 
				<Post key={user.id} user={user} />
			)}
		</div>
	);
}

export default PostList;