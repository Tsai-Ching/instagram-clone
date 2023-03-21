import React, {useState, useRef} from "react";
import "./PostForm.css";

const PostForm = ( {handleSubmit, onHide} ) => {

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
	    images += `<div class="image-container dib relative">
	                <img src="${URL.createObjectURL(image)}" alt="image" className='image'>
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
		<section class="center bg-dark-gray post-form">
		  <form onSubmit={onSubmit} class=" h-100 relative center form">
		  	<div className='row ma0 bb b--gray'>
			  	<header className='col white ma0 mw-100 relative flex flex-row'>
			  		<span onClick={deleteImage} className='tl pa2 flex b'>&times;</span>
			  		<span className='pa2 flex center b'>建立新貼文</span>
			  		<button className='tr pa2 flex b' onClick={onHide}>分享</button>
			  	</header>
			</div>
		  	<div className='row w-100 ma0 down-area'>
		  		<div class='col-md-6 h-100 br b--gray flex tc'>
				  	<input 
							type="file" 
							class="file db center" 
							multiple="multiple" 
							accept="image/jpeg, image/png, image/jpg"
							ref={inputRef} 
							onChange={onChange}
							align="center"
					/>
						<output ref={outputRef} className='db'></output>
				</div>	
			    <div class="pa2 b--black-20 col-md-6 tl">
			      <textarea
						value={postContent}
						onChange={(e)=>{setPostContent(e.target.value)}}
						placeholder='撰寫說明文字......'
					/>	      
			    </div>
		    </div>
		  </form>
		</section>
	);
}

export default PostForm;