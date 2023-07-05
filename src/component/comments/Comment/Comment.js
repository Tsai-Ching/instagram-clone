import React, {useRef,useEffect} from "react";
import CommentForm from "../CommentForm/CommentForm";
import './Comment.css'
import { Link } from "react-router-dom";

const Comment = ({
	comment, 
	replies, 
	currentUserId, 
	deleteComment, 
	activeComment, 
	setActiveComment, 
	addComment,
	parentId,
	replyId = null
}) => {
	const canReply = Boolean(currentUserId);
	const canEdit = currentUserId === comment.userId;
	const canDelete = currentUserId == comment.userId;
	const createdAt = new Date(comment.createdAt).toLocaleDateString();
	const isReplying = activeComment && activeComment.id === comment.id && activeComment.type === 'replying';
	const isEditing = activeComment && activeComment.id === comment.id && activeComment.type === 'editing';
	const commentId = replyId ? replyId : comment.id;

	const replyRef = useRef();
	const replyDayRef = useRef();

	function ToggleShow() {
		const toggleReply = replyRef.current;	
	  	if (toggleReply.style.display === "none") {
		    toggleReply.style.display = "block";
		} else {
	    	toggleReply.style.display = "none";
	  	}
	}

	useEffect(() => {
		var day_start = new Date(createdAt);
		var day_now = new Date();
		var total_days = (day_now - day_start) / (1000 * 60 * 60 * 24);
		var total_weeks = (day_now - day_start) / (1000 * 60 * 60 * 24 * 7);
		if (total_weeks < 1) {
			replyDayRef.current.innerHTML = Math.round(total_days) + '天';
		} else {
			replyDayRef.current.innerHTML = Math.round(total_weeks) + '週';
		}
	}, [])

	return (
		<div className='comment ph4'>
			 <Link to={'/mainpage/' + comment.username}><div className='comment-image-container'> 
				<img src={comment.userImage}/>
			</div></Link>
			<div className='comment-right-area'>
				<div className='comment-content'>
					<Link to={'/mainpage/' + comment.username}><div className='comment-author ml3'>{comment.username}</div></Link>
					<div className='comment-text'>{comment.body}</div>
				</div>
				<div className='comment-actions'>
					<div className='ml3' ref={replyDayRef}></div>
					{canReply && (
						<div 
							className='comment-action ml2'
							onClick = {() => 
								setActiveComment({id: comment.id, type: 'replying'})
							}
						>
							回覆
						</div>
					)}

					{canDelete && <div className='comment-action' onClick={() => deleteComment(comment.id)}>刪除</div>}
				</div>
				{isReplying && (
					<CommentForm
						submitLabel='回覆'
						handleSubmit = {(text) => addComment(text, parentId, commentId)}
					/>
				)}

				{replies.length > 0 && (
					<div>
					<p className='show-reply ml3' onClick={ToggleShow}>- 查看回覆</p>
					<div className='replies dn' ref={replyRef}>
						{replies.map(reply => 
							(<Comment 
								comment={reply} 
								replies={[]} 
								key={reply.id} 
								currentUserId='1' 
								deleteComment={deleteComment} 
								addComment={addComment}
								parentId={parentId}
								replyId={comment.id} 
								activeComment={activeComment}
								setActiveComment={setActiveComment}
							/>)
						)}
					</div>
					</div>
				)}
			</div>
		</div>
	);
} 

export default Comment;