import express from 'express';
import * as answerService from '../services/answer.service';
import * as authenticator from './authentication.router';
import { Answer } from '../models/Answer';


export const answerRouter = express.Router();

//! get all answers by user id 
answerRouter.get('/userid/:id', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const id: number = parseInt(request.params.id);
    let answers: Answer[];

    try {
        answers = await answerService.getAnswersByUserId(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!answers) {
        response.sendStatus(404);
    } else {
        response.json(answers);
    }
    next();
});

//! get all answers by question id 
answerRouter.get('/questionid/:id', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const id: number = parseInt(request.params.id);
    let answers: Answer[];

    try {
        answers = await answerService.getAnswersByQuestionId(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!answers) {
        response.sendStatus(404);
    } else {
        response.json(answers);
    }
    next();
});


//! get accepted answer by question id 
answerRouter.get('/acceptedanswer/questionid/:id', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const id: number = parseInt(request.params.id);
    let answer: Answer;

    try {
        answer = await answerService.getAcceptedAnswerByQuestionId(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!answer) {
        response.sendStatus(404);
    } else {
        response.json(answer);
    }
    next();
});

//! Post a new Answer
answerRouter.post('/', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const answer = request.body;
    let newAnswer: Answer;

    try {
        newAnswer = await answerService.saveAnswer(answer);
        response.status(201);
        response.json(newAnswer);
    } catch (err) {
        console.log(err);
        response.sendStatus(500);
        return;
    }
    next();
});
