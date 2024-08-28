export const checkValidData = (email, password) => {
  const error = {};  

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    

  if (!isEmailValid){
    error.email = "Email is not valid";
  }
  if (!isPasswordValid){
    error.password = "Password is not valid";
  } 
  

  return Object.keys(error).length ? error :null;
};
