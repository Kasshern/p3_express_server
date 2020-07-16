import * as questionDao from '../daos/question.dao';
import { Question } from '../models/Question';
import { QuestionAcceptedAnswer } from '../models/QuestionAcceptedAnswer';
import { QuestionStatus } from '../models/QuestionStatus';



export function getQuestionsByUserId(id: number): Promise<Question[]> {
    return questionDao.getQuestionsByUserId(id);
}

export function getQuestionByQuestionId(id: number): Promise<Question> {
    return questionDao.getQuestionByQuestionId(id);
}

export function getUnconfirmedQuestions(): Promise<Question[]> {
    return questionDao.getUnconfirmedQuestions();
}

export function getAllQuestions(): Promise<Question[]> {
    return questionDao.getAllQuestions();
}

export function saveQuestion(question: any): Promise<Question> {
    const newQuestion = new Question(
        undefined,
        null,
        question.title,
        question.content,
        new Date(),
        false,
        question.userId
    );
    if (question.title && question.content) {
        return questionDao.saveQuestion(newQuestion);
    } else {
        return new Promise((resolve, reject) => reject(422));
    }
}

export function patchAcceptedAnswerId(input: any): Promise<QuestionAcceptedAnswer> {

    const questionAcceptedAnswer = new QuestionAcceptedAnswer(
        input.questionId,
        input.acceptedAnswerId
    );

    if (!questionAcceptedAnswer.questionId) {
        throw new Error ('400');
    }

    return questionDao.patchAcceptedAnswerId(questionAcceptedAnswer);
    }

export function patchQuestionStatus(input: any): Promise<QuestionStatus> {

    const questionStatus = new QuestionStatus(
        input.questionId,
        input.questionStatus
    );

    if (!questionStatus.questionId) {
        throw new Error ('400');
    }

    return questionDao.patchQuestionStatus(questionStatus);
    }



// export function checkLoginCredentials(loginCredentials: any): Promise<LoginCredentials> {
//     const newLoginCredentials = new LoginCredentials(
//         loginCredentials.username,
//         loginCredentials.userPassword,
//         loginCredentials.userRole,
//         loginCredentials.userId,
//         loginCredentials.userRoleId
//     );
//     if (loginCredentials.username && loginCredentials.userPassword) {
//         return employeeDao.checkLoginCredentials(newLoginCredentials);
//     } else {
//         return new Promise((resolve, reject) => reject(422));
//     }
// }
