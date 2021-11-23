import { createClient } from "contentful";

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
    return (
        <h1>Events</h1>
    );
  }