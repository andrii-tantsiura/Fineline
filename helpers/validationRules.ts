import { UseControllerProps } from "react-hook-form";

import {
  CARD_NUMBER_REGEX,
  CVC_REGEX,
  MM_YY_DATE_REGEX,
  NAME_REGEX,
  PHONE_REGEX,
} from "../constants";
import { ValidationErrorMessages } from "../enums";
import {
  checkIsCreditCardExpired,
  isValidCreditCardNumber,
} from "./creditCard";

type RulesType = UseControllerProps["rules"];

const NAME_RULES: RulesType = {
  required: ValidationErrorMessages.REQUIRED,
  minLength: {
    value: 2,
    message: ValidationErrorMessages.LESS_THAN_2_CHARS,
  },
  maxLength: {
    value: 50,
    message: ValidationErrorMessages.LONGER_THAN_50_CHARS,
  },
  pattern: {
    value: NAME_REGEX,
    message: ValidationErrorMessages.INVALID_NAME,
  },
};

const PHONE_RULES: RulesType = {
  required: ValidationErrorMessages.REQUIRED,
  pattern: {
    value: PHONE_REGEX,
    message: ValidationErrorMessages.INVALID_MOBILE_NUMBER,
  },
};

const ADDRESS_RULES: RulesType = {
  required: ValidationErrorMessages.REQUIRED,
  maxLength: {
    value: 150,
    message: ValidationErrorMessages.LONGER_THAN_150_CHARS,
  },
};

const COMMENT_RULES: RulesType = {
  maxLength: {
    value: 200,
    message: ValidationErrorMessages.LONGER_THAN_200_CHARS,
  },
};

const CARD_NUMBER_RULES: RulesType = {
  required: ValidationErrorMessages.REQUIRED,
  pattern: {
    value: CARD_NUMBER_REGEX,
    message: ValidationErrorMessages.INCORRECT_CARD_NUMBER_FORMAT,
  },
  validate: {
    isValidCardNumber: (fieldValue) =>
      isValidCreditCardNumber(fieldValue) ||
      ValidationErrorMessages.INCORRECT_CARD_NUMBER_FORMAT,
  },
};

const MM_YY_DATE_RULES: RulesType = {
  required: ValidationErrorMessages.REQUIRED,
  pattern: {
    value: MM_YY_DATE_REGEX,
    message: ValidationErrorMessages.INVALID_EXPIRATION_DATE,
  },
  validate: {
    expiredDate: (fieldValue) =>
      !checkIsCreditCardExpired(fieldValue) ||
      ValidationErrorMessages.CARD_HAS_EXPIRED,
  },
};

const CVC_RULES: RulesType = {
  required: ValidationErrorMessages.REQUIRED,
  pattern: {
    value: CVC_REGEX,
    message: ValidationErrorMessages.INVALID_CVC,
  },
};

export {
  ADDRESS_RULES,
  CARD_NUMBER_RULES,
  COMMENT_RULES,
  CVC_RULES,
  MM_YY_DATE_RULES,
  NAME_RULES,
  PHONE_RULES,
};
