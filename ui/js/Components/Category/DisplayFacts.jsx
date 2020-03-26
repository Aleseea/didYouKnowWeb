import React from "react";
import styles from "./DisplayFacts.scss";
import {map, set, cloneDeep} from "lodash";
import {autobind} from "core-decorators";
import PropTypes from "prop-types";
import * as CategoryApi from "api/CategoryApi";

export default class DisplayFacts extends React.Component {

    static propTypes = {
        selectedCategory: PropTypes.number,
    };

    constructor() {
        super();
        this.state = {
            errors: [],
            Category: [],
        }
    }

    componentDidMount() {
        console.log("Component Did Update");
        CategoryApi.getCategory(this.props.selectedCategory).end((err, res) => {
            if (err) {
                this.setState({
                    error: err.message,
                });
                return;
            }
            console.log(res.body, "res.body");
            this.setState({
                Category: res.body,
            });
        });
    }

    @autobind
    onSelectCategory(id) {
        console.log(id, "id");
    }


    renderCategoryList() {
        console.log(this.state.Category, "state");
        if (this.state.Category.facts != null) {
            return map(this.state.Category.facts, (fact, index) => (
                    <li
                        className="link"
                        key={fact.id}
                    >
                        {fact.fact_text}
                    </li>
            ));
        } else {
            return (
                <li>You have an empty Category list. Please add some definitions first.</li>
            );
        }
    }

    render() {
        if(this.state.Category) {
            return(
                <div className={styles.facts}>
                    <h2>Facts</h2>
                    <ul>
                        {this.renderCategoryList()}
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
}