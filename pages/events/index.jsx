import React from "react";
import { useRouter } from "next/router";


import EventList from "../../Components/events/event-list";
import EventsSearch from "../../Components/events/event-search";
import { getAllEvents } from "../../dummy-data";

export default function AllEventsPage() {
    const events = getAllEvents();
    const router = useRouter();


    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath)
    }

    return (
        <div>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </div>
    );
}
