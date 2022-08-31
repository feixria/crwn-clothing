import React from "react";
import {
  useParams,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  matchRoutes,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/hompage.components.jsx";
import ShopPage from "./pages/shop/shop.components";
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

const HatsPage = (props) => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
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

function App() {
  // In v6 we dont have to use exact anymore because this is supported by default
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/shop/hats" element={<HatsPage />}></Route>
      <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
    </Routes>
  );
}

export default App;
