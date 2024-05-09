import mongoose from 'mongoose';

const SellerSchema = new mongoose.Schema(
  {
    sellername: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      unique: [true, 'Phone number is already in use.'],
      validate: {
        validator: validatePhoneNumber,
        message: 'Invalid phone number.',
      },
      default: '',
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const phoneNumberRegex = /^05\d{8}$/; // Like 0526665656

const validatePhoneNumber = (phoneNumber) => {
  return phoneNumberRegex.test(phoneNumber);
};

export const Seller = mongoose.model('Seller', SellerSchema);
