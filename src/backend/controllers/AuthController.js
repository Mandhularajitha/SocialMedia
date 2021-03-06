import { v4 as uuid } from "uuid";
import { Response } from "miragejs";
import { formatDate } from "../utils/authUtils";
const sign = require("jwt-encode");

/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles user signups.
 * send POST Request at /api/auth/signup
 * body contains {firstName, lastName, username, password}
 * */

export const signupHandler = function (schema, request) {
  const { username, password, ...rest } = JSON.parse(request.requestBody);
  console.log(username,password,"contr");
  try {
    const foundUser = schema.users.findBy({ email: username });
    console.log(foundUser,"foundUser)");
    if (foundUser) {
      return new Response(
        422,
        {},
        {
          errors: ["Unprocessable Entity. Username Already Exists."],
        }
      );
    }
    const _id = uuid();

    const newUser = {
      _id,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      // displayname,
      password,
      email:username,
      ...rest,

      followers: [],
      following: [],
      bookmarks: [],
    };
    const createdUser = schema.users.create(newUser);
    console.log(createdUser,"createdUser");
    console.log({ _id, email:username },"rajitha");
    // const encodedToken = sign(
    //   { _id, email:username },
    //   process.env.REACT_APP_JWT_SECRET
    // );
    // console.log(encodedToken,"encodedToken");
    return new Response(201, {}, { createdUser, encodedToken:"token" });


  } catch (error) {
    console.log(error,"erer");
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles user login.
 * send POST Request at /api/auth/login
 * body contains {username, password}
 * */

export const loginHandler = function (schema, request) {
  const { username, password } = JSON.parse(request.requestBody);
  
  try {
    const foundUser = schema.users.findBy({ email:username });
    console.log(foundUser, "founduser");
    if (!foundUser) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    if (password === foundUser.password) {
      console.log("entered into the password check so let me sign the detials");
      // console.log("i'm not using username", { _id: foundUser._id, email });
      // const encodedToken = sign(
      //   { _id: foundUser._id, email:username },
      //   process.env.REACT_APP_JWT_SECRET
      // );
      console.log("passed");
      return new Response(200, {}, { foundUser, encodedToken:"token" });
    }
    return new Response(
      401,
      {},
      {
        errors: [
          "The credentials you entered are invalid. Unauthorized access error.",
        ],
      }
    );
  

    // const foundUser = schema.users.findBy({ username: username });
    // if (!foundUser) {
    //   return new Response(
    //     404,
    //     {},
    //     {
    //       errors: [
    //         "The username you entered is not Registered. Not Found error",
    //       ],
    //     }
    //   );
    // }
    // if (password === foundUser.password) {
    //   const encodedToken = sign(
    //     { _id: foundUser._id, username },
    //     process.env.REACT_APP_JWT_SECRET
    //   );
    //   return new Response(200, {}, { foundUser, encodedToken });
    // }
    // return new Response(
    //   401,
    //   {},
    //   {
    //     errors: [
    //       "The credentials you entered are invalid. Unauthorized access error.",
    //     ],
    //   }
    // );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
