import React from "react"
import {
    FaCode,
    FaSketch,
    FaAndroid,
    FaAdobe,
    FaAt,
    FaServer,
} from "react-icons/fa"
export default [
    {
        id: 1,
        icon: <FaCode className="service-icon" />,
        title: "web development",
        text: `Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.`,
    },
    {
        id: 2,
        icon: <FaSketch className="service-icon" />,
        title: "web design",
        text: `Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.`,
    },
    {
        id: 3,
        icon: <FaAndroid className="service-icon" />,
        title: "app design",
        text: `App design combines the user interface (UI) and user experience (UX). While UI lends itself to the overall style of the app (including the colors, fonts, and general look and feel), UX focuses on the actual functionality and usability.`,
    },
    {
        id: 4,
        icon: <FaAt className="service-icon" />,
        title: "DevOps",
        text: `DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.`,
    },
    {
        id: 5,
        icon: <FaAdobe className="service-icon" />,
        title: "Graphics Design",
        text: `Graphic design is the process of visual communication through the use of typography, photography, iconography and illustration. The field is considered a subset of visual communication and communication design.`,
    },
    {
        id: 6,
        icon: <FaServer className="service-icon" />,
        title: "Data Security",
        text: `Data security means protecting digital data, such as those in a database, from destructive forces and from the unwanted actions of unauthorized users, such as a cyberattack or a data breach.`,
    },
]
