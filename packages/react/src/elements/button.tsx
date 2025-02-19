import React from "react";
import clsx from "clsx";

type Button = {
  title?: any;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
  type?: 'primary' | 'secondary' | 'gradient' | string;
  className?: string;
  disabled?: boolean;
};

const SIZE_MAPS: any = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-2",
  lg: "text-lg px-8 py-2",
  xl: "text-xl px-10 py-2"
};

const TYPE_MAPS: any = {
    primary: "bg-primary-400 hover:bg-primary-600 text-white",
    secondary: "bg-neutral-50 text-neutral-800 border hover:bg-neutral-400 focus:ring-neutral-600",
    gradient: 'bg-gradient-to-r from-primary-400 to-secondary-500 text-white hover:from-primary-800',
};

export function Button({
  title = "Get Started",
  size = 'md',
  type,
  className,
  disabled
}: Button) {
  return (
    <button
      className={clsx(
          "m-2 rounded cursor-pointer max-w-max focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-40 disabled:opacity-50 disabled:cursor-not-allowed",
        size && SIZE_MAPS[size],
        type && TYPE_MAPS[type],
        className
      )}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
