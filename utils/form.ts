type FormModel = {
  [key: string]: string;
};

export const isAnyFormFieldNotEmpty = (fields: FormModel): boolean => {
  return Object.values(fields).some((x) => Boolean(x));
};
