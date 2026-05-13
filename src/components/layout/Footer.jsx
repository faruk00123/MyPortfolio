import React from 'react';

export default function Footer() {
const socials = [
  { name: 'GitHub', url: 'https://github.com/faruk00123' },
  { name: 'Facebook', url: 'https://www.facebook.com/md.omor.faruk.707460/' },
  ];
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-primary flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-primary">O</span>
            </div>
            <span className="text-sm font-mono text-muted-foreground">
              OMAR.DEV
            </span>
          </div>
          <p className="text-xs font-mono text-muted-foreground/50 tracking-wider">
            &copy; {new Date().getFullYear()} OMAR CANVAS ARCHITECTURE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {socials.map((social) => (
   <a
    key={social.name}
    href={social.url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs font-mono text-muted-foreground/40 hover:text-primary transition-colors duration-300 uppercase tracking-wider"
    >
    {social.name}
  </a>
))}
          </div>
        </div>
      </div>
    </footer>
  );
}