import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

import styles from "@/styles/Home.module.css";
import { Element, ElementContext } from "@/components/element";

const inter = Inter({ subsets: ["latin"] });
const defaultElement = {
  provider: "netflix",
  title: { type: "featured", url: "" },
  startAt: "2100-01-01 00:00:00",
  endAt: "2100-01-02 00:00:00",
};

export default function Home() {
  const [elements, setElements] = useState([]);

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
              By Esji Kim
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <ElementContext.Provider value={{ elements, setElements }}>
              <h2 className={inter.className}>
                요소 추가 <span>-&gt;</span>&nbsp;
                <button
                  onClick={() =>
                    setElements([...elements, { ...defaultElement }])
                  }
                >
                  +
                </button>
              </h2>
              {elements.map((_, idx) => (
                <Element key={`e${idx}`} idx={idx} />
              ))}
            </ElementContext.Provider>
          </div>

          <div className={styles.card}>
            <h2 className={inter.className}>
              JSON <span>-&gt;</span>
            </h2>
            <pre>{JSON.stringify(elements, undefined, 2)}</pre>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.json}>
            <a
              href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                JSON.stringify(elements, undefined, 2)
              )}`}
              download="featured.json"
            >
              <Image
                src="/json.svg"
                alt="json"
                width={80}
                height={70}
                priority
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
