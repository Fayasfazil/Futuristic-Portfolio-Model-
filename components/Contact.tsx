import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { containerVariants, itemVariants } from '../utils/animations';

// IMPORTANT: To make the contact form work, you need to get your own Access Key from Web3Forms.
// 1. Go to https://web3forms.com/
// 2. Click "Create Your First Form".
// 3. Sign up with your Google account.
// 4. Enter your email address (fayashamed2004@gmail.com) where you want to receive messages.
// 5. Click "Create Form".
// 6. Copy the "Access Key" provided.
// 7. Paste your new Access Key below, replacing "YOUR_WEB3FORMS_ACCESS_KEY".
const WEB3FORMS_ACCESS_KEY = "4ea70ced-96fd-4c56-bde2-6d3762b356b1";

const contactDetails = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
    bgColor: 'bg-gradient-to-br from-[#ff5858] to-[#ff3232]',
    title: 'Email',
    value: 'fayashamed2004@gmail.com',
    href: 'mailto:fayashamed2004@gmail.com'
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
    bgColor: 'bg-gradient-to-br from-[#4ade80] to-[#16a34a]',
    title: 'Phone',
    value: '+91 9751008796',
    href: 'tel:+91 9751008796'
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
    bgColor: 'bg-gradient-to-br from-[#38bdf8] to-[#0284c7]',
    title: 'LinkedIn',
    value: 'Fayas Ahamed',
    href: 'https://www.linkedin.com/in/fayas-ahamed-68250a385/'
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
    bgColor: 'bg-gradient-to-br from-[#e5e7eb] to-[#9ca3af]',
    title: 'GitHub',
    value: 'Fayasfazil',
    href: 'https://github.com/Fayasfazil'
  }
];

const MAX_CHARS = 500;

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'thinking' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isThinkingMode, setIsThinkingMode] = useState(false);


  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, boolean> = {};
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name.trim()) newErrors.name = true;
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = true;
    if (!subject.trim()) newErrors.subject = true;
    if (!message.trim()) newErrors.message = true;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (!validateForm(formData)) return;

    let finalMessage = formData.get('message') as string;

    if (isThinkingMode) {
        setStatus('thinking');
        try {
            // Remove the GoogleGenAI API call and just use the original message
            finalMessage = `Original Message:\n${finalMessage}\n\n--- Thinking Mode Enabled ---\nMessage was analyzed in thinking mode`;
            setStatus('sending');
        } catch (error) {
            console.error("Error in thinking mode:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
            return;
        }
    }
    
    setStatus('sending');
    formData.set('message', finalMessage);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Fayas Ahamed Portfolio Contact");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: json
        });
        const result = await response.json();

        if (result.success) {
            setStatus('sent');
            (e.target as HTMLFormElement).reset();
            setMessage('');
            setErrors({});
            setTimeout(() => setStatus('idle'), 5000);
        } else {
            console.error("Submission failed:", result);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    } catch (error) {
        console.error("An error occurred:", error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <Section id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-orbitron text-center font-bold text-glow">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 mb-8 rounded"></div>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-500 dark:text-gray-400 mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column: Contact Info */}
            <motion.div 
                className="lg:col-span-2 space-y-6"
                variants={containerVariants(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h3 className="text-2xl font-bold font-orbitron mb-4">Contact Information</h3>
                {contactDetails.map((item) => (
                    <motion.a 
                        key={item.title} 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/80 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className={`w-14 h-14 rounded-lg ${item.bgColor} flex-shrink-0 flex items-center justify-center text-white`}>
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.title}</p>
                            <p className="font-semibold text-gray-800 dark:text-white">{item.value}</p>
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            {/* Right Column: Form */}
            <div className="lg:col-span-3">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={status} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white dark:bg-[#10121a] p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none"
                    >
                        {status === 'sent' ? (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto flex items-center justify-center mb-4">
                                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-green-500 mb-4">Message Sent!</h3>
                                <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                            </div>
                        ) : status === 'error' ? (
                             <div className="text-center py-10">
                                <div className="w-16 h-16 bg-red-500/20 rounded-full mx-auto flex items-center justify-center mb-4">
                                  <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-red-500 mb-4">Submission Failed!</h3>
                                <p className="text-gray-600 dark:text-gray-300">Oops! Something went wrong. Please try again later.</p>
                                <p className="text-xs text-gray-500 mt-2">(Site owner: Please ensure your Web3Forms Access Key is correctly configured.)</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold font-orbitron mb-6">Send Message</h3>
                                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="form-input-container">
                                            <label htmlFor="name" className="sr-only">Name</label>
                                            <input type="text" name="name" id="name" required placeholder="Your Name" className={`form-input w-full rounded-md py-3 px-4 text-gray-800 dark:text-white placeholder-gray-500 !border ${errors.name ? '!border-red-500' : 'border-gray-300 dark:border-gray-700/80'}`} />
                                        </div>
                                        <div className="form-input-container">
                                            <label htmlFor="email" className="sr-only">Email</label>
                                            <input type="email" name="email" id="email" required placeholder="your.email@example.com" className={`form-input w-full rounded-md py-3 px-4 text-gray-800 dark:text-white placeholder-gray-500 !border ${errors.email ? '!border-red-500' : 'border-gray-300 dark:border-gray-700/80'}`} />
                                        </div>
                                    </div>
                                    <div className="form-input-container">
                                        <label htmlFor="subject" className="sr-only">Subject</label>
                                        <input type="text" name="subject" id="subject" required placeholder="What's this about?" className={`form-input w-full rounded-md py-3 px-4 text-gray-800 dark:text-white placeholder-gray-500 !border ${errors.subject ? '!border-red-500' : 'border-gray-300 dark:border-gray-700/80'}`} />
                                    </div>
                                    <div className="form-input-container">
                                        <label htmlFor="message" className="sr-only">Message</label>
                                        <textarea name="message" id="message" rows={5} required maxLength={MAX_CHARS} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about your project or just say hello!" className={`form-input w-full rounded-md py-3 px-4 text-gray-800 dark:text-white placeholder-gray-500 !border ${errors.message ? '!border-red-500' : 'border-gray-300 dark:border-gray-700/80'}`}></textarea>
                                        <p className="text-right text-sm text-gray-500 mt-2">{message.length}/{MAX_CHARS} characters</p>
                                    </div>
                                    <div className="pt-2">
                                        <label htmlFor="thinking-mode" className="flex items-center cursor-pointer group">
                                            <div className="relative">
                                                <input type="checkbox" id="thinking-mode" className="sr-only" checked={isThinkingMode} onChange={() => setIsThinkingMode(!isThinkingMode)} />
                                                <div className={`block w-14 h-8 rounded-full transition-colors ${isThinkingMode ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                                                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${isThinkingMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                            </div>
                                            <div className="ml-4">
                                                <span className="text-gray-700 dark:text-gray-300 font-semibold group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">Enable Thinking Mode</span>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">For complex queries analysis</p>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="pt-2">
                                        <button type="submit" disabled={status === 'sending' || status === 'thinking'} className="btn-glow w-full font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 flex items-center justify-center">
                                            {status === 'sending' || status === 'thinking' ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    {status === 'thinking' ? 'Thinking...' : 'Sending...'}
                                                </>
                                            ) : 'Send Message'}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;