/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {
  ElementType,
  ComponentPropsWithoutRef,
  useMemo,
  useState,
  useEffect,
} from "react";
import Link from "next/link";

type OwnProps = {
  text: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  variant?: "primary" | "secondary";
};

type PolyProps<As extends ElementType> = OwnProps &
  Omit<ComponentPropsWithoutRef<As>, keyof OwnProps | "className"> & {
    as?: As;
  };

const splitToLetters = (s: string) =>
  [...s].map((ch, i) => (
    <span key={i} className="btn-anim__letter">
      {ch.trim() === "" ? "\u00A0" : ch}
    </span>
  ));

export default function AnimatedButton<As extends ElementType = "div">(
  props: PolyProps<As> & { position?: "previous" | "next" },
) {
  const {
    as,
    className = "",
    text,
    children,
    position = "next",
    href,
    target,
    variant = "primary",
    ...rest
  } = props as PolyProps<ElementType> & {
    position?: "previous" | "next";
    variant?: "primary" | "secondary";
  };

  let Tag: ElementType;
  let isInternalLink = false;

  if (href) {
    if (href.startsWith("/") && !target) {
      Tag = Link;
      isInternalLink = true;
    } else {
      Tag = "a";
    }
  } else {
    Tag = (as || "div") as ElementType;
  }

  const [play, setPlay] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const letters = useMemo(() => splitToLetters(text), [text]);

  const variantClass =
    variant === "primary"
      ? "bg-white text-black border border-white font-semibold!"
      : "bg-transparent text-white border border-white font-semibold!";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const baseClassName = `btn-anim group ${variantClass} ${className}`;

  const tagProps = {
    className: baseClassName,
    "aria-label": text,
    ...(href && !isInternalLink ? { href, target } : {}),
    ...(isInternalLink ? { href } : {}),
    ...rest,
  };

  const animatedTagProps = {
    ...tagProps,
    className: `${baseClassName} ${play ? "play" : ""}`,
    onMouseEnter: () => setPlay(true),
    onAnimationEnd: () => setPlay(false),
    onMouseLeave: () => setPlay(false),
  };

  if (!isMounted) {
    return (
      <Tag {...tagProps}>
        {position === "previous" ? children : null}

        <span className="btn-caption">
          <div className="btn-anim__block">{text}</div>
          <div className="btn-anim__block" aria-hidden="true">
            {text}
          </div>
        </span>

        {position === "next" ? children : null}
      </Tag>
    );
  }

  return (
    <Tag {...animatedTagProps}>
      {position === "previous" ? children : null}

      <span className="btn-caption">
        <div className="btn-anim__block">{letters}</div>
        <div className="btn-anim__block" aria-hidden="true">
          {letters}
        </div>
      </span>

      {position === "next" ? children : null}
    </Tag>
  );
}
