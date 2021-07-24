import React, {createContext, useReducer, Dispatch} from 'react';
import reducer from './reducer';

import authInit from './init';

export const GlobContext = createContext<{
  state: any;
  dispatch: Dispatch<any>;
}>({state: {}, dispatch: () => undefined});

export const GlobalProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, authInit);

  return (
    <GlobContext.Provider value={{state, dispatch}}>
      {props.children}
    </GlobContext.Provider>
  );
};
