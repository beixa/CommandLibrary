import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import SimpleCard from "../components/simpleCard";
import Layout from "../components/layout";
import Search from "../components/search";

export default function Home({ commands }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const normalize = searchTerm.trim().toLowerCase();

    const results = commands.filter(
      (command) =>
        command.howTo.toLowerCase().includes(normalize) ||
        command.line.toLowerCase().includes(normalize)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <>
      <Head>
        <title>Command library</title>
      </Head>
      <Layout>
        <Search searchTerm={searchTerm} handleChange={handleChange} />
        {searchResults.map((command) => (
          <div key={command.id}>
            <Link href={"/command/[id]"} as={`/command/${command.id}`}>
              <div>
                <SimpleCard command={command} />
              </div>
            </Link>
          </div>
        ))}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const commands = await axios
    .get("http://localhost:5000/api/commands")
    .then((response) => response.data);

  return {
    props: {
      commands,
    },
  };
}
