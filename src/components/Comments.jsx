import { useContext, useState, useEffect } from 'react';
import { getComments } from '../utils/api';
import CommentAdder from './CommentAdder';
import { UserContext } from '../contexts/User';
import { deleteComment } from '../utils/api';
import LoginPageForComments from './LoginPageForComments';
import CommentVotes from './CommentVotes';
import Popup from 'react-popup';

const Comments = ({ review_id }) => {
    const [comments, setComments] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const [commentToDelete, setCommentToDelete] = useState('');

useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
        setComments(commentsFromApi);
    });
}, []);


const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === commentToDelete.author) {
    return deleteComment(commentToDelete.comment_id)
    .then((res) => {
    getComments(review_id).then((commentsFromApi) => {
    setComments(commentsFromApi);
    });
    }).catch((err) => {
    console.log(err)
    })
    }
};





if (user.loggedIn) {
    return (
        <section className='comments-section'>
        <h2>Comments</h2>
        <CommentAdder setComments={setComments} review_id={review_id}/>
        <form className='commentDelete' onSubmit={handleSubmit}>
        <ul className="comments_list">
        {comments.map((comment) => {
            if (user.username === comment.author){
            return (
                <div className='comment' key={comment.comment_id}>
                <li>
                <p>{comment.author} {comment.created_at.slice(0, 10)}</p>
                <h4>{comment.body}</h4>
                <p>Likes: {comment.votes}</p>    
                </li>
                <button className="commentdelete-button" type="submit" value={commentToDelete} onClick={() => {setCommentToDelete(comment)}}>Delete</button>
                </div>
            )
            } else {
                return (
                    <div className='comment' key={comment.comment_id}>
                    <li>
                    <p>{comment.author} {comment.created_at.slice(0, 10)}</p>
                    <h4 className='comment-body'>{comment.body}</h4>
                    <CommentVotes comment_id={comment.comment_id} votes={comment.votes}/>    
                    </li>
                    </div>
                )
            }
        })}
        </ul>
        </form>
        </section>
    )
}

return (
    <section className='comments-section'>
    <h2>Comments</h2>
    <LoginPageForComments />
    <ul className="comments_list">
    {comments.map((comment) => {
        return (
            <div className='comment' key={comment.comment_id}>
            <li>
            <p>{comment.author} {comment.created_at.slice(0, 10)}</p>
            <p>{comment.body}</p>
            <p>Likes: {comment.votes}</p>    
            </li>
            </div>
        )
    })}
    </ul>
    </section>
)
};

export default Comments;