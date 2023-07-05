import React, {useState, useEffect} from "react";
import Comment from "./Comment/Comment";
import {
	getComments as getUsersApi,
	createComment as createUserApi,
	deleteData as deleteUserApi
} from "../../util/api";
import CommentForm from "./CommentForm/CommentForm";


const Comments = ({ user }) => {
	//儲存抓取到的評論資料
	const [backendComments, setBackendComments] = useState([])

	//挑出第一層評論（直接回覆貼文的評論）
	const rootComments = backendComments.filter((backendComment) =>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
		backendComment.parentId === user.id && backendComment.replyId === null
	)

	//新增回覆 刪除回覆
	const [activeComment, setActiveComment] = useState(null)

	const addComment = (text, parentId = user.id, replyId) => {
		createUserApi(text, parentId, replyId).then((comment) => {
			setBackendComments([comment, ...backendComments]);
			setActiveComment(null);
		});
		console.log(backendComments)
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

	//挑出第二層評論（回覆評論的評論）
	const getReplies = (commentId) => 
		backendComments.filter((backendComment) => 
			backendComment.replyId === commentId 
		).sort((a, b) => 
			new Date(a.createdAt).getTime() -  new Date(b.createdAt).getTime()
		);

	//抓取資料庫中評論資料
	useEffect(() => {
		getUsersApi().then((data) => {
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
					currentUserId= '1'
					activeComment={activeComment}
					setActiveComment={setActiveComment}
					deleteComment={deleteComment}
					addComment={addComment}
					parentId={user.id}
				/>
			)}
			</div>
			<CommentForm submitLabel="發佈" handleSubmit={addComment} />
		</div>
	);
}

export default Comments;