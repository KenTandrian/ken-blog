import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  draftMode().enable();
  const url = new URL(request.nextUrl)
  return NextResponse.redirect(new URL('/', url.origin))
}
