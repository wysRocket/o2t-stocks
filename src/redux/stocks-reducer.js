import { stocksAPI } from "../api/api";

const SET_STOCKS = "SET_STOCKS";
const UPDATE_STOCK_VALUE = "UPDATE_STOCK_VALUE";

let initialState = {
  data: [],
};
export const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STOCKS: {
      return {
        ...state,
        data: action.payload.map((i) => ({
          timestamp: i.timestamp,
          index: i.index,
          NASDAQ: i.stocks.NASDAQ.toFixed(2),
          CAC40: i.stocks.CAC40.toFixed(2),
        })),
      };
    }
    case UPDATE_STOCK_VALUE: {
      return {
        ...state,
        data: state.data.map((o) => {
          if (o.index === action.index) {
            return { ...o, ...action.stockValue };
          }
          return o;
        }),
      };
    }

    default:
      return state;
  }
};

export const setStocks = (payload) => ({ type: SET_STOCKS, payload });
export const updateStockValue = (payload) => ({
  type: UPDATE_STOCK_VALUE,
  payload,
});

export const getAllData = () => async (dispatch) => {
  try {
    const response = await stocksAPI.getAllData();
    dispatch(setStocks(response.data));
  } catch (error) {}
};

export const getLastTen = () => async (dispatch) => {
  try {
    const response = await stocksAPI.getLastTen();
    dispatch(setStocks(response.data));
  } catch (error) {}
};
