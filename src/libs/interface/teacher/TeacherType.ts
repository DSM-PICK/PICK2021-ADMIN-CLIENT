export interface IRegister {
    id: string,
    name: string,
    password: string,
    code: string
}

export interface ILogin {
    id: string,
    password: string
}

export interface IChangePassword {
    password: string
}

export interface IChangeName {
    name: string
}

export interface ITeacherInfo {
    teacher_id: string
}

export interface IStudentSearch {
    name: string
}