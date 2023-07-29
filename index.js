const express=require('express');
const app=express();
 

const path=require("path");
const body_parser=require('body-parser');
app.use(body_parser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public/"));





const mongoose=require('mongoose');
// const connect=mongoose.connect('localhost://27017/portfolio_a', {
//     useNewUrlParser:true,
// useUnifiedTopology:true,
// useCreateIndex:true
// }).then(()=>{
//     console.log("connection established");
// }).catch(()=>{
//     console.log("error");
// })


mongoose.connect("mongodb+srv://vercel-admin-user:IWYurETfKGjCa3Ov@cluster0.wvagfci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
                
    useNewUrlParser:true,
    useUnifiedTopology:true,
  
}).then(()=>{
    console.log("connection sucessfull...");
}).catch((err)=>console.log(err));













const folio=mongoose.Schema({
    name:String,
    email:String,
    message:String
});

const folioo=mongoose.model("folio_new", folio);

 


folioo.create({name:"pallavi", email:"hhh@gmail.com", message:"ffjj"})
    .then(result => {
        console.log(result)
    });



// console.log(prajw1);




app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/original.html"));
    console.log("dirname is:");
    console.log(__dirname);
});

app.post("/", async function(req, res){
try{
 
 
const new_msg=await new folioo({name:req.name, 
email:req.body.email,
message:req.body.message
}
)

const new_data=await new_msg.save();


res.send(new_data);


}catch{
    res.send("error in database");
    console.log("error occur while receiving message");
} 

})

app.listen(3000, ()=>{
    console.log("connection succeed");
});