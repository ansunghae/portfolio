const express = require('express');
const app = express();
const port = 80;

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
});


// app.use((req,res)=>{
// 	res.sendFile(__dirname + "/404.html");
// });

app.listen(port, () => {
    console.log("====================");
    console.log(`📢 Server On at http://localhost:${port}`);
    console.log("====================");
})