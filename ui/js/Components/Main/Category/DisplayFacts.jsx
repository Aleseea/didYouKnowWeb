import React from "react";
import styles from "./DisplayFacts.scss";
import {map, find} from "lodash";
import {autobind} from "core-decorators";
import PropTypes from "prop-types";
import * as CategoryApi from "api/CategoryApi";
import classnames from "classnames";

export default class DisplayFacts extends React.Component {

    static propTypes = {
        categoryName: PropTypes.string,
        selectedCategory: PropTypes.number,
        style: PropTypes.string,
    };

    constructor() {
        super();
        this.state = {
            errors: [],
            selectedCategory: {},
            allCategories: [],
        }
    }

    componentDidMount() {
        CategoryApi.getCategories().end((err, res) => {
            if (err) {
                this.setState({
                    error: err.message,
                });
                return;
            }
            this.setState({
                allCategories: res.body,
            });
        });
    }

    @autobind
    findCategory(id) {
        let selectedCategory = null;
        selectedCategory = this.state.allCategories.find(category => category.id === id);
        return selectedCategory;
    }

    @autobind
    trueFalse(x){
        if(x === true) {
            return(
                <div>
                    <span className={classnames(styles.true, styles.highlighted)}>&#10003;</span>
                    <span className={styles.false}>&#10007;</span>
                </div>
            )

        } else {
            return(
                <div>
                    <span className={styles.true}>&#10003;</span>
                    <span className={classnames(styles.false, styles.highlighted)}>&#10007;</span>
                </div>
            );
        }
    }


    renderCategoryList() {
        let category = {id: null};
        if (this.props.selectedCategory !== category.id || !category.id) {
               category = this.findCategory(this.props.selectedCategory);

            if (category && category.facts) {
                return map(category.facts, (fact, index) => (
                    <li
                        key={index}
                    >
                        {this.trueFalse(fact.true_fact)}
                        <p>{fact.fact_text}</p>
                    </li>
                ));
            } else {
                return (
                    <li>You have an empty Category list. Please add some definitions first.</li>
                );
            }
        }
    }

    render() {
        if(this.props.selectedCategory) {
            return(
                <div className={classnames("facts", this.props.style, styles.facts)}>
                    <h2>{this.props.categoryName} Facts</h2>
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