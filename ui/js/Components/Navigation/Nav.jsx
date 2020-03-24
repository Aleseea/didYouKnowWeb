import React from "react";
import styles from "./Nav.scss";
import {map} from "lodash";
import * as CategoryApi from "api/CategoryApi";

export default class Nav extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: [],
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


    renderCategoryList() {
        console.log(this.state.allCategories, "state");
        if (this.state.allCategories != null) {
            return map(this.state.allCategories, (category, index) => (
                    <li key={index}>
                        {category.category_name}
                    </li>
            ));
        } else {
            return (
                <li>You have an empty Category list. Please add some definitions first.</li>
            );
        }
    }

    render() {
        if(this.state.allCategories) {
            return(
                <div className={styles.navigation}>
                    <h2>Categories</h2>
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