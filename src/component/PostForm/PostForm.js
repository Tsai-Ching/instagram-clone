
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './PostForm.css';
import { createData as createDataApi } from '../../util/api';

function PostForm({ setUsers, onHide, users }) {
    const inputRef = useRef(null);
    const outputRef = useRef(null);
    let imagesArray = [];
    // 手動上傳
    const onChange = (event) => {
        const { files } = event.target;
        setPhotoURL(URL.createObjectURL(event.target.files[0]));
        for (let i = 0; i < files.length; i += 1) {
            imagesArray.push(files[i]);
        }
        displayImages();
    };

    //拖曳上傳
    const onDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { files } = e.dataTransfer;
        setPhotoURL(URL.createObjectURL(e.dataTransfer.files[0]))

        for (let i = 0; i < files.length; i += 1) {
            if (files[i].type.match('image')) {
                if (
                    imagesArray.every((image) => image.name !== files[i].name)
                ) {
                    imagesArray.push(files[i]);
                }
            }
        }
        displayImages();
    };

    const dragoverHandler = (ev) => {
        ev.preventDefault();
    };

    function displayImages() {
        let images = '';
        imagesArray.forEach((image) => {
            images += `
	                <img 
                    src="${URL.createObjectURL(image)}" 
                    alt="image" 
                    className='image'
                    >
                `;
        });
        outputRef.current.innerHTML = images;
        imagesArray = [];
    }

    const addPost = (content, URL) => {
        createDataApi(content, URL).then((user) => {
            setUsers([user, ...users]);
        });
    };

    const [postContent, setPostContent] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputRef.current.value === '') {
            alert('請選擇檔案');
            return false;
        }
        addPost(postContent, photoURL);
        setPostContent('');
        onHide();
    };
    return (
        <section className="center post-form">
            <form onSubmit={onSubmit} className=" h-100 relative center form">
                <div className="row ma0 bb b--gray">
                    <header className="col white ma0 mw-100 relative flex flex-row">
                        <span className="tl pa2 flex b">
                            <label htmlFor="upload-photo">...</label>
                            <input
                                type="file"
                                className="file db center"
                                multiple="multiple"
                                accept="image/jpeg, image/png, image/jpg"
                                ref={inputRef}
                                style={{ display: 'none' }}
                                id="upload-photo"
                                onChange={onChange}
                            />
                        </span>
                        <span className="pa2 flex center b">建立新貼文</span>
                        <button className="tr pa2 flex b" type="submit">
                            分享
                        </button>
                    </header>
                </div>
                <div className="row w-100 ma0 down-area">
                    <div
                        className="col-md-6 h-100 br b--gray flex tc input-div"
                        onDrop={onDrop}
                        draggable="true"
                        onDragOver={dragoverHandler}
                        ref={inputRef}
                    >
                        <div className="add-image">
                            <i className="fa-regular fa-image fa-5x" />
                            <h1>將相片拖曳到這裡</h1>
                        </div>
                        <output ref={outputRef} />
                    </div>
                    <div className="col-md-6 h-100 br b--gray flex tc pa0 input-text">
                        <textarea 
                            className="pa0 b--black-20 h-100 w-100 tl white"
                            value={postContent}
                            onChange={(e) => {
                                setPostContent(e.target.value);
                            }}
                            placeholder="撰寫說明文字......"
                        />
                    </div>
                   

                  
                </div>
            </form>
        </section>
    );
}

PostForm.propTypes = {
    setUsers: PropTypes.func,
    onHide: PropTypes.func,
    users: PropTypes.array,
};

export default PostForm;
