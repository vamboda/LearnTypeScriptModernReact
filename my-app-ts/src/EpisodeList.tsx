import React from "react";
import { IEpisode } from "./interfaces";
import Episode from "./Episode";

export default function EpisodeList(props: any): JSX.Element[] {
  const { episodes } = props;

  return episodes.map((e: IEpisode) => {
    return <Episode episode={e} />;
  });
}
