import EventList from "../../Components/events/event-list";
import { getAllEvents } from "../../dummy-data";

export default function AllEventsPage() {
    const events = getAllEvents()
    return (
        <div>
            <EventList items={events} />
        </div>
    );
}
