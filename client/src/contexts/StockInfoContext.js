import React, { useReducer, createContext } from 'react';
import stockInfoReducer from "../reducers/stockInfoReducer"

export const StockInfoContext = createContext();

const initialState = {
    targetPrice:{}, 
    stockSummary:{},
    isLoading: false,
    isError: false,
}

export default function StockInfoContextProvider ({children}) {
    const [stockInfo, dispatchStockInfo] = useReducer(stockInfoReducer, initialState);
  
    return (
      <StockInfoContext.Provider value={[stockInfo, dispatchStockInfo]}>
        {children}
      </StockInfoContext.Provider>
    );
  };