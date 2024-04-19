"use client";
import { onActionButton } from "@/helper/actionButton";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import TaskButton from "../button/TaskButton";

export default function TaskQuests({ quest }) {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);

  return (
    <Accordion open={openAcc1} className="">
      <AccordionHeader
        onClick={handleOpenAcc1}
        className="m-0 border-none px-0 py-0"
      >
        <div className="flex w-full flex-row items-center gap-x-2 rounded-md border px-4 py-2 shadow-md hover:cursor-pointer active:bg-gray-50">
          <div className="relative h-6 w-6">
            <Image
              src={`/images/${quest.type}.svg`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt={quest.type}
            />
          </div>
          <div className="text-sm font-semibold">{quest?.title || ""}</div>
        </div>
      </AccordionHeader>
      <AccordionBody className="flex flex-row gap-x-3">
        <TaskButton
          color="black"
          icon={quest.type}
          title={quest?.action}
          onClick={() => {
            onActionButton({
              action: quest?.action,
              data: quest,
              type: quest?.type,
            });
          }}
          // variant="outlined"
        />
        <TaskButton variant="outlined" title={"Verify"} action={() => {}} />
      </AccordionBody>
    </Accordion>
  );
}
