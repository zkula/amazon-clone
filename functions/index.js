const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HbUXvKHmmTdO4nFKnDQIDEbxOPQOVbM9MKnXBPEvXfwxLwH7qaywh5uWN3oCXr77K0vqPJscOdepJ8NC39xQPoZ00Dx6TBl2E"
);

//API***

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  //  201 = OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/clone-7de86/us-central1/api
