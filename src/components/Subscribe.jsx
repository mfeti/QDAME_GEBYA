import { OrangePattern } from "../assets/website";
const bgImage = {
  backgroundImage: `url(${OrangePattern})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};
function Subscribe() {
  return (
    <section
      style={bgImage}
      className="min-h-[200px] flex justify-center items-center"
    >
      <div className="container">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get Notified About New Products
          </h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 text-[#222] "
          />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
