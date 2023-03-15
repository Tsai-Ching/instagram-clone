import React, {useState} from "react";

const PostForm = ( {handleSubmit} ) => {
	const [text, setText] =useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		handleSubmit(text);
		setText('')
	}
	return (
		<form onSubmit={onSubmit}>
			<textarea
				value={text}
				onChange={(e)=>{setText(e.target.value)}}
				placeholder='撰寫說明文字......'
			/>
			<button>分享</button>
		</form>
	);
}

export default PostForm;