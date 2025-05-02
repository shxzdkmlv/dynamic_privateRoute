import {useEffect, useState} from 'react';
import {request} from "../api/index.js";


export const useFetch = (endpoint) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        request
            .get(endpoint)
            .then((res) => {
                setData(res.data)
            })

            .catch((err) => (
                setError(err)
            ))
            .finally(() => {
                setLoading(false)
            })
    }, []);
    return {data, error, loading}
};
