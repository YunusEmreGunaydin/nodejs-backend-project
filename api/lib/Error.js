class CustomError extends Error{

    constructor(code,message,description){
        super(`{code:"${code}",message:"${message},title:"${description}"}`); //altgr + , 
        this.code = code;
        this.message = message;
        this.description = description;
    }


}

module.exports = CustomError;
