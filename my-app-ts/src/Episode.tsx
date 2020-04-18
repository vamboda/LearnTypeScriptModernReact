import React from "react";
import { Store } from "./store";
import { EpisodeProps, IAction } from "./interfaces";

export default function Episode(props: EpisodeProps) {
  const { episode } = props;
  const { dispatch } = React.useContext(Store);

  const toggleFavoriteAction = (): IAction => {
    episode.favorite = !episode.favorite;
    return dispatch({
      type: "UPDATE_EPISODE",
      payload: episode
    });
  };

  return (
    <section key={episode.id} className="episode-box">
      <img src={episode.image?.medium} alt={`Rick & Morty ${episode.name}`} />
      <div>{episode.name}</div>
      <section>
        <div>
          {" "}
          Season: {episode.season} | Number: {episode.number} | Favorite:{" "}
        </div>
        <button type="button" onClick={() => toggleFavoriteAction()}>
          {episode.favorite ? "Favorited" : "Favorite"}
        </button>
      </section>
    </section>
  );
}
