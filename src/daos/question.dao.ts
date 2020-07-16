/* istanbul ignore file */
import { db } from './db';
import { Question, QuestionRow } from '../models/Question';
import { LoginCredentials, LoginCredentialsRow } from '../models/LoginCredentials';
import { QuestionAcceptedAnswer } from '../models/QuestionAcceptedAnswer';
import { QuestionAcceptedAnswerRow } from '../models/QuestionAcceptedAnswer';
import { QuestionStatus } from '../models/QuestionStatus';
import { QuestionStatusRow } from '../models/QuestionStatus';


// getQuestionsByUserId
export async function getQuestionsByUserId(id: number): Promise<Question[]> {
    const sql = 'SELECT questions.* FROM questions WHERE questions.user_id = $1';
    const result = await db.query<QuestionRow>(sql, [id]);
        return result.rows.map(Question.from);
}

// getQuestionByQuestionId
export async function getQuestionByQuestionId(id: number): Promise<Question> {
    const sql = 'SELECT questions.* FROM questions WHERE questions.id = $1';
    const result = await db.query<QuestionRow>(sql, [id]);
        return result.rows.map(Question.from)[0];
}

// getUnconfirmedQuestions
export async function getUnconfirmedQuestions(): Promise<Question[]> {
    const sql = `SELECT questions.* FROM questions WHERE questions.status = 'false'`;
    const result = await db.query<QuestionRow>(sql);
        return result.rows.map(Question.from);
}

// getAllQuestions
export async function getAllQuestions(): Promise<Question[]> {
    const sql = 'SELECT questions.* FROM questions';
    const result = await db.query<QuestionRow>(sql);
        return result.rows.map(Question.from);
}

// saveQuestion
export async function saveQuestion(question: Question): Promise<Question> {
    const sql = `INSERT INTO questions (user_id, title, content , creation_date , status) \
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;

    const result = await db.query<QuestionRow>(sql, [
        question.userId,
        question.title,
        question.content,
        new Date(),
        false
    ]);

    return result.rows.map(Question.from)[0];
}

// patchAcceptedAnswerId
export async function patchAcceptedAnswerId(questionAcceptedAnswer: QuestionAcceptedAnswer): Promise<QuestionAcceptedAnswer> {
    console.log(questionAcceptedAnswer);
    const sql = `UPDATE questions SET accepted_answer_id = COALESCE($1, accepted_answer_id ) \
    WHERE id = $2 RETURNING *`;

    const result = await db.query<QuestionAcceptedAnswerRow>(sql, [
        questionAcceptedAnswer.acceptedAnswerId,
        questionAcceptedAnswer.questionId
    ]);
    return result.rows.map(QuestionAcceptedAnswer.from)[0];
}

// patchQuestionStatus
export async function patchQuestionStatus(questionStatus: QuestionStatus): Promise<QuestionStatus> {
    const sql = `UPDATE questions SET status = COALESCE($1, status ) \
    WHERE questions.id = $2 RETURNING *`;

    const result = await db.query<QuestionStatusRow>(sql, [
        questionStatus.questionStatus,
        questionStatus.questionId
    ]);
    return result.rows.map(QuestionStatus.from)[0];
}






// export async function checkLoginCredentials(loginCredentials: LoginCredentials): Promise<LoginCredentials> {
//     const userExists: boolean = await usernameExists(loginCredentials.username);
//     if (!userExists) {
//         return undefined;
//     }

//     const sql = `SELECT ers_username, ers_password, user_role, ers_users_id, user_role_id FROM ers_users LEFT JOIN \
//                     ers_user_roles ON user_role_id = ers_user_role_id WHERE ers_users.ers_username = $1`;

//     const result = await db.query<LoginCredentialsRow>(sql, [
//         loginCredentials.username
//     ]);
//     return  result.rows.map(LoginCredentials.from)[0];
// }

// export async function usernameExists(username: string): Promise<boolean> {
//     const sql = `SELECT EXISTS(SELECT ers_username FROM ers_users WHERE ers_username = $1)`;
//     const result = await db.query<Exists>(sql, [username]);
//     return result.rows[0].exists;
// }

// interface Exists {
//     exists: boolean;
// }




// // get all events within a location //! Change this to search by state and city 
// export async function getEventsByLocation(location: string): Promise<SocialEvent[]> {
//     const sql = 'SELECT * FROM events INNER JOIN event_locations ON events.id = event_id WHERE state = $1 AND city = $2';

//     const result = await db.query<SocialEventRow>(sql, [location]);
//         return result.rows.map(SocialEvent.from);
// }

// // get all events by type 
// export async function getEventsByType(type: string): Promise<SocialEvent[]> {
//     const sql = 'SELECT events.* FROM events INNER JOIN event_types ON events.id = event_types.id WHERE event_type = $1';

//     const result = await db.query<SocialEventRow>(sql, [type]);
//         return result.rows.map(SocialEvent.from);
// }

// // get all events by time  //! DIDNT IMPLEMENT YET
// export async function getEventsByTime(time: string): Promise<SocialEvent[]> {
//     const sql = 'SELECT * FROM events';

//     const result = await db.query<SocialEventRow>(sql, [time]);
//         return result.rows.map(SocialEvent.from);
// }

// // get events by their title name 
// export async function getEventsByTitle(title: string): Promise<SocialEvent[]> {
//     const sql = 'SELECT * FROM events WHERE title = $1';

//     const result = await db.query<SocialEventRow>(sql, [title]);
//         return result.rows.map(SocialEvent.from);
// }