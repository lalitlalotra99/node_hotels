const express = require('express')
const router = express.Router()

const MenuItem = require('../models/Menu')


// New try catch to add the menu Items routes with post method.
router.post('/', async (req,res)=>{
    try{
      // Assure that the data is in the request body.
      const data = req.body 
  
      // Create the newMenu and take the menu schema and create the data from menu model.
      const newMenu = new MenuItem(data) 
  
      // save the newMenu schema in the database.
      const responsemenu = await newMenu.save()
      console.log("The Menu item is created")
      res.status(200).json(responsemenu)
  
    }catch(err){
      console.log(err)
      res.status(500).json({error:"Internal server error"})
    }
  })
  
  // New Try Catch Method to add the Get Method in the menuitems.
  router.get('/', async (req,res)=>{
    try{
      const data = await MenuItem.find()
      console.log("Data is Fetched Successfully")
      res.status(200).json(data)
    }catch(err){
      console.log(err)
      res.status(500).json({error:"Internal Server Error is Coming"})
    }
  })

  
    router.get('/:tastetype', async (req,res)=>{
      try{
        const tastetype = req.params.tastetype  // Extract the workType from the url parameters
        if(tastetype == 'sweet' || tastetype == 'spicy' || tastetype == 'sour'){
    
          const responsepara = await MenuItem.find({taste: tastetype})
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

    // Commented addde for testing purpose.
  module.exports = router