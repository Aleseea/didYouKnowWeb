import request from "utils/request";

export function getFacts() {
    return request()
        .get(`http://localhost:8000/facts/`)
        .send();
}