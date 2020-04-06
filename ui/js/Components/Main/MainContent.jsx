import React from "react";
import styles from "./MainContent.scss";
import {map, set, cloneDeep} from "lodash";
import {autobind} from "core-decorators";
import Nav from "Components/Main/Navigation/Nav";
import RequestForm from "Components/Main/EmailRequestForm/RequestForm";
import DisplayFacts from "Components/Main/Category/DisplayFacts";
import PropTypes from "prop-types";
// import classnames from "classnames";

export default class MainContent extends React.Component {

static propTypes = {
    style: PropTypes.string,
};

    constructor() {
        super();
        this.state = {
            errors: [],
            selectedCategory: -1,
            categoryName: "",
        }
    }

    @autobind
    handleSelectCategory(categoryId, categoryName) {
        this.setState({
            selectedCategory: categoryId,
            selectedCategoryName: categoryName,
        });
    }


    renderContent() {
        if (this.state.selectedCategory >= 0) {
            return (
                <DisplayFacts
                    categoryName={this.state.selectedCategoryName}
                    selectedCategory={this.state.selectedCategory}
                    style={this.props.style}
                />
            );
        } else {
            return (
                <RequestForm
                    style={this.props.style}
                />
            );
        }
    }

    render() {
        return(
            <div className={styles.main}>
                <Nav
                    style={this.props.style}
                    onSelectCategory={this.handleSelectCategory}
                />
                {this.renderContent()}
            </div>
        )
    }
}