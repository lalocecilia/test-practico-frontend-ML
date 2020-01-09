import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBox from '../search-box/SearchBox';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Message from '../message/Message';
import Items from './Items';
import { fetchGetSearch } from '../../api';
import './SearchResult.scss';

const SearchResult = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const search = async (q) => {
    setData({});
    setError(false);
    const { response } = await fetchGetSearch(q);
    if (response) {
      setData(response);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    search(query.get('search')).then();
  }, []);

  return (
    <>
      <SearchBox query={query.get('search')} />
      <div className="search-result">
        <div className="container-results">
          {
            data.items && data.items.length > 0 && (
              <>
                <Breadcrumb items={data.categories} />
                <Items items={data.items} />
              </>
            )
          }
          {
            data.items && data.items.length === 0 && (
              <Message text="No se encontraron resultados para esta busqueda." />
            )
          }
          {
            error && (
              <Message text="Ocurrió un error, por favor intente nuevamente." />
            )
          }
        </div>
      </div>
    </>
  );
};

export default SearchResult;
