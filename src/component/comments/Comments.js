import React, {useState, useEffect} from "react";
import Comment from "./Comment/Comment";
import {
	getUsers as getUsersApi,
	createUser as createUserApi,
	deleteUser as deleteUserApi,
	updateUser as updateUserApi
} from "../../util/api";
import CommentForm from "./CommentForm/CommentForm";


const Comments = () => {
	const [backendComments, setBackendComments] = useState([])
	const [activeComment, setActiveComment] = useState(null)
	const rootComments = backendComments.filter((backendComment) =>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
		backendComment.parentId === null);
	const getReplies = (commentId) => 
		backendComments.filter((backendComment) => 
			backendComment.parentId === commentId
		).sort((a, b) => 
			new Date(a.createdAt).getTime() -  new Date(b.createdAt).getTime()
		);
	const addComment = (text, parentId) => {
		createUserApi(text, parentId).then((comment) => {
			setBackendComments([comment, ...backendComments]);
			setActiveComment(null);
		});
	};
	const deleteComment = (commentId) => {
		if(window.confirm('確定刪除？')) {                                                                      
			deleteUserApi().then(() => {
				const updatedBackendComments = backendComments.filter(
					(backendComment) => backendComment.id !== commentId
				);
				setBackendComments(updatedBackendComments)
			})
		}
	}
	const updateComment = (text, commentId) => {
		updateUserApi(text).then(() => {
			const updatedBackendComments = backendComments.map((backendComment) => {
				if(backendComment.id === commentId) {
					return {...backendComment, body: text};
				}
				return backendComment;
			});
			setBackendComments(updatedBackendComments);
			setActiveComment(null);
		});
	};
	useEffect(() => {
		getUsersApi().then((data) => {
			setBackendComments(data)
			console.log(backendComments)
		})
	},[])
	return (
		<div className='comments'>
			<div className='comments-container'>
			{rootComments.map((rootComment) => 
				<Comment 
					key={rootComment.id} 
					comment={rootComment} 
					replies={getReplies(rootComment.id)} 
					currentUserId= '1'
					deleteComment={deleteComment}
					activeComment={activeComment}
					setActiveComment={setActiveComment}
					updateComment={updateComment}
					addComment={addComment}
				/>
			)}
			</div>
			<CommentForm submitLabel="發佈" handleSubmit={addComment} />
		</div>
	);
}

export default Comments;