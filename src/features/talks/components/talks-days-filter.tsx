"use client";

import TabControlButton from "@/shared/components/control-buttons/tab-control-button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  days: number[];
}

export default function TalksDaysFilter({ days }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedDays = searchParams.getAll("day");

  function toggleDay(day: string) {
    const params = new URLSearchParams(searchParams.toString());
    const selected = new Set(params.getAll("day"));

    if (selected.has(day)) {
      selected.delete(day);
    } else {
      selected.add(day);
    }

    params.delete("day");

    selected.forEach((value) => params.append("day", value));

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }

  return (
    <div role="tablist" className="flex flex-wrap items-center gap-5">
      {days.map((day) => {
        return (
          <TabControlButton
            key={day}
            isSelected={selectedDays.includes(day.toString())}
            onClick={() => {
              toggleDay(day.toString());
            }}
          >
            Day {String(day).padStart(2, "0")}
          </TabControlButton>
        );
      })}
    </div>
  );
}
