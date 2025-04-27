import { useEffect, useState } from "react";

const useFetchQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/questions");
        const finalData = await response.json();

        setQuestions(finalData.questions);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { questions, loading, error };
};

export default useFetchQuestions;
