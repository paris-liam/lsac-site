import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/TwitchSection'),
  { ssr: false }
)
export default function Home() {
  return (<DynamicComponentWithNoSSR></DynamicComponentWithNoSSR>)
}
