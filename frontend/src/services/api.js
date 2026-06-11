import axios from "axios";

const API = axios.create({
    baseURL: "https://wizard-backend.purplecliff-8da96cf8.centralus.azurecontainerapps.io/api",
});

export default API;