import { IAction, IEpisode, Dispatch } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const data = await fetch(
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
  );
  const dataJson = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJson._embedded.episodes
  });
};
export const toggleFavoriteAction = (
         dispatch: any,
         episode: IEpisode
       ): IAction => {
         episode.favorite = !episode.favorite;
         const action: IAction = {
           type: "UPDATE_EPISODE",
           payload: episode
         };
         return dispatch(action);
       };
