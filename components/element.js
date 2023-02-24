import { useState } from "react";

import styles from "@/styles/Element.module.css";
import { Radio, RadioGroup } from "@/components/radio";

const types = { featured: "Featured", ad: "AD" };
const providers = {
  netflix: "넷플릭스",
  disney: "디즈니플러스",
  watcha: "왓챠",
  tving: "티빙",
  wavve: "웨이브",
  apple: "애플TV",
  laftel: "라프텔",
  theater: "상영관",
};

export default function Element({ e, cb }) {
  const [type, setType] = useState("featured");
  const [provider, setProvider] = useState("netflix");

  return (
    <div className={styles.element}>
      <RadioGroup
        label="Type"
        value={type}
        onChange={(v) => {
          e.title.type = v;
          setType(v);
          cb();
        }}
      >
        {Object.keys(types).map((k) => (
          <Radio label="Type" key={k} value={k}>
            {types[k]}
          </Radio>
        ))}
      </RadioGroup>
      <br />
      <RadioGroup
        label="Provider"
        value={provider}
        onChange={(v) => {
          e.provider = v;
          setProvider(v);
          cb();
        }}
      >
        {Object.keys(providers).map((k) => (
          <Radio label="Provider" key={k} value={k}>
            {providers[k]}
          </Radio>
        ))}
      </RadioGroup>
      <br />
      <hr />
    </div>
  );
}
