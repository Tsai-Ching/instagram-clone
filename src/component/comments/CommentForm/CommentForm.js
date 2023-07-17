import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CommentForm.css';

function CommentForm({
    submitLabel,
    handleSubmit,
    initialText = '',
    handleCancel,
}) {
    const [text, setText] = useState(initialText);
    const isTextareaDisable = text.length === 0;
    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(text);
        setText('');
    };
    return (
        <form
            onSubmit={onSubmit}
            className="flex flex-row bb b--dark-gray pb3 justify-center ph4 mt3"
        >
            <input
                className="comment-form-textarea h-auto v-mid"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                placeholder="留言......"
            />

            <button
                className="comment-form-button"
                disable={isTextareaDisable.toString()}
                style={{ minWidth: '3rem' }}
                type="submit"
            >
                {submitLabel}
            </button>
   
                <button
                    onClick={handleCancel}
                    type="button"
                    className="comment-form-button comment-form-cancel-button"
                    style={{ minWidth: '3rem' }}
                >
                    取消
                </button>

        </form>
    );
}

CommentForm.propTypes = {
    submitLabel: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    hasCancelButton: PropTypes.bool,
    initialText: PropTypes.string,
};

export default CommentForm;
