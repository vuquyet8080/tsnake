import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

export default function TaskButton({
  icon,
  title,
  onClick = () => {},
  ...props
}) {
  return (
    <Button
      size="sm"
      {...props}
      onClick={() => {
        console.log("1");
        onClick();
      }}
    >
      <div className="flex flex-row gap-x-2 ">
        {icon && (
          <div className="relative h-5 w-5">
            <Image
              src={`/images/${icon}.svg`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        )}
        <div className="text-sm font-medium">{title}</div>
      </div>
    </Button>
  );
}
