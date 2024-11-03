function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] -z-10 bg-gray-100 dark:bg-gray-950 flex justify-center items-center">
      {/* background pattern section  */}
      <div className="w-[700px] h-[700px] bg-primary/40 rounded-3xl absolute -top-1/2 right-0 rotate-45"></div>
      {/* hero section  */}
      <div className="container"></div>
    </section>
  );
}

export default Hero;
