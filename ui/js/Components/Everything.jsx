import React from "react";
import styles from "./Everything.scss";
import {map, set, cloneDeep} from "lodash";
import {autobind} from "core-decorators";
import Nav from "Components/Main/Navigation/Nav";
import RequestForm from "Components/Main/EmailRequestForm/RequestForm";
import DisplayFacts from "Components/Main/Category/DisplayFacts";
import MainHeader from "./Header/MainHeader";
import SlideShow from "./SlideShow/SlideShow";
import MainContent from "./Main/MainContent";

export default class Everything extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            randomNumber: 0,
        }
    }

    render() {
        return(
            <div className={styles.everything}>
                <MainHeader/>
                <SlideShow/>
                <MainContent/>
            </div>
        )
    }
}