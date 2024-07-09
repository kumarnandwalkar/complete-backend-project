// there are two ways to write this, one is by 
// try catch and one is by Promises

const asyncHandler = (requesthandler) => {
    (req, res, next) => {
        Promise.resolve(req, res, next).reject((err) => {next(err)})
    }
}



export {asyncHandler}


// asynchandel by try catch 

// const asyncHandler = (fn) => {async (req, res, next) => {
//     try {
//         await fn (req, res, next)

//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })     
//     }
// }}
