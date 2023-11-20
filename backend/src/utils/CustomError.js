//  Hence there are 2 ways to handle Errors ,, Class and functional

// class CustomError extends Error{
//     constructor(statusCode,message){
//         super()
//         this.message=message || 'Something Went Wrong';
//         this.statusCode=statusCode || 500;
//     }
// }

// Functional
const customError = (status, message) => {
    let error = new Error();
    error.status = status || 500;
    error.message = message || 'Something went wrong';
    return error;
  };


export{customError}