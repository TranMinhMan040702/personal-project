import { createContext, useState } from 'react';
const RequestParam = createContext({});

function RequestParamProvider({children}) {
  const [paramsPageMain. setParamsPageMain] = useState({
    categoryId: '',
    page: '',
    limit: '',
    sortBy: '',
    search: '',
    priceMin:"",
    priceMax: ""
  })
  return <RequestParamProvider.Provider value={{paramsPageMain, setParamsPageMain}}>{children}</RequestParamProvider.Provider>;
}

export default RequestParamProvider;


const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };