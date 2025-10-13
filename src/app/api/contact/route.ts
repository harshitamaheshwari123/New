import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body || {};

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Check if form is enabled - temporarily disabled for demo
    // if (process.env.CONTACT_FORM_ENABLED !== "true") {
    //   return NextResponse.json(
    //     { success: false, error: "Contact form is currently disabled" },
    //     { status: 503 }
    //   );
    // }

    // Create email transporter using your Gmail credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "thebuildingbharat@gmail.com",
        pass: process.env.EMAIL_PASS || "nkfjimcmfdgwytze",
      },
    });

    // Email content
    const mailOptions = {
      from: `"${process.env.FROM_NAME || "Building Bharat"}" <${
        process.env.EMAIL_USER || "thebuildingbharat@gmail.com"
      }>`,
      to:
        process.env.EMAIL_TO ||
        process.env.EMAIL_USER ||
        "thebuildingbharat@gmail.com", // Send to thebuildingbharat@gmail.com
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin: 16px 0 24px;">
            <img src="https://buildingbharatresume.s3.ap-south-1.amazonaws.com/emailImages/bb1.png" alt="Building Bharat" width="64" height="64" style="display: block; margin: 0 auto; border-radius: 8px;" />
          </div>
          <h2 style="color: #006655; border-bottom: 2px solid #FF6F00; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #006655; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #FF6F00;">
            <h3 style="color: #006655; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${
              message || "No message provided"
            }</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; border: 1px solid #dee2e6;">
            <h3 style="color: #006655; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Connect with us on social media</h3>
            <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
              <tr>
                <td align="center" style="padding:0 10px;">
                  <a href="https://www.linkedin.com/company/buildingbharat/posts/?feedView=all" style="text-decoration:none; display:inline-block;">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="40" alt="LinkedIn" style="display:block; border-radius:8px; background:#ffffff; padding:4px;" />
                  </a>
                </td>
                <td align="center" style="padding:0 10px;">
                  <a href="https://www.instagram.com/building.bharat/?hl=en" style="text-decoration:none; display:inline-block;">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="40" alt="Instagram" style="display:block; border-radius:8px; background:#ffffff; padding:4px;" />
                  </a>
                </td>
                <td align="center" style="padding:0 10px;">
                  <a href="https://whatsapp.com/channel/0029Vb6EEEw5Ejy3yymn7E3T" style="text-decoration:none; display:inline-block;">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="40" alt="WhatsApp" style="display:block; border-radius:8px; background:#ffffff; padding:4px;" />
                  </a>
                </td>
                <td align="center" style="padding:0 10px;">
                  <a href="https://thebuildingbharat.com/" style="text-decoration:none; display:inline-block;">
                    <img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" width="40" alt="Website" style="display:block; border-radius:8px; background:#ffffff; padding:4px;" />
                  </a>
                </td>
              </tr>
            </table>
            <p style="color: #6c757d; font-size: 14px; margin: 15px 0 0 0; font-style: italic;">Follow us for updates and insights</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            <em>Submitted on: ${new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            })}</em><br>
            <em>From: Building Bharat Website Contact Form</em>
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        
        Message:
        ${message || "No message provided"}
        
        Submitted on: ${new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        })}
        From: Building Bharat Website Contact Form
      `,
    };

    // Send notification email to Building Bharat
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const userConfirmationEmail = {
      from: `"${process.env.FROM_NAME || "Building Bharat"}" <${
        process.env.EMAIL_USER || "thebuildingbharat@gmail.com"
      }>`,
      to: email, // Send to the user who submitted the form
      subject: "Thank you for contacting Building Bharat!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #006655 0%, #FF6F00 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <div style="text-align: center; margin-bottom: 12px;">
              <img src="https://buildingbharatresume.s3.ap-south-1.amazonaws.com/emailImages/bb1.png" alt="Building Bharat" width="72" height="72" style="display: block; margin: 0 auto; border-radius: 8px; background: #ffffff; padding: 4px;" />
            </div>
            <h1 style="color: white; margin: 0; font-size: 28px;">Building Bharat</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Empowering Political Journeys</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #006655; margin-top: 0;">Thank You, ${fullName}!</h2>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              We've received your message and truly appreciate you reaching out to us. 
              Your interest in Building Bharat means a lot to our team.
            </p>
            
            <div style="background-color: white; padding: 20px; border-left: 4px solid #FF6F00; margin: 20px 0;">
              <h3 style="color: #006655; margin-top: 0;">What happens next?</h3>
              <ul style="color: #333; line-height: 1.8;">
                <li>Our team will review your message within 24 hours</li>
                <li>We'll respond to your inquiry via email</li>
                <li>If you provided a phone number, we may call for urgent matters</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #666; font-size: 14px;">
                <strong>Your submission details:</strong><br>
                Name: ${fullName}<br>
                Email: ${email}<br>
                Submitted: ${new Date().toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                })}
              </p>
            </div>
            
            <div style="text-align: center; margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; border: 1px solid #dee2e6;">
              <h3 style="color: #006655; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Connect with us on social media</h3>
              <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
                <tr>
                  <td align="center" style="padding:0 10px;">
                    <a href="https://www.linkedin.com/company/buildingbharat/posts/?feedView=all" style="text-decoration:none; display:inline-block;">
                      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="40" alt="LinkedIn" style="display:block; border-radius:8px; background:#ffffff; padding:4px;" />
                    </a>
                  </td>
                  <td align="center" style="padding:0 10px;">
                    <a href="https://www.instagram.com/building.bharat/?hl=en" style="text-decoration:none; display:inline-block;">
                      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="40" alt="Instagram" style="display:block; border-radius:8px; background:#ffffff; padding:4px;" />
                    </a>
                  </td>
                  <td align="center" style="padding:0 10px;">
                    <a href="https://whatsapp.com/channel/0029Vb6EEEw5Ejy3yymn7E3T" style="text-decoration:none; display:inline-block;">
                      <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="40" alt="WhatsApp" style="display:block; border-radius:8px; background:#ffffff; padding:4px;" />
                    </a>
                  </td>
                  <td align="center" style="padding:0 10px;">
                    <a href="https://thebuildingbharat.com/" style="text-decoration:none; display:inline-block;">
                      <img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" width="40" alt="Website" style="display:block; border-radius:8px; background:#ffffff; padding:4px;" />
                    </a>
                  </td>
                </tr>
              </table>
              <p style="color: #6c757d; font-size: 14px; margin: 15px 0 0 0; font-style: italic;">Follow us for updates and insights</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #006655; font-weight: bold;">
                Ready to build a better Bharat together!
              </p>
              <p style="color: #666; font-size: 12px; margin-top: 20px;">
                This is an automated confirmation. Please do not reply to this email.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
        Thank You, ${fullName}!
        
        We've received your message and truly appreciate you reaching out to us. 
        Your interest in Building Bharat means a lot to our team.
        
        What happens next?
        - Our team will review your message within 24 hours
        - We'll respond to your inquiry via email
        - If you provided a phone number, we may call for urgent matters
        
        Your submission details:
        Name: ${fullName}
        Email: ${email}
        Submitted: ${new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        })}
        
        Ready to build a better Bharat together!
        
        This is an automated confirmation. Please do not reply to this email.
      `,
    };

    // Send confirmation email to user
    await transporter.sendMail(userConfirmationEmail);

    console.log(`Contact form submission sent from: ${fullName} (${email})`);
    console.log(`Confirmation email sent to: ${email}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
