import GlobalStyles from './components/GlobalStyles';
import AboutUsPage from './pages/AboutUsPage'
import { Route, Switch } from "react-router-dom"
import Nav from './components/Nav';
import ContactUsPage from './pages/ContactUsPage';
import OurWorkPage from './pages/OurWorkPage';


function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route exact path="/contact">
          <ContactUsPage />
        </Route>
        <Route exact path="/work">
          <OurWorkPage />
        </Route>
        <Route exact path="/">
          <AboutUsPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
