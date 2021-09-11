import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
