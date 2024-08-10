import { useEffect, useState } from "react";

const useFetch =(url) =>{
  // const token = import.meta.env.VITE_GITHUB_TOKEN;
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null)
  const [filteredRepos, setFilteredRepos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(url/*, {
          headers: {
            'Authorization': `token ${token}`,
          },
        }*/);
        const finalRes = await response.json();
        setRepos(finalRes);
        setFilteredRepos(finalRes);
        setError(null)
      }catch (err){
          setTimeout(()=>{
            setError(err.message)
          }, 5000)
      }
    };

    fetchData();
  }, [url]);

  return {repos, setRepos, filteredRepos, setFilteredRepos, error }
}

export default useFetch
