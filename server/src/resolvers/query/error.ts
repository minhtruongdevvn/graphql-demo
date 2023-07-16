export const ERROR_NAME = {
   NOT_FOUND: "NOT_FOUND",
   INTERNAL: "INTERNAL",
} as const;

export type ErrorName = keyof typeof ERROR_NAME;
