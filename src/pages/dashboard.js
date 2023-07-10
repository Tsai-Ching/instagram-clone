import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLoginUser } from '../util/localStorage';
import PostList from '../component/post/PostList';
import NavBar from '../component/navbar/NavBar';

function Dashboard({ users, setUsers }) {
    const [isLogin] = useLoginUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin === 'no') {
            navigate('/login');
        }
    }, [isLogin, navigate]);

    if (isLogin === 'unknown') {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <PostList users={users} />
            <NavBar users={users} setUsers={setUsers} />
        </div>
    );
}

Dashboard.propTypes = {
    users: PropTypes.array,
    setUsers: PropTypes.func,
};

export default Dashboard;
