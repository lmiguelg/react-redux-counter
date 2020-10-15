import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import * as actions from "./actions";
import PropTypes from "prop-types";
import counterReducer from "./reducers/counter";

function App({ counter, isLogged, increment, decrement, signin }) {
  const dispatch = useDispatch();
  const n = 100;

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      {isLogged ? <h3>Hiden info</h3> : null}

      <button onClick={() => increment(n)}>+</button>
      <button onClick={() => decrement(n)}>-</button>
      <button onClick={() => signin()}>Login</button>
    </div>
  );
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ counter, isLogged }) => {
  return {
    counter,
    isLogged
  };
};

const mapDispatchToProps = {
  increment:actions.incrementAction,
  decrement: actions.decrementAction,
  signin: actions.signinAction
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
