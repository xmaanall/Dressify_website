const Order = require("../models/orderModel");
const Cart = require("../models/cartModel");
const User = require("../models/user.models");
const config = require("config");
const stripe = require("stripe")(config.get("StripeAPIKey"));

module.exports.get_orders = async (req, res) => {
  const userId = req.params.id;
  Order.find({ userId })
    .sort({ date: -1 })
    .then((orders) => res.json(orders));
};

module.exports.checkout = async (req, res) => {
  try {
    const userId = req.params.id;
    let cart = await Cart.findOne({ userId });
    if (cart) {
    const order = new Order({
        userId,
        items: cart.items,
        bill: cart.bill,
      });
      order.save();
      const data = await Cart.findByIdAndDelete({ _id: cart.id });
      return res.status(201).send("Payment Successful");
    } else {
      res.status(500).send("You do not have items in cart");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports.delete_order = async (req, res) => {
  Order.findByIdAndDelete({ _id: req.params.orderId }).then(function (order) {
    res.json({ success: true });
  });
};
