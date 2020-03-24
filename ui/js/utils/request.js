import defaults from "superagent-defaults";
import * as Cookies from "js-cookie";

export default function request() {
    const superagent = defaults();

    return superagent
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .set("X-CSRFTOKEN", Cookies.get("csrftoken"));
}
