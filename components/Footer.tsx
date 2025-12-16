
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, FOOTER_DATA } from '../constants';
import { containerVariants, itemVariants } from '../utils/animations';

const Icon = ({ path, className = "w-5 h-5" }: { path: string, className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 25 25" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

const Footer: React.FC = () => {
  const { bio, quickNav, contact, technologies } = FOOTER_DATA;
  const tagColors: { [key: string]: string } = {
      blue: 'border-blue-500/50 text-blue-500 dark:text-blue-400',
      purple: 'border-purple-500/50 text-purple-500 dark:text-purple-400',
      green: 'border-green-500/50 text-green-500 dark:text-green-400'
  }
  
  const subFooterSocials = [
      { name: 'linkedin', href: SOCIAL_LINKS.linkedin, icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
      { name: 'github', href: SOCIAL_LINKS.github, icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
      { name: 'email', href: SOCIAL_LINKS.email, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
      { name: 'phone', href: SOCIAL_LINKS.phone, icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.footer 
      className="bg-gray-100 dark:bg-[#0e1018] pt-20 pb-8 border-t border-gray-200 dark:border-gray-800"
      variants={containerVariants(0.2, 0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Bio Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold font-orbitron mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">{bio.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{bio.text}</p>
            <div className="flex flex-wrap gap-2">
                {bio.tags.map(tag => (
                    <span key={tag.name} className={`text-xs font-semibold px-3 py-1 border rounded-full ${tagColors[tag.color]}`}>{tag.name}</span>
                ))}
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div variants={itemVariants}>
             <h3 className="text-xl font-bold font-orbitron mb-4">Quick Navigation</h3>
             <ul className="space-y-3">
                {quickNav.map(link => (
                    <li key={link.name}>
                        <a href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                            <Icon path={link.icon} />
                            <span>{link.name}</span>
                        </a>
                    </li>
                ))}
             </ul>
          </motion.div>

          {/* Get In Touch */}
          <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold font-orbitron mb-4">Get In Touch</h3>
              <ul className="space-y-4">
                  {contact.map(item => (
                      <li key={item.type} className="flex items-start gap-3">
                          <div className="w-8 h-8 flex-shrink-0 mt-1 rounded-md bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-cyan-500 dark:text-cyan-400">
                             <Icon path={item.icon} />
                          </div>
                          <div>
                              <p className="font-semibold text-gray-800 dark:text-white">{item.type}</p>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.value}</p>
                          </div>
                      </li>
                  ))}
              </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold font-orbitron mb-4">Technologies</h3>
            {Object.entries(technologies).map(([category, techs]) => (
                <div key={category} className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                        {techs.map(tech => (
                            <span key={tech} className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs px-3 py-1 rounded-md">{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
          </motion.div>
        </div>

        <hr className="border-gray-200 dark:border-gray-800 my-8"/>

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <div className="flex items-center gap-4">
                <span className="text-gray-600 dark:text-gray-400">Connect with me:</span>
                 <div className="flex items-center gap-3">
                    {subFooterSocials.map(social => (
                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-cyan-500 hover:text-white dark:hover:text-black transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d={social.icon}></path>
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
             <p className="text-sm text-gray-500">&copy; 2025 Fayas Ahamed.B. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;