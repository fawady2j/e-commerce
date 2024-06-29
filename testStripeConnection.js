require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_KEY);

const app = express();
const port = 3001;

app.get("/test-stripe", async (req, res) => {
  try {
    const account = await stripe.accounts.retrieve();
    res.send(`Connected to Stripe! Account ID: ${account.id}`);
  } catch (error) {
    console.error("Stripe API error:", error.message);
    res.status(500).send("Failed to connect to Stripe.");
  }
});

app.get("/retrieve-product", async (req, res) => {
  try {
    const price = await stripe.prices.retrieve(
      "price_1PWlp0Bmpd8qEBQiB5jjzk2e"
    );
    const product = await stripe.products.retrieve(price.product); // Retrieve the product related to the price ID
    res.json(product);
  } catch (error) {
    console.error("Stripe API error:", error.message);
    res.status(500).send("Failed to retrieve product.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
