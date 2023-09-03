import React from "react";
import { Header } from "./appHeader";
import { Note } from "./note";
import { Footer } from "./footer";
function App() {
    return <>
        <Header />
        <Note />
        <Footer />
    </>
}

export { App };