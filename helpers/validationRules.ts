import { NAME_REGEX, PHONE_REGEX } from "../constants/validationRegex";
import { ValidationErrorMessages } from "../enums/validationMessages";

const NAME_RULES = {
  required: ValidationErrorMessages.REQUIRED,
  minLength: { value: 2, message: ValidationErrorMessages.LESS_THAN_2_CHARS },
  maxLength: {
    value: 50,
    message: ValidationErrorMessages.LONGER_THAN_50_CHARS,
  },
  pattern: {
    value: NAME_REGEX,
    message: ValidationErrorMessages.UNCORRECTED_FORMAT,
  },
};

const PHONE_RULES = {
  required: ValidationErrorMessages.REQUIRED,
  pattern: {
    value: PHONE_REGEX,
    message: ValidationErrorMessages.UNCORRECTED_FORMAT,
  },
};

const ADDRESS_RULES = {
  required: ValidationErrorMessages.REQUIRED,
  maxLength: {
    value: 150,
    message: ValidationErrorMessages.LONGER_THAN_50_CHARS,
  },
};

const COMMENT_RULES = {
  maxLength: {
    value: 200,
    message: ValidationErrorMessages.LONGER_THAN_50_CHARS,
  },
};

export { NAME_RULES, PHONE_RULES, ADDRESS_RULES, COMMENT_RULES };
