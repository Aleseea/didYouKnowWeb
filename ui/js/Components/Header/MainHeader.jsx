import React from "react";
import styles from "./MainHeader.scss";
import Logo from "Components/Header/Logo";

export default function MainHeader() {
    return (
        <div className={styles.header}>
            <Logo/>
            <h1>DidYouKnow.com</h1>
        </div>
    )
}