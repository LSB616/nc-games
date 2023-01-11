import { useState, useEffect } from 'react';
import { getComments } from '../utils/api';
import CommentAdder from './CommentAdder';

const Comments = ({ review_id, username }) => {
    const [comments, setComments] = useState([]);

useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
        setComments(commentsFromApi);
    });
}, []);

return (
    <section>
    <h2>Comments</h2>
    <CommentAdder username={username} setComments={setComments} review_id={review_id}/>
    <ul className="comments_list">
    {comments.map((comment) => {
        return (
            <li key={comment.comment_id}>
            <p>{comment.author} {comment.created_at.slice(0, 10)}</p>
            <p>{comment.body}</p>
            <p>Likes: {comment.votes}</p>    
            </li>
        )
    })}
    </ul>
    </section>
)
};

export default Comments;