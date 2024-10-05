import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";

import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import ClientsList from "@/components/ClientsList";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "violet", size: "lg" })}>Rug</span>
        <span className={title({ color: "green", size: "lg" })}>Ved</span>
        <span className={title({ color: "blue", size: "lg" })}>Soft</span>
        <div className={subtitle({ class: "mt-4" })}>
          We offer reliable and scalable end-to-end software solutions tailored
          to your needs
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "lg",
            variant: "flat",
          })}
          href={siteConfig.links.contact}
        >
          Contact Us
        </Link>
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "lg",
            variant: "solid",
          })}
          href={siteConfig.links.about}
        >
          More About Us
        </Link>
        {/* <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link> */}
      </div>

      <div className="mt-8 w-full">
        {/* <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet> */}
        <ClientsList />
      </div>
    </section>
  );
}
