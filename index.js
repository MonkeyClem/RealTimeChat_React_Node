/*First, we import express, which run the http server

Tout d'abord, nous importons express, qui nous sert à faire fonctionner notre serveur HTTP
ainsi que CORS, afin que le serveur puisse être depuis n'importe quelle origine

https://blog.chatengine.io/fullstack-chat/nodejs-reactjs
*/
const express = require("express");
const cors = require("cors");
const axios = require("axios");



const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username : username, secret: username, first_name:username},
        {headers : {"private-key" : "d9229aa8-aa87-4bc7-991e-ca27a90f6642"} }
        )
        return res.status(r.status).json(r.data)
   }catch(e){
        return res.status(e.response.status).json(e.response.data)
        } 
    });

app.listen(3001);