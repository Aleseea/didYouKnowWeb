import request from "utils/request";

export function addEmail(contact) {
    return request()
        .post("http://localhost:8000/emailList/")
        .send(contact);
}