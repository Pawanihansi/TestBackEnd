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

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id; 
    const {name,age,gender,NIC}= req.body;

    const updateDoctors = {
        name,
        age,
        gender,
        NIC
    }
const update = await Doctor.findByIdAndUpdate (userId,updateDoctors).then(()=>{
res.status(200).send({status:"User Update", user: update})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data", error: err.message});
})
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id; 

await Doctor.findByIdAndDelete (userId).then(()=>{
res.status(200).send({status:"User Deleted"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with delete user ", error: err.message});
})
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id; 

const user = await Doctor.findById(userId).then(()=>{
res.status(200).send({status:"User fetched",user: user})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with get user ", error: err.message});
})
})



module.exports = router;