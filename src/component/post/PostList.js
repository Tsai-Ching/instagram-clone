import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/Post';

function PostList({users}) {
    return (
        <div className="main-content">
            {users.map((user) => (
                <Post 
                    key={user.id} 
                    user={user}
                />
            ))}
        </div>
    );
}

PostList.propTypes = {
    users: PropTypes.array,
};

export default PostList;
