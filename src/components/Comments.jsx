import { useContext, useState, useEffect } from 'react';
import { getComments } from '../utils/api';
import CommentAdder from './CommentAdder';
import { UserContext } from '../contexts/User';
import { deleteComment } from '../utils/api';
import Popup from 'react-popup';

const Comments = ({ review_id }) => {
    const [comments, setComments] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const [sameOwner, setSameOwner] = useState(false);
    const [commentdelete, setCommentDelete] = useState(false);
    let username = '';

useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
        setComments(commentsFromApi);
    });
}, []);

const removeComment = (comment) => {
    if (username === comment.author) {
        setSameOwner(true);}

    if (sameOwner) {
        return deleteComment(comment.comment_id)
        .then(() => {
        setCommentDelete(true);
        setSameOwner(false);
        }).catch(() => {
            console.log('something went wrong')
        })
    }
};


return (
    <section className='comments-section'>
    <h2>Comments</h2>
    <CommentAdder setComments={setComments} review_id={review_id}/>
    <ul className="comments_list">
    {comments.map((comment) => {
        return (
            <div className='comment' key={comment.comment_id}>
            <li>
            <p>{comment.author} {comment.created_at.slice(0, 10)}</p>
            <p>{comment.body}</p>
            <p>Likes: {comment.votes}</p>    
            </li>
            <button className="commentdelete-button" value="" onClick={removeComment(comment)}>Delete</button>
            </div>
        )
    })}
    </ul>
    </section>
)
};

export default Comments;