import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from './pages/home/homePage'
import FaqPage from './pages/faq/faqPage'
import ServiceInside from "./pages/servicesInside";
import PaymentSistem from './pages/profile/paymentSistem'
import TechSup from './pages/profile/techSup'
import Basket from './pages/profile/basket'

import PhoneMailProfile from "./pages/profile/phoneMailProfile";
import FormProfile from "./pages/profile/formProfile";
import ChangePassword from "./pages/profile/changePassword";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/faq" component={FaqPage} />
        <Route path="/service-inside/:id" component={ServiceInside} />
        <Route path="/phone-mail-profile" component={PhoneMailProfile} />
        <Route path="/form-profile" component={FormProfile} />
        <Route path="/change-password-profile" component={ChangePassword} />
        <Route path="/payment-sistem" component={PaymentSistem} />
        <Route path="/tech-support" component={TechSup} />
        <Route path="/basket" component={Basket} />
      </Switch>
    </Router>
  );
}

export default App;
