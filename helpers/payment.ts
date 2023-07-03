export const checkIsCreditCardExpired = (expirationDate: string) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  const [expirationMonth, expirationYear] = expirationDate
    .split("/")
    .map(Number);

  return (
    expirationYear < currentYear ||
    (expirationYear === currentYear && expirationMonth < currentMonth)
  );
};
