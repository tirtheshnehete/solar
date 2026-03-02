function Footer() {
  return (
    <footer className="bg-primaryDark text-white py-10 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <h3 className="text-2xl font-bold">LeanQuality Solutions</h3>
        <p className="text-sm">
          Empowering Sustainable Energy for a Greener Tomorrow
        </p>
        <p className="text-xs opacity-70">
          © {new Date().getFullYear()} LeanQuality Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;