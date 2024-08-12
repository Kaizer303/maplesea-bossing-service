import z from "https://deno.land/x/zod@v3.23.8/index.ts";

export interface User {
  name: string;
  job: string;
  favoriteColor: string;
  isEditing: boolean;
}

export const UserSchema = z.object({
  name: z.string(),
  job: z.string(),
  favoriteColor: z.string(),
  isEditing: z.boolean(),
});
