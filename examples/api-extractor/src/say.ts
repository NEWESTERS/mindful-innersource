/**
 * Параметры фразы
 * @internal
 */
export interface SayOptions {
  /** Настроение фразы */
  mood?: "happy" | "sad" | "default";
}

/**
 * Произнести фразу
 * @param phrase - фраза
 * @param options - параметры фразы
 * @internal
 */
function say(phrase: string, options: SayOptions = {}): void {
  let moodSymbol = "";

  switch (options.mood) {
    case "sad":
      moodSymbol = "(";
      break;

    case "happy":
      moodSymbol = ")";
      break;
  }

  console.log(`${phrase}${moodSymbol}`);
}

export default say;
