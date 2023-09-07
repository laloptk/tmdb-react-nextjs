"use client"

import Trending from '@/components/Trending';
import styles from '../styles/home.module.scss';
import useTMDBApi from '@/utils/hooks/useTMDBApi';

export default function Home() {
  return (
      <main className={styles.body}>
        <Trending type={"tv"} />
        <Trending type={"movie"} />
      </main>
  )
}
