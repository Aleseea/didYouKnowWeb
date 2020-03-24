import React from "react";

export default function Logo() {
    return (
        <img
            src={window.STATIC_URL + "web/images/logo.png"}
            alt="DidYouKnow.com Logo"
        />
    );
}