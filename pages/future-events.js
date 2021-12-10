import { createClient } from "contentful";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Image } from 'next/image';
export const processSortAndRemove = (eventItems) => {
  eventItems[1].fields.eventImage = null;
  let testArr = [eventItems[1],eventItems[3],eventItems[0],eventItems[2]];
  let formatted = testArr.map((event) => {
      const { fields } = event;
      const {eventTime, titleOfEvent, eventBody, eventImage, eventLink } = fields;
      return {
        time: new Date(eventTime),
        title: titleOfEvent,
        body: eventBody,
        image: eventImage,
        link: eventLink
      }
  });
  console.warn(formatted);
  return formatted.sort((a,b) => a.time > b.time).filter((event) => {
    return event.time >= new Date();
  });
}

export async function getStaticProps() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY
    })
  
    const res = await client.getEntries({ content_type: 'calendarEvent'})
    
    return {
      props: {
        events: res.items
      }
    }
  }

export default function Events({events}) {
    const formatted = processSortAndRemove(events);
    return (
      <>
        <h1>Events</h1>
        <ul className="event-list">
          { formatted.map((event) => {
            return (
              <li key={event.title}><a className="event-tile" href={event.link}>
                {event.image && <img src={event.image.fields.file.url}></img>}
                <div className='info-box'>
                  <h3>{event.title}</h3> 
                <h3 className='event-time'> {event.time.toDateString()}, {event.time.toLocaleTimeString([], {timeStyle: 'short'})}</h3>
                <div dangerouslySetInnerHTML={{__html:documentToHtmlString(event.body)}}></div></div>
              </a></li>
            )
          })}       
        </ul>
      </>
    );
  }