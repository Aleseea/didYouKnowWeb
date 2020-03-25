import React from "react";
import styles from "./MainContent.scss";
import {map, set, cloneDeep} from "lodash";
import {autobind} from "core-decorators";
import Nav from "Components/Main/Navigation/Nav";
import RequestForm from "Components/Main/EmailRequestForm/RequestForm";

export default class MainContent extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: [],
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


    renderContent() {
        console.log(this.state.allCategories, "state");
        if (1 === 1) {
            return (
                <RequestForm/>
            );
        } else {
            return (
                <li>You have an empty Category list. Please add some definitions first.</li>
            );
        }
    }

    render() {
        return(
            <div className={styles.main}>
                <Nav/>
                {this.renderContent()}
            </div>
        )
    }
}