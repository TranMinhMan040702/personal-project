import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import { AdminLayout } from './layouts';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* public routes */}
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = AdminLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {/* private routes */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
