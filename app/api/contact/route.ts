import { NextRequest, NextResponse } from "next/server";
// TODO: Add RESEND_API_KEY to environment variables
// import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Uncomment and configure once RESEND_API_KEY is set
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfolio Contact <contact@nehalnaik.ai>",
    //   to: ["nehal.naik@example.com"],
    //   subject: `[Portfolio] ${subject} from ${name}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // });

    // Development: log to console
    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
