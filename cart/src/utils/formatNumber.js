// Formato numero internazionale
const formatNumber = (number) => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(number);
};

export default formatNumber;
