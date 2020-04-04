import React from "react";

export default function Logo() {
    return (
        <img
            src={window.STATIC_URL + "images/logo.png"} alt={"DidYouKnow.com logo"}
        />
    );
}