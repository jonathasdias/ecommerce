import { useState, useEffect } from 'react';
import axios, { CancelTokenSource } from 'axios';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, any>;
}

export default function useFetch<T = any>(url: string, options: FetchOptions = {}): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios({
          url,
          method: options.method || 'GET',
          headers: options.headers,
          data: options.body,
          params: options.params,
          cancelToken: source.token,
        });
        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Solicitação cancelada', err.message);
        } else {
          setError('Erro, atualize a página ou volte mais tarde.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      source.cancel('Operação cancelada pelo usuário.');
    };
  }, [url]);

  return { data, loading, error };
}