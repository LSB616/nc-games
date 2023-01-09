import axios from "axios";

const boardGamesApi = axios.create({
    baseURL: "https://boardgame-reviews.onrender.com/api"
});

export const getReviews = () => {
    return boardGamesApi.get("/reviews").then((res) => {
        return res.data;
    });
};