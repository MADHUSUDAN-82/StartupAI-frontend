import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import Image from "next/image";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function NavBar() {
  return (
    <div className="relative" >
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://github.com/MADHUSUDAN-82" target="_blank" rel="noopener noreferrer">
            <Image src="/github.png" width={50} height={50} alt="GitHub" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://leetcode.com/u/madhusudan8287/" target="_blank" rel="noopener noreferrer">
            <Image src="/code.png" width={50} height={50} alt="Code" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://www.linkedin.com/in/madhusudan-bhardwaj-352215224/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.png" width={50} height={50} alt="LinkedIn" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://instagram.com/madhusudan_pandit" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.png" width={50} height={50} alt="Instagram" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://x.com/MadhusudanBhar9" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter.png" width={50} height={50} alt="Twitter" />
          </a>
        </DockIcon>
       
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="mailto:madhusudanbhardwaj8287@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image src="/gmail.png" width={50} height={50} alt="Gmail" />
          </a>
        </DockIcon>
        
      </Dock>
    </div>
  );
}

