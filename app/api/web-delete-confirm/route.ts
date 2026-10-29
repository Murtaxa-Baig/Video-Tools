import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { token, secretCode } = body || {};

        if (!token || !secretCode) {
            return NextResponse.json(
                { error: "Missing required fields (token, secretCode)." },
                { status: 400 }
            );
        }

        let baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aiwriterprobackend-production-977e.up.railway.app/api/user";
        baseUrl = baseUrl.replace(/^['"]|['"]$/g, "");
        const apiUrl = `${baseUrl}/web-delete-confirm`;

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, secretCode }),
        });

        let data;
        try {
            data = await response.json();
        } catch {
            data = { error: "Failed to parse response from server" };
        }

        return NextResponse.json(data, { status: response.status });
    } catch (error: unknown) {
        console.error("WEB_DELETE_CONFIRM_PROXY_ERROR:", error);
        const errorMessage = error instanceof Error ? error.message : "Internal server error";
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
