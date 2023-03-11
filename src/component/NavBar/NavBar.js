import React from "react";
import logo from '../../logo.png'
import './NavBar.css'
import { Search } from "react-bootstrap-icons";
import { HouseDoorFill } from "react-bootstrap-icons";
import { Compass } from "react-bootstrap-icons";
import { ChatDots } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import { PlusSquare } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";

const NavBar = ({searchclick}) => {
	return (
		<nav className='navbar flex flex-column h-100 br b--dark-gray w5 ma0 fixed top-0 bg-black'>
			<ul className="flex flex-column items-center h-100 navbar-nav">
				<li className='white nav-link'>
					<i className="fa-brands fa-instagram fa-2x "></i>
				</li>
				<li>
					<a className="flex items-center white nav-link">
						<HouseDoorFill className="white" size={24} />
						<span className="link-text ml3 fw6">首頁</span>
					</a>
				</li>
				<li>
					<a className="flex items-center white nav-link">
						<Search size={24} onClick={searchclick} />
						<span className="link-text ml3 fw6">搜尋</span>
					</a>
				</li>
				<li>
					<a className="flex items-center white nav-link">
					<Compass size={24} />
					<span className="link-text ml3 fw6">探索</span>
					</a>
				</li>
				<li>
					<a className="flex items-center white nav-link">
						<ChatDots size={24} />
						<span className="link-text ml3 fw6">訊息</span>
					</a>
				</li>
				<li>
					<a className="flex items-center white nav-link">
						<Heart size={24} />
						<span className="link-text ml3 fw6">通知</span>
					</a>
				</li>
				<li>
					<a className="flex items-center white nav-link">
						<PlusSquare size={24} />
						<span className="link-text ml3">建立</span>
					</a>
				</li>
				<li>
					<a className="flex items-center white nav-link">
	       				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKboCkjXUKztIj7P8a5UjeFn0lAMQSp_TqhQ&usqp=CAU" className="person ba b--black-10 db br-100 "/>
						<div className="link-text ml3 fw6" href="/contact">個人檔案</div>
					</a>
				</li>
				<li>
					<a className="flex items-center white nav-link">
						<div>
							<List size={24} />
						</div>
						<div className="link-text ml3 fw6" href="/contact">更多</div>
					</a>
				</li>
			</ul>
		</nav>

	);
}

export default NavBar;