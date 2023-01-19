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
    const [commentToDelete, setCommentToDelete] = useState('');

useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
        setComments(commentsFromApi);
    });
}, []);

// const handleCommentEvent = () => {
//     if (clickedButton === 'addComment') {

//     } else if (clickedButton === 'deleteComment') {
//             if (user.username === commentToDelete.author) {
//                 setSameOwner(true);}
//             if (sameOwner) {
//                 return deleteComment(commentToDelete.comment_id)
//                 .then(() => {
//                 setCommentDelete(true);
//                 setSameOwner(false);
//                 }).catch(() => {
//                     console.log('something went wrong')
//                 })
//             } 
//     }
// };


// const handleCommentDelete = (comment) => {
//     setClickedButton('deleteComment')
//     setCommentToDelete(comment)
// };




if (user.loggedIn) {
    return (
        <section className='comments-section'>
        <h2>Comments</h2>
        <CommentAdder setComments={setComments} review_id={review_id}/>
        <form className='commentDelete'>
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
        </form>
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