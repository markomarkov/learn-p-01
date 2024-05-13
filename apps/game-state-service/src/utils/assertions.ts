import { AssertionError } from "assert";
import { EventObject } from "xstate";

export function assertEventType<TE extends EventObject, TType extends TE["type"]>(
    event: TE,
    eventType: TType
): asserts event is TE & { type: TType } {
    if (event.type !== eventType) {
        throw new AssertionError({
            message: `Invalid event type: ${event.type}. Expected: ${eventType}`,
        });
    }
}

export function assertEventMatches<T extends EventObject>(
    event: EventObject,
    type: T["type"],
    predicate: (event: T) => boolean
): asserts event is T {
    assertEventType(event, type);

    if (!predicate(event as T)) {
        throw new AssertionError({
            message: `Event does not match predicate: ${JSON.stringify(event)}`,
        });
    }
}

export function assertDefined<T>(
    value: T | undefined,
    message: string = "Value is undefined"
): asserts value is NonNullable<T> {
    if (value === undefined || value === null) {
        throw new AssertionError({ message, });
    }
}