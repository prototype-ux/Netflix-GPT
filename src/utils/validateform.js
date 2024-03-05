

const validateform = (email,password) => {
  const verifyEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  
  const veriifyPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if(!verifyEmail) return ("Email is invalid")
if(!veriifyPassword) return ("Password is invalid")
 else return null

}

export default validateform
