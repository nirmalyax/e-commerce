import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

function Home() {
  const context = useContext(myContext);
  console.log(context);
  const { name, roll } = context;
  return (
    <Layout>
      <h1>Name : {name}</h1>
      <h2>Roll : {roll}</h2>
    </Layout>
  );
}

export default Home;
