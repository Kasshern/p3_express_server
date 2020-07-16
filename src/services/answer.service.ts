import * as answerDao from '../daos/answer.dao';
import { Answer } from '../models/Answer';


export function getAnswersByUserId(id: number): Promise<Answer[]> {
    return answerDao.getAnswersByUserId(id);
}

export function getAnswersByQuestionId(id: number): Promise<Answer[]> {
    return answerDao.getAnswersByQuestionId(id);
}

export function getAcceptedAnswerByQuestionId(id: number): Promise<Answer> {
    return answerDao.getAcceptedAnswerByQuestionId(id);
}

// create new answer
export function saveAnswer(answer: any): Promise<Answer> {
    const newAnswer = new Answer(
        undefined,
        answer.userId,
        answer.questionId,
        answer.content,
        new Date()
    );
    if ( answer.userId &&
        answer.questionId &&
        answer.content) {
        return answerDao.saveAnswer(newAnswer);
    } else {
        return new Promise((resolve, reject) => reject(422));
    }
}
