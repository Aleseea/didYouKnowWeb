import React from "react";
import styles from "./RequestForm.scss";
import TextInput from "Components/Common/Input/TextInput";
import {map, set, cloneDeep} from "lodash";
import {autobind} from "core-decorators";
import * as EmailApi from "api/EmailApi";

export default class RequestForm extends React.Component {

    state = {
        errors: [],
        emailForm: {
            firstName: "",
            lastName: "",
            email: "",
            confirmEmail: "",
        },
    };

    componentDidUpdate(oldProps) {
        // if (this.state.emailForm !== oldProps.emailForm && this.state.emailForm) {
        //     this.setState({
        //         emailForm: this.state.emailForm,
        //     });
        // }
    }

    checkValidity() {
        const errors = [];
        if (!this.state.emailForm.firstName) {
            errors.push("firstName");
            console.log("No First Name was entered");
        }
        if (!this.state.emailForm.lastName) {
            errors.push("lastName");
            console.log("No First Name was entered");
        }
        if (!this.state.emailForm.email || this.state.emailForm.email !== this.state.emailForm.confirmEmail) {
            errors.push("email");
            console.log("No First Name was entered");
        }
        if (!this.state.emailForm.confirmEmail || this.state.emailForm.email !== this.state.emailForm.confirmEmail) {
            errors.push("confirmEmail");
            console.log("No First Name was entered");
        }
        this.setState({
            errors,
        });
        console.log(errors, "Error List");
        return !errors.length;
    }

    @autobind
    handleAddEmailToEmailList(contact) {
        console.log("HandleAddEmailToEmailList")
        EmailApi.addEmail(contact)
            .then((res) => {
                contact({
                    // type: ActionTypes.BUG_REPORT_SENT,
                    bugReports: res.body,
                });
            })
            .catch((err) => {
                contact({
                    // type: ActionTypes.ERRORED,
                    message: err.message,
                })
            })
    }

    @autobind
    handleChange(formData) {
        const emailForm = cloneDeep(this.state.emailForm);
        set(emailForm, formData.name, formData.value);
        this.setState({
            emailForm,
        });
        console.log(emailForm);
    }


    @autobind
    handleSubmit(e) {
        e.preventDefault();
        console.log("HandleSubmit() Is running")
        if (this.checkValidity()) {
            console.log("Data is valid")
            this.handleAddEmailToEmailList(this.state.emailForm);
        }
    }

    render() {
        return(
            <div className={styles.requestForm}>
                <form onSubmit={this.handleSubmit}>
                    <h2>Receive Weekly Emails</h2>
                    <TextInput
                        value={this.state.emailForm.firstName}
                        name="firstName"
                        label="First Name:"
                        placeholder={"Enter your first name"}
                        onChange={this.handleChange}
                        invalid={this.state.errors.includes("firstName")}
                    />
                    <TextInput
                        value={this.state.emailForm.lastName}
                        name="lastName"
                        label="Last Name:"
                        placeholder={"Enter your last name"}
                        onChange={this.handleChange}
                        invalid={this.state.errors.includes("lastName")}
                    />
                    <TextInput
                        value={this.state.emailForm.email}
                        name="email"
                        label="Email:"
                        placeholder={"Enter your email address"}
                        onChange={this.handleChange}
                        invalid={this.state.errors.includes("email")}
                    />
                    <TextInput
                        value={this.state.emailForm.confirmEmail}
                        name="confirmEmail"
                        label="Confirm Email:"
                        placeholder={"Enter your email address again"}
                        onChange={this.handleChange}
                        invalid={this.state.errors.includes("confirmEmail")}
                    />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}