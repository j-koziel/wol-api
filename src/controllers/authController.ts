import { Request, Response, NextFunction } from "express";

import User, { IUser } from "./../models/userModel";

// Protect middleware to protect routes from unauthorized requests from the wrong type of user.
/**
 * Middleware to protect routes from unauthorized requests.
 *
 * @async
 *
 * @param req
 * @param res
 * @param next
 * @param restrictTo
 */
async function protect(
    req: Request,
    res: Response,
    next: NextFunction
    // eslint-disable-next-line capitalized-comments
    // restrictTo: string[]
): Promise<void> {
    try {
        /*
         *
         * Route protection （￣︶￣）↗
         *
         */
    } catch (err) {
        next(err);
    }
}

/**
 * Middleware to log users in.
 *
 * Parses the request body and checks the credentials to see if they match up in the DB.
 *
 * @async
 *
 * @param req
 * @param res
 * @param next
 */
async function login(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    try {
        const { email, password }: IUser = req.body;

        // Check if there is an email or password
        if (!email || !password)
            throw new Error("An email or password is required.");

        // Find user in the db
        const user = await User.findOne({ email }).select("+password");

        // Check if user exists in db
        if (!user) throw new Error("The email or password is incorrect");

        // Send JWT if everything is correct
    } catch (err) {
        next(err);
    }
}

/**
 * Middleware to sign up new users and log them in.
 *
 * @async
 *
 * @param req
 * @param res
 * @param next
 */
async function signup(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    try {
        const newUser: IUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        });

        // Send a jwt
    } catch (err) {
        next(err);
    }
}

export { protect, login, signup };
