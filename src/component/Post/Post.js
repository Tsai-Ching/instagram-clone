import React, { useState } from "react";
import { faker } from '@faker-js/faker';
//import { Send } from "react-bootstrap-icons";
import { useRef } from 'react';
import 'animate.css';
import ReadMoreReact from 'read-more-react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Post.css';

const Post = (props) => {
	const myRef = useRef(null);
	const myRef1 = useRef(null);
	const myRef3 = useRef(null);

	const postName = useRef(null);

	const postIMG = useRef(null);

	const myText = faker.lorem.lines()
	const myTextContent = useRef(myText);

	const myUser = faker.name.findName()
	const myUserId = useRef(myUser);

	const user = "https://robohash.org/" + `${props.id}/?set=set3.jpg`
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
		<div className='white mv4 w-100 w-50-m w-33-l mw7 center items-stretch-ns flex flex-column-ns' style={{marginBottom:'0 -1px 12px -1px'}}>
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
      			src='data:image/jpeg;base64,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' />
      		</div>
      		<div>
	      		<section className='flex flex-row items-baseline mt1 pb2-ns' style={{marginLeft: '-8px'}}>
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
						      			src='data:image/jpeg;base64,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' />
					      			</div>
					      			<div class="col">
					      				<div className="flex flex-row pa3-ns">
					      					<div class="dtc w2 v-base mr3">
										    	<img src={user} className="dtc v-base ba b--black-10 db br-100 w1 w2-ns h1 h2-ns ma0"/>
										    </div>
										        <h1 className="dtc v-base f6 f5-ns fw6 lh-title mv0 self-center white">{myUserId.current} </h1>
					      				</div>
						        		<p className="white pa3-ns bt bb  b--dark-gray">{myTextContent.current}</p>
						        	
						        	</div>
					        	</div>
					        </Modal.Body>

			      </Modal>

	      		</section>
	      		<section>
	      			<p className='likes mh0 mb2'> <span ref={myRef}>0</span>個讚</p>
	      		</section>
	      		<section className='ma0-ns content'>
           			<p className='ma0-ns content dn' ref={myRef3}>myTextContent</p>
           			 <ReadMoreReact text={myTextContent.current} min='0' ideal='40' max='80' readMoreText="...更多"/>
				</section>
			</div>

		</div>

	);
}

export default Post;