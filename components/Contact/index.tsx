'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heading } from '@/components';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div id="contact" className="h-screen lg:h-auto py-20 lg:py-40 xs:pb-20">
      <Heading text="Get in touch" />
      <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={'/contact.png'}
            alt="Contact Image"
            width={400}
            height={400}
            className="w-[400px] h-[400px] rounded-md opacity-80"
          />
        </motion.div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
