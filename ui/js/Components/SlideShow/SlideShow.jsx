import React from "react";
import styles from "./SlideShow.scss";
import {map} from "lodash";
import * as FactApi from "api/FactApi";
import Carousel from 'react-bootstrap/Carousel';

export default class SlideShow extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            allFacts: [],
        }
    }

    componentDidMount() {
        FactApi.getFacts().end((err, res) => {
            if (err) {
                this.setState({
                    error: err.message,
                });
                return;
            }
            this.setState({
                allFacts: res.body,
            });
        });
    }


    renderFactSlides() {
        if (this.state.allFacts != null) {
            return map(this.state.allFacts, (fact, index) => (
                <Carousel.Item key={index}>
                    <Carousel.Caption>
                        <p>{fact.fact_text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ));
        } else {
            return (
                <li>You have an empty Fact list. Please add some Facts first.</li>
            );
        }
    }

    render() {
        if(this.state.allFacts) {
            return(
                <div className={styles.slideShow}>
                    <Carousel
                        indicators={false}
                        nextLabel={false}
                        prevLabel={false}
                        nextIcon={">"}
                        prevIcon={"<"}
                    >
                        {this.renderFactSlides()}
                    </Carousel>
                </div>
            )
        } else {
            return null;
        }
    }
}