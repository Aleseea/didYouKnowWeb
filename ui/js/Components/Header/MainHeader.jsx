import React from "react";
import styles from "./MainHeader.scss";
import Logo from "Logo";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class MainHeader extends React.Component {
    static propTypes = {
        style: PropTypes.string,
    };

    render() {
        return (
            <div className={classnames("header", styles.header, this.props.style)}>
                <Logo/>
                <h1>DidYouKnow.com</h1>
            </div>
        );
    }
}