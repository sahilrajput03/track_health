import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import * as requests from "./mockRequests";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const main = async () => {
      const data = await requests.getData();
      console.log(data);
      setData(data);
    };

    main();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Track Health</h1>
      <CurrentDay />
    </div>
  );
}

const CurrentDay = () => {
  // useEffect(() => {
  //   const main = async () => {
  //     const data = await requests.getData();
  //     console.log(data);
  //     setData(data);
  //   };

  //   main();
  // }, []);

  const currentDaySets = [
    { idx: 1, count: 20 },
    { idx: 2, count: 15 },
    { idx: 3, count: 8 },
    { idx: 4, count: 18 },
    { idx: 5, count: 12 },
    { idx: 6, count: 8 },
  ];

  return (
    <>
      <h2>Current Day</h2>
      {currentDaySets.map((set) => (
        <Set key={set.idx} set={set} />
      ))}

      <button onClick={() => alert("TODO: add functionality.")}>
        Add set{" "}
      </button>
    </>
  );
};

const Set = ({ set }) => {
  const [count, setCount] = useState(set.count);

  return (
    <div>
      Push Ups (Set {set.idx}):
      <input
        style={{ marginLeft: "10px" }}
        type="number"
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
    </div>
  );
};
