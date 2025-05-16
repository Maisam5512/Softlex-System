"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
// In production, use environment variables for the API key
const resend = new Resend(process.env.RESEND_API_KEY || "re_123456789")

// Define the type for the form data
type ContactFormData = {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  budget: string
  services: string[]
}

export async function sendContactForm(formData: ContactFormData) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message || formData.services.length === 0) {
      throw new Error("Required fields are missing")
    }

    // Format the services as a list
    //const servicesList = formData.services.map((service) => `- ${service}`).join("\n")

    // Create email content
    const emailContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
      <p><strong>Company:</strong> ${formData.company || "Not provided"}</p>
      <p><strong>Subject:</strong> ${formData.subject || "Project Inquiry"}</p>
      <p><strong>Budget:</strong> ${formData.budget || "Not specified"}</p>
      
      <h2>Services Interested In:</h2>
      <ul>
        ${formData.services.map((service) => `<li>${service}</li>`).join("")}
      </ul>
      
      <h2>Message:</h2>
      <p>${formData.message.replace(/\n/g, "<br>")}</p>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Use your verified domain in production
      to: ["info@softlexsystems.com"], // Replace with your email
      subject: formData.subject || "New Project Inquiry from Website",
      html: emailContent,
      replyTo: formData.email,
    })

    if (error) {
      console.error("Error sending email:", error)
      throw new Error("Failed to send email")
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error in sendContactForm:", error)
    throw error
  }
}
