import React from "react";
import { Store } from "./store";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));
export default function HomePage(props: any) {
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
    <section className="episode-layout">
      {state.episodes.length > 0 && (
        <React.Suspense fallback={"Loading..."}>
          <EpisodeList episodes={state.episodes} />
        </React.Suspense>
      )}
    </section>
  );
}
