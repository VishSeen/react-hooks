import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [poke, setPoke] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(url);

        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPoke(data.results);
            setIsLoading(false);
        });
    }, [url]);

    return [poke, isLoading]
}

export default useFetch;