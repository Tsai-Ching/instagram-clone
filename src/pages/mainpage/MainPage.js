/* eslint-disable react/prop-types */
import React from 'react';
import './MainPage.css';
import { useParams } from 'react-router-dom';
import GalleryItem from '../../component/GalleryItem';
import NavBar from '../../component/navbar/NavBar';

function MainPage({ users }) {
    const { username } = useParams();

    const showUser = users.filter((user) => user.username === username);

    return (
        <div className="flex flex-row">
            <NavBar users={users} />
            <div className="mainpage-container">
                <div className="mainpage-body flex flex-column">
                    <header className="db mainpage-header">
                        <div className="profile">
                            <div className="profile-image">
                                <img
                                    src={showUser[0].userImage}
                                    className="db"
                                    alt=""
                                />
                            </div>
                            <div className="profile-user-settings">
                                <h1 className="profile-user-name ma0 v-mid">
                                    {username}
                                </h1>
                                <button
                                    className="btn profile-edit-btn"
                                    type="button"
                                >
                                    Edit Profile
                                </button>
                                <button
                                    className="btn profile-settings-btn"
                                    aria-label="profile settings"
                                    type="button"
                                >
                                    <i
                                        className="fas fa-cog"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            <div className="profile-stats">
                                <ul className="pa0 ma0">
                                    <li>
                                        <span className="profile-stat-count">
                                            164
                                        </span>{' '}
                                        posts
                                    </li>
                                    <li>
                                        <span className="profile-stat-count">
                                            188
                                        </span>{' '}
                                        followers
                                    </li>
                                    <li>
                                        <span className="profile-stat-count">
                                            206
                                        </span>{' '}
                                        following
                                    </li>
                                </ul>
                            </div>
                            <div className="profile-bio">
                                <p>
                                    <span className="profile-real-name">
                                        {username}
                                    </span>{' '}
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit 📷✈️🏕️
                                </p>
                            </div>
                        </div>
                    </header>

                    <div className="gallery-container">
                        <div className="gallery grid-container">
                            {showUser.map((user) => (
                                <GalleryItem
                                    key={user.id}
                                    user={user}
                                    className="db"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
