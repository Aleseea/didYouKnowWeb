import request from "utils/request";

export function getCategories() {
    return request()
        .get(`http://localhost:8000/categories/`)
        .send();
}