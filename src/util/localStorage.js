import {useState, useEffect} from 'react';

//提供key做validation和提取user資料
const USER_DB_KEY = 'my-user-key'
const AUTH_USER_KEY = 'my-authenticated-key'

export const logoutUser = () => {
	localStorage.removeItem(AUTH_USER_KEY)
}
export const useLoggedInUser = () => {
	const [loggedInUsername, setloggedInUsername] = useState('');
	const [isLoggedIn, setisLoggedIn] = useState('unknown');

	useEffect (() => {
		const username = localStorage.getItem(AUTH_USER_KEY)
		if (username) {
			setloggedInUsername(username)
			setisLoggedIn('yes')
		} else {
			setisLoggedIn('no')
		}
	}, [])
	return [loggedInUsername, isLoggedIn]
}
export const loginUser = ({username, password}) => {
	let userData = localStorage.getItem(USER_DB_KEY)
	//1. 檢查是否有userkey 沒有註冊過就不會有資料
	if(!userData){
		return {
			status: 'error',
			error: '無效的登錄憑證'
		}
	}
	const userArray = JSON.parse(userData)

	const user = userArray.find(user => user.username === username && user.password === password)

	//1. 尋找是否有此user
	if(user) {
		//ok
		localStorage.setItem(AUTH_USER_KEY, username);
		return {
			status: 'ok'
		}
	} else {
		return{
			status: 'error',
			error: '很抱歉，你的密碼不正確，請再次檢查密碼。'
		}
	};
}

/**
* return {status: ture} if user is create
* return {status: faulse, error: 'message'} if there is an error
*/
export const createUser = ({username, password}) => {
	let userData = localStorage.getItem(USER_DB_KEY)
	//1. 檢查是否有userkey 沒有註冊過就不會有資料
	if(!userData){
		userData = '[]'
	}

	const userArray = JSON.parse(userData)

	//2. 檢查username有沒有重複
	const duplicate  = userArray.find(user => user.username === username)
	if(duplicate) {
		return{
			status: 'error',
			error: '使用者名稱已存在'
		};
	}
	//確認密碼強度
	if(password.length < 3) {
		return{
			status: 'error',
			error: '密碼強度不足'
		};
	}
	//創建帳號 將使用者資訊儲存進userArray
	userArray.push({
		username, 
		password
	});
	//儲存進localStorage
	localStorage.setItem(USER_DB_KEY, JSON.stringify(userArray));

	return {status: 'ok'};

}