/* istanbul ignore file */
export class QuestionAcceptedAnswer {
    questionId: number;
    acceptedAnswerId: number;

    static from(obj: QuestionAcceptedAnswerRow): QuestionAcceptedAnswer {
        const questionAcceptedAnswer = new QuestionAcceptedAnswer(
            obj.question_id,
            obj.accepted_answer_id,
        );
        return questionAcceptedAnswer;
    }

    constructor(questionId: number, acceptedAnswerId: number) {
        this.questionId = questionId;
        this.acceptedAnswerId = acceptedAnswerId;
    }
}

export interface QuestionAcceptedAnswerRow {
    question_id: number;
    accepted_answer_id: number;
}