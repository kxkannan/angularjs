angular
  .module("ladderApp")
  .service('myAuthService', function() {
    
    this.login = function(username, password){
        console.log("username " + username + " password " + password);
        if ((username === "John" && password === "Test1234") ||
           (username === "Andy" && password === "Test1234")) {
             return true;
        } else {
            return false;
        }
    }
   
    
})