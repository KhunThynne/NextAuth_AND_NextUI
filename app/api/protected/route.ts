// /app/api/protected/route.ts
import { getServerSession } from "next-auth/next";

import { NextResponse } from "next/server";
import authOptions from "../auth/[...nextauth]/auth-options";

export async function GET(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ message: "Success" });
}
