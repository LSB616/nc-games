import axios from "axios";

const boardGamesApi = axios.create({
    baseURL: "https://boardgame-reviews.onrender.com/api"
});

export const getReviews = (sortBy, order, category) => {
    return boardGamesApi.get("/reviews", { params: { sort_by: sortBy, order: order, category: category } }).then((res) => {
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

export const patchReviewForUpdate = (review_id, reviewUpdate) => {
    return boardGamesApi.patch(`/reviews/${review_id}/edit-review`, reviewUpdate)
}

export const postReview = (user, title, gameDesigner, reviewBody, category, image) => {
    const newReview ={
        title: title,
        designer: gameDesigner,
        owner: user,
        review_img_url: image,
        review_body: reviewBody,
        category: category
    }

    return boardGamesApi.post('/reviews', newReview).then((res) => {
        return res.data
    });
};

export const deleteReview = (review_id) => {
    return boardGamesApi.delete(`/reviews/${review_id}`)
};


export const getComments = (review_id) => {
    return boardGamesApi.get(`/reviews/${review_id}/comments`, {params: { review_id: review_id }}).then((res) => {
        return res.data.comments;
 });
 };


export const postComment = (review_id, newComment) => {
    return boardGamesApi.post(`/reviews/${review_id}/comments`, newComment)
    .then((res) => {
        return res.data.amendedComment[0];
    }).catch((err) => {
        console.error(err)
    });
};

export const getUser = (username) => {
    return boardGamesApi.get(`/users/${username}`).then((res) => {
        return res.data
    });
};

export const deleteComment = (comment_id) => {
    return boardGamesApi.delete(`/comments/${comment_id}`)
}

export const patchCommentByCommentId = (comment_id, increment) => {
    return boardGamesApi.patch(`/comments/${comment_id}`, { inc_votes: increment })
};

export const postUser = (user) => {
    return boardGamesApi.post(`/create-account`, user)
}

export const userLogin = (credentials) => {
    return boardGamesApi.post('/login-user', credentials)
    .then((res) => {
        return res
    })
    .catch((err) => {
        console.error(err)
    });
};