import { Logo } from "../icons";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-4">
            <Logo className="w-8 h-8 text-accent"/>
            <p className="text-xl font-headline font-bold">
              Building Bharat
            </p>
        </div>
        <p className="max-w-prose text-primary-foreground/80 mb-4">
            From aspiration to action - we empower political journeys with the science of strategy and the heart of grassroots connection.
        </p>
        <p className="text-sm text-primary-foreground/70 mt-4">
          © {new Date().getFullYear()} Building Bharat. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
