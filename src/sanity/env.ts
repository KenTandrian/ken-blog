/**
 * Asserts that a value is not undefined, throwing an error if it is.
 * @param v - value to assert
 * @param errorMessage - error message to throw if value is undefined
 * @return the value if it is not undefined
 */
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) throw new Error(errorMessage);
  return v;
}

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-02-12";

export const useCdn = false;
