"use client";

import ClearControlButton from "@/shared/components/control-buttons/clear-control-button";
import { usePathname, useRouter } from "next/navigation";

export default function ClearTalksFilters() {
  const router = useRouter();
  const pathname = usePathname();

  function onClear() {
    router.replace(pathname, { scroll: false });
  }

  return <ClearControlButton onClick={onClear}>Clear</ClearControlButton>;
}
