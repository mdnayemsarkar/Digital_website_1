import img from "../src/images/info-2.jpg";
import Card from "./Card";
import Sdata from "./Sdata";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="text-center mt-24 font-monospacev text-2xl text-green-500">
            Our service
          </div>
          {/* 2nd start  */}
          <div className="text-5xl text-center mt-8 font-monospace">
            Discover What We Do And How We Do It
          </div>
          <div className="mt-6 text-gray-500 text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            dolorum dolores laudantium nobis eos blanditiis porro <br />{" "}
            perspiciatis totam nisi nostrum!
          </div>
          {/* 2nd ends  */}
        </div>
        {/* card starts here  */}
        <div className="flex gap-8 p-9">
          {/* <Card /> */}
          {Sdata.map((val, ind) => {
            return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
          })}

          {/* <div><Card/></div> */}
          {/* <div><Card/></div> */}
        </div>
        {/* card ends here  */}
      </div>
    </>
  );
};
export default Home;
