/* istanbul ignore file */
import { db } from './db';
import { SocialEvent, SocialEventRow } from '../models/Question';
import { PostRow } from '../models/Answer';
import { Post } from '../models/Answer';
import { Comment } from '../models/Comment';
import { CommentRow } from '../models/Comment';
import { User } from '../models/User';
import { UserRow } from '../models/User';


// Saves a new user
export async function saveNewUser(user: User): Promise<User> {
    const sql = `INSERT INTO users (username, user_password, first_name, \
                last_name, email) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

    const result = await db.query<UserRow>(sql, [
        user.username,
        user.userPassword,
        user.userFirstName,
        user.userLastName,
        user.userEmail,
    ]);

    return result.rows.map(User.from)[0];
}

export async function checkUser(user: User): Promise<User> {
    const userExists: boolean = await usernameExists(user.username);
    if (!userExists) {
        return undefined;
    }

    const sql = `SELECT * FROM users WHERE username = $1`;

    const result = await db.query<UserRow>(sql, [
        user.username
    ]);
    return  result.rows.map(User.from)[0];
}

export async function usernameExists(username: string): Promise<boolean> {
    const sql = `SELECT EXISTS(SELECT username FROM users WHERE username = $1)`;
    const result = await db.query<Exists>(sql, [username]);
    return result.rows[0].exists;
}

interface Exists {
    exists: boolean;
}