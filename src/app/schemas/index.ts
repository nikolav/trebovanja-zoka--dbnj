import { z } from "zod";
import isJWT from "validator/es/lib/isJWT";

export { schemaJsonData, schemaJsonDataRecord } from "./json.schema";

export const schemaJwt = z.string().refine(isJWT);

export const schemaStoragePatchField = z.string().nonempty();
export const schemaStoragePatch = z.record(
  schemaStoragePatchField,
  z.any().nullish()
);

export const schemaAuthCreds = z.object({
  email: z.string().email(),
  password: z.string().nonempty(),
});
