import React, {useState, useEffect} from "react";
import Comment from "./Comment";
import {
	getComments as getCommentsApi,
	createComment as createCommentApi,
	deleteComment as deleteCommentApi,
	updateComment as updateCommentApi
} from "../api";
import CommentForm from "./CommentForm";


const Comments = (currentUserId) => {
	const [backendComments, setBackendComments] = useState([])
	const [activeComment, setActiveComment] = useState(null)
	const rootComments = backendComments.filter((backendComment) => 
		backendComment.parentId === null);
	console.log('backEndComments', backendComments);
	const getReplies = (commentId) => 
		backendComments.filter((backendComment) => 
			backendComment.parentId === commentId
		).sort((a, b) => 
			new Date(a.createdAt).getTime() -  new Date(b.createdAt).getTime()
		);
	const addComment = (text, parentId) => {
		createCommentApi(text, parentId).then((comment) => {
			setBackendComments([comment, ...backendComments]);
			setActiveComment(null);
		});
	};
	const deleteComment = (commentId) => {
		if(window.confirm('確定刪除？')) {
			deleteCommentApi().then(() => {
				const updatedBackendComments = backendComments.filter(
					(backendComment) => backendComment.id !== commentId
				);
				setBackendComments(updatedBackendComments)
			})
		}
	}
	const updateComment = (text, commentId) => {
		updateCommentApi(text).then(() => {
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
		getCommentsApi().then((data) => {
			setBackendComments(data)
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
					currentUserId={{currentUserId}} 
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