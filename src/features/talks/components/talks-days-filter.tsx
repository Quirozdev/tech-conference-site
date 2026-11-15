"use client";

import TabControlButton from "@/shared/components/control-buttons/tab-control-button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

interface Props {
  days: number[];
}

export default function TalksDaysFilter({ days }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedDay = searchParams.get("day");
  const hasChangedFilters = useRef(false);

  useEffect(() => {
    if (!selectedDay && !hasChangedFilters.current) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("day", days[0]?.toString());
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    }
  }, [selectedDay, days, pathname, router, searchParams]);

  function onDayChange(day: string) {
    hasChangedFilters.current = true;
    const params = new URLSearchParams(searchParams.toString());

    if (selectedDay === day) {
      params.delete("day");
    } else {
      params.delete("day");
      params.set("day", day);
    }

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }

  return (
    <div role="group" className="flex flex-wrap items-center gap-5">
      {days.map((day) => {
        return (
          <TabControlButton
            key={day}
            isSelected={selectedDay === day.toString()}
            onClick={() => {
              onDayChange(day.toString());
            }}
          >
            Day {String(day).padStart(2, "0")}
          </TabControlButton>
        );
      })}
    </div>
  );
}
