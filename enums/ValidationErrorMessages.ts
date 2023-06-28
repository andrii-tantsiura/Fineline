export enum ValidationErrorMessages {
  REQUIRED = "This field is required",
  LESS_THAN_2_CHARS = "The field value must be greater than 2 characters",
  LESS_THAN_19_CHARS = "The field value must be greater than 19 characters",
  LONGER_THAN_50_CHARS = "The value must be less than 50 characters long",
  LONGER_THAN_150_CHARS = "The value must be less than 150 characters long",
  LONGER_THAN_200_CHARS = "The value must be less than 200 characters long",
  INCORRECT_NAME_FORMAT = "The name must contain only the characters: a-z ,.'-",
  INCORRECT_PHONE_FORMAT = "The mobile number must be in the format +xxx xx xxx xxxx",
  INCORRECT_CARD_NUMBER_FORMAT = "The card number must be in the format xxxx xxxx xxxx xxxx",
  INCORRECT_CVC_FORMAT = "The cvc number must be in xxx format",
  INCORRECT_DATE_FORMAT = "Incorrect date format",
}
