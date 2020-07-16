import express from 'express';
import * as questionService from '../services/question.service';
import { Question } from '../models/Question';
import { QuestionAcceptedAnswer } from '../models/QuestionAcceptedAnswer';
import { QuestionStatus } from '../models/QuestionStatus';


export const questionRouter = express.Router();

//! get all questions by user id 
questionRouter.get('/userid/:id', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const id: number = parseInt(request.params.id);
    let questions: Question[];

    try {
        questions = await questionService.getQuestionsByUserId(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!questions) {
        response.sendStatus(404);
    } else {
        response.json(questions);
    }
    next();
});

//! get question by question id 
questionRouter.get('/questionid/:id', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const id: number = parseInt(request.params.id);
    let question: Question;

    try {
        question = await questionService.getQuestionByQuestionId(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!question) {
        response.sendStatus(404);
    } else {
        response.json(question);
    }
    next();
});


//! get all uncomfirmed questions 
questionRouter.get('/unconfirmed/question', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    let questions: Question[];

    try {
        questions = await questionService.getUnconfirmedQuestions();
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!questions) {
        response.sendStatus(404);
    } else {
        response.json(questions);
    }
    next();
});

//! get all  questions 
questionRouter.get('/all/question', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    let questions: Question[];

    try {
        questions = await questionService.getAllQuestions();
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!questions) {
        response.sendStatus(404);
    } else {
        response.json(questions);
    }
    next();
});

//! Post a new Question
questionRouter.post('/', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const question = request.body;
    let newQuestion: Question;

    try {
        newQuestion = await questionService.saveQuestion(question);
        response.status(201);
        response.json(newQuestion);
    } catch (err) {
        console.log(err);
        response.sendStatus(500);
        return;
    }
    next();
});

// Update Question accepted Answer Id
questionRouter.patch('/acceptedanswer', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const acceptedAnswerId = request.body;
    let updatedAcceptedAnswerId: QuestionAcceptedAnswer;

    try {
        updatedAcceptedAnswerId = await questionService.patchAcceptedAnswerId(acceptedAnswerId);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!updatedAcceptedAnswerId) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(updatedAcceptedAnswerId);
    }
    next();
});

// Update Question status
questionRouter.patch('/questionstatus', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const questionStatus = request.body;
    let updatedQuestionStatus: QuestionStatus;

    try {
        updatedQuestionStatus = await questionService.patchQuestionStatus(questionStatus);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!updatedQuestionStatus) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(updatedQuestionStatus);
    }
    next();
});

// // get questions by start_time //!NEED TO IMPLEMENT THIS
// questionRouter.get('/event//time/:time', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
//     const time: string = request.params.time;
//     let questions: Question[];

//     try {
//         questions = await questionService.getEventsByTime(time);
//     } catch (err) {
//         response.sendStatus(500);
//         return;
//     }

//     if (!questions) {
//         response.sendStatus(404);
//     } else {
//         response.json(questions);
//     }
//     next();
// });












