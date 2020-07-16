export class Question {
    id: number;
    acceptedAnswerId: number;
    title: string;
    content: string;
    creationDate: Date;
    status: boolean;
    userId: number;

    static from(obj: QuestionRow): Question {
        const questions = new Question(
            obj.id,
            obj.accepted_answer_id,
            obj.title,
            obj.content,
            new Date(obj.creation_date),
            obj.status,
            obj.user_id,
        );
        return questions;
    }

    constructor( id: number,
        acceptedAnswerId: number,
        title: string,
        content: string,
        creationDate: Date,
        status: boolean,
        userId: number,
    ) {
        this.id = id;
        this.acceptedAnswerId = acceptedAnswerId;
        this.title = title;
        this.content = content;
        this.creationDate = creationDate;
        this.status = status;
        this.userId = userId;
    }
}

export interface QuestionRow {
    id: number;
    accepted_answer_id: number;
    title: string;
    content: string;
    creation_date: Date;
    status: boolean;
    user_id: number;
}
