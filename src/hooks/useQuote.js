import axios from "axios";
import { useState, useEffect, useRef } from "react";

const useQuote = (props) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [regenerate, setRegenerate] = useState(props.regenerate);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current === true) {
      firstRender.current = false;
      setRegenerate(true);
    } else if (props.regenerate === true) {
      setRegenerate(true);
    }
  }, [props.regenerate]);

  useEffect(() => {
    const getQuoteData = async () => {
      if (regenerate) {
        setRegenerate(false);
        try {
          await axios
            .get("https://api.quotable.io/random?maxLength=40&minLength=0")
            .then((response) => {
              if (response.status === 200) {
                setQuote(response.data.content.replace(/[^0-9a-z ]/gi, ""));
                setAuthor(response.author);
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
    author,
    isLoading,
  };
};

export default useQuote;
