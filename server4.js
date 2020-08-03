
const express = require('express');
const app = express();

app.use(express.json());
 
// app.get('/', (req, res) => {
//     res.send('Oh Hi There!');
// });

app.get("/", (req, res) => {
    res.json(["Mario","Jure","Stipe"]);
   });

app.post("/login",(req,res) => {

   const user = user.findById(req.user._id).select('-password');
   res.send(user);
   const validPassword = validPassword.compare(req.body.password, user.password)


    console.log(req.body);
   if(error) return res.status(400).send(error.details[0].message);
   if(!user) return res.status(400).send('Invalid email or password.');
   if(!validPassword) return res.status(400).send('Invalid email or password.');
   if(user.isDeleted == true) res.status(400).send('The user with the given ID was not found.');
});

app.post("/register",(req,res) =>{

    console.log('register');
    
    
    if(error) return res.status(400).send(error.details[0].message);

    var message = 'User already registered.';
    let user = user.findOne({email: req.body.email});
    if(user)  return res.status(400).send(message);

    else{
        user = new User({
            role: req.body.role,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            
        });
    
       
    }

app.delete("/delete", (req,res)=>{

    const user = user.findByIdAndUpdate(req.params.id,
        {
            isDeleted: true
        },{new: true});
    if(!user) return res.status(404).send('The user with the given ID was not found.');
    res.send({message: "User " + user.username + " deleted successfully!"})
})
    

});

app.put("/planmeal", (req,res) => {

 
    const planmeal = planmeal.findById(req.params.id);
    const id = 0;
    if(!planmeal) return res.status(404).send('The measurement with the given ID was not found.');
    planmeal.data.push({planPrehrane: req.body.planPrehrane,time: new Date, id: req.body.id +1})
    planmeal.save();
    res.send(planmeal);

})

app.get("/dohvatiplan", (req,res)=>{

    const dohvatiplan = dohvatiplan.findById(req.params.id);
    if(!dohvatiplan) return res.status(404).send('The user with that id was not found!');
    res.send(dohvatiplan);

})
 
app.listen(3000, () => console.log('Listening on port 3000'));