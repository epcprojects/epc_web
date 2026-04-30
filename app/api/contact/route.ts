import nodemailer from "nodemailer";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = String(body.fullName ?? "").trim();
    const companyName = String(body.companyName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const serviceRequired = String(body.serviceRequired ?? "").trim();
    const projectBudget = String(body.projectBudget ?? "").trim();
    const projectDetails = String(body.projectDetails ?? "").trim();

    const errors: Record<string, string> = {};
    if (!fullName) errors.fullName = "Full name is required.";
    if (!companyName) errors.companyName = "Company name is required.";
    if (!email) errors.email = "Email is required.";
    else if (!isValidEmail(email)) errors.email = "Email is invalid.";
    if (!serviceRequired) errors.serviceRequired = "Service is required.";
    if (!projectBudget) errors.projectBudget = "Project budget is required.";
    if (!projectDetails) errors.projectDetails = "Project details are required.";

    if (Object.keys(errors).length > 0) {
      return Response.json({ ok: false, errors }, { status: 400 });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !CONTACT_TO_EMAIL ||
      !CONTACT_FROM_EMAIL
    ) {
      return Response.json(
        { ok: false, error: "Email server is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `New Contact Us inquiry from ${fullName}`;
    const text = [
      `Full Name: ${fullName}`,
      `Company Name: ${companyName}`,
      `Email: ${email}`,
      `Service Required: ${serviceRequired}`,
      `Project Budget: ${projectBudget}`,
      `Project Details: ${projectDetails}`,
    ].join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
        <h2>New Contact Us Inquiry</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Required:</strong> ${serviceRequired}</p>
        <p><strong>Project Budget:</strong> ${projectBudget}</p>
        <p><strong>Project Details:</strong><br/>${projectDetails.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 },
    );
  }
}
