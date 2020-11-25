import React from 'react'
import GlobalStyles from './components/GlobalStyles';
import AboutUsPage from './pages/AboutUsPage'
import { Route, Switch, useLocation } from "react-router-dom"
import Nav from './components/Nav';
import ContactUsPage from './pages/ContactUsPage';
import OurWorkPage from './pages/OurWorkPage';
import MovieDetailPage from './pages/MovieDetailPage';
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation()
  console.log('location: ', location);

  return (
    <div>
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
          <Route exact path="/contact" component={ContactUsPage} />
          <Route exact path="/work" component={OurWorkPage} />
          <Route exact path="/work/:id" component={MovieDetailPage} />
          <Route exact path="/" component={AboutUsPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
