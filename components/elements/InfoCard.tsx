import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const InfoCard = ({
  title,
  subTitle,
  description,
  className,
  sectionClassName,
  ctaLabel,
  ctaClassName,
  imgSrc,
  containerWithImageClassName,
  dir,
}: {
  title: string;
  subTitle?: string;
  description?: string;
  className?: string;
  sectionClassName?: string;
  ctaLabel?: string;
  ctaClassName: string;
  imgSrc?: string;
  dir?: string;
  containerWithImageClassName?: string;
}) => {
  return (
    <div className={`${className}`}>
      <div className={containerWithImageClassName} dir={dir}>
        {imgSrc && <Image src={imgSrc ?? ""} alt="resume" className="" width={500} height={500} />}
        <div
          className={`flex flex-col gap-6 py-12 max-w-7xl mx-auto items-center ${sectionClassName}`}
        >
          <h1 className="text-white font-medium ">{title}</h1>
          {subTitle && <p className="text-primary-100 font-light text-xl">{subTitle}</p>}
          {description && <p className="text-base font-light text-primary-100">{description}</p>}

          <Button
            className={`text-primary-100 cursor-pointer  hover:text-white text-lg font-medium ${ctaClassName}`}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
