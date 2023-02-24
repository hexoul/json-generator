import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { useState } from "react";

import styles from "@/styles/Home.module.css";
import Element from "@/components/element";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [elements, setElements] = useState([{ id: '1' }]);

  return (
    <>
      <Head>
        <title>JSON generator</title>
        <meta name="description" content="JSON generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>JSON generator</p>
          <div>
            <a
              href="https://hexoul.github.io/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              By Seunggon Kim
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={inter.className}>
              요소 추가 <span>-&gt;</span>
            </h2>
            {elements.map((e) => <Element key={e.id} />)}
          </div>

          <div className={styles.card}>
            <h2 className={inter.className}>
              JSON <span>-&gt;</span>
            </h2>
            <p className={inter.className}>{JSON.stringify(elements)}</p>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.json}>
            <Image src="/json.svg" alt="json" width={80} height={70} priority />
          </div>
        </div>
      </main>
    </>
  );
}
