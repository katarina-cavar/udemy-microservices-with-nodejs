import React from 'react';

export default ({ comments }) => {
    const renderedComments = Object.values(comments).map( comment => {
        let content;
        if (comment.status === 'approved') {
            content = comment.content;
        }

        if (comment.status === 'pending') {
            content = 'This comment is awaiting moderation';
        }

        if (comment.status === 'rejected') {
            content = 'This comment has been rejected';
        }

        return <li key={comment.id}>{content}</li>;
    });

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        <ul>
            {renderedComments}
        </ul>
    </div>;
};
