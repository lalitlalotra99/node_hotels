const express = require('express')
const router = express.Router()
const Person = require('../models/Person')

// New Try Catch Method Post route to add a person.
router.post('/', async (req,res)=>{
    try{
      const data = req.body // Assuring the data in request body from the client.
  
      const newPerson = new Person(data) // create a newPerson model using the mongoose model.
  
      // save the newperson in the database
      const response = await newPerson.save()
      console.log("data is Saved Successfully")
      res.status(200).json(response)
    }catch(err){
      console.log(err)
      res.status(500).json({error:'Internal Server Error'})
    }
  })


  // Get Method to get the person Data.
router.get('/', async (req,res)=>{
    try{
      const data = await Person.find()
      console.log("Data Fetched Successfully")
      res.status(200).json(data)
    }catch(err){
      console.log(err)
      res.status(500).json({error:"Internal Server Error"})
    }
  })


  router.get('/:workType', async (req,res)=>{
    try{
      const workType = req.params.workType  // Extract the workType from the url parameters
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
  
        const responsepara = await Person.find({work: workType})
        console.log("Parameter have been find")
        res.status(200).json(responsepara)
      }else{
        res.status(500).json({error:"Internal server is not working"})
      }
    }catch(err){
      console.log(err)
      res.status(500).json({error: "Internal error"})
    }
  })

  router.put('/:id' , async (req,res)=>{
    try{
        const personId = req.params.id // Extracted all the id from the data. 
    const updatePersonData = req.body // Update data from the person.

    const responseupdate =await Person.findByIdAndUpdate(personId , updatePersonData, {
        new :true, // Return the Update values
        newValidators: true  // run Mongoose Validators
    })
    if(!responseupdate){
        return res.status(404).json({error: "Person not Found "})
    }

    console.log("Data Updated Successfully")
    res.status(200).json(responseupdate)
    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server not updated"})
    } 
  })

  router.delete('/:id', async (req,res)=>{
    try{
        const personId = req.params.id // Extracted all the id from the data. 

        const response = await Person.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error: "Person not Found "})
        }
        console.log("Data deleted successfully")
        res.status(200).json({message: "Person Deleted Successfully"})

    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server not updated"})
    }
  })

  module.exports = router