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
import LandingPage from "./LandingPage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} exact />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/landpage" element={<LandingPage />}
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
