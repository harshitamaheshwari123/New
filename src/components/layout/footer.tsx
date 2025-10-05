import { Logo } from "../icons";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-4">
            <Logo className="h-6 w-auto text-primary-foreground"/>
        </div>
        <p className="max-w-prose text-primary-foreground/80 mb-6">
            From aspiration to action - we empower political journeys with the science of strategy and the heart of grassroots connection.
        </p>
        <div className="h-px w-24 bg-accent mb-6"></div>
        <p className="text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} Building Bharat. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
