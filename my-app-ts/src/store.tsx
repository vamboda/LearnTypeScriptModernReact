import React from "react";
import { IEpisode, IState, IAction } from "./interfaces";

const initialState: IState = {
  episodes: []
};

export const Store = React.createContext<IState | any>(initialState);

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      state = { ...state, episodes: action.payload };
      break;
    case "UPDATE_EPISODE":
      state = {
        ...state,
        episodes: state.episodes.map(
          (e: IEpisode): IEpisode => {
            return e.id === action.payload.id ? action.payload : e;
          }
        )
      };
      break;
    default:
      break;
  }

  return state;
}

export function StoreProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
