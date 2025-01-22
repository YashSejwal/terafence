import { ProductCard } from "../components/ProductCard";
import secureOT from"../assets/secureOT.mp4";
import secureIT from"../assets/secureIT.mp4";
import secureCAM from"../assets/secureCAM.mp4";

const OurProduct = () => {
    return (
      <div className="w-full h-full flex flex-col items-center mt-20">
        <div className="container">
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <ProductCard
            title="Secure OT"
            description="A cybersecurity device which when strategically placed assures that the SCADA/HMI/PLC and other OT (Operations Technology) systems remain inaccessible by an un-authorized person or a group from an outside network or even from inside the system" 
            videoUrl={secureOT}          />
          <ProductCard
            title="Secure IT"
            description="A smart IT Switch with built in intelligence to allow only unidirectional flow of data and completely denies the reverse transmission of all kinds of commands, data or information."
            videoUrl={secureIT}          />
          <ProductCard
            title="Secure CAM"
            description="A cybersecurity device which when strategically placed assures that IP-CCTV cameras network and Video Storage remain reliably inaccessible by an un-authorized person or a group from an outside network or even from inside the system."
            videoUrl={secureCAM}          />
        </div>
        </div>
      </div>
    );
  };
  export default OurProduct;