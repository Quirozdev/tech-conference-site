"use client";

import Button from "@/shared/components/button";
import { ErrorIcon } from "@/shared/icons/error-icon";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-4">
      <ErrorIcon className="size-32 text-neutral-100" />
      <h2 className="text-preset-2 text-center text-neutral-100">
        Something went wrong
      </h2>
      <Button label="Try again" as="button" variant="primary" onClick={retry} />
    </div>
  );
}
