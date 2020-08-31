import React from "react";
import axios from "axios";
import SimpleCard from "../../components/simpleCard"
import Layout from "../../components/layout"

export default function Command({ command}) {
  return (
    <Layout>      
      <SimpleCard command={command} />
    </Layout>
  );
}

export async function getStaticPaths() {

  const commands = await axios
  .get("http://localhost:5000/api/commands")
  .then((response) => response.data)

  const paths = commands.map(({ id }) => ({
    params: {
      id: id.toString(), 
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const command = await axios
    .get(`http://localhost:5000/api/commands/${id}`)
    .then((response) => response.data);

  return {
    props: {
      command,
    },
  };
}
