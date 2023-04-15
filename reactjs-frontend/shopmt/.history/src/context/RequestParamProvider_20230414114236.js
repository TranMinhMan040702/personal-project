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
        <RequestParamProvider.Provider value={{ paramsPageMain, setParamsPageMain }}>
            {children}
        </RequestParamProvider.Provider>
    );
}

export default { RequestParamContext, RequestParamProvider };
