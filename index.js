import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "nickgalant";
const yourPassword = "IAmTheBest";
const yourAPIKey = "86566167-2050-4bc8-b540-bc3f261a9efb";
const yourBearerToken = "1c25d8ba-929a-497a-b9e5-5be71482cd6b";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  try {
    const response = await axios.get(`${API_URL}random`);
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });
  } catch(error) {
    console.error(error);
  }

  //The data you get back should be sent to the ejs file as "content"
  //make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  try {
    const response = await axios.get(`${API_URL}all?page=2`,{
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });
  } catch(error) {
    console.error(error);
  }
});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //You need to provide a query parameter of apiKey in the request.
  try {
    const response = await axios.get(`${API_URL}filter?score=5`,{
      params: { 
        apiKey: yourAPIKey, 
       } 
    });
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });
  } catch(error) {
    console.error(error);
  }
});

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  try {
    const response = await axios.get(`${API_URL}secrets/42`,{
      headers: { 
        "Authorization": `Bearer ${yourBearerToken}`,
      },
    });
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });
  } catch(error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
