import { useContext, useState } from "react";
import { UserContext } from '../contexts/User';
import LoginPage from './LoginPage';

const CommentAdder = ({ clickedButton, setClickedButton, handleCommentEvent }) => {
    
    const { user } = useContext(UserContext);

    if (!user.loggedIn) {
        return <LoginPage />
    }

return (
    <form className="commentAdder" onSubmit={handleCommentEvent}>
        <label htmlFor="newComment">Add a comment</label>
        <textarea id="newComment" value={clickedButton} onClick={setClickedButton('addComment')} className="comment-textarea" rows="5" cols="10"></textarea>
        <button className="commentAdder-button">Add</button>
    </form>
);
};

export default CommentAdder;