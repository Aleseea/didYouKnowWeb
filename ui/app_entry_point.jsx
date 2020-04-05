import React from "react";
import ReactDOM from "react-dom";
import "main.scss";
import MainHeader from "Components/Header/MainHeader";
import SlideShow from "Components/SlideShow/SlideShow";
import MainContent from "Components/Main/MainContent";
import Everything from "Components/Everything";

function Root() {
    return (
        <div id="home">
            <Everything/>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById("app"));
