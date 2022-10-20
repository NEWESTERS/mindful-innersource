import say, { SayOptions } from "./say";

/**
 * Параметры приветствия
 * @public
 */
export interface SayHelloOptions extends SayOptions {
  /** Имя адресата */
  name?: string;
}

/**
 * Сказать "привет"
 * @param options - параметры приветствия
 * @public
 */
function sayHello(options: SayHelloOptions = {}): void {
  let phrase = "Привет";

  if (options.name) {
    phrase += `, ${name}`;
  }

  phrase += "!";

  say(phrase, options);
}

export default sayHello;
