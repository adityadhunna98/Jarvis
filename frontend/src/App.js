import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCategories from "./modules/views/ProductCategories";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" component={Homepage} exact /> */}
            {/* <Route path="/chats" component={Chatpage} /> */}
            {/* <Route path="/dashboard" component={Dashboard} /> */}
            {/* <Route path="/notification" component={Notification} /> */}
            {/* <Route path='/underConstruction' component={Working} /> */}
            <Route path="/" element={<SignIn />} exact />
            {/* <Chatpage /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/landpage"
              // elememt={
                  // <>
                  // <AppAppBar />
                  // <ProductHero />
                  // <ProductValues />
                  // <ProductCategories />
                  // <ProductHowItWorks />
                  // <ProductCTA />
                  // <ProductSmokingHero />
                  // <AppFooter />
                  // </>
              // }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default withRoot(App);
