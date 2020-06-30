import { greet } from "../test-demo";

test("My Greeter", () => {
  expect(greet("Carl")).toBe("Hello Carl");
});
