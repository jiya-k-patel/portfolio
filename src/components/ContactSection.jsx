import emailIcon from "../assets/email-icon.png"
import linkedinIcon from "../assets/linkedin-icon.png"

function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center space-y-6 rounded-2xl border border-[#AEC5EB] bg-[#F9DEC9] p-8 shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-[#3A405A]">Contact</h2>

      <div className="flex gap-10 text-[#685044]">
        {/* Email */}
        <a
          href="mailto:jiya.patel@uwaterloo.ca"
          className="flex flex-col items-center gap-2 hover:opacity-80"
        >
          <img src={emailIcon} alt="Email" className="w-10 h-10" />
          <span>Email</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jiya-patel-745020385/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:opacity-80"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  )
}

export default ContactSection