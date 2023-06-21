import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"name is required"]
    },
    email:{
        type:String,
        require:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"customer"
    }
},{timestamps:true})

// creating hashed password
userSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

//comparing the hashed passwords

userSchema.methods.comparePassword = async function (enteredPassword){
    const isCorrect = await bcrypt.compare(enteredPassword,this.password)
    return isCorrect
}

const User = mongoose.model("user",userSchema);

export default User;