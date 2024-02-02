class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // Note : setter ne kyare pan return karvama aavtu nathi 

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email =value
    }
    get password(){ // jya getter mate get and ena ma pote je method tarike thayi jay che 
        return this._password.toUpperCase()
    }
    

    set password(value){
        this._password = value
    }
}
const harsh = new User("h@rsh.ai","abc")
console.log(harsh.password);

console.log(harsh.email)