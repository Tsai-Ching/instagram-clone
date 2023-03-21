import React, {useEffect, useState} from "react";
import './MainPage.css'
import GalleryItem from './GalleryItem'
import {useParams} from 'react-router-dom';

const MainPage = (users) => {
	let {username} = useParams();
	const userPhotos = users.filter((backendComment) => 
		backendComment.username === username);

	return (
		<div className='mainpage-body'>
			<header className='db mainpage-header'>
				<div class="mainpage-container">
					<div class="profile">

						<div class="profile-image">
							<img src='' className='db' alt="" />
						</div>

						<div class="profile-user-settings">
							<h1 class="profile-user-name">{username}</h1>
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


						{userPhotos.map((userPhoto) => 
							<GalleryItem 
								key={userPhoto.id} 
								post={userPhoto} 
								className='db'
							/>
						)}

					</div>


					<div class="loader"></div>

				</div>

			</main>
		</div>
	);
}

export default MainPage;