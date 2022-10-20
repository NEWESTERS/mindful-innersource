import say, { SayOptions } from "./say";

/** Параметры вопроса */
interface AskOptions extends SayOptions {
  /** Спросить с восклицанием */
  exclamation?: string;
}

/**
 * Спросить что-то
 * @param question - что спросить
 * @param options - параметры вопроса
 */
function ask(question: string, options: AskOptions = {}): void {
  let phrase = question + "?";

  if (options.exclamation) {
    phrase += "!";
  }

  say(phrase, options);
}

export default ask;
