import React from "react";

import {
  useParams,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  matchRoutes,
  Outlet,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/hompage.components.jsx";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.components.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// ? React redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";

// ? React redux : Prevent user from accessing sign in page when already signed in
import { Navigate } from "react-router-dom";

// ! 8 23 Memoize selector
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

// ! 8 24 Checkout page
import CheckoutPage from "./pages/checkout/checkout.components";

/**
 * ! There is alot of change from React Router v5 -> v6
 * ! Be very wary when going through the courses
 * ? What changed ?
 * 1 ) Inside Route, there is no more component attributes or prop anymore. This is replaced with element
 * 2 ) Within the Route component, the exact keyword is also removed. Now it is enabled default and route checking is improved
 * 3 ) Switching is removed and fused with Routes
 * 4 ) props doesn't contain anymore, what u get u have to do it manually to get the params and query
 * 5 ) there is no props.history.push anymore. You have to do this through the usage of const navigate = useNavigate() navigate('/desiredRoute')
 */

const NotFound = (props) => {
  return (
    <div>
      <h1>PAGE NOT FOUND</h1>
    </div>
  );
};

const HeaderFooterLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

const SignInCheck = ({ currentUser }) => {
  console.log(currentUser);
  return currentUser ? (
    <Navigate to="/"></Navigate>
  ) : (
    <SignInAndSignUpPage></SignInAndSignUpPage>
  );
};

/*
const TopicList = (props) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
};

const TopicDetail = (props) => {

  return (
    <div>
      <h1>TOPIC DETAIL PAGE {params.topicId}</h1>
    </div>
  );
};
*/

class App extends React.Component {
  // In v6 we dont have to use exact anymore because this is supported by default

  unsubscribeFromAuth = null;

  componentDidMount() {
    // You are essentially creating an observer at the start of the app
    // to observe the behaviour of the sign in state
    // the reason we want to store this in a public member variable is because
    // it will return a function that on call will close the connectoin.
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        // ! Why don't u use get, the problem with that is get dont give u the function
        // ! onSnapshot
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(user);
    });
  }

  /**
   * @method utilizing the public member variable to unsubscribe from authentication observer object
   */
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Routes>
        <Route element={<HeaderFooterLayout></HeaderFooterLayout>}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop/*" element={<ShopPage />}></Route>
          <Route
            path="/signin"
            element={
              <SignInCheck currentUser={this.props.currentUser}></SignInCheck>
            }
          ></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

// ! We pass in null as the first argument because we dont need any state from the prop from our reducer
export default connect(mapStateToProps, mapDispatchToProps)(App);
