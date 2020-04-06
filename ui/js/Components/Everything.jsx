import React from "react";
import styles from "./Everything.scss";
import {map, set, cloneDeep} from "lodash";
import {autobind} from "core-decorators";
import MainHeader from "Components/Header/MainHeader";
import SlideShow from "Components/SlideShow/SlideShow";
import MainContent from "Components/Main/MainContent";
import random from "utils/random";
import setClass from "utils/setClass";
import classnames from "classnames";

export default class Everything extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            randomNumber: 0,
            style: null,
        }
    }

    componentDidMount() {
        let num = random(1, 5);
        let styleSet = setClass(num);

        this.setState({
            number: num,
            style: styleSet,
        });
    }

    render() {
        // if(this.state.style) {
            return (
                <div className={classnames("everything", this.state.style)}>
                    <MainHeader
                        style={this.state.style}
                    />
                    <SlideShow/>
                    <MainContent
                        style={this.state.style}
                    />
                </div>
            )
        // }
    }
}