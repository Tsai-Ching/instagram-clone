import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CommentForm from '../CommentForm/CommentForm';
import './Comment.css';

const Comment = ({
    comment,
    replies,
    currentUserId,
    deleteComment,
    activeComment,
    setActiveComment,
    addComment,
    parentId,
    replyId = null,
}) => {
    const canReply = Boolean(currentUserId);
    const canDelete = currentUserId === comment.userId;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    const isReplying =
        activeComment &&
        activeComment.id === comment.id &&
        activeComment.type === 'replying';
    const commentId = replyId ? replyId : comment.id;

    const replyRef = useRef();
    const replyDayRef = useRef();

    function ToggleShow() {
        const toggleReply = replyRef.current;
        if (toggleReply.style.display === 'none') {
            toggleReply.style.display = 'block';
        } else {
            toggleReply.style.display = 'none';
        }
    }

    useEffect(() => {
        const dayStart = new Date(createdAt);
        const dayNow = new Date();
        const totalDays = (dayNow - dayStart) / (1000 * 60 * 60 * 24);
        const totalWeeks = (dayNow - dayStart) / (1000 * 60 * 60 * 24 * 7);
        if (totalWeeks < 1) {
            replyDayRef.current.innerHTML = `${Math.round(totalDays)}天`;
        } else {
            replyDayRef.current.innerHTML = `${Math.round(totalWeeks)}週`;
        }
    }, [createdAt]);

    return (
        <div className="comment ph4">
            <Link to={`/mainpage/${comment.username}`}>
                <div className="comment-image-container">
                    <img src={comment.userImage} alt="user" />
                </div>
            </Link>
            <div className="comment-right-area">
                <div className="comment-content">
                    <Link to={`/mainpage/${comment.username}`}>
                        <div className="comment-author ml3">
                            {comment.username}
                        </div>
                    </Link>
                    <div className="comment-text">{comment.body}</div>
                </div>
                <div className="comment-actions">
                    <div className="ml3" ref={replyDayRef} />
                    {canReply && (
                        <div
                            className="comment-action ml2"
                            onClick={() =>
                                setActiveComment({
                                    id: comment.id,
                                    type: 'replying',
                                })
                            }
                            role="button"
                            onKeyDown={() =>
                                setActiveComment({
                                    id: comment.id,
                                    type: 'replying',
                                })
                            }
                            tabIndex={0}
                        >
                            回覆
                        </div>
                    )}

                    {canDelete && (
                        <div
                            className="comment-action"
                            onClick={() => deleteComment(comment.id)}
                            role="button"
                            onKeyDown={() => deleteComment(comment.id)}
                            tabIndex={0}
                        >
                            刪除
                        </div>
                    )}
                </div>
                {isReplying && (
                    <CommentForm
                        submitLabel="回覆"
                        handleSubmit={(text) =>
                            addComment(text, parentId, commentId)
                        }
                    />
                )}

                {replies.length > 0 && (
                    <div>
                        <div
                            className="show-reply ml3"
                            onClick={ToggleShow}
                            role="button"
                            onKeyDown={ToggleShow}
                            tabIndex={0}
                        >
                            - 查看回覆
                        </div>
                        <div className="replies dn" ref={replyRef}>
                            {replies.map((reply) => (
                                <Comment
                                    comment={reply}
                                    replies={[]}
                                    key={reply.id}
                                    currentUserId="1"
                                    deleteComment={deleteComment}
                                    addComment={addComment}
                                    parentId={parentId}
                                    replyId={comment.id}
                                    activeComment={activeComment}
                                    setActiveComment={setActiveComment}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object,
    replies: PropTypes.array,
    currentUserId: PropTypes.string,
    deleteComment: PropTypes.func,
    activeComment: PropTypes.func,
    setActiveComment: PropTypes.func,
    addComment: PropTypes.func,
    parentId: PropTypes.string,
    replyId: PropTypes.string,
};

export default Comment;
