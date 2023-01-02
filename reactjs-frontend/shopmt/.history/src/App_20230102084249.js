import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { AdminLayout } from './layouts';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.admin.map((route, index) => {
                        // const Layout = route.layout ;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <AdminLayout>
                                        <Page />
                                    </AdminLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
