import React from "react";
import { Link } from "@reach/router";
export default function App(props: any): JSX.Element {
  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick & Morty</h1>
          <p>Pick your favorite episode:!!!</p>
        </div>
        <div>
          <Link to="/"> Home</Link>
          <Link to="/faves">Favourites</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
