const express   = require("express");
const app       = express();
const mongoose  = require("mongoose");
const dotenv    = require("dotenv");
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
const listRouter = require('./routes/lists');

dotenv.config();
mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB");
    }
);

// mongoose
// .connect(process.env.MONGO_URL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     //useCreateIndex: true
// })
// .then(()=>console.log("DB Connection success"))
// .catch(error=>console.log(error));

app.use(express.json())

// End Points
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/lists", listRouter);

// Listen Server
app.listen(8888, ()=>{
    console.log("Server is running");
})