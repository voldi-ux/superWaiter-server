/** @format */

import dot from "dotenv";
dot.config();

import Stripe from "stripe";

const stripe_key = process.env.STRIPE_SECRETE_KEY;
const card = {
  'type' : 'card',
  'card': {
    'number' : '4242424242424242',
    'exp_month' : 12,
    'exp_year' : 2020,
    'cvc' : '314',
  }
}


const stripe = Stripe(`${stripe_key}`);

export const paymentItent = async (req, res) => {
  try {
  
         const paymentIntent = await stripe.paymentIntents.create({
           amount: req.body.total,
           currency: "eur",
           automatic_payment_methods: {
             enabled: true
           }
         });
        
        res.send({ paymentIntent: paymentIntent.client_secret});
    } catch (error) {
        console.log(error.message)
    }

}