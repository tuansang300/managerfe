import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { cache } from "react";

export const getUser = cache(async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    session.user.username;
  } else {
    return null;
  }
});
