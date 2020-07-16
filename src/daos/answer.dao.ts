/* istanbul ignore file */
import { db } from './db';
import { AnswerRow } from '../models/Answer';
import { Answer } from '../models/Answer';


// getAnswersByUserId 
export async function getAnswersByUserId(id: number): Promise<Answer[]> {
    const sql = 'SELECT answers.* FROM answers WHERE answers.user_id = $1';

    const result = await db.query<AnswerRow>(sql, [id]);
        return result.rows.map(Answer.from);
}

// getAnswersByQuestionId
export async function getAnswersByQuestionId(id: number): Promise<Answer[]> {
    const sql = 'SELECT answers.* FROM answers WHERE answers.question_id = $1';

    const result = await db.query<AnswerRow>(sql, [id]);
        return result.rows.map(Answer.from);
}

// getAcceptedAnswerByQuestionId
export async function getAcceptedAnswerByQuestionId(id: number): Promise<Answer> {
    const sql = 'SELECT answers.* FROM questions INNER JOIN answers ON questions.accepted_answer_id = answers.id WHERE questions.id = $1';

    const result = await db.query<AnswerRow>(sql, [id]);
        return result.rows.map(Answer.from)[0];
}

//saveAnswer
export async function saveAnswer(answer: Answer): Promise<Answer> {
    const sql = `INSERT INTO answers (user_id, question_id, content , creation_date) \
    VALUES ($1, $2, $3, $4) RETURNING *`;

    const result = await db.query<AnswerRow>(sql, [
        answer.userId,
        answer.questionId,
        answer.content,
        new Date()
    ]);

    return result.rows.map(Answer.from)[0];
}
