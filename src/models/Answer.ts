export class Answer {
    id: number;
    userId: number;
    questionId: number;
    content: string;
    creationDate: Date;


    static from(obj: AnswerRow): Answer {
        const answers = new Answer(
            obj.id,
            obj.user_id,
            obj.question_id,
            obj.content,
            new Date(obj.creation_date),
        );
        return answers;
    }

    constructor( id: number,
        userId: number,
        questionId: number,
        content: string,
        creationDate: Date,
    ) {
        this.id = id;
        this.userId = userId;
        this.questionId = questionId;
        this.content = content;
        this.creationDate = creationDate;
    }
}

export interface AnswerRow {
    id: number;
    user_id: number;
    question_id: number;
    content: string;
    creation_date: Date;
}
