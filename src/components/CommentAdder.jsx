import { useContext, useState } from "react";
import { UserContext } from '../contexts/User';
import { postComment } from "../utils/api";
import LoginPage from './LoginPage';

const CommentAdder = ({ review_id, setComments }) => {
    const [newComment, setNewComment] = useState('');
    const { user } = useContext(UserContext);

    if (!user) {
        return <LoginPage />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const commentBody = { user: user.username, newComment }
        return postComment(review_id, commentBody)
        .then((latestComment) => {
        setComments((currComments) => {            
        return [latestComment, ...currComments];
        });
        });
    };

return (
    <form className="commentAdder" onSubmit={handleSubmit}>
        <label htmlFor="newComment">Add a comment</label>
        <textarea id="newComment" value={newComment} onChange={(e) => setNewComment(e.target.value)} className="comment-textarea" rows="5" cols="10"></textarea>
        <button className="commentAdder-button">Add</button>
        <button className="commentdelete-button">Delete</button>
    </form>
);
};

export default CommentAdder;