
# API Authentication with Axios and Express

## This project demonstrates various methods of API authentication using Axios (a promise-based HTTP client for the browser and Node.js) and Express (a web application framework for Node.js). The project covers the following authentication methods:

1. No Authentication
2. Basic Authentication
3. API Key Authentication
4. Bearer Token Authentication

## Project Structure

    ```bash
    .
    ├── README.md
    ├── package.json
    ├── index.js
    └── views
        ├── index.ejs


## Setup Instructions
1. Clone the repository
    ```bash
    git clone git@github.com:Nickgalant/api-authentication.git
2. Install dependencies
    ```bash
    npm install
3. Start the server
    ```bash
    node index.js

## Authentication Methods
### No Authentication
    ```bash
    import express from "express";
    import axios from "axios";

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

### Basic Authentication
    ```bash
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
### API Key Authentication
    ```bash
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
### Bearer Token Authentication
    ```bash
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


This project demonstrates the basic concepts of API authentication using Axios and Express. You can expand upon these examples to suit your specific needs and enhance security as required for your applications.