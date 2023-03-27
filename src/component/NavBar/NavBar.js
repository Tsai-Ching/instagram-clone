import React, {useState, useEffect, useRef } from "react";
import logo from '../../logo.png'
import './NavBar.css'
import { Search } from "react-bootstrap-icons";
import { HouseDoorFill } from "react-bootstrap-icons";
import { Compass } from "react-bootstrap-icons";
import { ChatDots } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import { PlusSquare } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";
import 'animate.css';
import SearchResult from '../SearchResult';
import SearchBox from '../SearchBox';
import { Link } from "react-router-dom";

const NavBar = ({users, searchclick, handleShow}) => {
	const [searchfield, setSearchfield] = useState('')
	const [isOpen, setIsOpen] = useState(false)


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
  	// const closeDropdown = () => {
   // 		setIsOpen(false)
   // 	}

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
		<div className='nav-container'>
			<nav className='rightbar flex flex-column h-100 br b--dark-gray w5 ma0 fixed top-0 bg-black'>
				<ul className="flex flex-column items-center h-100 navbar-nav">
					<li className='white nav-link'>
						<a>
							<Link to={'/dashboard/'} className="flex items-center white link-item">
								<i className="fa-brands fa-instagram fa-2x "></i>
							</Link>
						</a>
					</li>
					<li>
						<a>
							<Link to={'/dashboard/'} className="flex items-center white link-item">
								<HouseDoorFill className="white" size={24} />
								<span className="link-text ml3 fw6">首頁</span>
							</Link>
						</a>
					</li>
					<li ref={searchRef1}>
						<a className="flex items-center white link-item" onClick={onIsOpenSet} id='search'>
							<Search size={24} id='search'/>
							<span className="link-text ml3 fw6" id='search'>搜尋</span>
						</a>
					</li>
					<li>
						<a className="flex items-center white link-item">
						<Compass size={24} />
						<span className="link-text ml3 fw6">探索</span>
						</a>
					</li>
					<li>
						<a className="flex items-center white link-item">
							<ChatDots size={24} />
							<span className="link-text ml3 fw6">訊息</span>
						</a>
					</li>
					<li>
						<a className="flex items-center white link-item">
							<Heart size={24} />
							<span className="link-text ml3 fw6">通知</span>
						</a>
					</li>
					<li>
						<a className="flex items-center white link-item" onClick={handleShow}>
							<PlusSquare size={24} />
							<span className="link-text ml3">建立</span>
						</a>
					</li>
					<li>
						<a className="flex items-center white link-item">
		       				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKboCkjXUKztIj7P8a5UjeFn0lAMQSp_TqhQ&usqp=CAU" className="person ba b--black-10 db br-100 "/>
							<div className="link-text ml3 fw6" href="/contact">個人檔案</div>
						</a>
					</li>
					<li>
						<a className="flex items-center white link-item">
							<div>
								<List size={24} />
							</div>
							<div className="link-text ml3 fw6" href="/contact">更多</div>
						</a>
					</li>
				</ul>
			</nav>

			<div id="slideleft" class={isOpen? 'open' : 'close'} ref={searchRef2}>
					<article id="searchbar" className="fixed br3 br--right h-100 bg-black ba b--black-10">
						<div>
							<h2 id="searchbar2" className="white mv2">搜尋</h2>
							<span className="tr white">x</span>
							<div className='mh3 mb3'>
								<div className="flex pv1 ph3 bg-dark-gray silver br3">
									<Search size={16} className="self-center mr2 moon-gray" />
									<SearchBox searchChange={onSearchChange} />
								</div>
							</div>
						</div>

						<div id="searchbar3" className="bt b--mid-gray" >
							<div className="mh4-ns mv2-ns flex justify-between">
								<h4 className="white ma0 dib">最近</h4>
								<button className="bw0 pa0 dib bg-inherit blue b" onClick={onButtonClick}>全部清除</button>
							</div>
						</div>
						
					

						<div className="mh4-ns mv2-ns flex justify-between">
							<SearchResult filterUsers={filterUsers}/>
						</div>

					</article>
			</div>
		</div>
	);
}

export default NavBar;