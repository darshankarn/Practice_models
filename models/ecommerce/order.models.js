import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    orderBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    selledBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELED', 'DELIVERED'],
      default: 'PENDING',
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
