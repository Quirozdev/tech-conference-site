import { useEffect } from "react";

interface Props {
  shouldRemove: boolean;
}

export function useRemoveVerticalScrolling({ shouldRemove }: Props) {
  useEffect(() => {
    if (!shouldRemove) return;

    document.documentElement.classList.add("overflow-y-hidden");
    document.documentElement.classList.add("scrollbar-gutter-stable");

    return () => {
      document.documentElement.classList.remove("overflow-y-hidden");
      document.documentElement.classList.remove("scrollbar-gutter-stable");
    };
  }, [shouldRemove]);
}
