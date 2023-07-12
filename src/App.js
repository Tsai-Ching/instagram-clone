import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard';
import Logout from './pages/Logout';
import MainPage from './pages/mainpage/MainPage';
import PostList from './component/post/PostList';
import { getPosts as getDataApi } from './util/api'; 

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getDataApi().then((data) => {
            setUsers(data);
        });
    }, []);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={<Dashboard users={users} setUsers={setUsers} />}
                />
                <Route path="/logout" element={<Logout />} />
                <Route path="/postlist" element={<PostList />} />
                <Route
                    path="/mainpage/:username"
                    element={<MainPage users={users} />}
                />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </div>
    );
}

export default App;
