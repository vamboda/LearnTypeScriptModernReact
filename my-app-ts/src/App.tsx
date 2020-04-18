import React from "react";
import { Store } from "./store";
import Episode from "./Episode";
import { IEpisode } from "./interfaces";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));
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
      <header className="header">
        <div>
          <h1>Rick & Morty</h1>
          <p>Pick your favorite episode:!!!</p>
        </div>
        <div>
          Favvourite(s):{" "}
          {state.episodes.filter((e: IEpisode) => e.favorite === true).length}
        </div>
      </header>
      <section className="episode-layout">
        {state.episodes.length > 0 && (
          <React.Suspense fallback={"Loading..."}>
            <EpisodeList episodes={state.episodes} />
          </React.Suspense>
        )}
      </section>
    </React.Fragment>
  );
}
