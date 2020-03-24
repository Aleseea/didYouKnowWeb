import React from "react";
import styles from "./MainHeader.scss";
import Logo from "Components/Header/Logo";

export default function MainHeader() {
    return (
        <div>
            <Logo/>
            <h1 className={styles.siteName}>DidYouKnow.com</h1>
        </div>
    )
}