import { describe, expect, test } from "vitest";
import { validateEmail } from "../src/validateEmail";

describe("validateEmail", () => {
  describe("valid emails", () => {
    test.each([
      "user@example.com",
      "user.name@example.com",
      "user+tag@example.co.uk",
      "user123@sub.domain.org",
      "USER@EXAMPLE.COM",
      "u@e.io",
    ])('returns true for "%s"', (email) => {
      expect(validateEmail(email)).toBe(true);
    });
  });

  describe("invalid emails", () => {
    test.each([
      ["empty string", ""],
      ["missing @", "userexample.com"],
      ["missing domain", "user@"],
      ["missing local part", "@example.com"],
      ["missing TLD", "user@example"],
      ["double @", "user@@example.com"],
      ["spaces", "user @example.com"],
      ["plain text", "notanemail"],
    ])("%s: returns false for %s", (_label, email) => {
      expect(validateEmail(email as string)).toBe(false);
    });
  });
});
