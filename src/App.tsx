import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Form from "./containers/Form/ExpenseForm/ExpenseForm";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={classes.App}>
        <Form />
      </div>
    </div>
  );
};

export default App;
