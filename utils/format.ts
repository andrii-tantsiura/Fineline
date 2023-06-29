const MONEY_FORMAT = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatMoney(amount: number) {
  return MONEY_FORMAT.format(amount);
}
