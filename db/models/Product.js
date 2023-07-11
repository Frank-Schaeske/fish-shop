import mongoose from "mongoose";
import "./Review";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  currency: String,
  reviews: { type: [mongoose.Schema.Types.ObjectId], ref: "Review" },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
