"use client"
import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import type { FormEvent } from "react"

const ContactUsForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [popup, setPopup] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = formRef.current as HTMLFormElement
    const formData = new FormData(form)

    const selectedServices: string[] = []
    const serviceCheckboxes = form.querySelectorAll('input[name="services"]:checked') as NodeListOf<HTMLInputElement>
    serviceCheckboxes.forEach((checkbox: HTMLInputElement) => {
      selectedServices.push(checkbox.value)
    })

    const emailData = {
      form_type: "Contact Form",
      full_name: formData.get("full_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      subject: formData.get("subject"),
      budget_range: formData.get("budget_range"),
      services: selectedServices.join(", "),
      project_details: formData.get("project_details"),
    }

    try {
      await emailjs.send(
        "service_s600v8y",
        "template_vghr9f8",
        {
          ...emailData,
          to_email: "softlexsystems.co@gmail.com",
        },
        "70XPdNbPv4-W36ojn",
      )

      await emailjs.send(
        "service_s600v8y",
        "template_wrg1tfq",
        {
          ...emailData,
          to_email: emailData.email,
          subject: "Thank you for contacting us!",
        },
        "70XPdNbPv4-W36ojn",
      )

      setPopup(true)
      form.reset()
      setTimeout(() => setPopup(false), 3000)
    } catch (error) {
      console.error("EMAIL SENDING FAILED:", error)
      alert("Something went wrong while sending. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-800 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-md bg-gray-100 dark:bg-slate-700 rounded-lg p-6 relative shadow-md dark:shadow-lg transition-colors duration-300">
        <h2 className="text-gray-900 dark:text-white text-xl font-semibold mb-6">
          Send Us a Message
        </h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          {/* Full Name and Email */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-800 dark:text-white text-sm mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="John Doe"
                required
                className="w-full bg-white dark:bg-slate-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-cyan-300 px-3 py-2 rounded border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-800 dark:text-white text-sm mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="w-full bg-white dark:bg-slate-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-cyan-300 px-3 py-2 rounded border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Phone and Company */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-800 dark:text-white text-sm mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                className="w-full bg-white dark:bg-slate-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-cyan-300 px-3 py-2 rounded border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-800 dark:text-white text-sm mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                className="w-full bg-white dark:bg-slate-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-cyan-300 px-3 py-2 rounded border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-800 dark:text-white text-sm mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              required
              className="w-full bg-white dark:bg-slate-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-cyan-300 px-3 py-2 rounded border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-gray-800 dark:text-white text-sm mb-2">Budget Range</label>
            <select
              name="budget_range"
              className="w-full bg-white dark:bg-slate-600 text-gray-900 dark:text-white px-3 py-2 rounded border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your budget range</option>
              <option value="Under $5,000">Under $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000 - $50,000">$25,000 - $50,000</option>
              <option value="$50,000+">$50,000+</option>
            </select>
          </div>

          {/* Services */}
          <div>
            <label className="block text-gray-800 dark:text-white text-sm mb-2">
              Services You're Interested In <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Cloud Solutions",
                "AI & Machine Learning",
                "DevOps Services",
                "Cybersecurity",
                "Consulting",
              ].map((service) => (
                <label key={service} className="flex items-center space-x-2 text-sm text-gray-800 dark:text-white">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    className="rounded bg-white dark:bg-slate-600 border-gray-300 dark:border-slate-500 text-blue-500 focus:ring-blue-500"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-gray-800 dark:text-white text-sm mb-2">
              Project Details <span className="text-red-400">*</span>
            </label>
            <textarea
              name="project_details"
              rows={4}
              placeholder="Tell us about your project, goals, and timeline..."
              required
              className="w-full bg-white dark:bg-slate-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-cyan-300 px-3 py-2 rounded border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success Popup */}
        {popup && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg text-sm">
            Your message has been sent successfully!
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactUsForm
