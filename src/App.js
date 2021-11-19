import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StayProvider from "./store/StayProvider";
import PropertyDrawer from "./components/Properties/PropertyDrawer";

function App() {
  return (
    <Fragment>
      <StayProvider>
        <Header />
        <PropertyDrawer />
      </StayProvider>
      <Footer
        userName="Abhinav Sawarkar"
        userLink="https://github.com/abhinavishere"
      />
    </Fragment>
  );
}

export default App;
