import Image from "next/image";
import type { ProjectImage } from "@/lib/content-types";
import { assetPath } from "@/lib/assets";

export function ProjectCover({ image, compact = false }: { image?: ProjectImage; compact?: boolean }) {
  if (image) return <Image src={assetPath(image.src)} alt={image.alt} width={image.width} height={image.height}
    unoptimized className={`w-full rounded-t-xl object-cover ${compact ? "aspect-[3/1]" : "max-h-[32rem] object-contain"}`} />;
  return <div aria-hidden="true" className={`technical-cover ${compact ? "h-16" : "h-28 sm:h-36"}`}>
    <span /><span /><span />
  </div>;
}
