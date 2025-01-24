import { NextResponse } from "next/server";
import { getSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(req) {
  const session = await getSession(req);

  if (!session) {
    return NextResponse.redirect(new URL("/api/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"]
};
