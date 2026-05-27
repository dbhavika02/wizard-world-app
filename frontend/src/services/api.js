import axios from "axios";

const API = axios.create({
    baseURL: "https://wizardapi.trippl-hq.in/api",
});

export default API;