import React from "react";
import PropTypes from "prop-types";
import styles from "./TextInput.scss";
import classnames from "classnames";
import MaskedInput from "react-text-mask";
import {autobind} from "core-decorators";

export default class TextInput extends React.Component {
    static propTypes = {
        immediate: PropTypes.bool, // If true, will call onChange for each keypress, otherwise waits for enter key or blur.
        invalid: PropTypes.bool,
        label: PropTypes.string,
        textShadow: PropTypes.bool,
        mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]), // Input formatting (see `react-text-mask`).
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        revertValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // If provided, pressing escape key will cancel the edit and revert to the old value.
        usePropsValue: PropTypes.bool, // Cause rendered value to use `props.value` instead of `state.text` (e.g., see DurationInput).
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        inputType: PropTypes.string,
        autoFocus: PropTypes.bool,
        clearOnChange: PropTypes.bool, // Can only work when usePropsValue === false
        textColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        maxLength: PropTypes.any,
    };

    static defaultProps = {
        inputType: "text",
        immediate: true,
        usePropsValue: true,
        clearOnChange: false,
    };

    state = {
        text: "",
    };

    componentDidMount() {
        this.setState({
            text: this.props.value || "",
        });
    }

    @autobind
    save(value) {
        this.props.onChange({
            name: this.props.name,
            value,
        });

        if (this.props.clearOnChange) {
            this.setState({
                text: "",
            });
        }
    }

    @autobind
    handleChanged(e) {
        const value = e.target.value;

        this.setState({
            text: value,
        });

        if (this.props.immediate) {
            this.save(value);
        }
    }

    @autobind
    handleKeyDown(e) {
        const keyCode = e.keyCode;

        if (keyCode === 13) {
            e.preventDefault();
            e.target.blur();
        } else if (keyCode === 27) {
            e.target.value = this.props.revertValue || this.props.value;
            e.target.blur();
        } else if (this.props.inputType !== "text" && keyCode === 69) { // Reject "e" as a number (scientific notation)
            e.preventDefault();
        }
    }

    @autobind
    handleBlur(e) {
        this.save(e.target.value);
    }

    renderLabel() {
        if (this.props.label) {
            let style = {};
            if (this.props.labelColor) {
                style = {
                    ...style,
                    color: this.props.labelColor,
                };
            }
            if (this.props.textShadow) {
                style = {
                    ...style,
                    textShadow: "0 0 10px #000",
                };
            }
            return (
                <label
                    style={style}
                    dangerouslySetInnerHTML={{__html: this.props.label}}
                />
            );
        }
    }

    render() {
        const props = this.props;
        const style = {
            backgroundColor: props.backgroundColor,
            color: props.textColor,
            borderColor: props.borderColor,
        };
        const sharedProps = {
            type: "text",
            value: props.usePropsValue ? this.props.value : this.state.text,
            onKeyDown: this.handleKeyDown,
            onChange: this.handleChanged,
            onBlur: this.handleBlur,
            autoFocus: this.props.autoFocus,
            style,
            maxLength: props.maxLength,
        };
        const inputElement = props.mask ? (
            <MaskedInput
                {...sharedProps}
                mask={props.mask}
                placeholder={props.placeholder}
                type={props.inputType}
            />
        ) : (
            <input
                {...sharedProps}
                placeholder={props.placeholder || ""}
                type={props.inputType}
            />
        );

        return (
            <div
                className={classnames(styles.root, {
                    [styles.invalid]: props.invalid,
                })}
            >
                {this.renderLabel()}
                {inputElement}
            </div>
        );
    }
}
