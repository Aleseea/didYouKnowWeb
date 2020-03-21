import React from "react";
import {hot} from "react-hot-loader";
// import MissionCommanderContainer from "components/missioncommander/MissionCommanderContainer";
import getStore from "utils/getStore";
import {Provider} from "react-redux";
import HTML5Backend from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

function HomePageRoot(props) {
    return (
        <DndProvider backend={HTML5Backend}>
            <Provider store={getStore()}>
                <BrowserRouter
                    basename={props.rootUrl}
                >
                    <h1>TESTING 123</h1>
                    {/*<Switch>*/}
                    {/*    <Route*/}
                    {/*        path={"/survey-vendor-files/"}*/}
                    {/*        component={SurveyVendorFileList}*/}
                    {/*    />*/}
                    {/*    <Route*/}
                    {/*        path={"/missing-group-info-list/"}*/}
                    {/*        component={GroupsMissingInfoList}*/}
                    {/*    />*/}
                    {/*    <h1>Made it here</h1>*/}
                    {/*    /!*<Route path="/" exact component={MissionCommanderContainer} />*!/*/}
                    {/*</Switch>*/}
                </BrowserRouter>
            </Provider>
        </DndProvider>
    );
}

if (DEVELOPMENT) {
    HomePageRoot = hot(module)(HomePageRoot);
}

export default HomePageRoot;
