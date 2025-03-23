// const jsonobject = '{"name":"Lalit","age":"25","city":"Pathaankot"}'
// const objectconvert = JSON.parse(jsonobject)
// console.log(objectconvert)
// // convert json object in the object formate.


// const object = {name:"vinay",age:26,city:"Mohali"}
// const jsonconvert = JSON.stringify(object)
// console.log(jsonconvert)
// convert object in json form.

// create a get api in nodejs.
const express = require('express')
const app = express()
const db = require('./db')



const bodyParser = require('body-parser')
app.use(bodyParser.json()) // req.body

app.get('/', function (req, res) {
  res.send('Welcome to hotel how can i help you')
})

app.get('/chiken',(req,res)=>{
    res.send("Chiken have been Served")
})

// // Post route to add a person. // Before Try Catch Method this method is used that time
// app.post('/person',(req,res)=>{
//   const data = req.body // Assuring the request body contain the person data. 

//   // Create a new Person model using the mongoose model.
//   const newPerson = new Person(data)

//   // Save the newPerson in the Database.
//   newPerson.save((error,person)=>{
//     if(error){
//       console.log("Error saving Model",err)
//       res.status(500).json({error:"internal Server Error"})
//     }else{
//       console.log("Data Saved successfully")
//       res.status(200).json(person)
//     }
//   })
// })


// Import the Routes Files
const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')

// Use the Routes
app.use('/person', personRoutes)
app.use('/menu', menuRoutes)


app.listen(3000,()=>{
    console.log("server is started in 3000 Port")
})