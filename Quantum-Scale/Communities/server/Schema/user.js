const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create constructor for the user Schema
const userSchema = newSchema({
    name: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true
    },
    password: {
        type: string,
        required: true
    },
})

const User= mongoose.model("User", userSchema);
model.export = User;