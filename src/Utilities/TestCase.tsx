import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../Redux/Store";


export const renderComponentProvider =(e: React.ReactElement) =>{
    render(
        <>
        <Provider store={store}>
            <BrowserRouter>{e}</BrowserRouter>
        </Provider>
        </>
    );
}