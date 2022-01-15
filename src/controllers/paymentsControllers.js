/** @format */

import dot from "dotenv";
dot.config();

import Stripe from "stripe";

// const stripe_key = process.env.STRIPE_SECRETE_KEY;

const stripe = Stripe(process.env.STRIPE_SECRETE_KEY);

export const paymentItent = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.total,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true
      }
    });
    res.send({ paymentIntentSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error.message);

    setTimeout(() => {
      res.send({ msg: error.message });
    }, 10000);
  }
};
