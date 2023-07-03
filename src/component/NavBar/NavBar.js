import React, {useState, useEffect, useRef } from "react";
import logo from '../../logo.png'
import './NavBar.css'
import { Search } from "react-bootstrap-icons";
import { HouseDoorFill } from "react-bootstrap-icons";
import { Compass } from "react-bootstrap-icons";
import { ChatDots } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import { PlusSquare } from "react-bootstrap-icons";
import { BoxArrowLeft } from "react-bootstrap-icons";
import 'animate.css';
import SearchResult from '../SearchResult';
import SearchBox from '../SearchBox';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import PostForm from '../post/postform/PostForm'

const NavBar = ({users, searchclick, handleSubmit}) => {
	const [searchfield, setSearchfield] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	const [lgShow, setLgShow] = useState(false);
  	const handleClose = () => setLgShow(false);
  	const handleShow = () => setLgShow(true);


	const filterUsers = users.filter(user => {
    	return(user.username.toLowerCase().includes(searchfield.toLowerCase()))
    })

	const onButtonClick = () => {
    	document.getElementById('myInput').value = '';
  	};
  	const onSearchChange = (event) => {
    	setSearchfield(event.target.value)
  	}

  	const onIsOpenSet = (e) => {
  		setIsOpen(!isOpen.value)
  	}

  	const searchRef1 = useRef('');
  	const searchRef2 = useRef('');

  	useEffect(() => {
  		let handler = (e) => {
  			if(!searchRef1.current.contains(e.target) && !searchRef2.current.contains(e.target)) { 
  				setIsOpen(false);
  			}
  		};
  		window.addEventListener('mousedown', handler)
  		//return () => document.body.removeEventListener('mousedown', closeDropdown)
  	}, [])


	return (
		<div>
			<Modal dialogClassName="main-modal" size="lg" show={lgShow} onHide={handleClose}>
				<Modal.Header closeButton className='modal-header'>
				</Modal.Header>
				<Modal.Body className="show-grid bg-transparent center" >
					<PostForm className="center" onHide={handleClose} handleSubmit={handleSubmit} />
				</Modal.Body>
			</Modal>

			<div className='NavBar-container'>
				<nav className='navbar tc'>
					<ul className="navbar-nav">
						<li className='nav-link'>
							<a>
								<Link to={'/dashboard/'} className="flex items-center white link-item">
									<i className="fa-brands fa-instagram fa-xl"></i>
								</Link>
							</a>
						</li>
						<li className='nav-link'>
							<a>
								<Link to={'/dashboard/'} className="flex items-center white link-item">
									<HouseDoorFill className="white" size={24} />
									<span className="link-text ml3 fw6">首頁</span>
								</Link>
							</a>
						</li>
						<li ref={searchRef1} className='white nav-link'>
							<a className="flex items-center white link-item" onClick={onIsOpenSet} id='search'>
								<Search size={24} id='search'/>
								<span className="link-text ml3 fw6" id='search'>搜尋</span>
							</a>
						</li>

						<li className='nav-link'>
							<a className="flex items-center white link-item" onClick={handleShow}>
								<PlusSquare size={24} />
								<span className="link-text ml3">建立</span>
							</a>
						</li>
						<Link to={'/mainpage/Emma'} className='nav-link'>
							<li>
								<a className="flex items-center white link-item">
				       				<img src="https://media.istockphoto.com/id/482680318/photo/excited-selfies-with-her-feline-friend.jpg?s=612x612&w=0&k=20&c=Nej-upSvphHwH9yEHJOFJTwn5xkYLdizUI1gTItqt0U=" className="ba b--black-10 db br-100"/>
									<div className="link-text ml3 fw6" href="/contact">個人檔案</div>
								</a>
							</li>
						</Link>
						<li className='nav-link'>
							<Link to='/logout'>
								<a className="flex items-center white link-item">
									<div>
										<BoxArrowLeft size={24} />
									</div>
									<div className="link-text ml3 fw6" href="/contact">登出</div>
								</a>
							</Link>
						</li>
					</ul>
				</nav>

				<div class={isOpen? 'open' : 'close'} ref={searchRef2}>
						<article id="searchbar" className="fixed br3 bg-black">
							<div>
								<h2 id="search-header" className="white mv2">搜尋</h2>
								<div className='mh3 mb3'>
									<div className="flex pv1 ph3 bg-dark-gray silver br3">
										<Search size={16} className="self-center mr2 moon-gray" />
										<SearchBox searchChange={onSearchChange} />
									</div>
								</div>
							</div>

							<div id="search-content" className="bt b--mid-gray" >
								<div className="mh4-ns mv2-ns flex justify-between">
									<h4 className="white ma0 dib">最近</h4>
									<button className="bw0 pa0 dib bg-inherit blue b" onClick={onButtonClick}>全部清除</button>
								</div>
							</div>
							
						
							<div className="mh4-ns mv2-ns flex justify-between search-result">
								<SearchResult filterUsers={filterUsers}/>
							</div>

						</article>
				</div>
			</div>
		</div>
	);
}

export default NavBar;