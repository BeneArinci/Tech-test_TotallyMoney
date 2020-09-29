import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import CardsList from "./CardsList/CardsList"
import cards from "./cards"
import "tachyons"

class App extends React.Component {
  render() {
    console.log(cards)
    return(
      <div>
        <p>Hello, world</p>
        <CardsList filteredcards = {cards}/>
      </div>
    )
  }
}

export default hot(module)(App);