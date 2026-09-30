// Pragmatic check, not full RFC 5322: one "@", no whitespace, non-empty
// local part, and a domain made of dot-separated labels ending in a TLD
// of at least two letters.
const EMAIL_PATTERN = /^[^\s@]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/;

export function validateEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email);
}
