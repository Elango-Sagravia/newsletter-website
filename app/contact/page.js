import ContactForm from "@/components/ui/contactForm/contactForm";
import Faq from "@/components/ui/faq/faq";
import Subscribe from "@/components/ui/subscribe/subscribe";

export default function Contact() {
  return (
    <main>
      <header className="px-8 md:px-16 py-16">
        <h1 className="text-4xl text-nl_background">Contact us</h1>
      </header>
      <ContactForm />
      <Faq />
      <Subscribe />
    </main>
  );
}
