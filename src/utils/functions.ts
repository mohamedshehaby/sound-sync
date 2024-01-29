import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Price } from "@/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimeFromTotalSeconds(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  // Create an Intl.NumberFormat object with the desired options
  const formatter = new Intl.NumberFormat("en", {
    minimumIntegerDigits: 2,
    style: "decimal",
  });

  // Format the minutes and seconds using the formatter
  const formattedMinutes = formatter.format(m);
  const formattedSeconds = formatter.format(s);

  return formattedMinutes + ":" + formattedSeconds;
}

export const getUrl = () => {
  let url =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_VERCEL_URL ??
    "http://localhost:3000";

  // If the URL doesn't start with http or https, add https as a prefix
  url = url.includes("http") ? url : `https://${url}`;

  // Make sure to including trailing `/`.
  url = url.endsWith("/") ? url : `${url}/`;

  return url;
};

export const postData = async ({
  url,
  data,
}: {
  url: string;
  data?: { price: Price };
}) => {
  console.log("posting,", url, data);

  const res: Response = await fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.log("Error in postData", { url, data, res });

    throw Error(res.statusText);
  }

  return res.json();
};

export const toDateTime = (secs: number) => {
  const t = new Date("1970-01-01T00:30:00Z"); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};
