import React, {useState} from "react";

const CommentForm = ({
	submitLabel, 
	handleSubmit,
	hasCancelButton = false,
	initialText = '',
	handleCancel
}) => {
	const [text, setText] =useState(initialText);
	const isTextareaDisable = text.length === 0;
	const onSubmit = (e) => {
		e.preventDefault();
		handleSubmit(text);
		setText('')
	}
	return (
		<form onSubmit={onSubmit} className='flex tc'>
			<textarea
				className='comment-form-textarea bt b--dark-gray'
				value={text}
				onChange={(e)=>{setText(e.target.value)}}
				placeholder='留言......'
				backgroundColor= 'transparent'
			/>
			<button className='comment-form-button' disable={isTextareaDisable}>{submitLabel}</button>
			{hasCancelButton && (
				<button onClick={handleCancel} type='button' className='comment-form-button comment-form-cancel-button'>取消</button>
			)}
		</form>
	);
}

export default CommentForm;