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
import Scroll from "../../scroll/Scroll";
import { Link } from "react-router-dom";


const Post = ({user}) => {
	const myRef = useRef(null);
	const myRef1 = useRef(null);

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
		<div className='post-container white mv4 mw7 center items-stretch-ns flex flex-column-ns relative' style={{marginBottom:'0 -1px 12px -1px' ,width: '33vw'}}>
			<div class='flex items-center' style={{margin:'8px 4px 12px'}}>
			    <Link to={'/mainpage/' + user.username}><div className="user-img"><img src={user.userImage}/></div></Link>
			    <h1 class="f6 f5-ns fw6 lh-title white mv0 ml2">{user.username} </h1>
	      	</div>	
      		<div class='square' style={{width: '100%'}}>
      			<img 
      			alt='post' 
      			className='ba b--dark-gray br3 h-100 w-100' style={{objectFit: 'cover'}} 
				src={user.photo}
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
						      			src={user.photo}
						      			/>
						      		</div>
					      			<div class="col">
					      				<div className="flex flex-row pa4 items-baseline">
					      					<Link to={'/mainpage/' + user.username}><div className="user-img"><img src={user.userImage}/></div></Link>
			    							<h1 class="f6 f5-ns fw6 lh-title white mv0 ml3">{user.username} </h1>
					      				</div>
					      				<Scroll >
					      					<div className="flex flex-row pa4 items-start bt bb b--dark-gray">
					      						<Link to={'/mainpage/' + user.username}><div className="user-img"><img src={user.userImage}/></div></Link>
							        			<p className="white mb0 ml3">{user.post}</p>
							        		</div>
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
           			<p className='ma0-ns content dn'>{user.post}</p>
           			 <ReadMoreReact text={user.post} min='0' ideal='40' max='80' readMoreText="...更多"/>
				</section>
			</div>

		</div>

	);
}

export default Post;