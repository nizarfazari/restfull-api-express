import {CreateUserRequest, LoginUserRequest, toUserResponse, UserResponse} from "../dto/user-model";
import {Validation} from "../validation/validation";
import {UserValidation} from "../validation/user-validation";
import {prismaClient} from "../application/database";
import {ErrorsResponse} from "../exception/errors-response";
import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"

export class UserService {
    static async register(request: CreateUserRequest): Promise<UserResponse> {
        const userRegister = Validation.validate(UserValidation.Register, request)

        const totalUserWithSameUsername = await prismaClient.user.count({
            where: {
                username: userRegister.username
            }
        })

        if (totalUserWithSameUsername != 0) {
            throw new ErrorsResponse(400, "Username already exists")
        }

        userRegister.password = await bcrypt.hash(userRegister.password, 10)

        const user = await prismaClient.user.create({
            data: userRegister
        })

        return toUserResponse(user)

    }

    static async login(request: LoginUserRequest): Promise<UserResponse> {
        const loginRequest = Validation.validate(UserValidation.Login, request)

        let user = await prismaClient.user.findUnique({
            where: {
                username: loginRequest.username
            }
        })
        if (!user) {
            throw new ErrorsResponse(401, "Username or password is wrong")
        }

        const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password)
        if (!isPasswordValid) {
            throw new ErrorsResponse(401, "Username or password is wrong")
        }
        user = await prismaClient.user.update({
            where: {
                username: loginRequest.username
            },
            data: {
                token: uuid()
            }
        })

        const response = toUserResponse(user)
        response.token = user.token!
        return  response

    }
}