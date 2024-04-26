const Cart = require('../models/Cart');

// Get all cart items for the logged-in user
exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find({ user: req.user.id }).populate(
      'product',
      'name price'
    );
    res.json(cartItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Add a new item to the cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cartItem = await Cart.findOne({ product: productId, user: req.user.id });

    if (cartItem) {
      // If the item already exists in the cart, update the quantity
      cartItem.quantity += quantity;
      await cartItem.save();
      return res.json(cartItem);
    }

    // Create a new cart item
    cartItem = new Cart({
      product: productId,
      user: req.user.id,
      quantity,
    });

    await cartItem.save();
    res.json(cartItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update the quantity of a cart item
exports.updateCartItemQuantity = async (req, res) => {
  const { cartItemId, quantity } = req.body;

  try {
    const cartItem = await Cart.findOneAndUpdate(
      { _id: cartItemId, user: req.user.id },
      { $set: { quantity } },
      { new: true }
    );

    if (!cartItem) {
      return res.status(404).json({ msg: 'Cart item not found' });
    }

    res.json(cartItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


exports.removeCartItem = async (req, res) => {
  const cartItemId = req.params.id;

  try {
    const cartItem = await Cart.findOneAndDelete({
      _id: cartItemId,
      user: req.user.id,
    });

    if (!cartItem) {
      return res.status(404).json({ msg: 'Cart item not found' });
    }

    res.json({ msg: 'Cart item removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

 