import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_efz24an", // <-- replace
        "template_fmhu7vb", // <-- replace
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "4uGvUcR2BTXQIVTnC" // <-- replace
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-3xl font-rammetto mb-4">Contact Me</h2>

      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
      >
        {/* Input fields */}
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={change}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
          />
          <input
            name="email"
            value={form.email}
            onChange={change}
            placeholder="Email"
            type="email"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
          />
        </div>

        <input
          name="subject"
          value={form.subject}
          onChange={change}
          placeholder="Subject"
          required
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={change}
          placeholder="Message"
          required
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 h-32"
        ></textarea>

        {/* Button or Loading */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
          className="bg-yellow-300 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-200 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Success message */}
        {sent && (
          <p className="text-green-400 text-sm mt-2">
            ✅ Message sent successfully!
          </p>
        )}
      </motion.form>
    </section>
  );
}
