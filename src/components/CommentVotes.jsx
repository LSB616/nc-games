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
        <section>
            <h3>Likes: {votes + votesChange}</h3>
            <button onClick={incVote}>👍</button>
        </section>
    )
}