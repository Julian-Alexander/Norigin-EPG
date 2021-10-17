import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAssets = (asset) => {
  const [assets, setAssets] = useState([]);
  const [shows, setShows] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false });

  useEffect(() => {
    (async (asset) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}/${asset}`
        );

        setAssets(response.data.channels);
        setShows(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError({
          status: true,
          message: "Couldn't connect to Server. Please try again",
        });
      }
    })(asset);
  }, [asset]);

  return { assets, shows, error, loading };
};
