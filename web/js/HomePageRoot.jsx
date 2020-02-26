import React from "react";
import styles from "./HomepageRoot.scss";
// import ChallengerLogo from "components/common/branding/ChallengerLogo";

export default function HomepageRoot() {

    return (

        <div className={styles.root}>
            {/*<div className={styles.logo}>*/}
            {/*    <ChallengerLogo/>*/}
            {/*</div>*/}
            <div className={styles.links}>
                <a
                    className="btn btn-default"
                    href="/app/learner/"
                >
                    Learner
                </a>
                <a
                    className="btn btn-default"
                    href="/app/missioncommander/"
                >
                    Mission Commander
                </a>
                <a
                    className="btn btn-default"
                    href="/app/author/"
                >
                    Mission Author
                </a>
                <a
                    href="/app/dataselect/"
                    className="btn btn-default"
                >
                    Data Select
                </a>
                <a
                    className="btn btn-default"
                    href="/app/missionstatus/"
                >
                    Mission Status
                </a>
            </div>
        </div>
    );

}