import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from './scroll/Scroll';
import Comments from './comments/Comments';

function PostDetail ({user, count}) {
    return (
        <div className="row postDetail-container">
            <div className="col post-img">
                <img
                    className="w-100 h-100"
                    alt="post"
                    src={user.photo}
                />
            </div>
            <div className="col post-content">
                <div className="flex flex-row pa4 items-baseline post-content-hedear">
                    <Link to={`/mainpage/${user.username}`}>
                        <div className="user-img">
                            <img
                                alt="user"
                                src={user.userImage}
                            />
                        </div>
                    </Link>
                    <h1 className="f6 f5-ns fw6 lh-title white mv0 ml3">
                        {user.username}{' '}
                    </h1>
                </div>
                <Scroll>
                    <div className="flex flex-row pa4 items-start bt bb b--dark-gray">
                        <Link
                            className="post-content-link"
                            to={`/mainpage/${user.username}`}
                        >
                            <div className="user-img">
                                <img
                                    alt="user"
                                    src={user.userImage}
                                />
                            </div>
                        </Link>
                        <p className="white mb0 ml3">
                            {user.body}
                        </p>
                    </div>
                    <Comments
                        className="white"
                        user={user}
                    />
                </Scroll>
                <h5 className="white likes mh0 mb2 pt3">
                    {' '}
                    {count.current}
                    個讚
                </h5>
            </div>
        </div>
    )
}
export default PostDetail;
