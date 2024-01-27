import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUser } from '../../util/localStorage';
import pic from '../../insta-pic.jpg';
import './Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const registerUser = (e) => {
        e.preventDefault();
        const response = createUser({ username, password });
        if (response.status === 'ok') {
            alert('註冊成功');
            navigate('/login', { replace: true });
        } else {
            alert(response.error);
        }
    };
    return (
        <div className="register-container">
            <main className="container flex flex-row justify-center items-center">
                <div className="register-image">
                    <img
                        alt=""
                        src={pic}
                        className="pa4"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>

                <div className="pa4 black-80 flex flex-column register-form-container">
                    <form
                        className="w-100 center register-form"
                        onSubmit={registerUser}
                    >
                        <fieldset
                            id="sign_up"
                            className="ba b--transparent ph0 mh0"
                        >
                            <div className="brand-logo tc">
                                <i className="fa-brands fa-instagram fa-6x" />
                                <h5 className="gray b ma3 description">
                                    註冊即可查看朋友的相片和影片。
                                </h5>
                            </div>
                            <div className="input-area">
                                <div className="mt3 tc">
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black w-80"
                                        value={username}
                                        type="text"
                                        name="username"
                                        placeholder="用戶名稱"
                                        id="username"
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mv3 tc">
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black w-80 center"
                                        type="text"
                                        name="text"
                                        id="text"
                                        placeholder="密碼"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>

                                <p className="gray w-80 center tc ma3 description">
                                    註冊即表示你同意我們的服務條款、《隱私政策》和《Cookie
                                    政策》。
                                </p>
                                <div className="mv3 tc">
                                    <input
                                        className="send ma3 f4 tc w-80 pv3 bg-animate bg-blue hover-bg-dark-blue white br2"
                                        type="submit"
                                        value="註冊"
                                    />
                                </div>
                            </div>
                        </fieldset>
                    </form>

                    <div className="ba b--gray center mt4 w-100">
                        <div className="nav-to-register f6 link dim black center">
                            已有帳號嗎？
                            <span>
                                <Link to="/login">登入</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer flex flex-column tc pa2">
                <div className="flex-container justify-center pa2">
                    <a className="flex-item">Meta</a>
                    <a className="flex-item">關於</a>
                    <a className="flex-item">部落格</a>
                    <a className="flex-item">工作機會</a>
                    <a className="flex-item">使用說明</a>
                    <a className="flex-item">隱私</a>
                    <a className="flex-item">使用條款</a>
                </div>
                <div className="ma4">
                    <p className="flex-item">
                        Copyright © 2023 All Rights Reserved by Emma Hsu.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Register;
