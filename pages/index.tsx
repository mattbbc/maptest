import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const Map = useMemo(() => dynamic(
    () => import('../components/Map'),
    { ssr: false }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), []);

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <Map />
    </div>
  )
}

export default Home
