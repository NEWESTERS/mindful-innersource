import { hello as helloCjs } from "cjs-lib";
import { GoodButton as ButtonEsm } from "esm-lib";
import { GoodButton as ButtonPureEsm } from "pure-esm-lib";

helloCjs();

ButtonPureEsm();
ButtonEsm();
