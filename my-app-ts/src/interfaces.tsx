interface Image {
  medium: string;
  original: string;
}

interface Self {
  href: string;
}

interface Links {
  self: Self;
}

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: Date;
  runtime: number;
  image: Image;
  summary: string;
  _links: Links;
  favorite: Boolean;
}

export type EpisodeProps = {
  episode: IEpisode;
};



export interface IState {
  episodes: IEpisode[];
}

export interface IAction {
  type: string;
  payload: any;
}
