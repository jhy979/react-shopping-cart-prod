import {useCallback, useState} from 'react';
import axios from 'axios';

export default function useFetch(method = 'get') {
  const [pending, setPending] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetch = useCallback(
    ({
      API_URL = '',
      headers = null,
      body = null,
      onSuccess = () => void 0,
      onFail = () => void 0,
    }) => {
      setPending(true);
      setData(null);
      setError(null);

      axios({
        method,
        url: API_URL,
        data: body,
        headers,
      })
        .then((response) => {
          setPending(false);
          response.data && setData(response.data);
          onSuccess(response.data);
        })
        .catch((error) => {
          setPending(false);
          setError(error.message);
          onFail(error);
        });
    },
    [method],
  );

  return {pending, data, error, fetch};
}