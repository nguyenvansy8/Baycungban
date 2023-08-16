import backGround from "../../src/assets/logo/MaskGroup.svg";
import Card from "../components/Card/Card";
import RadioButton from "../components/RadioButton/RadioButton";
import arrow from "../../src/assets/logo/Arrow.svg";
import rightArrow from "../../src/assets/logo/rightArrow.svg";
import phone from "../../src/assets/logo/phone.svg";
import email from "../../src/assets/logo/email.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSearchFlight = () => {
    navigate("/flight-schedule");
  };

  return (
    <div className="h-[calc(100vh-4rem)] min-w-full">
      <div class="relative ">
        <img src={backGround} alt="Your Image" class="bg-contain" />
        <div class=" w-1/6 absolute top-60 left-40 text-5xl font-light whitespace">
          Hello! Where are you flying to
          <div className="mt-24 w-max">
            <Card>
              <div className="flex gap-5 items-center space-x-5">
                <RadioButton label="One way / Round-trip" />
                <RadioButton label="Multi-city" checked="true" />
                <div className="text-sm font-medium">02 Adult, 01 children</div>
                <div className="text-sm font-medium">Business Class</div>
              </div>
              <div className="flex space-x-5 mb-8">
                <div class="border rounded-xl border-gray-200 p-4 text-2xl w-max">
                  <div>From</div>
                  <div className="text-blue-700 font-bold">Đa Nang</div>
                  <div>Quang Nam, Việt Nam</div>
                </div>
                <img src={arrow} />
                <div class="border rounded-xl border-gray-200 p-4 text-2xl w-72">
                  <div>To</div>
                  <div className="text-blue-700 font-bold">Ho Chi Minh</div>
                  <div>Viet Nam</div>
                </div>
                <div class="flex border rounded-xl border-gray-200 p-4 text-2xl w-auto space-x-10">
                  <div>
                    <div>Departure</div>
                    <div className="text-blue-700 font-bold">
                      Fri, 22 Mar, 2022
                    </div>
                    <div>Pre</div>
                  </div>
                  <div>
                    <div>return</div>
                    <div className="text-blue-700 font-bold">
                      Fri, 22 Mar, 2022
                    </div>
                    <div>Next</div>
                  </div>
                </div>
              </div>
            </Card>
            <div class="relative rounded-lg p-2">
              <button
                class="absolute text-2xl bottom-0 right-5 p-2 bg-blue-500 text-white rounded-xl"
                onClick={handleSearchFlight}>
                <div className="flex gap-10">
                  Search flights
                  <img src={rightArrow} />
                </div>
              </button>
            </div>
            <div className="flex gap-10">
              <div className="flex gap-5 text-rose-100 text-2xl">
                <img src={phone} />
                Call us: +84 908 02 02 58
              </div>
              <div className="flex gap-5 text-rose-100 text-2xl">
                <img src={email} />
                Email: chucinog@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
