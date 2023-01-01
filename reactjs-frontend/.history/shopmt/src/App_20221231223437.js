import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import { publicRoutes } from './routes';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component
                        return <Route key={index} path={route.path} element={}/>;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
