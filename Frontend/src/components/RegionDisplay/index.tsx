import { Separator } from "../ui/separator";
import { Heading } from "../ui/Heading";
import React from "react";

interface Props {
  className?: string;
  label?: React.ReactNode;
  value?: React.ReactNode;
}

export default function RegionDisplay({
  label = "Region",
  value = "europe-de",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col self-stretch gap-1 flex-1`}
    >
      <div className="ml-4 mr-[22px] flex flex-wrap justify-between gap-5 self-stretch">
        <Heading
          size="textxs"
          as="p"
          className="text-[16px] font-medium uppercase tracking-[0.64px]"
        >
          {label}
        </Heading>
        <Heading
          size="textxs"
          as="p"
          className="text-[16px] font-medium uppercase tracking-[0.64px]"
        >
          {value}
        </Heading>
      </div>
      <Separator
        orientation="horizontal"
        className="h-px w-full self-stretch bg-white-a700_19"
      />
    </div>
  );
}
