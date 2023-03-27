import React, {useEffect, useState} from "react";
import './MainPage.css'
import GalleryItem from './GalleryItem'
import {useParams} from 'react-router-dom';
import NavBar from '../NavBar/NavBar'

const MainPage = (props) => {
	let {username} = useParams();
	const showUser = props.users.filter((user) => 
		user.username === username);

	return (
		<div>
			<NavBar users={props.users}/>
			<div className='mainpage-body'>
				<header className='db mainpage-header'>
					<div class="mainpage-container">
						<div class="profile">
							<div class="profile-image">
								<img src={showUser[0].userImage} className='db' alt="" />
							</div>
							<div class="profile-user-settings">
								<h1 class="profile-user-name ma0 v-mid">{username}</h1>
								<button class="btn profile-edit-btn">Edit Profile</button>
								<button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>
							</div>
							<div class="profile-stats">
								<ul className='pa0 ma0'>
									<li><span class="profile-stat-count">164</span> posts</li>
									<li><span class="profile-stat-count">188</span> followers</li>
									<li><span class="profile-stat-count">206</span> following</li>
								</ul>
							</div>
							<div class="profile-bio">
								<p><span class="profile-real-name">{username}</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
							</div>
						</div>
					</div>
				</header>

				<main>
					<div class="container">
						<div class="gallery">
							
								{showUser.map((user) => 
									<GalleryItem 
										key={user.id} 
										user={user} 
										className='db'
									/>
								)}

						</div>
						<div class="loader"></div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default MainPage;