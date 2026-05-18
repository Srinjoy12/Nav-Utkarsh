import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
        {logos.map((logo) => (
          <div key={`logo-${logo.alt}`} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
             <img
              alt={logo.alt}
              className="pointer-events-none h-6 select-none md:h-8 dark:brightness-0 dark:invert"
              height={logo.height || "auto"}
              loading="lazy"
              src={logo.src}
              width={logo.width || "auto"}
            />
            <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{logo.alt}</span>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
