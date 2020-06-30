import { stocksAPI } from "../api/api";

const SET_STOCKS = "SET_STOCKS";
const UPDATE_STOCK_VALUE = "UPDATE_STOCK_VALUE";
const TOGGLE_FETCH_UPDATES = "TOGGLE_FETCH_UPDATES";
const HANDLE_ERROR = "HANDLE_ERROR";

export const stocksReducer = (
  state = {
    data: [],
    fetchUpdates: true,
    error: "",
  },
  action
) => {
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
            return {
              ...o,
              [action.stockName]: action.stockValue,
            };
          }
          return o;
        }),
      };
    }
    case TOGGLE_FETCH_UPDATES: {
      return { ...state, fetchUpdates: action.fetchUpdates };
    }
    case HANDLE_ERROR: {
      return { ...state, error: action.error.message };
    }
    default:
      return state;
  }
};

export const setStocks = (payload) => ({ type: SET_STOCKS, payload });
export const updateStockValue = (index, stockName, stockValue) => ({
  type: UPDATE_STOCK_VALUE,
  index,
  stockName,
  stockValue,
});
export const toggleFetchUpdates = (fetchUpdates) => ({
  type: TOGGLE_FETCH_UPDATES,
  fetchUpdates,
});
export const handleError = (error) => ({ type: HANDLE_ERROR, error });

export const fetchData = () => async (dispatch) => {
  try {
    const response = await stocksAPI.fetchData();
    dispatch(setStocks(response.data));
  } catch (error) {
    dispatch(handleError(error));
  }
};
