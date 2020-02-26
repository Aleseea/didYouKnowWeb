import React from "react";
import {hot} from "react-hot-loader";
// import MissionCommanderContainer from "components/missioncommander/HomeContainer";
// import getStore from "utils/getStore";
// import {Provider} from "react-redux";
// import HTML5Backend from "react-dnd-html5-backend";
// import {DndProvider} from "react-dnd";
// import {BrowserRouter} from "react-router-dom";
// import {Route, Switch} from "react-router";
// import SurveyVendorFileList from "./components/missioncommander/SurveyVendorFileList";
// import GroupsMissingInfoList from "./components/missioncommander/GroupsMissingInfoList";

function HomeRoot(props) {
    return (
        <h1>Test</h1>
        // <DndProvider backend={HTML5Backend}>
        //     <Provider store={getStore()}>
        //         <BrowserRouter
        //             basename={props.rootUrl}
        //         >
        //             {/*<Switch>*/}
        //             {/*    /!*<Route*!/*/}
        //             {/*    /!*    path={"/survey-vendor-files/"}*!/*/}
        //             {/*    /!*    component={SurveyVendorFileList}*!/*/}
        //             {/*    /!*/>*!/*/}
        //             {/*    /!*<Route*!/*/}
        //             {/*    /!*    path={"/missing-group-info-list/"}*!/*/}
        //             {/*    /!*    component={GroupsMissingInfoList}*!/*/}
        //             {/*    /!*/>*!/*/}
        //             {/*    /!*<Route path="/" exact component={HomeContainer} />*!/*/}
        //             {/*</Switch>*/}
        //         </BrowserRouter>
        //     </Provider>
        // </DndProvider>
    );
}

if (DEVELOPMENT) {
    HomeRoot = hot(module)(HomeRoot);
}

export default HomeRoot;
