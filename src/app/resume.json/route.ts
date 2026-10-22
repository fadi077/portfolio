import { jsonResume } from "@/lib/structured-data";

export const dynamic = "force-static";

export function GET() {
  return Response.json(jsonResume());
}
