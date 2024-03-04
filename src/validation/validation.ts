import {ZodType} from "zod";

export class Validation {
    static validate<T>(schema: ZodType, data : T): T {
        // mengembalikan zod validation error
        return schema.parse(data);
    }
}