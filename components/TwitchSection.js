import { TwitchEmbed, TwitchChat } from 'react-twitch-embed';

export default function TwitchSection() {
    return (<div className="twitch-player"> 
    <TwitchEmbed
    channel="letsstartacultonline"
    id="twitchEmbed"
    theme="dark"
    withChat={false}
    width="100%"
  />
  <div style={{'height': '5vh', width: '100%'}}></div>
  <TwitchChat channel="letsstartacultonline" id="twitch-chat" height="250vh" width="100%" theme="dark" /></div>)
}