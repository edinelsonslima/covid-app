import axios from 'axios';
import React, { createContext, useEffect, useMemo, useState } from 'react';

interface ApiProviderProps {
    children: JSX.Element[] | JSX.Element;
}

interface ApiContextProps {
    loading: boolean;
    data: object;
}

const ApiContext = createContext({} as ApiContextProps);

const ApiProvider = (props: ApiProviderProps) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    async function getData() {
        const { data } = await axios.get(
            'https://covid.ourworldindata.org/data/owid-covid-data.json'
        );
        setData(data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [loading]);

    const value = useMemo(() => ({ loading, data }), [loading, data]);

    return (
        <ApiContext.Provider value={value}>
            {props.children}
        </ApiContext.Provider>
    );
};

export { ApiContext, ApiProvider };
