import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import Image from "next/image";
import { PhoneCall } from 'lucide-react'

const SocialLinks = () => {
  const links = [
    {
      name: "Telegram",
      iconLink: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Telegram%202019%20Logo.svg',
      link: 'https://t.me/79638583116',
    },
    {
      name: "Whatsapp",
      iconLink: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/WhatsApp%20Logo%20green.svg',
        link: 'https://wa.me/79638583116',
    },
    {
      name: "Позвонить",
      iconLink: 'https://cdn.jsdelivr.net/npm/lucide-static/icons/phone.svg',
        link: 'tel:+79638583116',
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" })
              )}
            >
              {
                itm.name === 'Позвонить' ? <PhoneCall width={64} height={64} stroke="#2f7df4"/> :               <Image src={itm.iconLink}  
              alt={itm.name}
              loading="eager"
              priority
              height={64}
              width={64}/>
              }

            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
