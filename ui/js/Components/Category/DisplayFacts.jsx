import React from "react";
import styles from "./DisplayFacts.scss";
import {map, set, cloneDeep} from "lodash";
import {autobind} from "core-decorators";
import PropTypes from "prop-types";
import * as CategoryApi from "api/CategoryApi";

export default class DisplayFacts extends React.Component {

    static propTypes = {
        categoryName: PropTypes.string,
        selectedCategory: PropTypes.number,
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
        console.log("Component Did Mount");
        CategoryApi.getCategories().end((err, res) => {
            if (err) {
                this.setState({
                    error: err.message,
                });
                return;
            }
            console.log(res.body.results, "res.body");
            this.setState({
                allCategories: res.body.results,
            });
        });
    }

    @autobind
    findCategory(id) {
        let selectedCategory = null;
        console.log(id, "id");
        map(this.state.allCategories, (category) => {
            console.log(category, "category");
            if (category.id === id){
                console.log("match found");
                selectedCategory = category;
            }
        });
        return selectedCategory;
    }


    renderCategoryList() {
        let category = {id: null};
        console.log(this.props.selectedCategory, "CategoryID");
        if (this.props.selectedCategory !== category.id || !category.id) {
               category = this.findCategory(this.props.selectedCategory);
               console.log(category, "category");

            if (category && category.facts) {
                return map(category.facts, (fact, index) => (
                    <li
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
    }

    render() {
        if(this.props.selectedCategory) {
            return(
                <div className={styles.facts}>
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