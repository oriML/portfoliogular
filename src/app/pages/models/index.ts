export interface ITimeLineModel {
    company: string;
    content: string;
    date: string;
    stack: string;
    role: string;
    logo?: {
        src: string;
        alt: string;
    }
    color: string;
    dir: string;
}

export interface IEducationModel {
    school: string;
    degree: string;
    content: string;
    date: string;
    stack: string;
    logo?: {
        src: string;
        alt: string;
    },
    color: string;
}

export interface ITechListModel {
    name: string;
    strength: number;
}

export interface IContactFormModel {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
}
