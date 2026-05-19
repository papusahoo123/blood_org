 

// import mongoose, { Schema } from "mongoose";

// const topicSchema = new Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },

//         bloodType: {
//             type: String,
//             required: true,
//         },

//         mobile: {
//             type: String,
//             required: true,
//         },

//         email: {
//             type: String,
//             required: true,
//         },

//         address: {
//             type: String,
//             required: true,
//         },
//         message : {
//              type: String,
//              required: true,
//         },

//         // privacy controls
//         showName: {
//             type: Boolean,
//             default: true,
//         },

//         showMobile: {
//             type: Boolean,
//             default: true,
//         },

//         showEmail: {
//             type: Boolean,
//             default: false,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// const Topic =
//     mongoose.models.Topic || mongoose.model("Topic", topicSchema);

// export default Topic;



import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    bloodType: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 5, // example: A+, AB+, O-
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 11, // allow 10 or 11 digits
      match: /^[0-9]+$/, // only numbers
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    // privacy controls
    showName: {
      type: Boolean,
      default: true,
    },

    showMobile: {
      type: Boolean,
      default: true,
    },

    showEmail: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Topic =
  mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;