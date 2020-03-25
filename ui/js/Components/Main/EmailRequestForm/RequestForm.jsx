import React from "react";
import styles from "./RequestForm.scss";
import {map} from "lodash";
// import * as EmailApi from "api/EmailApi";

export default class RequestForm extends React.Component {
//
//     constructor() {
//         super();
//         this.state = {
//             errors: [],
//             allCategories: [],
//         }
//     }
//
//     componentDidMount() {
//         console.log("Component Did Mount");
//         CategoryApi.getCategories().end((err, res) => {
//             if (err) {
//                 this.setState({
//                     error: err.message,
//                 });
//                 return;
//             }
//             console.log(res.body.results, "res.body");
//             this.setState({
//                 allCategories: res.body.results,
//             });
//         });
//     }
//
//
//     renderCategoryList() {
//         console.log(this.state.allCategories, "state");
//         if (this.state.allCategories != null) {
//             return map(this.state.allCategories, (category, index) => (
//                     <li key={index}>
//                         {category.category_name}
//                     </li>
//             ));
//         } else {
//             return (
//                 <ul>
//                     <a>
//                         <li>You have an empty Category list. Please add some definitions first.</li>
//                     </a>
//                 </ul>
//             );
//         }
//     }

    render() {
        return(
            <div className={styles.requestForm}>
                <form>
                    <h2>Receive Weekly Emails</h2>

                    <label htmlFor="first-name">
                        First Name:
                    </label>
                    <input id="first-name" name="first-name" type="text"/>

                    <label htmlFor="last-name">
                        Last Name:
                    </label>
                    <input id="last-name" name="last-name" type="text"/>

                    <label htmlFor="email">
                        Email Address:
                    </label>
                    <input id="email" name="email" type="email"/>

                    <label htmlFor="reenter-email">
                        Confirm Email:
                    </label>
                    <input id="reenter-email" name="reenter-email" type="email"/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}