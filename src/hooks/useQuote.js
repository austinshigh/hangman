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
