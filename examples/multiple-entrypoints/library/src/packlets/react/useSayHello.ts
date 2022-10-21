import { useEffect } from "react";

import { sayHello } from "../core/";

function useSayHello(name: string): void {
  useEffect(() => {
    sayHello(name);
  }, [name]);
}

export default useSayHello;
