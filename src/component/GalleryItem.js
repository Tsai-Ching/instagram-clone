import React from 'react';
import PropTypes from 'prop-types';

function GalleryItem({ user }) {
    return (
        <div className="gallery-item">
            <div className="aspect-ratio--1x1 db relative">
                <img
                    src={user.photo}
                    className="gallery-image db "
                    alt=""
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        height: '100%',
                    }}
                />
                <div className="gallery-item-info">
                    <ul>
                        <li className="gallery-item-likes">
                            <span className="visually-hidden">Likes:</span>
                            <i className="fas fa-heart" aria-hidden="true" /> 56
                        </li>
                        <li className="gallery-item-comments">
                            <span className="visually-hidden">Comments:</span>
                            <i
                                className="fas fa-comment"
                                aria-hidden="true"
                            />{' '}
                            2
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

GalleryItem.propTypes = {
    user: PropTypes.object,
};

export default GalleryItem;
