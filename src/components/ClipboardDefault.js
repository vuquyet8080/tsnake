import React from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export function ClipboardDefault({ link = "https://tsnake.vercel.app/" }) {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  return (
    <div>
      <div className="flex items-center gap-x-4">
        {/* <Typography variant="lead">npm i @material-tailwind/react</Typography> */}

        <Button
          onMouseLeave={() => setCopied(false)}
          onClick={() => {
            copy(link);
            setCopied(true);
          }}
        >
          <div className="flex flex-row items-center justify-center gap-x-1">
            {copied ? (
              <CheckIcon className="h-5 w-5 text-white" />
            ) : (
              <DocumentDuplicateIcon className="h-5 w-5 text-white" />
            )}
            <div className="ml-2 font-semibold">Copy link</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
