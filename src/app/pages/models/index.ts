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