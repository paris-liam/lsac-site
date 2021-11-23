import { createClient } from "contentful";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export async function getStaticProps() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY
    })
  
    const res = await client.getEntries({ content_type: 'teachingsSection'})
  
    return {
      props: {
        sections: res.items
      }
    }
  }

export default function Teachings({sections}) {
    console.warn(sections);
      return (
      <div className='teachings-container'>
          {
            sections.map((section) => {
            const { title, body } = section.fields;
            console.warn(title);
            console.warn(body);

            return (
              <div key={title} className="teaching">
              <h2>{title}</h2>
              <div dangerouslySetInnerHTML={{__html:documentToHtmlString(body)}}></div>
              </div>
            );
          })}
        </div>)
  } 