import React from "react";
import { Store } from "./store";
export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const data = await fetch(
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    );
    const dataJson = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJson._embedded.episodes
    });
  };
  return (
    <React.Fragment>
      {console.log(state)}
      <h1>Rick & Morty</h1>
      <p>Pick your favorite episode:!!!</p>
    </React.Fragment>
  );
}
