import { NextResponse } from "next/server";
import { EmailTemplate } from "../../_components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const responce = await req.json();
  try {
    const data = await resend.emails.send({
      from: " filevault<filevault@resend.dev>",
      to: ["darthcoder18@outlook.com"],
      subject:
        responce?.userName + " shared a file with you",
      react: EmailTemplate({ responce }),
    });

    //replace these lines later
    // from: 'tubeguruji-app@tubeguruji-app.tubeguruji.com',
    //   to: [responce.emailToSend],

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
