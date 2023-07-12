import React from "react"
import Description from "./Description"
export default function BusinessCard() {
    return (
        <div className = "business-card">
            <img src={require("./../resources/images/maisie-img.jpg")} className="maisie-img"/>
            <Description />
        </div>
    )
}