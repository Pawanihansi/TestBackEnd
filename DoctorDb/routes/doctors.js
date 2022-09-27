const router = require("express").Router();
let Doctor = require("../models/Doctor");

router.route("./add").post((req,res) =>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const NIC = Number(req.body.NIC);

    const newDoctor = new Doctor ({
        name,
        age,
        gender,
        NIC
    })
    newDoctor.save().then( ()=> {
        red.json("Doctor added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Doctor.find().then((doctors)=>{
        res.json(doctors)
    }).catch((err)=>{
        console.log(err);
    })

})

module.exports = router;
