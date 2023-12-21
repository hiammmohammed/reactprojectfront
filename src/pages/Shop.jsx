import React from "react";
import Hero from "../components/Hero/Hero";
import Populer from "../components/Popular/Popular";
import Offer from "../components/Offer/Offer";
import NewCollection from "../components/NewCollection/NewCollection";
import NewLetter from "../components/NewLetter/NewLetter";
const Shop = () => {
    return (
        <div>
        <Hero/>
        <Populer/>
        <Offer/>
        <NewCollection/>
        <NewLetter/>
        </div>
    )
}

export default Shop