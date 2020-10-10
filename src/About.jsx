import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/about.png";
import Common from "./Common";

const About = () => {
    return(
        <>
        <Common name="Welcome to about page" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    );
};

export default About;