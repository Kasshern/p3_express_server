/* istanbul ignore file */
export class QuestionStatus {
    questionId: number;
    questionStatus: boolean;

    static from(obj: QuestionStatusRow): QuestionStatus {
        const questionStatus = new QuestionStatus(
            obj.question_id,
            obj.question_status
        );
        return questionStatus;
    }

    constructor(questionId: number, questionStatus: boolean) {
        this.questionId = questionId;
        this.questionStatus = questionStatus;
    }
}

export interface QuestionStatusRow {
    question_id: number;
    question_status: boolean;
}