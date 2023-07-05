import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import {createUser, loginUser} from '../../util/localStorage'
import './Login.css'
import pic from '../../insta-pic.jpg'

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const attemptLoginUser = (e) => {
		e.preventDefault();
		const response = loginUser({username, password});
		if(response.status === 'ok'){
			alert('登入成功')
			navigate("/dashboard", { replace: true })
		} else {
			alert(response.error)
		};
	}
	return (
		<div className='login-container'>
			<main className='flex flex-row justify-center items-center'>
				<div className="signin-image">
					<img src={pic} className="pa4" style={{ width:'100%', height:'auto' }}/>
				</div>
				<div className="pa4 black-80 signin-form-container">
					<form class="ba b--gray center signin-form" onSubmit={attemptLoginUser}>
					    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
						    <div className="brand-logo tc">
						    	<i className="fa-brands fa-instagram fa-6x"></i>
						    </div>
					    	<div className="input-area">
					      		<div class="mt3 tc">
						        	<input class="pa2 input-reset ba bg-transparent hover-bg-black w-80" 
							        	value={username}
							        	type='text' 
							        	name="username" 
							        	placeholder='用戶名稱' 
							        	id="username" 
							        	onChange= {e=>setUsername(e.target.value)}
						        	/>
						      	</div>
							    <div class="mt3 tc">
							        <input class="b pa2 input-reset ba bg-transparent hover-bg-black w-80" 
							        	type="text" 
							        	name="text"  
							        	id="text" 
							        	placeholder='密碼' 
							        	onChange= {e=>setPassword(e.target.value)}
							        />
							    </div>
							    <div className="mv3 tc">
							      	<input class="send f4 tc w-80 pv3 bg-animate bg-blue hover-bg-dark-blue white br2" 
									    type="submit" 
									    value="登入" 
							      	/>
							    </div>
					     	</div>
					    </fieldset>
					</form>

				    <div className="ba b--gray mt4 nav-to-register">
					    <div className="f6 link dim black db">沒有帳號嗎？<span><Link to='/register' className='b'>註冊</Link></span></div>
					</div>
				</div>
			</main>

			{/* Footer */}
				<footer className='footer flex flex-column tc'>
					<div className='flex-container justify-center'>
						<a className='flex-item'>Meta</a> 
						<a className='flex-item'>關於</a> 
						<a className='flex-item'>部落格</a> 
						<a className='flex-item'>工作機會</a> 
						<a className='flex-item'>使用說明</a> 
						<a className='flex-item'>隱私</a> 
						<a className='flex-item'>使用條款</a>
					</div>
					<div className='ma4'>
						<p className='flex-item'>Copyright © 2023 All Rights Reserved by Emma Hsu.</p>
					</div>
				</footer>
		</div>
	)
}

export default Login;