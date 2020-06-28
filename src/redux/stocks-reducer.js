import { stocksAPI } from "../api/api";

const SET_STOCKS = "SET_STOCKS";

let initialState = {
  data: [
    {
      timestamp: 1457372998901,
      index: 0,
      stocks: {
        NASDAQ: 14.362588925287127,
        CAC40: 7.564775763312355,
      },
    },
    {
      timestamp: 1457372999903,
      index: 1,
      stocks: {
        NASDAQ: 13.27388069476001,
        CAC40: 13.011122498428449,
      },
    },
  ],
};
export const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STOCKS: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default:
      return state;
  }
};

export const setStocks = (payload) => ({ type: SET_STOCKS, payload });

export const getLastTen = () => async (dispatch) => {
  try {
    let response = await stocksAPI.getLastTen();
    console.log(response.data);
    dispatch(setStocks(response.data));
  } catch (error) {}
};
