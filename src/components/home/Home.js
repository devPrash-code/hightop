import React from "react";
import Products from "./Products";
import Showcase from "./Showcase";
import Slider from "./Slider";

function Home() {
    return (
        <>
            <Slider />
            <Showcase />
            <Products />
        </>
    )
}

export default Home;