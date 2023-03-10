import * as React from "react";
import Button1 from "../components/Button";
import Button from "@mui/material/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
const handleClickScroll = () => {
  const element = document.getElementById("section-1");
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

export default function ProductHero() {
  return (
    <>
      <ProductHeroLayout
        sxBackground={{
          // backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "#7fc7d9", // Average color of the background image.
          backgroundPosition: "center",
        }}
      >
        {/* Increase the network loading priority of the background image. */}
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="increase priority"
        />
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Churn Analysis Dashboard
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{ mb: 2, mt: { xs: 4, sm: 10 } }}
        >
          Upload your CSV file below.
        </Typography>

        <Button
          // variant="contained"
          component="label"
          style={{ fontSize: ".9em" }}
        >
          <CloudUploadOutlinedIcon style={{ color: 'white' }} />
          <input
            hidden
            accept="application/pdf"
            multiple
            type="file"
            name="Inbound"
            onChange={(event) => {
              console.log(event);
            }}
          />
        </Button>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          component="a"
          onClick={handleClickScroll}
          // href="/premium-themes/onepirate/sign-up/"
          sx={{ mt: 2, minWidth: 200 }}
        >
          Click to submit
        </Button>
        {/* <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography> */}
      </ProductHeroLayout>
      <div id="section-1"></div>
    </>
  );
}
