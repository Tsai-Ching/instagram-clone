import React, {useState, useRef} from "react";
import "./PostForm.css";
import {createData as createDataApi} from "../../util/api";

const PostForm = ( { setUsers, onHide, users} ) => {

	const inputRef = useRef(null);
	const outputRef = useRef(null);
	const inputDivRef = useRef(null);
	let imagesArray = []
	//手動上傳
	const onChange = (event) => {
    	const files = inputRef.current.files
    	setPhotoURL(URL.createObjectURL(event.target.files[0]))
    	console.log(event.target.files[0])
    	for (let i = 0; i < files.length; i++) {
			imagesArray.push(files[i])
		}
		displayImages()
    }
	const onDrop = (e) => {
		console.log(e);
    	console.log(e.dataTransfer.files[0])
		e.preventDefault()
		e.stopPropagation(); 
		console.log('work')
		console.log(e.dataTransfer.filelist)
		const files = e.dataTransfer.files
	  	for (let i = 0; i < files.length; i++) {
		    if (!files[i].type.match("image")) continue

		    if (imagesArray.every(image => image.name !== files[i].name))
		      imagesArray.push(files[i])
		}
		displayImages();
	}

	const dragover_handler = (ev) => {
	    ev.preventDefault();
	}

    function displayImages() {
	  let images = ""
	  imagesArray.forEach((image, index) => {
	    images += `<div class="image">
	                <img src="${URL.createObjectURL(image)}" alt="image" className='choosed-image'>
	              </div>`
	  })
	  outputRef.current.innerHTML = images
	  imagesArray = []
	}

	function deleteImage(index) {
	  imagesArray.splice(index, 1)
	  displayImages()
	}

	const addPost = (postContent, photoURL) => {
		createDataApi(postContent, photoURL).then((user) => {
			setUsers([user, ...users]);
		});
	};

	const [postContent, setPostContent] =useState('');
	const [photoURL, setPhotoURL] =useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		if (inputRef.current.value == '') {
		    alert("請選擇檔案");
		    return false;
		}
		addPost(postContent,photoURL);
		setPostContent('')
		onHide()
	}
	return (
		<section class="center bg-dark-gray post-form">
		  <form onSubmit={onSubmit} class=" h-100 relative center form">
		  	<div className='row ma0 bb b--gray'>
			  	<header className='col white ma0 mw-100 relative flex flex-row'>
			  		<span  className='tl pa2 flex b'> 
						<label for="upload-photo">...</label>
						<input 
							type="file" 
							className="file db center" 
							multiple="multiple" 
							accept="image/jpeg, image/png, image/jpg"
							ref={inputRef} 
							align="center"
							style={{display:'none'}}
							id="upload-photo"
							onChange={onChange}
						/>
					</span>
			  		<span className='pa2 flex center b'>建立新貼文</span>
			  		<button className='tr pa2 flex b'>分享</button>
			  	</header>
			</div>
		  	<div className='row w-100 ma0 down-area' >
		  		<div class='col-md-6 h-100 br b--gray flex tc input-div' onDrop={onDrop} draggable="true" onDragOver={dragover_handler}>
		  			<div class="add-image">
		  				<i class="fa-regular fa-image fa-5x"></i>
		  				<h1>將相片拖曳到這裡</h1>
		  			</div>
						<output ref={outputRef}></output>
				</div>	
			    <div class="pa2 b--black-20 col-md-6 tl">
			      <textarea
						value={postContent}
						className="white" 
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