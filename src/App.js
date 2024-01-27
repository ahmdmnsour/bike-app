import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import UsersCharts from './pages/UsersCharts';
import UsersProfile from './pages/UsersProfile';
import ProductsCharts from './pages/ProductsCharts';
import ProductsTable from './pages/ProductsTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sidebar />} >
            <Route index element={<Overview />} />
            <Route path='/products-chart' element={<ProductsCharts />} />
            <Route path='/products-table' element={<ProductsTable />} />
            <Route path='/user-chart' element={<UsersCharts />} />
            <Route path='/users-profile' element={<UsersProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
