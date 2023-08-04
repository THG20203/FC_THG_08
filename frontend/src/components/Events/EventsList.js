import "./EventsList.scss";

function EventsList({ events }) {
  return (
    <div className="events-list__container">
      <h1>All Events</h1>
      <ul className="events-list__list">
        {events.map((event) => (
          <li key={event.id} className="events-list__item">
            <a href="...">
              <img src={event.image} alt={event.title} />
              <div className="events-list__content">
                <h2 className="mb-sm">{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
