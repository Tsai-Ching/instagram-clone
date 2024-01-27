/* eslint-disable react/prop-types */
import React, {useEffect,useState} from 'react';
import './MainPage.css';
import { useParams } from 'react-router-dom';
import GalleryItem from '../../component/GalleryItem';
import NavBar from '../../component/navbar/NavBar';

function MainPage({ users, setUsers }) {
    const { username } = useParams();
    const showUser = users.filter((user) => user.username === username);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        // 更新視窗寬度
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        // 添加事件監聽器
        window.addEventListener('resize', handleResize);
    
        // 組件卸載時移除事件監聽器
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div>
        {windowWidth > 600 ? (
            // 寬度大於 600px 的結構
            <div className="flex flex-row">
                <NavBar users={users} setUsers={setUsers} />
                <div className="mainpage-container">
                    <div className="mainpage-body flex flex-column">
                        <header className="db mainpage-header">
                            <div className="profile">
                                <div className="profile-image">
                                    {showUser && (
                                        <img
                                            src={showUser[0].userImage}
                                            className="db"
                                            alt=""
                                        />
                                    )}
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
        ) : (
            <div className="flex flex-row">
                <NavBar users={users} setUsers={setUsers} />
                <div className="mainpage-container">
                    <div className="mainpage-body flex flex-column">
                        <header className="db mainpage-header">
                            <div className="profile flex flex-column">
                                <div className="flex flex-row">
                                    <div className="profile-image">
                                        {showUser && (
                                            <img
                                                src={showUser[0].userImage}
                                                className="db"
                                                alt=""
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-column ml4">     
                                        <div className="flex flex-row mb2">
                                            <h1 className="profile-user-name ma0 mb2 v-mid">
                                                {username}
                                            </h1>
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
                                        <button
                                            className="btn profile-edit-btn mr2"
                                            type="button"
                                        >
                                            Edit Profile
                                        </button>
                                    </div>

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
        )}
        </div>
    );
}

export default MainPage;
