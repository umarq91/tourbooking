/*
High Order Function or a Wrapper for Async Functions to easily Wrap functions wihtout writing async and try catch again and again
 2 Ways to do it.
 1- Promises 2- try Catch
 */

//  const asyncHandler = (fn)=>{
//     (req,res,next)=>{
        
//         Promise.resolve(fn(req,res,next)).catch((err)=>next(err))
//     }
//  }

const asyncHandler = (fn)=>(req,res,next)=>{
   try {
        fn(req,res,next)
   } catch (error) {
        res.status(error.code ||500)
        .json({
            success:false,
            status:error.status || 500,
            message:error.message || 'Something went wrong in the server'
        })
   }
}