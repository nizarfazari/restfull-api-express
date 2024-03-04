import {CreateUserRequest, toUserResponse, UserResponse} from "../dto/user-model";
import {Validation} from "../validation/validation";
import {UserValidation} from "../validation/user-validation";
import {prismaClient} from "../application/database";
import {ErrorsResponse} from "../exception/errors-response";
import bcrypt from "bcrypt"

export class UserService {
    static async register(request : CreateUserRequest) : Promise<UserResponse> {
        const userRegister = Validation.validate(UserValidation.Register, request)

        const totalUserWithSameUsername = await prismaClient.user.count({
            where : {
                username : userRegister.username
            }
        })

        if(totalUserWithSameUsername != 0 ){
            throw new ErrorsResponse(400,"Username already exists")
        }

        userRegister.password = await bcrypt.hash(userRegister.password, 10)

        const user = await prismaClient.user.create({
            data : userRegister
        })

        return toUserResponse(user)

    }
}