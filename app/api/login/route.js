import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const { password } = body;

    // change this password
    const ADMIN_PASSWORD = "SaveOneLife@4343";

    if (password === ADMIN_PASSWORD) {
      return NextResponse.json({
        success: true,
      });
    }

    return NextResponse.json({
      success: false,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
    });
  }
}