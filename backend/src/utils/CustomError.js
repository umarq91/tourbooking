//  Hence there are 2 ways to handle Errors ,, Class and functional

class CustomError extends Error{
    constructor(statusCode,message){
        super()
        this.message=message || 'Something Went Wrong';
        this.statusCode=statusCode || 500;
    }
}
/*
Functional
function CustomError (status,message)=>{
    const error=  new Error();
    this.error = status  || 500;
    this.message=message || "something went wrong"
    return error
}

*/
export{CustomError}