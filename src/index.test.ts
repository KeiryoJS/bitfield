import test from "ava";
import { hello } from ".";

test("hello equals world", t => {
  t.is(hello, "world");
});
