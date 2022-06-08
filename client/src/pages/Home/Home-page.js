import React from "react";
import "../Home/Home-page.css"
import Categories from "./Categories";
import DealSection from "./DealSection";
import NavBar from "./NavBar";

const HomePage = (props) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <NavBar/>
            <DealSection />
            <Categories />
        </>
    )
}

export default HomePage;