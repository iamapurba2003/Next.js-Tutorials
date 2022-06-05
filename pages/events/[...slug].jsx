import React from "react";
import { useRouter } from "next/router";

import EventList from "../../Components/events/event-list";
import ResultsTitle from "../../Components/events/results-title";
import ErrorAlert from "../../Components/UI/error-alert";
import { getFilteredEvents } from "../../dummy-data";
import Button from "../../Components/UI/button";

export default function FilteredEventsPage() {
    const router = useRouter();
    const filterDataSlug = router.query.slug;

    if (!filterDataSlug) {
        return <p className="center">Loading...</p>;
    }

    const filteredYear = filterDataSlug[0];
    const filteredMonth = filterDataSlug[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return (
            <React.Fragment>
                <ErrorAlert>
                    <p>Invalid filter. Please Adjust Your Values</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </React.Fragment>
        );
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <React.Fragment>
                <ErrorAlert>
                    <p>No Events found for the Choosen Filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </React.Fragment>
        );
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <React.Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </React.Fragment>
    );
}
