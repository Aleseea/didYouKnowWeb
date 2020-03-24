import React from "react";
import ReactDOM from "react-dom";
import "main.scss";
import Container from "Container"; // ui/js/components/common/ui/blah/Container.jsx
import MainHeader from "Components/Header/MainHeader";
import Nav from "Components/Navigation/Nav";
import RequestForm from "Components/EmailRequestForm/RequestForm";
import SlideShow from "./js/Components/SlideShow/SlideShow";

function Root() {
    return (
        <div id="home">
            <MainHeader/>
            <SlideShow/>
            <Nav/>
            <RequestForm/>
            {/*<Container/>*/}
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById("app"));
