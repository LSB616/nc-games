import { useState } from "react";
import { postComment } from "../utils/api";

const CommentAdder = ({ review_id, username, setComments }) => {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const commentBody = { username, newComment }
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