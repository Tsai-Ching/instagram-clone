import React, {useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useLoggedInUser } from "../util/localStorage";

const Home = () => {
	const [isLoggedIn] = useLoggedInUser();
	const navigate = useNavigate();
	useEffect(() => {
		if(isLoggedIn === 'yes') {
			navigate('/dashboard')
		}
	}, [isLoggedIn])

	if(isLoggedIn === 'unknown') {
		return <div>'Loading...'</div>
	};

	return <ul>
			<li><Link to='/register'>Register</Link></li>
			<li><Link to='/login'>Login</Link></li>
	</ul>
}

export default Home;