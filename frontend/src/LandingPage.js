import * as React from "react";
import { Field, Form, FormSpy } from "react-final-form";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "./modules/components/Typography";
import AppFooter from "./modules/views/AppFooter";
import AppAppBar from "./modules/views/AppAppBar";
import ResponsiveAppBar from './modules/views/MainAppAppBar'
import ProductCategories from "./modules/views/ProductCategories";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import withRoot from "./modules/withRoot";

function LandingPage() {
  console.log("hi");
  return (
    // <React.Fragment>
    <div>
      {/* <AppAppBar /> */}
      <ResponsiveAppBar />
      <ProductHero />
      {/* <ProductValues /> */}
      <ProductCategories />
      {/* <ProductHowItWorks /> */}
      {/* <ProductCTA /> */}
      {/* <ProductSmokingHero /> */}
      <AppFooter />
    </div>
  );
}

export default LandingPage;
