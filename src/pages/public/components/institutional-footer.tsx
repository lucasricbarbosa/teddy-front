import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { TeddyLogo } from "../../../components/teddyLogo";

export function InstitutionalFooter() {
  return (
    <footer className="container mx-auto mt-24 max-w-7xl px-4 md:px-0">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}

function FooterTop() {
  return (
    <section className="grid grid-cols-1 gap-16 pb-12 md:grid-cols-[5fr_7fr] lg:grid-cols-[4fr_2fr_6fr] lg:gap-8">
      <div>
        <TeddyLogo />
        <p className="max-w-96 py-6 text-lg font-medium">
          Conectamos você e seus clientes às melhores oportunidades dos maiores
          Bancos e Fintechs do País em uma única plataforma!
        </p>
        <span className="block font-medium">
          contato@teddyopenfinance.com.br
        </span>
        <span className="block py-5 font-medium">
          R. José Versolato, 101, 18º andar <br /> São Bernardo do Campo – SP{" "}
          <br /> CEP: 09750-730
        </span>
        <div>
          <Button className="rounded text-white normal-case hover:opacity-90">
            Seja um Banker na Teddy!
          </Button>
        </div>
      </div>
      <div className="hidden lg:block"></div>
      <FooterLinks />
    </section>
  );
}

export function FooterBottom() {
  return (
    <div className="border-border flex flex-col justify-between gap-5 border-t py-5 md:flex-row md:items-center">
      <div className="flex flex-col gap-5 md:flex-row md:gap-0">
        <p className="pr-14 font-medium">
          © TEDDY HUB DIGITAL LTDA – CNPJ sob nº 37.207.659/0001-23
        </p>
        <nav className="flex items-center gap-5 font-medium">
          <Link className="transition-all hover:scale-105" to={"/error"}>
            PT
          </Link>
          <Link className="transition-all hover:scale-105" to={"/error"}>
            EN
          </Link>
        </nav>
      </div>
      <nav className="text-muted-foreground flex items-center gap-5">
        <Link
          className="hover:text-primary transition-all hover:scale-105"
          to={"https://www.linkedin.com/company/teddyopenfinance/"}
        >
          <Linkedin />
        </Link>
        <Link
          className="hover:text-primary transition-all hover:scale-105"
          to={"https://www.instagram.com/teddyopenfinance/"}
        >
          <Instagram />
        </Link>
        <Link
          className="hover:text-primary transition-all hover:scale-105"
          to={"https://www.facebook.com/teddyopenfinance"}
        >
          <Facebook />
        </Link>
        <Link
          className="hover:text-primary transition-all hover:scale-105"
          to={
            "https://www.youtube.com/channel/UCatVmeRiYbBWD91umLgsh6A/featured"
          }
        >
          <Youtube />
        </Link>
      </nav>
    </div>
  );
}

export function FooterLinks() {
  const footerSections = [
    {
      title: "Segmentações",
      links: [
        "Bancário Autônomo",
        "Correspondente Bancário",
        "Especialista em crédito imobiliário",
        "Corretor de seguros",
        "Escritório de Crédito e Investimento",
        "White Label",
      ],
    },
    {
      title: "Teddy",
      links: [
        "Sobre nós",
        "Imprensa",
        "Blog",
        "Política de privacidade",
        "Ouvidoria",
      ],
    },
  ];

  return (
    <nav className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div></div>
      {footerSections.map((section, sectionIndex) => (
        <div className="flex flex-col" key={sectionIndex}>
          <h3 className="pb-3 font-bold">{section.title}</h3>
          {section.links.map((link, linkIndex) => (
            <Link
              className="hover:text-primary my-1 py-1 text-base font-medium"
              to="#"
              key={linkIndex}
            >
              {link}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
