import "./Events.css"

export default function Events(eventsArr) {
    return (
        <section className="events">
            <h1 className="events__title title">Акции</h1>
            {
                eventsArr.length > 0 ? 
                <></>
                :
                <div className="events__subtitle-container">
                    <h2 className="events__subtitle">В данный момент акции не  проводятся</h2>
                </div>
            }
        </section>
    )
}