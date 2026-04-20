"use client";

export default function TrustedClients() {
  return (
    <div className="flex items-center  justify-between bg-[#1a1230] text-white rounded-full px-4 md:ps-3 md:pe-4 py-3 gap-3 w-fit shadow-lg">
      {/* Text */}

      <img src={"/img/icons/epcIcon.svg"} className="w-12! h-12!" />

      <div className="flex flex-col items-start md:flex-row md:gap-4! items-center">
        <span className="text-2xl! md:text-3xl! text-white">
          Trusted by{" "}
          <span className="text-white font-semibold">1200+ clients</span>{" "}
          worldwide
        </span>

        {/* Stars */}
        <div className="flex items-center ml-4 text-yellow-400 text-sm">
          {"★★★★★"}
        </div>
      </div>
    </div>
  );
}
