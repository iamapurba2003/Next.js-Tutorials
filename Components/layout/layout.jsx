import React from "react";
import MainHeader from "./main-header";


export default function(props) {
    return (
        <React.Fragment>
            <MainHeader />
            <main>
                {props.children}
            </main>
        </React.Fragment>
    )
}