

import Button from "./components/Button.jsx";
import headerbackground from "./assets/images/header background.jpg";
import KingsMassage from "./assets/images/Kings Massage.jpg";
import CoupleMassage from "./assets/images/Couple-Massage.jpg";
import SwedishMassage from "./assets/images/Swedish-Massage.jpg";
import AromatherapyMassage from "./assets/images/Aromatherapy-Massage.jpg";
import DeepTissueMassage from "./assets/images/Deep-Tissue-Massage.jpg";
import Bodyscrub from "./assets/images/Body scrub & Sauna Steam.jpg";
const Bodysrubsaunasteam= Bodyscrub;
import { FaTiktok,FaInstagram,FaWhatsapp } from "react-icons/fa";
function App(){
    return(

        
        <div >
       
          
              <div>

                    </div>

                  
            <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 py-4 text-left text-6xl  text-[goldenrod] font-sans font-bold shadow-md transition-colors">
                <h1>
                    Prestige Pampering Spa Beauty Center Academy
                    <div className="text-right">
                    <a  href="https://wa.me/+2348061118674" className="inline-block bg-[#D4AF37] hover-[#C59B27] text-white font-bold px-8 rounded-full shadoe-lg transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer">
                        BOOK NOW
                    </a>

                             </div>
                </h1>
            </header>

            <div 
             className="bg-cover bg-no-repeat bg-center  bg-blend-multiply mt-0 pd-{40px}"
             style={{backgroundImage:`url(${headerbackground})`}}> 
             <div className=" text-center">     
      <p className="text-[260px] text-white font-semibold  mb-4  font-bold">  Experience</p>
            <p className=" text-6xl font-bold md-8 text-white mb-8 "> Ultimate relaxtion </p> <br/>
            <p className="text-base  text-white leading-relaxed"> Rejuvenate your boby and mind with our <br /> Premium spa treatments tailored to your needs</p>
             <Button  size="sm">
                             BOOK NOW
                             </Button>
            </div>
         </div>
         <div className="text-center">
          <h1 className="text-5xl text-blacke font-semibold mb-4 "> Our premium services</h1>
                    <div className="text-3xl text-blackfont-semibold mb-4 "><samp>Discover the perfect treatment for your </samp></div>
                    <div className="text-2xl text-black font-semibold mb-4 "><samp> wellness journey</samp></div>
                    
                    </div> 

<div className="flex flex-col items-center text-center">
    <img src={KingsMassage} alt="King Massage" className="mx-auto rounded-lg" />
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-xl border-gray-200 shadow-sm text-center">
     <h2 className="text-xl font-bold mt-4">Kings Massage</h2>
     <p className=" text-gray-600 text-3xl" >Experience our signature 4-hands Massage performed by two skilledTherapists working in perfect harmonyChoose any massage style for this Premium treatment</p>
</div>
</div>
<br/>
<div className="flex flex-col items-center text-center">
    <img src={CoupleMassage}  alt=" CoupleMassage "className="max-auto rounded-lg"/>
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-xl border-gray-200 shadow-sm text-center mt-4">
       <h2 className=" text-xl font-bold mt-4"> Couple massage </h2>
        <p className=" text-gray-600 text-3xl"> Share  a relaxing experience with your love one . Enjoy massage of your choice together in same room on separate massage beds </p>
    </div>
</div>
<br/>
<div  className="flex flex-col items-center text-center" >
   <img src={SwedishMassage}  alt="SwedishMassage"className="max-auto rounded-lg"/> 
   <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-xl border-gray-200 shadow-sm text-center">
    <h2  className=" text-xl font-bold mt-4"> Swedish massage </h2>
 <p className=" text-gray-600 text-3xl"> Our classic relaxation massagereduces stress, improves blood ,circulation and relives muscle pain.Perfect for escaping the stress of Lagos life</p> 
   </div>
</div>
<br/>
<div className="flex flex-col items-center text-center">
    <img src={AromatherapyMassage}  alt="AromatherapyMassage"className="max-auto rounded-lg"/>
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-xl border-gray-200 shadow-sm text-center">
      <h2  className=" text-xl font-bold mt-4"> Aromatherapy massage </h2>
<p className=" text-gray-600 text-3xl">Enhance your relaxation with Aromatic candles and essential oils That promote stress reduction and deep relaxation
</p>
    </div>
</div>
<br/>
<div className="flex flex-col items-center text-center">
    <img src={DeepTissueMassage}  alt="DeepTissueMassage"className="max-auto rounded-lg"/>
    <div className="max-w-md mx-auto my-4 p-6 bg-white-900 rounded-xl border-gray-200 shadow-sm text-center">
     <h2 className=" text-xl font-bold mt-4">Deep Tissue massage </h2>
<p className=" text-gray-600 text-3xl"> Target deep muscle tension with precisely  applied  pressure . Alleviates  chronic pain improves mobility and enhances blood circulation</p>

    </div>
</div>


<br/>
<div className="flex flex-col items-center text-center">
    <img src={Bodyscrub}  alt="Bodyscrub"className="max-auto rounded-lg"/>
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-xl border-gray-200 shadow-sm text-center">
        <h2 className=" text-xl font-bold mt-4">Body scrub & Sauna Steam </h2>
<p className=" text-gray-600 text-3xl" > Remove dead skin cells, brighten your Complexion , and improve moisture Retention .Enhace your skin’s natural yBeauty and product adsorption</p>

    </div>
</div>


<div className="fixed left-4 bottom-4 flex flex-col gap-3 z-50">
<a href="https://@prestigepampering_spa">
    <FaTiktok className="text-3xl bg-black text-white  p-2 rounded"/>
</a>
<a href="https://@prestigepampering_spa">
<FaInstagram className="text-3xl bg-black text-pink-500 p-2 rounded"/>
</a>
<a href="https://wa.me/+2348061118674">
<FaWhatsapp className="text-3xl bg-black text-green-500 p-2 rounded"/>
</a>

</div>








                    
        </div>
    )
}
export default App;