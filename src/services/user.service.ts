import { LoginCredentials } from '../models/LoginCredentials';
import { User } from '../models/User';
import * as userDao from '../daos/user.dao';


export function getUserByUserId(id: number): Promise<User> {
    return userDao.getUserByUserId(id);
}

// export function getSocialEventsByHostUserId(id: number): Promise<SocialEvent[]> {
//     return hostDao.getSocialEventsByHostUserId(id);
// }

// // create new event as a host
// export function saveNewEvent(socialEvent: any): Promise<SocialEvent> {
//     const newSocialEvent = new SocialEvent(
//         undefined,
//         socialEvent.description,
//         socialEvent.image,
//         socialEvent.maxPeople,
//         socialEvent.price,
//         socialEvent.startTime,
//         socialEvent.title,
//         socialEvent.eventTypeId,
//         socialEvent.hostId

//     );
//     if (socialEvent.description &&
//         socialEvent.image &&
//         socialEvent.maxPeople &&
//         socialEvent.price &&
//         socialEvent.startTime &&
//         socialEvent.title &&
//         socialEvent.eventTypeId &&
//         socialEvent.hostId) {
//         return hostDao.saveNewEvent(newSocialEvent);
//     } else {
//         return new Promise((resolve, reject) => reject(422));
//     }
// }


// export function saveReimbursement(reimbursement: any): Promise<ReimbursementPost> {
//     const newReimbursement = new ReimbursementPost(
//         undefined,
//         reimbursement.reimbAmount,
//         new Date(),
//         undefined,
//         reimbursement.reimbDescription,
//         reimbursement.reimbReceipt,
//         reimbursement.reimbAuthor,
//         null,
//         1,
//         reimbursement.reimbTypeId
//     );
//     if (reimbursement.reimbAmount && reimbursement.reimbDescription &&
//         reimbursement.reimbReceipt && reimbursement.reimbAuthor &&
//         reimbursement.reimbTypeId) {
//         return employeeDao.saveReimbursement(newReimbursement);
//     } else {
//         return new Promise((resolve, reject) => reject(422));
//     }
// }

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

// export function getAllReimbursementsByStatus(status: string): Promise<ReimbursementManagerGet[]> {
//     return financeManagerDao.getAllReimbursementsByStatus(status);
// }

// export function getAllReimbursementsSorted(sortValue: string): Promise<ReimbursementManagerGet[]> {
//     return financeManagerDao.getAllReimbursementsByStatus(sortValue);
// }

// export function patchReimbursementStatus(input: any): Promise<ReimbursementStatus> {

//     const reimbursementStatus = new ReimbursementStatus(
//         input.reimbStatusId,
//         input.reimbId,
//         input.userId,
//         new Date()
//     );

//     if (!reimbursementStatus.reimbStatusId) {
//         throw new Error ('400');
//     }

//     return financeManagerDao.patchReimbursementStatus(reimbursementStatus);
//     }