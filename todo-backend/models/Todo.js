import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  text: {
    type: String,
    default: "Unknown",
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Todo", todoSchema);
