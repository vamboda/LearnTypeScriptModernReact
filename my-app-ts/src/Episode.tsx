import React from "react";
import { EpisodeProps } from "./interfaces";
import { toggleFavoriteAction } from "./Actions";
import { Store } from "./store";

export default function Episode(props: EpisodeProps) {
  const { episode } = props;
  const { state, dispatch } = React.useContext(Store);

  return (
    <section key={episode.id} className="episode-box">
      <img src={episode.image?.medium} alt={`Rick & Morty ${episode.name}`} />
      <div>{episode.name}</div>
      <section>
        <div>
          {" "}
          Season: {episode.season} | Number: {episode.number} | Favorite:{" "}
        </div>
        <button
          type="button"
          onClick={() => toggleFavoriteAction(dispatch, episode)}
        >
          {episode.favorite ? "Favorited" : "Favorite"}
        </button>
      </section>
    </section>
  );
}
