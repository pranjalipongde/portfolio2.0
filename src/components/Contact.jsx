import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Message from " + form.name);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`);
    window.location.href = `mailto:pranjalipongde0997@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-3xl font-rammetto mb-4">Contact Me</h2>

      <form onSubmit={submit} className="space-y-4">
        <input
          name="name"
          onChange={change}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
          placeholder="Your Name"
          required
        />
        <input
          name="email"
          onChange={change}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          onChange={change}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 h-32"
          placeholder="Message"
          required
        ></textarea>
        <button className="bg-yellow-300 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-200">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
