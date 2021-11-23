import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';

export default function TwitchSection() {
    return (<div className="twitch-player"> 
    <TwitchEmbed
    channel="thx4stoppingby"
    id="twitchEmbed"
    theme="dark"
    withChat="false"
  />
  <TwitchChat channel="thx4stoppingby" id="twitch-chat" height="300" width="100%" theme="dark" /></div>)
}