import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse, type NextRequest } from "next/server";

import { client } from "@/lib/sanity.client";
import { token } from "@/lib/sanity.token";

const clientWithToken = client.withConfig({ token });

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    request.url
  );

  if (!isValid) {
    return new NextResponse("Invalid secret", { status: 401 });
  }

  draftMode().enable();
  redirect(redirectTo);
}
