import { useState } from 'react';
import { patchReviewByReviewId } from '../utils/api';

export default function Votes({ votes, review_id }) {
    const [votesChange, setVotesChange] = useState(0);

    function incVote(){
        setVotesChange((currVotes) => currVotes + 1);
        patchReviewByReviewId(review_id, 1);
    };

    return (
        <section>
            <h3>Likes: {votes + votesChange}</h3>
            <button onClick={incVote}>Like This Review</button>
        </section>
    )
}