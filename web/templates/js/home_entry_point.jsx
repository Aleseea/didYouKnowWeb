import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "global.scss";
import HomePageRoot from "./HomePageRoot";


class HomePage {
    constructor({
        rootUrl,
    }) {
        this.rootUrl = rootUrl || "/";
    }

    render(el) {
        ReactDOM.render(
            <HomePageRoot rootUrl={this.rootUrl} />,
            document.getElementById(el || "app"),
        );
    }
}


window.HomePage = HomePage;


if (DEVELOPMENT) {
    __webpack_public_path__ = DEVELOPMENT_SERVER_STATIC_PATH;
}
