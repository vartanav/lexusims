import React from "react";
import {Button} from "@mui/material";
import axios from "axios";

export const ResultButton = (props) => {
    const {
        setResults
    } = props

    const handleClick = () =>{
        axios.get('/api').then(res => setResults(res.data));
    }

    return <Button fullWidth onClick={handleClick} />

}