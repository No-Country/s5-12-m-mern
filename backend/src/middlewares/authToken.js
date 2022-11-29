import jwt from "jsonwebtoken";

const hasToken = async (req, res, next) => {
    try{
        const {token} = req.headers
        if (!token) {
            return res.json({error: {message: 'Please send a valid token in header'}
            })
        }
        jwt.verify(token, process.env.TOKEN)
        next()
    }
    catch(e){
        res.json({error: e})
    }
}

const sendToken = async (req, res, next) => {
    // req.token = 
}
export {hasToken, sendToken}