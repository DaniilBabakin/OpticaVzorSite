import { lazy, Suspense} from 'react';
import * as ROUTES from './constants/routes'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

const Main = lazy(()=> import ('./pages/main'))
const Products = lazy(()=> import ('./pages/products'))
const AboutUs = lazy(()=> import ('./pages/about-us'))
const Contacts = lazy(()=> import ('./pages/contacts'))
const NotFound = lazy(()=> import ('./pages/not-found'))

export default function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.MAIN} element={<Main/>
          }/>
          <Route path={ROUTES.PRODUCTS} element={<Products/>
          }/>
          <Route path={ROUTES.ABOUT_US} element={<AboutUs/>}/>
          <Route path={ROUTES.CONTACTS} element={<Contacts/>}
          />
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

