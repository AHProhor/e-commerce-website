
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import MyOrders from "./Pages/Dashborad/MyOrders/MyOrders";
import Payment from "./Pages/Dashborad/Payment/Payment";
import Review from "./Pages/Dashborad/Review/Review";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase/Purchase";
import TotallProducts from "./Pages/TotallProducts/TotallProducts/TotallProducts";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/myorder">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/payment">
              <Payment></Payment>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/allproducts">
              <TotallProducts></TotallProducts>
            </Route>
            <PrivateRoute path="/purches/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
