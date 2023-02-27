import { createContext, useContext, useState } from "react";

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

export const ElementContext = createContext({
  elements: [],
  setElements: () => {},
});

export function Element({ idx }) {
  const { elements, setElements } = useContext(ElementContext);
  const [type, setType] = useState("featured");
  const [provider, setProvider] = useState("netflix");

  return (
    <div className={styles.element}>
      <h2>{idx + 1}번째</h2>
      <RadioGroup
        label="Type"
        value={type}
        onChange={(v) => {
          elements[idx].title = { ...elements[idx].title, type: v };
          setType(v);
          setElements([...elements]);
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
          elements[idx].provider = v;
          setProvider(v);
          setElements([...elements]);
        }}
      >
        {Object.keys(providers).map((k) => (
          <Radio label="Provider" key={k} value={k}>
            {providers[k]}
          </Radio>
        ))}
      </RadioGroup>
      <br />
      <div>
        <label>작품 ID </label>
        <input type="number" />
      </div>
      <div>
        <label>작품 제목 </label>
        <input type="text" />
      </div>
      <div>
        <label>포스터 URL </label>
        <input type="url" />
      </div>
      <div>
        <label>배너 이미지 URL </label>
        <input type="url" />
      </div>
      <div>
        <label>랜딩 URL </label>
        <input type="url" />
      </div>
      <div>
        <label>시작일 </label>
        <input type="date" />
      </div>
      <div>
        <label>종료일 </label>
        <input type="date" />
      </div>
      <hr />
    </div>
  );
}
