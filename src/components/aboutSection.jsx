import { useState } from "react";
import aboutImage from "/aboutImage.jpg";
import marketPlace from "/Market Place.png";
import Button from "./shared/button";
import { TbPhoneCall } from "react-icons/tb";


const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("settingTab");

  const tabs = [
    {
      id: "homeTab",
      label: "About",
      title: "Exceptional culinary experience and delicious food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
      contentId: "aboutContent",
      button: <Button text={"About More"} />,
    },
    {
      id: "settingTab",
      label: "Experience",
      title: "Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod",
      contentId: "experienceContent",
      button: <Button text={"Experienced"} />,
    },
    {
      id: "profileTab",
      label: "Contact",
      title: "Contact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore",
      contentId: "contactContent",
      button: <Button text={"Contact Us"} />,
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row gap-8 max-w-7xl w-full mx-auto my-4 md:my-6 lg:my-20 p-4 lg:p-0">
        {/* left side banner */}
      <div className="lg:w-1/2 relative">
        <img src={aboutImage} alt="About left Image" className="rounded " />
        <img src={marketPlace} alt="market Place Image" className="absolute top-4 z-30"/>
      </div>
      {/* right side tabs */}
      <div className="font-sans py-4 lg:py-0 lg:w-1/2">
        <ul className="flex border-b border-b-[#B52B1D]">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              id={tab.id}
              className={`tab flex flex-col items-center justify-center font-semibold text-sm py-3 px-8 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#B52B1D] font-bold border-blue-600 text-white"
                  : "text-gray-600 border-gray-50"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 mb-1"
                viewBox={
                  tab.id === "homeTab" ? "0 0 511 511.999" : "0 0 512 512"
                }
              >
                {/* SVG Paths for each icon */}
              </svg>
              {tab.label}
            </li>
          ))}
        </ul>

        {tabs.map((tab) => (
          <div
            key={tab.contentId}
            id={tab.contentId}
            className={`tab-content max-w-2xl mt-8 ${
              activeTab === tab.id ? "block" : "hidden"
            }`}
          >
            <h4 className="text-4xl font-bold text-black uppercase">
              {tab?.title}
            </h4>
            <p className="text-sm text-gray-600 mt-4">{tab?.description}</p>
            <div className="mt-8 flex items-center gap-6 md:gap-8">
              <p>{tab?.button}</p>
              <div className="flex items-center gap-2">
                <TbPhoneCall className="text-[#B52B1D] font-bold text-xl" />
                <p className="text-black font-semibold">+88 3426 739 485</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
