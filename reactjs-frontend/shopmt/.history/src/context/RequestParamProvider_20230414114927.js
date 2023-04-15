import { createContext, useState } from 'react';
const RequestParamContext = createContext({});

function RequestParamProvider({ children }) {
    const [paramsPageMain, setParamsPageMain] = useState({
        categoryId: '',
        page: '',
        limit: '',
        sortBy: '',
        search: '',
        priceMin: '',
        priceMax: '',
    });
    return (
        <RequestParamContext.Provider value={{ paramsPageMain, setParamsPageMain }}>
            {children}
        </RequestParamContext.Provider>
    );
}

export { RequestParamContext, RequestParamProvider };
