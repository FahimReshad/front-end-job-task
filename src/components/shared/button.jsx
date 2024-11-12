/* eslint-disable react/prop-types */

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-[#FEBF00] hover:bg-yellow-400 flex items-center transition-all font-semibold rounded-md px-5 py-3 uppercase text-[#0A1425]">
        {text}
      </button>
    </div>
  );
};

export default Button;
