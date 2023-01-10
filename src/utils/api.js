import axios from "axios";

const boardGamesApi = axios.create({
    baseURL: "https://boardgame-reviews.onrender.com/api"
});

export const getReviews = () => {
    return boardGamesApi.get("/reviews").then((res) => {
        return res.data;
    });
};

export const getReview = (review_id) => {
    return boardGamesApi.get(`/reviews/${review_id}`, {params: { review_id: review_id }}).then((res) => {
        return res.data;
    });
};

export const getComments = (review_id) => {
    return boardGamesApi.get(`/reviews/${review_id}/comments`, {params: { review_id: review_id }}).then((res) => {
        return res.data.comments;
    });
};

export const postComment = (review_id, { username, newComment }) => {
    const commentBody = {username: username, body: newComment}
    return boardGamesApi.post(`/reviews/${review_id}/comments`, commentBody)
    .then(({ data }) => {
        return data.comments
    }).catch((err) => {
        console.error(err)
    });
};