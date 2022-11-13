export const isValiEmail = stringEmail => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail);
};
export const isValiPassword = stringPassword => stringPassword >= 3;

export const isValiRePassword = (stringRePassword, stringPassword) =>
  stringRePassword == stringPassword;
