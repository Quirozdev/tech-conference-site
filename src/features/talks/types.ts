import type { Speaker } from "@/features/speakers/types";
import type { Track } from "@/features/tracks/types";

export interface Talk {
  id: string;
  title: string;
  speakerId: Speaker["id"];
  day: number;
  trackId: Track["id"];
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  highlighted: boolean;
}
