import React from "react";
import Post from "../Post/Post";
import "./PostList.css";
import PostForm from "../PostForm";
import {getComments as getCommentsApi} from "../../../api";

const PostList = ({robots, updatePost}) => {
	const [backendPosts, setBackendPosts] = useState([])

	const updatePost = (text) => {
		updatePostApi(text).then(() => {
			const updatedBackendPosts = backendPosts.map((backendPost) => {
				return {...backendPost, post: text};

			});
			setBackendPosts(updatedBackendPosts);
		});
	};
	const rootComments = backendComments.filter((backendComment) => 
	backendComment.parentId === null);
	useEffect(() => {
		getCommentsApi().then((data) => {
			setBackendPosts(data)
		})
	},[])

	return (
		<div className='main-content'>
			<PostForm handleSubmit = {(text) => updatePost(text)>
			{robots.map((robot, i) => 
				<Post key={i} name={robots[i].name} id={robots[i].id} />
			)}
		</div>
	);
}

export default PostList;