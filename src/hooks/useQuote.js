import axios from "axios";
import { useState, useEffect, useRef } from "react";

const useQuote = (props) => {
  const [quote, setQuote] = useState("");
  const [original, setOriginal] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { regenerate } = props;
  const firstRender = useRef(false);

  const handleRef = () => {
    firstRender.current = false;
  };

  useEffect(() => {
    const getQuoteData = async () => {
      const limit = Math.round(Math.random() * 50);
      const place = limit - 1;
      try {
        await axios
          .get(`https://dummyjson.com/quotes?limit=${limit}`)
          .then((response) => {
            if (response.status === 200) {
              setOriginal(response.data.quotes[place].quote);
              setQuote(
                response.data.quotes[place].quote.replace(/[^a-z ]/gi, "")
              );
              setAuthor(response.data.quotes[place].author);
              return;
            }
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    if (regenerate === true && firstRender.current === false) {
      firstRender.current = true;
      getQuoteData();
    }
  }, [regenerate]);
  return {
    quote,
    original,
    author,
    isLoading,
    handleRef,
  };
};

export default useQuote;
