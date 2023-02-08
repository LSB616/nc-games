import { useContext, useState } from "react";
import { UserContext } from '../contexts/User';
import { postComment } from "../utils/api";
import LoginPageForComments from './LoginPageForComments';

const CommentAdder = ({ review_id, setComments }) => {
    const [newComment, setNewComment] = useState('');
    const { user } = useContext(UserContext);

    if (!user.loggedIn) {
        return <LoginPageForComments />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let commentBody = {username: user.username, body: newComment}
        return postComment(review_id, commentBody)
        .then((latestComment) => {
        setComments((currComments) => {            
        return [latestComment, ...currComments];
        });
        setNewComment('')
        });
    };

return (
    <form className="commentAdder" onSubmit={handleSubmit}>
        <textarea id="newComment" value={newComment} onChange={(e) => setNewComment(e.target.value)} className="comment-textarea" rows="5" cols="10"></textarea>
        <button className="commentAdder-button">Add</button>
    </form>
);
};

export default CommentAdder;