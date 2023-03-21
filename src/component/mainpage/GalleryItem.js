import React from 'react';

const GalleryItem = ({key, post}) => {
	return(
		<div class="gallery-item" tabindex="0">
			<img src={post.photo} class="gallery-image db" alt="" />
			<div class="gallery-item-info">
				<ul>
					<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
					<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
				</ul>
			</div>
		</div>
	);
}

export default GalleryItem