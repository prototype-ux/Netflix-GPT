

const validateform = (email,password) => {
    //const verifyName=/\b([-,a-z. ']+[ ]*)+/.test(name);
  const verifyEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  
  const veriifyPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  //if(!verifyName) return ("Name is invalid!!")
  if(!verifyEmail) return ("Email Id is invalid!!")
if(!veriifyPassword) return ("Password is invalid!!")
 else return null

}

export default validateform
