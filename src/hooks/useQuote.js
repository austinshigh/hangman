import axios from "axios";
import { useState, useEffect } from "react";

const useQuote = (props) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getQuoteData = async () => {
      //   try {
      //     await axios
      //       .get("https://api.quotable.io/random?maxLength={props.max}&minLength={props.min}")
      //       .then((response) => {
      //         if (response.status === 200) {
      //           setQuote(response.data.content.replace(/[^0-9a-z ]/gi, ""));
      //           setAuthor(response.dauthor);
      //            return;
      //         }
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //       });
      //   } catch (err) {
      //     console.log(err);
      //   } finally {
      //     setIsLoading(false);
      //   }
      setQuote(
        "All things change; nothing perishes.".replace(/[^0-9a-z ]/gi, "")
      );
      setAuthor("Ovid");
    };
    getQuoteData();
  }, [props.min, props.max]);
  return {
    quote,
    author,
    isLoading,
  };
};

export default useQuote;
