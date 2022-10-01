const router = require("express").Router();
let Doctor = require("../models/Doctor");

router.route("/add").post((req,res) =>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const nic = Number(req.body.nic);

    const newDoctor = new Doctor ({
        name,
        age,
        gender,
        nic
    })
    newDoctor.save().then( ()=> {
        res.json("Doctor added")
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
    const {name,age,gender,nic}= req.body;

    const updateDoctors = {
        name,
        age,
        gender,
        nic
    }
const update = await Doctor.findByIdAndUpdate (userId,updateDoctors)
.then(()=>{
    res.status(200).send({status:"User Update"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data", error: err.message});
})
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id; 

await Doctor.findByIdAndDelete (userId)
.then(()=>{
    res.status(200).send({status:"User Deleted"});
}).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with delete user ", error: err.message});
})
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id; 

const user = await Doctor.findById(userId)
.then(()=>{
    res.status(200).send({status:"User fetched",user: user})
}).catch(()=>{
    console.log(err.message);
    res.status(500).send({status:"Error with get user ", error: err.message});
 })
})



module.exports = router;