import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../config";
import bcrypt from 'bcrypt';
const UserSchema = new Schema<TUser>({
    id: {
        type: String,
        required: [true, 'Id is required'],
        unique: true
    },
    password: {
        type: String,
    },
    needsPasswordChange: {
        type: Boolean,
        default: true,
    },
    role: {
        type: String,
        enum: ['admin', 'student', 'faculty'],
    },
    status: {
        type: String,
        enum: ['in-progress', 'blocked'],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
})


// pre save middleware or hook
UserSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds))
    next();
})

// when not showing any filed value
UserSchema.post('save', async function (doc, next) {
    doc.password = '';
    next();
})

export const UserModel = model<TUser>('User', UserSchema);