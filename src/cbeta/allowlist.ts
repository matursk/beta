export const ALLOW_EMAILS = [
  "evkajak1042@gmail.com",
  "bastek.andrej@gmail.com",
  "dany.kulich@gmail.com",
  "lukasryljak123@gmail.com",
  "pavelvisocoi895@gmail.com",
  "martinstrasik000@gmail.com",
  "velkapica339@gmail.com",
  "diana.senasiova@gmail.com",
];

export const ADMIN_EMAILS = [
  "admin@matur.sk",
  "michaelchobot.dev@gmail.com",
  "marek@matur.sk",
  "michael@matur.sk",
];

export const ALLOWLIST = new Set(
  [...ALLOW_EMAILS, ...ADMIN_EMAILS].map((e) => e.toLowerCase())
);

export function isAllowedEmail(email?: string | null): boolean {
  const e = (email || "").toLowerCase();
  return !!e && ALLOWLIST.has(e);
}


