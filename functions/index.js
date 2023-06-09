const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IkzH9SD76ru0KuTqYCtDFF7DEeti3RLoq2tUQ8OAl5wlB5fvuONfuYUkWxgFpEhaSF89dPG6TOHO58Dnn997oKQ00HMQdfA2l"
);
// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) =>
  response.status(200).send("hello universe this is chetan kushwah")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "INR",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// - example Endpoint

// http://localhost:5001/the-local-store-e40b7/us-central1/api
