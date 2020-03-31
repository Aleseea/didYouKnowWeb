import React from "react";
import styles from "./Nav.scss";
import {map, set, cloneDeep} from "lodash";
import {autobind} from "core-decorators";
import PropTypes from "prop-types";
import * as CategoryApi from "api/CategoryApi";

export default class Nav extends React.Component {
    static propTypes = {
        onSelectCategory: PropTypes.func.isRequired,
    };

    // constructor() {
    //     super();
        state = {
            errors: [],
            allCategories: [],
        };
    // }

    componentDidMount() {
        // console.log("Component Did Mount");
        CategoryApi.getCategories().end((err, res) => {
            if (err) {
                this.setState({
                    error: err.message,
                });
                return;
            }
            // console.log(res.body.results, "res.body");
            this.setState({
                allCategories: res.body.results,
            });
        });
    }

    @autobind
    onSelectCategory(id) {
        // console.log(id, "id");
    }


    renderCategoryList() {
        // console.log(this.state.allCategories, "state");
        if (this.state.allCategories != null) {
            return map(this.state.allCategories, (category, index) => (
                    <li
                        className="link"
                        key={category.id}
                        // onClick={() => this.onSelectCategory(category.id)}
                        onClick={() => this.props.onSelectCategory(category.id)}
                    >
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
                    <nav>
                        <h2>Categories</h2>
                        <ul>
                            {this.renderCategoryList()}
                        </ul>
                    </nav>
                </div>
            )
        } else {
            return null;
        }
    }
}