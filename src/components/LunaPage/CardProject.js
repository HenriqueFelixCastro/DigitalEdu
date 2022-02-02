import React from "react";

const stylesheet = {

    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
    },

    cardInfo: {
        backgroundColor: "#262626",
        padding: "3rem 1rem",
        height: "min(35vh, 200px)",
    },

    text: {
        font: "normal normal normal 14px/18px IBM Plex Sans",
        marginTop: "1rem",

        title: {
            font: "normal normal 600 16px/20px IBM Plex Sans",
        },

        textBr: {
            font: "normal normal normal 14px/18px IBM Plex Sans",
            opacity: "1",
            marginTop: "1rem",
        }
    }
}

const CardProject = (props) => {
    return(
        <>
            <div style={stylesheet.card}>
                <img src={props.image} alt={'rest'} style={stylesheet.image} />
                    <div style={stylesheet.cardInfo}>
                        <h1 style={stylesheet.text.title}>{props.title}</h1>
                        <p style={stylesheet.text}>{props.text}</p>
                    </div>
            </div>
        </>
    )
}

export default CardProject;