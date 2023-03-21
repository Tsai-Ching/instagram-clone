import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import {createUser} from '../../util/localStorage'


const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const registerUser = (e) => {
		e.preventDefault();
		const response = createUser({username, password});
		if(response.status === 'ok'){
			alert('註冊成功')
			navigate("/login", { replace: true })
		} else {
			alert(response.error)
		};
	}
	return (
		<div className='container flex'>
			<main class="pa4 black-80 flex flex-column center">
				<form class="ba b--gray center register-form" onSubmit={registerUser}>
				    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
					    <div className="brand-logo tc">
					    	<i className="fa-brands fa-instagram fa-7x"></i>
					    	<h3 className='gray b mt2'>註冊即可查看朋友的相片和影片。</h3>
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
						    <div class="mv3 tc">
						        <input class="b pa2 input-reset ba bg-transparent hover-bg-black w-80 center" 
						        	type="text" 
						        	name="text"  
						        	id="text" 
						        	placeholder='密碼' 
						        	onChange= {e=>setPassword(e.target.value)}
						        />
						    </div>
						    <div className='gray w-80 center tc'>使用我們服務的用戶可能上傳了你的聯絡資料到 Instagram。</div>
						    <div className='gray w-80 center tc'>註冊即表示你同意我們的服務條款、《隱私政策》和《Cookie 政策》。</div>
						    <div className="mv3 tc">
						      	<input class="send mt3 f4 tc w-80 pv3 bg-animate bg-blue hover-bg-dark-blue white br2" 
								    type="submit" 
								    value="註冊" 
						      	/>
						    </div>
					    </div>
				    </fieldset>
				</form>

			    <div class="ba b--gray center mt4 w-100">
				    <div class="nav-to-register f6 link dim black center">已有帳號嗎？<span><Link to='/login'>登入</Link></span></div>
				</div>
			</main>
		</div>
	)
}

export default Register;