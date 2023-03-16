import React, { useState } from "react";
import { faker } from '@faker-js/faker';
//import { Send } from "react-bootstrap-icons";
import { useRef } from 'react';
import 'animate.css';
import ReadMoreReact from 'read-more-react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Post.css';
import Comments from "../../../comments/Comments";
import Scroll from "../../Scroll";


const Post = ({post}) => {
	const myRef = useRef(null);
	const myRef1 = useRef(null);
	const myRef3 = useRef(null);

	const postName = useRef(null);

	const myText = faker.lorem.lines()

	const postIMG = useRef(null);
	const myTextContent = useRef(myText);

	const myUser = faker.name.findName()
	const myUserId = useRef(myUser);

	const user = "https://robohash.org/" + `${post.id}/?set=set3.jpg`
	const userPic = useRef(user);


	const [lgShow, setLgShow] = useState(false);

  	const handleClose = () => setLgShow(false);
  	const handleShow = () => setLgShow(true);

	let clicked = false;
	const likeButtonClick = (event) => {
		if (!clicked) {
			myRef.current.textContent++
			clicked = true
			myRef1.current.innerHTML = `<i class="animate__animated animate__pulse fa-solid fa-heart fa-xl solidHeart"></i>`
		} else {
			myRef.current.textContent--
			clicked = false
			myRef1.current.innerHTML = `<i class="fa-regular fa-heart fa-xl"></i>`
		}
	}

	return (
		<div className='post-container white mv4 w-100 w-50-m w-33-l mw7 center items-stretch-ns flex flex-column-ns' style={{marginBottom:'0 -1px 12px -1px'}}>
			<div style={{margin:'8px 4px 12px'}} ref={postName}>
				<div class="dtc w2 v-mid">
			    	<img src={user} className="ba b--black-10 db br-100 w1 w2-ns h1 h2-ns"/>
			    </div>
	      		<div class="dtc v-mid pl0">
			        <h1 class="f6 f5-ns fw6 lh-title white mv0">{myUserId.current} </h1>
	      		</div>
	      	</div>	
      		<div>
      			<img 
      			ref={postIMG} 
      			alt='post' 
      			className='ba b--gray br3' style={{height: '468px', width: '468px', objectFit: 'cover'}} 
				src={post.photo}
				/> 
      		</div>
      		<div>
	      		<section className='flex flex-row items-baseline mt2 pb2-ns' style={{marginLeft: '-8px'}}>
	      			<button className='pa2' ref={myRef1} onClick={likeButtonClick}>
	      				<i className="fa-regular fa-heart fa-xl" ></i>
	      			</button>
	      			<button className='pa2'>
	      				<i className="fa-regular fa-comment fa-xl" onClick={handleShow}></i>
	      			</button>

	      			<Modal dialogClassName="main-modal" size="lg" show={lgShow} onHide={handleClose}>

					        <Modal.Header closeButton className='modal-header'>
					        </Modal.Header>
					        <Modal.Body className="show-grid bg-transparent" >
					        	<div class="row">
		          					<div class="col">
						      			<img 
						      			id='postimg'
						      			alt='post' 
						      			src={post.photo}
						      			/>
						      		</div>
					      			<div class="col">
					      				<div className="flex flex-row pa3-ns">
					      					<div class="dtc w2 v-base mr3">
										    	<img src={user} className="dtc v-base ba b--black-10 db br-100 w1 w2-ns h1 h2-ns ma0"/>
										    </div>
										        <h1 className="dtc v-base f6 f5-ns fw6 lh-title mv0 self-center white">{myUserId.current} </h1>
					      				</div>
					      				<Scroll>
							        		<p className="white pa3-ns bt bb  b--dark-gray">{post.post}</p>
							        		<Comments currentUserId='1' className="white" />
							        	</Scroll>
							        	<h5 className='white likes mh0 mb2 pt3'> <span ref={myRef}>0</span>個讚</h5>
						        	</div>
					        	</div>
					        </Modal.Body>

			      </Modal>

	      		</section>
	      		<section className='tl'>
	      			<p className='likes mh0 mb2'> <span ref={myRef}>0</span>個讚</p>
	      		</section>
	      		<section className='ma0-ns content tl'>
           			<p className='ma0-ns content dn' ref={myRef3}>myTextContent</p>
           			 <ReadMoreReact text={post.post} min='0' ideal='40' max='80' readMoreText="...更多"/>
				</section>
			</div>

		</div>

	);
}

export default Post;