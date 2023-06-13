const NAME_REGEX = /^[a-z ,.'-]+$/i;

const PHONE_REGEX =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export { NAME_REGEX, PHONE_REGEX };
