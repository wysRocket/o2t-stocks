import { stocksAPI } from "../api/api";

const SET_STOCK = "SET_STOCK";
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
    case SET_STOCK: {
      return {
        ...state,
        data:
          state.data.length === 20
            ? [...state.data.splice(1, 19), ...action.payload]
            : [...state.data, ...action.payload],
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
      return { ...state, error: action.error };
    }
    default:
      return state;
  }
};

export const setStock = (payload) => ({ type: SET_STOCK, payload });

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

    const payload = response.data.map((i) => ({
      timestamp: i.timestamp,
      index: i.index,
      NASDAQ: i.stocks.NASDAQ.toFixed(2),
      CAC40: i.stocks.CAC40.toFixed(2),
    }));

    dispatch(setStock(payload));
    dispatch(handleError(""));
  } catch (error) {
    dispatch(handleError(error.message));
  }
};
