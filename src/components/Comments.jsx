import { useContext, useState, useEffect } from 'react';
import { getComments } from '../utils/api';
import CommentAdder from './CommentAdder';
import { UserContext } from '../contexts/User';
import { deleteComment } from '../utils/api';

const Comments = ({ review_id }) => {
    const [comments, setComments] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const [sameOwner, setSameOwner] = useState();

useEffect(() => {
    setSameOwner(false);
    getComments(review_id).then((commentsFromApi) => {
        setComments(commentsFromApi);
    });
}, []);

const removeComment = (comment) => {
    if (user.username === comment.author) {
        setSameOwner(true);
        return deleteComment(comment.comment_id)
    } else {
        console.log('did not work');
    };
};



return (
    <section className='comments-section'>
    <h2>Comments</h2>
    <CommentAdder setComments={setComments} review_id={review_id}/>
    <ul className="comments_list">
    {comments.map((comment) => {
        return (
            <div className='comment'>
            <li key={comment.comment_id}>
            <p>{comment.author} {comment.created_at.slice(0, 10)}</p>
            <p>{comment.body}</p>
            <p>Likes: {comment.votes}</p>    
            </li>
            <button className="commentdelete-button" onClick={removeComment(comment)}>Delete</button>
            </div>
        )
    })}
    </ul>
    </section>
)
};

export default Comments;