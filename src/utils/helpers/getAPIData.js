export const getAPIData = async (uri) => {
    let res = {}, loading = false;
    const controller = new AbortController();
    
    try {
      loading = true;
      
      const response = await fetch(uri, {
        method: 'GET',
        headers: {
              accept: 'application/json', 
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}` 
        },
        signal: controller.signal,
      });

      res = await response.json();
      loading = false;

    } catch (err) {
      loading = false;
      console.error(err);
    }

    return res;
}