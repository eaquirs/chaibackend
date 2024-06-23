const express =require("express") 
const app = express()
const port = process.env.port|| 4000;

app.get('/', (req, res) => {
  res.send('npm World!')
})

app.get('/twitter',(req,res)=>{

    res.send("Hello Twitter from safdar")
})

app.get('/html',(req, resp)=>{
    resp.send("<h1> Hello Html Sent</h1>")
})
app.get('/safdar',(req, resp)=>{
    resp.send("<h1> Hello Html Sent from safdar command</h1>")
})
app.get('/fruits',(req, resp)=>{
    resp.send([{

           name :"safdar",
           age:31,
           sirname:"Iqbal"

    },
{
    name :"safdar 2",
    age:31,
    sirname:"Iqbal"

},
{
    name :"safdar 3",
    age:31,
    sirname:"Iqbal"

}

])
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})