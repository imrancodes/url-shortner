import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      unique: true,
      required: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    viewHistory: [{ timeStamp: { type: Number } }],
  },
  { timestamps: true }
);

export default URL = mongoose.model('url', urlSchema);