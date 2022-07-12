const helpers = {
  getError(errors, prop) {
    try {
      return errors.mapped()[prop].msg;
      //errors.mapped contverts and returns errors array as objects 
      //prop looks for sub object {email,pass,passconf}
      //msg is property value of sub objects error text
    } catch (err) {
      return ''; 
    }
  }
} 

export default helpers;