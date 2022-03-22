import "./App.css";
import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomExp from "./components/IncomExp";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container"> </div>
      <Balance />
      <IncomExp />
      <TransactionList />
      <AddTransaction />
     
    </GlobalProvider>
  );
}

export default App;
