import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, reason } = body || {};

        if (!email || !reason) {
            return NextResponse.json(
                { error: "Missing required fields." },
                { status: 400 }
            );
        }

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aiwriterprobackend-production.up.railway.app/api/v1/web";
        const apiUrl = `${baseUrl}/web-delete-request`;

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, reason }),
        });

        let data;
        try {
            data = await response.json();
        } catch (e) {
            data = { error: "Failed to parse response from server" };
        }

        return NextResponse.json(data, { status: response.status });
    } catch (error: any) {
        console.error("WEB_DELETE_REQUEST_PROXY_ERROR:", error);
        return NextResponse.json(
            { error: error?.message || "Internal server error" },
            { status: 500 }
        );
    }
}
