import { ArrowUpIcon, ButtonLines, EllipsisIcon } from "@/public/icons";
type PrimaryButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  fill?: string;
};

export default function PrimaryButton({
  label,
  onClick,
  className = "",
  fill = "white",
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-[16px]! px-[24px]! relative cursor-pointer group  overflow-hidden flex flex-row items-center justify-center! gap-2 bg-[#4939D2] rounded-[12px]! ${className}`}
    >
      {/* <div className=" absolute inset-0 w-full h-full overflow-hidden">
        <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full">
          <ButtonLines />
        </div>
      </div> */}

      <span className={` ${className} relative z-10 text-[20px]! text-white`}>
        {label}
      </span>

      <div className="relative z-10 shrink-0 transition-transform duration-500 group-hover:rotate-45">
        <ArrowUpIcon fill={fill} />
      </div>
      <div className="absolute -left-80 -top-20 w-[65px] h-[200px] rounded-full bg-white blur-[70px] -rotate-30 group-hover:animate-[buttonShine_1.2s_linear_infinite]" />
    </button>
  );
}
