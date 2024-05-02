import mongoose, {Schema, model} from "mongoose";

const subscriptionSchema = new Schema({
    Subscriber: {
        type: Schema.Types.ObjectId, // one who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // one to whom subscriber is  subcribing
        ref: "User"
    }

}, {timestamps: true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)