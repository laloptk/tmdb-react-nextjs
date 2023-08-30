"use client"

import { useState, useEffect } from 'react';

export function useTMDBApi(slug, trigger = []) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(null);

  useEffect(() => {
    if(isLoading) {
      return () => {}
    }

    const controller = new AbortController();
    const uri = `${process.env.NEXT_PUBLIC_TMDB_API_BASE_URI}${slug}`;
    
    async function getData() {
      try {
        setLoading(true);
        
        const response = await fetch(uri, {
          method: 'GET',
          headers: {
                accept: 'application/json', 
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}` 
            },
          signal: controller.signal,
        });
  
        const res = await response.json();
        
        setData(res);
        setLoading(false);

      } catch (err) {
        setData({});
        setLoading(false);
        console.error(err);
      }
    }

    getData();
  
  }, trigger); 
    
  return [data, isLoading];
}