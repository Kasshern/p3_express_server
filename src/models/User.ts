/* istanbul ignore file */
export class User {
    userId: number;
    points: number;
    admin: boolean;
    profilePicture: string;
    email: string;
    firstName: string;
    lastName: string;
    jwt: string;
    rssaccountId: number;

    static from(obj: UserRow): User {
        const user = new User(
            obj.user_id,
            obj.points,
            obj.admin,
            obj.profile_picture,
            obj.email,
            obj.first_name,
            obj.last_name,
            obj.jwt,
            obj.rssaccount_id,
        );
        return user;
    }

    constructor(userId: number,
        points: number,
        admin: boolean,
        profilePicture: string,
        email: string,
        firstName: string,
        lastName: string,
        jwt: string,
        rssaccountId: number,
    ) {
        this.userId = userId;
        this.points = points;
        this.admin = admin;
        this.profilePicture = profilePicture;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jwt = jwt;
        this.rssaccountId = rssaccountId;
    }
}

export interface UserRow {
        user_id: number;
        points: number;
        admin: boolean;
        profile_picture: string;
        email: string;
        first_name: string;
        last_name: string;
        jwt: string;
        rssaccount_id: number;
}

