import React from "react";
import { IEpisode } from "./interfaces";
import { Store } from "./store";
import { fetchDataAction } from "./Actions";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

export default function FavesPage(props: { episodes: IEpisode[] } | any) {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const favs = state.episodes.filter((e: IEpisode) => e.favorite);
  return (
    <section className="episode-layout">
      {state.episodes.length > 0 && (
        <React.Suspense fallback={"Loading..."}>
          <EpisodeList episodes={favs} />
        </React.Suspense>
      )}
    </section>
  );
}
