import React from "react";
import ReactDOM from "react-dom";
import Container from "Container"; // ui/js/components/common/ui/blah/Container.jsx
import "main.scss";

function Root() {
    return (
        <div>
        <h3>Yay</h3>
            <Container/>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById("app"));
