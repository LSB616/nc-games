import axios from "axios";

const boardGamesApi = axios.create({
    baseURL: "https://boardgame-reviews.onrender.com/api"
});

export const getReviews = (sortBy) => {
    return boardGamesApi.get("/reviews", { params: { sort_by: sortBy } }).then((res) => {
        return res.data;
    });
};

export const getReview = (review_id) => {
    return boardGamesApi.get(`/reviews/${review_id}`, {params: { review_id: review_id }}).then((res) => {
        return res.data;
    });
};

export const patchReviewByReviewId = (review_id, increment) => {
    return boardGamesApi.patch(`/reviews/${review_id}`, { inc_votes: increment })
};

export const getComments = (review_id) => {
    return boardGamesApi.get(`/reviews/${review_id}/comments`, {params: { review_id: review_id }}).then((res) => {
        return res.data.comments;
 });
 };


export const postComment = (review_id, { username, newComment }) => {
    const commentBody = {username: username, body: newComment}
    return boardGamesApi.post(`/reviews/${review_id}/comments`, commentBody)
    .then((res) => {
        return res.data.amendedComment[0]
    }).catch((err) => {
        console.error(err)
    });
};



