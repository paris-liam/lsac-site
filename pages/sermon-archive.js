
export async function getServerSideProps() {
  const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLwn7IWrlHG-0JTMkV1JcTyt0lILaUfwr2&key=${process.env.YOUTUBE_API_KEY}`);  
  const data = await res.json();
  return {
    props: {
      videos: data
    }
  }
}
export default function Archive({videos}) {
  return (<div><h1>Videos</h1>
    <ul className="video-list">{videos.items.map((video) => {
      const { id, snippet = {} } = video;
      const { title, thumbnails = {}, resourceId } = snippet;
      const { medium = {} } = thumbnails;
      return (
        <li key={id} className="video-card">
          <a href={resourceId}><img width={medium.width} height={medium.height} src={medium.url} alt=""></img>
          <h3>{title}</h3></a>
        </li>
      )
    })}</ul>
  </div>)
}