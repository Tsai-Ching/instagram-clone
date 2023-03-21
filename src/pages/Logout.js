import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {logoutUser} from '../util/localStorage'

const Logout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		logoutUser()
		navigate('/login', {replace: true})
	},[])

	return (
		<div>
			<h1>Logging out...</h1>
		</div>
	)
}

export default Logout;