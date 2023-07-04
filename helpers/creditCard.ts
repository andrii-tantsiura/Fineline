export const checkIsCreditCardExpired = (expirationDate: string): boolean => {
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

export const isValidCreditCardNumber = (cardNumder: string): boolean => {
  let sumDigits: number = 0;

  const spaceRegex = / /g;
  const nums = cardNumder.replace(spaceRegex, "");

  for (let i = 0; i < nums.length; i++) {
    let num = parseInt(nums[i]);

    sumDigits += i % 2 === 0 && 9 < (num *= 2) ? num - 9 : num;
  }

  return sumDigits % 10 === 0;
};
