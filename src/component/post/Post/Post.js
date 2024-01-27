import React, { useState, useRef } from 'react';
import ReadMoreReact from 'read-more-react';
import Modal from 'react-bootstrap/Modal';
import './Post.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostDetail from '../../PostDetail';

function Post({ user }) {
    // 點讚 讚數統計
    const count = useRef(0);
    const refHeart = useRef(null);
    const [isClicked, setIsClicked] = useState(false);

    const likeButtonClick = () => {
        if (!isClicked) {
            count.current += 1;
            setIsClicked(true);
            refHeart.current.classList.add('clicked');
        } else {
            count.current -= 1;
            setIsClicked(false);
            refHeart.current.classList.remove('clicked');
        }
    };

    // 貼文框開關
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    return (
        <div
            className="post-container white mv4 mw7 center items-stretch-ns flex flex-column-ns relative"
            style={{ marginBottom: '0 -1px 12px -1px' }}
        >
            <div
                className="flex items-center"
                style={{ margin: '8px 4px 12px' }}
            >
                <Link to={`/mainpage/${user.username}`}>
                    <div className="user-img">
                        <img alt="user" src={user.userImage} />
                    </div>
                </Link>
                <h1 className="f6 f5-ns fw6 lh-title white mv0 ml2">
                    {user.username}{' '}
                </h1>
            </div>
            <div alt="user" className="post-img" style={{ width: '100%' }}>
                <img
                    alt="post"
                    className="ba b--dark-gray br3 h-100 w-100"
                    style={{ objectFit: 'cover' }}
                    src={user.photo}
                    onClick={handleShow}
                    role="presentation"
                />
            </div>
            <div>
                <section className="flex flex-row items-baseline mt2 pb2-ns">
                    <button
                        className="pa2"
                        onClick={likeButtonClick}
                        type="button"
                    >
                        <i className="fa-solid fa-heart fa-xl" ref={refHeart} />
                    </button>

                    <button className="pa2" type="button">
                        <i
                            className="fa-regular fa-comment fa-xl"
                            onClick={handleShow}
                            role="button"
                            alt="comment"
                            onKeyDown={handleShow}
                            tabIndex={0}
                        />
                    </button>

                    {/* 貼文框 */}
                    <Modal
                        dialogClassName="main-modal"
                        size="lg"
                        show={lgShow}
                        onHide={handleClose}
                    >
                        <Modal.Header closeButton className="modal-header" />
                        <Modal.Body className="show-grid bg-black" style={{width: '80%'}}>
                            <PostDetail user={user} count={count} />
                        </Modal.Body>
                    </Modal>
                </section>

                <section className="tl">
                    <p className="likes mh0 mb2">
                        {count.current}
                        個讚
                    </p>
                </section>

                <section className="content ma0-ns tl">
                    <p className="ma0-ns content dn">{user.body}</p>
                    <ReadMoreReact
                        text={user.body}
                        min={0}
                        ideal={40}
                        max={80}
                        readMoreText="...更多"
                    />
                </section>
            </div>
        </div>
    );
}

Post.propTypes = {
    user: PropTypes.object,
};

export default Post;