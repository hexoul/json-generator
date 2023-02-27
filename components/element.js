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
  const [urlHidden, setUrlHidden] = useState(true);

  return (
    <div className={styles.element}>
      <h2>{idx + 1}번째</h2>
      <RadioGroup
        label="Type"
        value={type}
        onChange={(v) => {
          setType(v);

          elements[idx].title = { ...elements[idx].title, type: v };

          if (v === "featured") {
            setUrlHidden(true);
            elements[idx].title = { ...elements[idx].title, url: "" };
          } else {
            setUrlHidden(false);
          }

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
        <input
          type="number"
          onChange={(e) => {
            const v = +e.target.value;
            if (isNaN(v) || !isFinite(v)) return;

            elements[idx].title = { ...elements[idx].title, id: v };
            setElements([...elements]);
          }}
        />
      </div>
      <div>
        <label>작품 제목 </label>
        <input
          type="text"
          onChange={(e) => {
            elements[idx].title = {
              ...elements[idx].title,
              titleKr: e.target.value,
            };
            setElements([...elements]);
          }}
        />
      </div>
      <div>
        <label>포스터 URL </label>
        <input
          type="url"
          onChange={(e) => {
            elements[idx].title = {
              ...elements[idx].title,
              posterImageURL: e.target.value,
            };
            setElements([...elements]);
          }}
        />
      </div>
      <div>
        <label>배너 이미지 URL </label>
        <input
          type="url"
          onChange={(e) => {
            elements[idx].title = {
              ...elements[idx].title,
              imageUrl: e.target.value,
            };
            setElements([...elements]);
          }}
        />
      </div>
      <div>
        <label>랜딩 URL </label>
        <input
          type="url"
          hidden={urlHidden}
          onChange={(e) => {
            elements[idx].title = {
              ...elements[idx].title,
              url: e.target.value,
            };
            setElements([...elements]);
          }}
        />
      </div>
      <div>
        <label>시작일 </label>
        <input
          type="datetime-local"
          onChange={(e) => {
            const v = `${e.target.value.replace("T", " ")}:00`;
            elements[idx].startAt = v;
            setElements([...elements]);
          }}
        />
      </div>
      <div>
        <label>종료일 </label>
        <input
          type="datetime-local"
          onChange={(e) => {
            const v = `${e.target.value.replace("T", " ")}:00`;
            elements[idx].endAt = v;
            setElements([...elements]);
          }}
        />
      </div>
      <hr />
    </div>
  );
}
