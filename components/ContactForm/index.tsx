import React, { ChangeEvent, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { notifyError, notifySuccess } from '@/hooks/useToastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        notifySuccess('Message sent successfully');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        notifyError('Error sending message');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <motion.form
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
          placeholder="Your Name"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
          placeholder="Your Email"
          required
        />
      </div>
      <input
        name="subject"
        type="text"
        value={formData.subject}
        onChange={handleChange}
        className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
        placeholder="Subject"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
        placeholder="Write Me..."
        required
      ></textarea>
      <input
        type="submit"
        className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer"
        value="Send Message"
      />
    </motion.form>
  );
};

export default ContactForm;
