const router    = require("express").Router();
const User      = require("../models/User");
const CryptoJS  = require("crypto-js");

//Update
router.put("/:id", async (req,res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.password) {
            req.password = CryptoJS.AES.encrypt(
                req.password,
                process.env.SECRET_KEY
            ).toString();
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req,
            },
            {new: true})
            res.status(200).json(updateUser);
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You can update only your account!")
    }
});

//Delete
router.delete("/:id", async (req,res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted...");
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You can delete only your account!")
    }
});

//Get User
router.get("/find/:id", async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info} = user._doc;
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json(error)
    }
});

//Get All Users
router.get("/", async (req, res)=>{
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(403).json("Youn are not allowed to see all users!");
        }
    }
});

//Get User Stats
router.get("/stats", async (req,res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() -1);
    try {
        const data = await User.aggregate([
            {
                $project: {
                  month: { $month: "$createdAt" },
                },
              },
              {
                $group: {
                  _id: "$month",
                  total: { $sum: 1 },
                },
              },
        ]);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router