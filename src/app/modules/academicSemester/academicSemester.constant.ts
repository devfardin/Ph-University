import { TAcademicSemestercode, TAcademicSemesterName, TMonths } from "./academicSemester.interface";

export const months: TMonths[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const academicSemesterName: TAcademicSemesterName[] = [
    'Autumn',
    'Summar',
    'Fall'
]
export const academicSemestercode: TAcademicSemestercode[] = [
    '01',
    '02',
    '03'
] 


  type TAcademicSemesterNameCodeMapper ={
        [key:string] : string
    }
    export const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
        Autumn: '01',
        Summar: '02',
        Fall: '03,'
    } 