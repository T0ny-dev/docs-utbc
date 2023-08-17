import { getCollection } from "astro:content";

export async function get({}) {
  const docs = await getCollection("docs");
  const searchTerm = "palabra_de_búsqueda";

  const searchResults = docs.filter((entry) =>
    entry.data.title &&
    entry.data.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formattedResults = searchResults.map((result) => ({
    title: result.data.title, // Accede al título del documento
    
  })
  );

  console.log(formattedResults);

  return {
    body: `export const search = () => {return {results: ${JSON.stringify(
      formattedResults
    )}}}`,
  };
}
