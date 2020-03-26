import request from "utils/request";

export function getCategories() {
    return request()
        .get(`http://localhost:8000/categories`)
        .send();
}

export function getCategory(id) {
    return request()
        .get(`http://localhost:8000/categories/${id}`)
        .send();
}
