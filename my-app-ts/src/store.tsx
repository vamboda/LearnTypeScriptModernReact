import React from "react";

interface IState {
  episodes: [];
  favorites: [];
}

interface IAction {
  type: string;
  payload: any;
}
const initialState: IState = {
  episodes: [],
  favorites: []
};

export const Store = React.createContext<IState | any>(initialState);

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      state = { ...state, episodes: action.payload };
      break;
    default:
      break;
  }

  return state;
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
