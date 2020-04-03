import React from "react";
import styles from "./MainContent.scss";
import {map, set, cloneDeep} from "lodash";
import {autobind} from "core-decorators";
import Nav from "Components/Main/Navigation/Nav";
import RequestForm from "Components/Main/EmailRequestForm/RequestForm";
import DisplayFacts from "Components/Category/DisplayFacts";

export default class MainContent extends React.Component {

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
        console.log(categoryId, "CategoryId");
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
                />
            );
        } else {
            return (
                <RequestForm/>
            );
        }
    }

    render() {
        return(
            <div className={styles.main}>
                <Nav
                    onSelectCategory={this.handleSelectCategory}
                />
                {this.renderContent()}
            </div>
        )
    }
}