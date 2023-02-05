import React, {useState} from "react";
import {ResultButton} from "./ResultButton";
import {ResultsTable} from "./ResultsTable";

export function Results(){
    const [results, setResults] = useState([]);

    return (
        <>
            <ResultButton setResults={setResults}/>
            <ResultsTable results={results}/>
        </>
    )
}