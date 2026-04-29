// components/ServiceCard.tsx

type FeatureItem = {
  label: string;
};

type AvatarItem = {
  src: string;
  alt?: string;
};

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  features: FeatureItem[];
  avatars?: AvatarItem[];
  buttonIcon?: string;
  buttonAlt?: string;
  onClick?: () => void;
  className?: string;
};

const StarIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M10.9441 0.755076C10.8446 0.313607 10.4525 0 10 0C9.54747 0 9.15536 0.313607 9.05591 0.755076L8.36078 3.84098C7.85328 6.09391 6.09391 7.85328 3.84098 8.36078L0.755075 9.05591C0.313607 9.15536 0 9.54747 0 10C0 10.4525 0.313607 10.8446 0.755075 10.9441L3.84098 11.6392C6.09391 12.1467 7.85328 13.9061 8.36078 16.159L9.05591 19.2449C9.15536 19.6864 9.54747 20 10 20C10.4525 20 10.8446 19.6864 10.9441 19.2449L11.6392 16.159C12.1467 13.9061 13.9061 12.1467 16.159 11.6392L19.2449 10.9441C19.6864 10.8446 20 10.4525 20 10C20 9.54747 19.6864 9.15536 19.2449 9.05591L16.159 8.36078C13.9061 7.85328 12.1467 6.09391 11.6392 3.84098L10.9441 0.755076Z"
        fill="black"
      />
    </svg>
  );
};

export default function ServiceCard({
  title,
  description,
  image,
  imageAlt = "",
  features,
  avatars = [],
  buttonIcon = "/img/illustrations/actBtn.png",
  buttonAlt = "Open service",
  onClick,
  className = "",
}: ServiceCardProps) {
  return (
    <div className={`container mx-auto w-full max-w-[1320px] ${className}`}>
      <div className="rounded-4xl w-full! h-full! bg-white overflow-hidden border border-gray-100 drop-shadow-2xl">
        <div className="overflow-hidden w-full!  bg-linear-to-l from-[#DDB1FF] via-20% to-[#BBE6FA]">
          <img src={image} alt={imageAlt} className="h-fit w-full" />
        </div>

        <div className="py-[40px]! px-[48px]! space-y-[24px]! bg-white!">
          <div className="space-y-[12px]!">
            <h2 className="text-[48px]! font-semibold!">{title}</h2>

            <p className="text-gray-700! text-[20px] font-normal">
              {description}
            </p>
          </div>

          {features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3.5">
                  <StarIcon />

                  <h3 className="text-gray-900! text-[18px]! font-normal!">
                    {item.label}
                  </h3>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between gap-4">
            {avatars.length > 0 && (
              <div className="flex -space-x-1 overflow-hidden">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar.src}
                    alt={avatar.alt || ""}
                    className="inline-block h-12! w-12!  rounded-full ring-2 ring-white"
                  />
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={onClick}
              className="cursor-pointer duration-300 hover:rotate-45"
              aria-label={buttonAlt}
            >
              <img src={buttonIcon} alt={buttonAlt} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
