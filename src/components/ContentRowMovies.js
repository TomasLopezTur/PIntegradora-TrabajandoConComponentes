import React from "react";
import { ContentTopCard } from "./ContentTopCard";

export const ContentRowMovies = () => {
    const Data = [
        {
            color: 'primary',
            title: "Movies in Data Base",
            value: 21,
            icon: "fa-film",
        },
        {
            color: 'success',
            title: "Total awards",
            value: 79,
            icon: "fa-award",
        },
        {
            color: 'warning',
            title: "Actors quantity",
            value: 49,
            icon: "fa-user",
        },
    ];
    return (
        <div className="row">
            {Data.map((dat, i) => {
                return <ContentTopCard data ={dat} key ={i + dat.color} />
            })}
        </div>
    )
}
export default ContentRowMovies;