import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CommentForm.css';

function CommentForm({
    submitLabel,
    handleSubmit,
    hasCancelButton = false,
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
                disable={isTextareaDisable}
                style={{ minWidth: '3rem' }}
                type="submit"
            >
                {submitLabel}
            </button>
            {hasCancelButton && (
                <button
                    onClick={handleCancel}
                    type="button"
                    className="comment-form-button comment-form-cancel-button"
                >
                    取消
                </button>
            )}
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
