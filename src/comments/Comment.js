import React from "react";
import CommentForm from "./CommentForm";

const Comment = ({
	comment, 
	replies, 
	currentUserId, 
	deleteComment, 
	activeComment, 
	setActiveComment, 
	addComment,
	updateComment,
	parentId = null
}) => {
	const canReply = Boolean(currentUserId);
	const canEdit = currentUserId === comment.userId;
	const canDelete = currentUserId === comment.userId;
	const createdAt = new Date(comment.createdAt).toLocaleDateString();
	const isReplying = activeComment && activeComment.id === comment.id && activeComment.type === 'replying';
	const isEditing = activeComment && activeComment.id === comment.id && activeComment.type === 'editing';
	const replyId = parentId ? parentId : comment.id;
	return (
		<div className='comment'>
			<div className='comment-image-container'> 
				<img src='/user-icon.png'/>
			</div>
			<div className='comment-right-area'>
				<div className='comment-content'>
					<div className='comment-author'>{comment.username}</div>
					<div>{createdAt}</div>
				</div>
				{!isEditing && <div className='comment-text'>{comment.body}</div>}
				{isEditing && (
					<CommentForm 
						submitLabel='修改'
						hasCancelButton
						initialText = {comment.body}
						handleCancel = {() => {setActiveComment(null)}}
						handleSubmit = {(text) => updateComment(text, comment.id)}
					/>
				)}
				<div className='comment-actions'>
					{canReply && (
						<div 
							className='comment-action'
							onClick = {() => 
								setActiveComment({id: comment.id, type: 'replying'})
							}
						>
							Reply
						</div>
					)}
					{canEdit && (
						<div 
							className='comment-action'
							onClick ={() => 
								setActiveComment({id: comment.id, type: 'editing'})
							}
						>
							Edit
						</div>
					)}
					{canDelete && <div className='comment-action' onClick={() => deleteComment(comment.id)}>Delete</div>}
				</div>
				{isReplying && (
					<CommentForm
						submitLabel='Reply'
						handleSubmit = {(text) => addComment(text, replyId)}
					/>
				)}
				{replies.length > 0 && (
					<div className='replies'>
						{replies.map(reply => 
							(<Comment 
								comment={reply} 
								replies={[]} 
								key={reply.id} 
								currentUserId='1' 
								deleteComment={deleteComment} 
								addComment={addComment}
								parentId={comment.id} 
								activeComment={activeComment}
								setActiveComment={setActiveComment}
								updateComment={updateComment}
							/>)
						)}
					</div>
				)}
			</div>
		</div>
	);
} 

export default Comment;