import { useEffect } from "react";

export function useHello(name: string): void {
  useEffect(() => {
    console.log(name);
  }, [name]);
}
