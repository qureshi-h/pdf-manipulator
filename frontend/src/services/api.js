export const baseUrl =
    process.env.REACT_APP_API_URL || "http://localhost:3001/";

export const api = {
    post: (endpoint, data) =>
        fetch(baseUrl + endpoint, {
            method: "POST",
            body: data,
        }),
    post_json: (endpoint, data) =>
        fetch(baseUrl + endpoint, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
            body: data,
        }),

    // create: (endpoint, data) => axios.post(baseUrl + endpoint, data),
    // remove: (endpoint) => axios.delete(baseUrl + endpoint),
};
