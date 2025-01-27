
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';


import Catalog from './pages/catalog.jsx'
import AboutUs from './pages/about_us.jsx'
import Contacts from './pages/contacts.jsx'
import Tovar from './pages/tovar.jsx'
import Shops from './pages/shops.jsx'
import CatalogList from './pages/catalog_list.jsx';
import ReviewPage from './pages/review.jsx';
import AdmPage from './pages/admPage.jsx';
import AdmPageEdit from './pages/admPageEdit.jsx';
import Busket from './pages/Busket.jsx';
import PolicyPage from './pages/PolicyPage.jsx';



function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<CatalogList />} />
        <Route path="/:search" element={<Catalog />} />
        <Route path='/about_us' element={<AboutUs/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/shops' element={<Shops/>}/>
        <Route path='/review' element={<ReviewPage/>}/>
        <Route path="/tovar/:id" element={<Tovar />} />
        <Route path='/admin' element={<AdmPage/>}/>
        <Route path='/admin/' element={<AdmPage/>}/>
        <Route path='/admin/edit/:id/' element={<AdmPageEdit/>}/>
        <Route path='/busket' element={<Busket/>}/>
        <Route path='/policy.txt' element={<PolicyPage/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;

