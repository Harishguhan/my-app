import React, { createContext, useReducer } from 'react';
import CSS from 'csstype';
const initialState = {
  notification: 5
};

interface AppContextInterface {
  hospitalname: string;
  Address: string;
  State: string;
  Gstno: number;
  startingyear: number;
  branches: number;
  specialin: string;
  Email: string;
  contactno: number;
}
enum CountActionKind {
  CLEAR = 'CLEAR',
  STRING = ''
}

interface CountAction {
  type: CountActionKind;
  payload: number;
}

interface CountState {
  notification: number;
}
const reducer = (state: CountState, action: CountAction) => {
  switch (action.type) {
    case CountActionKind.CLEAR:
      return {
        notification: action.payload
      };
    case '':
    default:
      return state;
  }
};

const Notify = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const notify: CSS.Properties = {
    padding: '10px',
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: '2px solid grey',
    background: 'grey',
    borderRadius: '5px'
  };
  const notifys: CSS.Properties = {
    padding: '10px 20px',
    position: 'absolute',
    bottom: '20%',
    right: '50%',
    border: '2px solid black',
    background: 'black',
    borderRadius: '5px',
    color: 'white'
  };
  const clear = () => {
    dispatch({ type: CountActionKind.CLEAR, payload: 0 });
    console.log('value updated');
  };
  return (
    <div>
      <button style={notify} type="button">
        Notifications <span className="badge bg-dark">{state.notification}</span>
      </button>
      <button style={notifys} onClick={clear}>
        Clear Notification
      </button>
    </div>
  );
};
export default Notify;
export const ValueContext = createContext<AppContextInterface | null>(null);
