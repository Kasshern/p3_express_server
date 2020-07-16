import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { LoginCredentials } from '../models/LoginCredentials';
import * as authenticationService from '../services/authentication.service';
import bcrypt from 'bcrypt';
import { User } from '../models/User';

const saltRounds = 10;
export const authenticationRouter = express.Router();
export const jwt = jsonwebtoken;
const accessTokenSecret = 'somerandomaccesstoken';
const refreshTokenSecret = 'somerandomstringforrefreshtoken';
const refreshTokens = [];

// // Checks login credentials and grants auth token if correct
// authenticationRouter.post('/login', async (request, response, next) => {
//     const user = request.body;
//     let userResponse: User;

//     try {
//         userResponse = await authenticationService.checkUser(user);
//     } catch (err) {
//         console.log(err);
//         response.sendStatus(500);
//         return;
//     }

//     if (!userResponse) {
//         response.sendStatus(404);
//     } else {

//         const match = await bcrypt.compare(user.userPassword, userResponse.userPassword);

//         if (match) {
//             const accessToken = jwt.sign({ username: userResponse.username, email: userResponse.userEmail }, accessTokenSecret, { expiresIn: '20m' });
//             const refreshToken = jwt.sign({ username: userResponse.username, email: userResponse.userEmail }, refreshTokenSecret);
//             const userEmail = userResponse.userEmail;
//             const userId = userResponse.userId;
//             const userFirstName = userResponse.userFirstName;
//             const userLastName = userResponse.userLastName;

//             refreshTokens.push(refreshTokens);
//             response.status(201);
//             response.json({ accessToken, refreshToken, userId, userEmail, userFirstName, userLastName });
//         } else {
//             response.sendStatus(401);
//             console.log('Username or password are incorrect');
//         }
//     }
//     next();
// });

// // token refresher endpoint
// authenticationRouter.post('/token', async (request, response, next) => {
//     const { token } = request.body;

//     if (!token) {
//         return response.sendStatus(401);
//     }

//     if (!refreshTokens.includes(token)) {
//         return response.sendStatus(403);
//     }

//     jwt.verify(token, refreshTokenSecret, (err, user) => {
//         if (err) {
//             return response.sendStatus(403);
//         }

//         const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });
//         response.json({accessToken});
//     });
//     next();
// });


// // Post a new user information for singup
// authenticationRouter.post('/signup', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
//     // const userInfo = request.body;
//     let newUser: User;
//     // Validation checks here, service and dao layers to make sure the input info matches our requirements
//     try {
//         const hashedPassword = bcrypt.hashSync(request.body.userPassword, saltRounds);
//         const newUserInfo: User = {
//             userId: undefined,
//             username: request.body.username,
//             userPassword: hashedPassword,
//             userFirstName: request.body.userFirstName,
//             userLastName: request.body.userLastName,
//             userEmail: request.body.userEmail
//         }

//         newUser = await authenticationService.saveNewUser(newUserInfo);
//         response.status(201);
//         response.json(newUser);
//     } catch (err) {
//         console.log(err);
//         response.sendStatus(500);
//         return;
//     }
//     next();
// });


// // Authentices the header of a request by evaluating token value
// export const authenticateJWT = (request, response, next) => {
//     const authHeader = request.headers.authorization;

//     if (authHeader) {
//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, accessTokenSecret, (err, user) => {
//             if (err) {
//                 return response.sendStatus(403);
//             }

//             request.user = user;
//             next();
//         });
//     } else {
//         response.sendStatus(401);
//     }
// }


