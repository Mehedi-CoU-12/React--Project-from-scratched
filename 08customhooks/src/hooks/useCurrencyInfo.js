import { useState, useEffect } from "react";
import axios from "axios";

function useCurrencyInfo(currency = "bdt") {
    const [data, setData] = useState({});

    //find today date
    const dateString = new Date();
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split("T")[0];

    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${formattedDate}/v1/currencies/${currency}.json`;
        const response = axios.get(url);

        response
            ?.then((res) => res?.data)
            .then((value) => {
                setData(value[currency]);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
