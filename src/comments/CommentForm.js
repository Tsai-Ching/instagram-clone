import React, {useState} from "react";
import './CommentForm.css';

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
		<form onSubmit={onSubmit} className='flex flex-row bb b--dark-gray pb3 justify-center ph4 mt3'>
			<input
				className='comment-form-textarea h-auto v-mid'
				value={text}
				onChange={(e)=>{setText(e.target.value)}}
				placeholder='留言......'/>

			<button className='comment-form-button' disable={isTextareaDisable}>{submitLabel}</button>
			{hasCancelButton && (
				<button onClick={handleCancel} type='button' className='comment-form-button comment-form-cancel-button'>取消</button>
			)}
		</form>
	);
}

export default CommentForm;