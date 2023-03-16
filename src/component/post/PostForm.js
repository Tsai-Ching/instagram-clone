import React, {useState, useRef} from "react";

const PostForm = ( {handleSubmit} ) => {

	const inputRef = useRef(null);
	const outputRef = useRef(null);
	let imagesArray = []
	//手動上傳
	const onChange = (event) => {
    	const files = inputRef.current.files
    	setPhotoURL(URL.createObjectURL(event.target.files[0]))
    	for (let i = 0; i < files.length; i++) {
			imagesArray.push(files[i])
		}
		displayImages()
    }

    function displayImages() {
	  let images = ""
	  imagesArray.forEach((image, index) => {
	    images += `<div class="image">
	                <img src="${URL.createObjectURL(image)}" alt="image">
	                <span onclick="deleteImage(${index})">&times;</span>
	              </div>`
	  })
	  outputRef.current.innerHTML = images
	}

	function deleteImage(index) {
	  imagesArray.splice(index, 1)
	  displayImages()
	}

	const [postContent, setPostContent] =useState('');
	const [photoURL, setPhotoURL] =useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		handleSubmit(postContent, photoURL);
		setPostContent('')
	}
	return (
		<section class="tc pa3 pa5-ns">
		  <form onSubmit={onSubmit} class="hide-child relative ba b--black-20 mw5 center">
		  	<input 
					type="file" 
					class="file" 
					multiple="multiple" 
					accept="image/jpeg, image/png, image/jpg"
					ref={inputRef} 
					onChange={onChange}
			/>
			<output ref={outputRef} class="db"></output>
		    <div class="pa2 bt b--black-20">
		      <textarea
					value={postContent}
					onChange={(e)=>{setPostContent(e.target.value)}}
					placeholder='撰寫說明文字......'
				/>	      
		    </div>
		    <button>分享</button>
		    <a class="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="#">×</a>
		  </form>
		</section>
	);
}

export default PostForm;