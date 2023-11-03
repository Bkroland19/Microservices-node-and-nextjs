import {
    Subjects,
    Publisher,
    ExpirationCompleteEvent,
} from "@roltickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
