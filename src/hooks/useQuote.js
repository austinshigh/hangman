import axios from "axios";
import { useState, useEffect } from "react";

const useQuote = (props) => {
  const [quote, setQuote] = useState("");
  const [original, setOriginal] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { regenerate } = props;

  useEffect(() => {
    const getQuoteData = async () => {
      if (regenerate) {
        try {
          await axios
            .get("https://api.quotable.io/random?maxLength=40&minLength=0")
            .then((response) => {
              if (response.status === 200) {
                setOriginal(response.data.content);
                setQuote(response.data.content.replace(/[^a-z ]/gi, ""));
                setAuthor(response.data.author);
                return;
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
    };
    getQuoteData();
  }, [regenerate]);
  return {
    quote,
    original,
    author,
    isLoading,
  };
};

export default useQuote;
