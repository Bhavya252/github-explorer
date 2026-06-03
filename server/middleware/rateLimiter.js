import rateLimit from "express-rate-limit";


const limiter = rateLimit({
    windowMs : 60 * 1000, // 1 minute
    max:20,

    message:{
        success: false,
        error: "Too many requests from this IP, please try again after a minute"
    }
});

export default limiter;