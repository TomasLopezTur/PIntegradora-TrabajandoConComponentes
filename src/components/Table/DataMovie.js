import React from "react";

export const DataMovie = (props) => {
    return(
        <tbody  >
            <tr >
                <td className="table-dark ">{props.data.title}</td>
                <td>{props.data.length}</td>
                <td>{props.data.rating}</td>
                <td>
                    <ul>
                        {props.data.genres.map((genre,i) => <li key={i+genre}>{genre}</li>)}
                    </ul>
                </td>
                <td>{props.data.awards}</td>
            </tr>
        </tbody>
    )
}