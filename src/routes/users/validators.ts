import { Context, validator } from "hono";
import { User, UserSchema } from "../../models/user.ts";

function validatePost() {
  return validator("json", function _(value: User, c: Context) {
    try {
      const parsed = UserSchema.parse(value);
      return parsed;
    } catch (e) {
      c.status(400);
      return c.json({ error: e });
    }
  });
}

export default {
  validatePost,
};
