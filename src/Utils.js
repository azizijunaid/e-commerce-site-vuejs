/* eslint-disable import/prefer-default-export */
// const reducer = (previousValue, currentValue) => previousValue.price + currentValue.price;
const reducer = (previousValue, currentValue) => previousValue + currentValue.price;
export const total = state => state.carts.reduce(reducer, 0);
