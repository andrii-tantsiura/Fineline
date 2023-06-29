export enum ValidationErrorMessages {
  REQUIRED = "This is a required field",
  LESS_THAN_2_CHARS = "The field value must be greater than 2 characters",
  LESS_THAN_19_CHARS = "The field value must be greater than 19 characters",
  LONGER_THAN_50_CHARS = "The value must be less than 50 characters long",
  LONGER_THAN_150_CHARS = "The value must be less than 150 characters long",
  LONGER_THAN_200_CHARS = "The value must be less than 200 characters long",
  INVALID_NAME = "The name must contain only the characters: a-z ,.'-",
  INVALID_MOBILE_NUMBER = "Invalid mobile number",
  INCORRECT_CARD_NUMBER_FORMAT = "Invalid card number",
  INVALID_CVC = "Invalid CVC",
  INVALID_EXPIRATION_DATE = "Invalid expiration date",
}
