import img1 from '../../assets/images/about_us/person.jpg';
import img2 from '../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 mtb-8 mb-12 gap-20 p-4">
        <div className="relative">
          <img src={img1} alt="" />
          <div className="absolute md:w-[300px] left-2/4 bottom-5 top-3/4 md:top-1/2 ">
            <img className="border-8 border-white rounded" src={img2} alt="" />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl text-orange-400">About Us</h2>
          <h2 className="text-4xl font-bold">
            We are qualified & of experience in this field
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-error w-[150px] h-[50px]">
            Get More Info
          </button>
        </div>
      </div>
    );
};

export default About;