import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState, rootReducer } from "./redux/rootReducer";
import "./styles.css";
import Header from "./components/atoms/Header/Header.tsx";
import CardsContainer from './components/templates/CardsContainer.tsx';

const store = createStore(rootReducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="App">
      <CardsContainer />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
