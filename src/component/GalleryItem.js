import React from 'react';

const GalleryItem = ({user}) => {
	return(
		<div class="gallery-item" tabindex="0">
			<div className='aspect-ratio--1x1 db relative'>
				<img 
					src={user.photo} 
					class="gallery-image db " 
					alt="" 
					style={{width: '100%', objectFit: 'cover', position: 'absolute', height: '100%'}}
				/>
				<div class="gallery-item-info">
					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default GalleryItem