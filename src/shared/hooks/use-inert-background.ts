import { useEffect } from "react";

interface Props {
  shouldBeInert: boolean;
}

export function useInertBackground({ shouldBeInert }: Props) {
  useEffect(() => {
    const main = document.getElementsByTagName("main")[0];
    const footer = document.getElementsByTagName("footer")[0];

    if (main) {
      main.inert = shouldBeInert;
    }
    if (footer) {
      footer.inert = shouldBeInert;
    }

    return () => {
      if (main) {
        main.inert = false;
      }
      if (footer) {
        footer.inert = false;
      }
    };
  }, [shouldBeInert]);
}
