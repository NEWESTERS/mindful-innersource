import sayHello from "./sayHello";

describe("sayHello", () => {
  it("prints hello", () => {
    const log = jest.spyOn(console, "log");

    sayHello("Bob");

    expect(log).toBeCalledWith("Hello, Bob!");
  });
});
