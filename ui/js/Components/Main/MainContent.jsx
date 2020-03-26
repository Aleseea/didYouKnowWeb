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
            selectedCategory: "",
        }
    }

    // componentDidMount() {
    //     console.log("Component Did Mount");
    //     CategoryApi.getCategories().end((err, res) => {
    //         if (err) {
    //             this.setState({
    //                 error: err.message,
    //             });
    //             return;
    //         }
    //         console.log(res.body.results, "res.body");
    //         this.setState({
    //             allCategories: res.body.results,
    //         });
    //     });
    // }

    // @autobind
    // onSelectCategory(id) {
    //     console.log(id, "id");
    // }

    @autobind
    handleSelectCategory(categoryId) {
        console.log(categoryId, "CategoryId");
        this.setState({
            selectedCategory: categoryId,
        });
    }


    renderContent() {
        //TODO: Change the IF statement so I actually works
        if (this.state.selectedCategory) {
            return (
                <DisplayFacts
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