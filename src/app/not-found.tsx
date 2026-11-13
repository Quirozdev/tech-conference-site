import Button from "@/shared/components/button";
import { SadGhostFaceIcon } from "@/shared/icons/sad-ghost-face-icon";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-4">
      <SadGhostFaceIcon className="size-32 text-neutral-100" />
      <h2 className="text-preset-2 text-center text-neutral-100">
        We couldn&apos;t find this page
      </h2>
      <Button href="/" label="Go Home" as="link" variant="primary" />
    </div>
  );
}
