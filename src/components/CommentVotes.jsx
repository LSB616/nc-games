import { useState } from 'react';
import { patchCommentByCommentId } from '../utils/api';

export default function Votes({ votes, comment_id }) {
    const [votesChange, setVotesChange] = useState(0);

    function incVote(){
        setVotesChange((currVotes) => currVotes + 1);
        patchCommentByCommentId(comment_id, 1)
        .catch((err) => {
            setVotesChange((currVotes) => currVotes - 1);
            console.error(err);
        });
    };

    return (
        <div className='comment-bottom'>
            <h5>Likes: {votes + votesChange}</h5><button id="like" className="like-button" onClick={incVote}>Like</button>
        </div>
    )
}