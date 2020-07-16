import * as authenticationDao from '../daos/authentication.dao';
import { LoginCredentials } from '../models/LoginCredentials';
import { SocialEvent } from '../models/Question';
import { User } from '../models/User';


export function checkUser(user: any): Promise<User> {
    const newUser = new User(
        undefined,
        user.username,
        user.userPassword,
        user.userFirstName,
        user.userLastName,
        user.userEmail
    );
    if (user.username && user.userPassword) {
        return authenticationDao.checkUser(newUser);
    } else {
        return new Promise((resolve, reject) => reject(422));
    }
}

// create new post
export function saveNewUser(user: any): Promise<User> {
    const newUser = new User(
        undefined,
        user.username,
        user.userPassword,
        user.userFirstName,
        user.userLastName,
        user.userEmail,


    );
    if ( user.username &&
        user.userPassword &&
        user.userFirstName &&
        user.userLastName &&
        user.userEmail) {
        return authenticationDao.saveNewUser(newUser);
    } else {
        return new Promise((resolve, reject) => reject(422));
    }
}