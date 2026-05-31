import Image from "next/image";
import Link from "next/link";

type ItcLogoProps = {
  showText?: boolean;
  light?: boolean;
  className?: string;
};

export function ItcLogo({ showText = true, light = false, className = "" }: ItcLogoProps) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/itc-logo.png"
          alt="ITC Limited"
          width={130}
          height={48}
          className="h-9 w-auto object-contain sm:h-10"
          style={light ? { filter: "brightness(0) invert(1)" } : undefined}
          priority
        />
      </div>
      {showText && (
        <div className="hidden sm:block">
          <p
            className={`text-sm font-bold leading-tight transition-colors ${
              light ? "text-white" : "text-itc-slate dark:text-white"
            }`}
          >
            ITC Limited
          </p>
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${
              light ? "text-itc-gold-light" : "text-itc-green dark:text-itc-gold-light"
            }`}
          >
            Enduring Value
          </p>
        </div>
      )}
    </Link>
  );
}
