import { useContext, useState, useEffect } from 'react';
import { getComments } from '../utils/api';
import CommentAdder from './CommentAdder';
import { UserContext } from '../contexts/User';
import { deleteComment } from '../utils/api';
import { postComment } from "../utils/api";
import LoginPage from './LoginPage';
import Popup from 'react-popup';

const Comments = ({ review_id }) => {
    const [comments, setComments] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const [sameOwner, setSameOwner] = useState(false);
    const [commentdelete, setCommentDelete] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [clickedButton, setClickedButton] = useState('');
    const [commentToDelete, setCommentToDelete] = useState('');

useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
        setComments(commentsFromApi);
    });
}, []);

const handleCommentEvent = () => {

    if (clickedButton === 'addComment') {
        const addComment = () => {
            const commentBody = {username: user.username, body: newComment}
            return postComment(review_id, commentBody)
            .then((latestComment) => {
            setComments((currComments) => {            
            return [latestComment, ...currComments]
            });
            });
        };
    } else if (clickedButton === 'deleteComment') {
        const removeComment = () => {
            if (user.username === commentToDelete.author) {
                setSameOwner(true);}
        
            if (sameOwner) {
                return deleteComment(commentToDelete.comment_id)
                .then(() => {
                setCommentDelete(true);
                setSameOwner(false);
                }).catch(() => {
                    console.log('something went wrong')
                })
            }
        };    
    }
};


const handleCommentDelete = (comment) => {
    setClickedButton('deleteComment')
    setCommentToDelete(comment)
};

const handleCommentAdd = (e) => {
    setClickedButton('addComment')
    setNewComment(e)
};


if (user.loggedIn) {
    return (
        <section className='comments-section'>
        <h2>Comments</h2>
        <form className="commentAdder" onSubmit={handleCommentEvent}>
            <label htmlFor="newComment">Add a comment</label>
            <textarea id="newComment" className="comment-textarea" rows="5" cols="10"></textarea>
            <button className="commentAdder-button" onClick={(e) => handleCommentAdd(e.target.value)}>Add</button>
        </form>
        <ul className="comments_list">
        {comments.map((comment) => {
            return (
                <div className='comment' key={comment.comment_id}>
                <li>
                <p>{comment.author} {comment.created_at.slice(0, 10)}</p>
                <p>{comment.body}</p>
                <p>Likes: {comment.votes}</p>    
                </li>
                <button className="commentdelete-button" onClick={handleCommentDelete}>Delete</button>
                </div>
            )
        })}
        </ul>
        </section>
    )
}

return (
    <section className='comments-section'>
    <h2>Comments</h2>
    <LoginPage />
    <ul className="comments_list">
    {comments.map((comment) => {
        return (
            <div className='comment' key={comment.comment_id}>
            <li>
            <p>{comment.author} {comment.created_at.slice(0, 10)}</p>
            <p>{comment.body}</p>
            <p>Likes: {comment.votes}</p>    
            </li>
            <button className="commentdelete-button">Delete</button>
            </div>
        )
    })}
    </ul>
    </section>
)
};

export default Comments;