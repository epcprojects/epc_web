// components/ProcessStepCard.tsx

type ProcessStepCardProps = {
  step: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  className?: string;
};

export default function ProcessStepCard({
  step,
  title,
  description,
  image,
  imageAlt = "",
  className = "",
}: ProcessStepCardProps) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-6 rounded-4xl! bg-white px-[24px]! py-[32px]! md:flex-row md:gap-8 md:px-[40px] md:py-[36px] ${className}`}
    >
      <div className="space-y-[16px]!">
        <span className="inline-block text-[18px]! font-medium text-gray-950!">
          {step}
        </span>

        <div className="flex flex-col gap-3">
          <h2 className="text-[32px]! font-semibold leading-tight text-gray-950! md:text-[40px]!">
            {title}
          </h2>

          <p className="text-[16px]! leading-relaxed text-gray-700! md:text-[20px]!">
            {description}
          </p>
        </div>
      </div>

      <div className="flex shrink-0">
        <img
          src={image}
          alt={imageAlt}
          className="h-40 w-40 shrink-0 object-contain md:h-52 md:w-52"
        />
      </div>
    </div>
  );
}
