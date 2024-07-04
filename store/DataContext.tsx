// DataContext.tsx
import React, { createContext, useContext, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type State = {
  count: number;
  language: string;
  fSize: string;
};

type Action = { type: "INCREMENT" } | { type: "DECREMENT" }| any;

type Dispatch = (action: Action) => void;

const initialState: State = {
  count: 0,
  language: 'english',
  fSize: 'M'
};

const DataContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const dataReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload.value};
    case "SET_FONT_SIZE":
      return { ...state, fSize: action.payload.value};
    case "SET_STATE":
      return { ...state, ...action.payload};
    default:
      return state;
  }
};

type DataProviderProps = {
  children: React.ReactNode;
};

const DataProvider: React.FC<DataProviderProps> = ({ children }: any) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem("appState");
        console.log('[data]', data)
        if (data) {
          dispatch({ type: "SET_STATE", payload: JSON.parse(data) });
        }
      } catch (error) {
        console.error("Failed to fetch data from AsyncStorage:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      console.log('[state]', state)
      try {
        await AsyncStorage.setItem("appState", JSON.stringify(state));
      } catch (error) {
        console.error("Failed to save data to AsyncStorage:", error);
      }
    };

    saveData();
  }, [state]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useData };
