export const costCalculator = (cost, quantity) => {
  return cost * quantity;
};

export const currencyFormatter = (figure) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(figure);
};
