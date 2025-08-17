import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
import config from '../../config';
import {
  studentId,
  TGuardian,
  TLocalGardian,
  TStudent,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    require: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    require: true,
  },
});
const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});
const localGrardianSchema = new Schema<TLocalGardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});
const StudentSchema = new Schema<TStudent, studentId>({
  id: {
    type: String,
    required: [true, 'Student Id is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    maxLength: [20, 'passowrd not more then 20 chaarecter']
  },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ['mail', 'femail'],
  },
  dataOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(value)) {
          return true
        } else {
          return false
        }
      },
      message: '{VALUE} is not valid Email',
    }
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNumber: {
    type: String,
    required: true,
  },
  bloodgroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
  },
  permanentAddress: {
    type: String,
  },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGrardian: {
    type: localGrardianSchema,
    required: true,
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  }
},{
  toJSON:{
    virtuals: true,  //allow to create virtual fileds
  }
});

// Create an virtual filed for example full name
StudentSchema.virtual('FullName',).get(function(){
  return (`${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`)
})
// pre save middleware or hook
StudentSchema.pre('save', async  function(next) {
  const user = this;
 user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds))
 next();
})

// when not showing any filed value
StudentSchema.post('save', async function(doc, next){
  doc.password = '';
  next();
})


// when search all student without deleted student this function will be worked
StudentSchema.pre('find', async function(next){
this.find({isDeleted: { $ne: true }})
next();
})
StudentSchema.pre('findOne', async function(next){
this.find({isDeleted: { $ne: true }})
next();
})


// create custom static
StudentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await studentModel.findOne({ id })
  return existingUser;
}


export const studentModel = model<TStudent, studentId>('student', StudentSchema);


