type RuntimeErrorContext = Record<string, unknown>;

export function reportRuntimeError(error: unknown, context: RuntimeErrorContext = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    message: describeThrown(error),
    route: window.location.pathname,
    stack: error instanceof Error ? error.stack : undefined,
    ...context,
  };

  try {
    console.error("[app-error]", payload);
  } catch {
    // no-op: browser logging is best effort only
  }
}

const MAX_SERIALIZED_LENGTH = 2000;

function describeThrown(error: unknown): string {
  if (error instanceof Response) {
    return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
  }
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;

  const { message } = (error ?? {}) as { message?: unknown };
  if (typeof message === "string" && message.length > 0) return message;

  try {
    return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
  } catch {
    return String(error);
  }
}
