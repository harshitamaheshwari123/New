const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm font-headline font-bold">
          Bharat Rise
        </p>
        <p className="text-sm text-primary-foreground/70 mt-2 md:mt-0">
          © {new Date().getFullYear()} Building Bharat. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
