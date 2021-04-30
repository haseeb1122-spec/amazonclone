const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51IfipjJH22KBbY4W9nnsqgKvJn3dCYGZdiOanuz3i7xqTZFQQTKvkwFLbnc4XMlDsbZhUYsOLxGUnHKBtHvmU3Xm00vOPiSrVe')


// API

// App Config
const app = express();


// Middlewares
app.use(cors({origin: true }));
app.use(express.json());


// API Route
app.get("/", (request, response) => response.status(200).send('Hello World'))
 
app.post('/payments/create', async (request, response) => {
     const total = request.query.total;

     console.log(
         'payment request received boom!! for this amount >>>>>', total
     )
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, // subunits of the currency 
            currency: "usd" 
        });

        // Ok - Create
        response.status(201).send({
            clientSecret: paymentIntent.client_Secret,
        });
});


//Listen Command
exports.api = functions.https.onRequest(app);


// Example Endpoint
// http://localhost:5001/clone-ec084/us-central1/api