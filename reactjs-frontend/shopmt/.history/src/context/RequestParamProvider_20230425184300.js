import { createContext, useState } from 'react';
const RequestParamContext = createContext({});

function RequestParamProvider({ children }) {
    const [params, setParams] = useState({
        categoryId: '',
        page: '',
        limit: '12',
        sortBy: '',
        search: '',
        priceMin: '',
        priceMax: '',
    });
    return (
        <RequestParamContext.Provider value={{ params, setParams }}>
            {children}
        </RequestParamContext.Provider>
    );
}

export { RequestParamContext, RequestParamProvider };
