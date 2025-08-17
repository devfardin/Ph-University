import { Model } from "mongoose";

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type TLocalGardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: 'mail' | 'femail';
  email: string;
  dataOfBirth: string;
  contactNo: string;
  emergencyContactNumber: string;
  bloodgroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGrardian: TLocalGardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
  isDeleted: boolean,
};

export interface studentId extends Model<TStudent>{
  isUserExists(id: string) : Promise<TStudent | null>
}