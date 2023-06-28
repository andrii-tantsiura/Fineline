const NAME_REGEX = /^[a-z ,.'-]+$/i;

const PHONE_REGEX = /^\+[0-9]{3}\s[0-9]{2}\s[0-9]{3}\s[0-9]{4}$/;

const MM_YY_DATE_REGEX = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

const CARD_NUMBER_REGEX = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;

const CVC_REGEX = /^[0-9]{3}$/;

export {
  NAME_REGEX,
  PHONE_REGEX,
  CARD_NUMBER_REGEX,
  MM_YY_DATE_REGEX,
  CVC_REGEX,
};
