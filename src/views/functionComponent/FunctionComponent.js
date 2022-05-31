export const nullcheck = (e) => {
  if (e === null || e === "" || e.length <= 0) {
    return false;
  } else return true;
};

/**
 * Explanation or Description of this method
 *
 * @author 
 * @create date
 * @param value1
  @return true (valid) false (invalid) 
 */

let emailchk =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const validateEmail = (email) => {
  if (emailchk.test(email)) {
    return true;
  }
  return false;
};

const namechk = /^[A-Za-z]+$/;
export const validateName = (name) => {
  if (namechk.test(name)) {
    return true;
  } else {
    return false;
  }
};

let numberFormat = /^[0-9]{0,9}(\.[0-9]{1,2})?$/;
export const validateNumber = (value) => {
  if (value.test(numberFormat)) {
    return true;
  } else return false;
};
