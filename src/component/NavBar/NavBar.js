import React from "react";
import logo from './logo.png'
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
		<div className="w5 ma0 fixed h-100 top-0 bg-black">
			<div className='aspect-ratio h-100'>
				<div className='br b--dark-gray h-100'>

					<nav className='navbar h-100' >
						<div className="flex flex-column items-start h-100">
							<div className='instalogo'>
								<img src={logo} alt="Instagram Logo Text White@pngkey.com" width='103' />
							</div>
							<div className="flex flex-column items-start navbar1">
								<a className="flex justify-center white navitem">
									<div>
										<HouseDoorFill className="white" size={24} />
									</div>
									<div className="ml3 fw6 f4 link bg-animate dib white">首頁</div>
								</a>
								<a className="flex justify-center white navitem">
									<div>
										<Search size={24} onClick={searchclick} />
									</div>
									<div className="ml3 fw6 f4 link bg-animate dib">搜尋</div>
								</a>
								<a className="flex justify-center white navitem">
									<div>
										<Compass size={24} />
									</div>
									<div className="ml3 fw6 f4 link bg-animate dib">探索</div>
								</a>
								<a className="flex justify-center white navitem">
									<div>
										<ChatDots size={24} />
									</div>
									<div className="ml3 fw6 f4 link bg-animate dib">訊息</div>
								</a>
								<a className="flex justify-center white navitem">
									<div>
										<Heart size={24} />
									</div>
									<div className="ml3 fw6 f4 link bg-animate dib">通知</div>
								</a>
								<a className="flex justify-center white navitem">
									<div>
										<PlusSquare size={24} />
									</div>
									<div className="ml3 fw6 f4 link bg-animate dib">建立</div>
								</a>
								<a className="flex justify-center white navitem">
									<div>
				       					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKboCkjXUKztIj7P8a5UjeFn0lAMQSp_TqhQ&usqp=CAU" className="person ba b--black-10 db br-100 "/>
				    				</div>
									<div className="ml3 fw6 f4 link bg-animate dib" href="/contact">個人檔案</div>
								</a>
							</div>
							<div>
								<a className="flex justify-center white navitem">
									<div>
										<List size={24} />
									</div>
									<div className="ml3 fw6 f4 link bg-animate dib" href="/contact">更多</div>
								</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default NavBar;