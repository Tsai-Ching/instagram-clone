import React, {useEffect, useState} from 'react';
import { useLoggedInUser } from "../util/localStorage";
import { Link, useNavigate } from "react-router-dom";
import Logout from './Logout';
import Modal from 'react-bootstrap/Modal';
import PostForm from '../component/post/postform/PostForm'
import PostList from "../component/post/PostList/PostList";
import NavBar from "../component/NavBar/NavBar";

const Dashboard = (props) => {
	const [loggedInUsername, isLoggedIn] = useLoggedInUser()
	const navigate = useNavigate();
	const [lgShow, setLgShow] = useState(false);
  	const handleClose = () => setLgShow(false);
  	const handleShow = () => setLgShow(true);
  	
  	const [hearts, setHearts] = useState(0);

	const heartClick = (event) => {
		setHearts(hearts += 1)
	}
  
	useEffect(() => {
		if(isLoggedIn === 'no') {
				navigate("/login")
			};
		},[isLoggedIn])

	if(isLoggedIn === 'unknown') {
		return (
			<h1>Loading...</h1>
		)
	};

	return (
		<div>
			<div className='tr'>
				<Link to='/logout'> Log out</Link>
			</div>

	      	<Modal dialogClassName="main-modal" size="lg" show={lgShow} onHide={handleClose}>
				<Modal.Header closeButton className='modal-header'>
				</Modal.Header>
				<Modal.Body className="show-grid bg-transparent center" >
					<PostForm className="center" onHide={handleClose} handleSubmit={props.handleSubmit} />
				</Modal.Body>
			</Modal>

			<PostList hearts={hearts} users={props.users}/>
			<NavBar handleShow={handleShow} users={props.users} />
		</div>
	)
}

export default Dashboard;