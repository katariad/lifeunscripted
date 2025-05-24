"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function FormattedDate({ date }: { date: string }) {
  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    const parsedDate = new Date(date);
    setFormatted(format(parsedDate, "PP"));
  }, [date]);

  return <span>{formatted}</span>;
}
