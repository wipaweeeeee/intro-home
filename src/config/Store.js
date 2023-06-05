'use client';

import { createContext, useContext, useState, useEffect } from "react";
const queries = {
  mob: '(max-width: 768px)',
  tab: '(max-width: 1024px)',
  des: '(min-width: 1024px)'
}

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const [queryMatch, setQueryMatch] = useState({});
    const [appContext, setAppContext] = useState({lang: 'en', media: queryMatch});

    useEffect(() => {
	    const mediaQueryLists = {};
	    const keys = Object.keys(queries);
	    let isAttached = false;

	    const handleQueryListener = () => {
	      const updatedMatches = keys.reduce((acc, media) => {
	        acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
	        return acc;
	      }, {})
	      setQueryMatch(updatedMatches)
	    }

	    if (window && window.matchMedia) {
	      const matches = {};
	      keys.forEach(media => {
	        if (typeof queries[media] === 'string') {
	          mediaQueryLists[media] = window.matchMedia(queries[media]);
	          matches[media] = mediaQueryLists[media].matches
	        } else {
	          matches[media] = false
	        }
	      });
	      setQueryMatch(matches);
	      isAttached = true;
	      keys.forEach(media => {
	        if(typeof queries[media] === 'string') {
	          mediaQueryLists[media].addListener(handleQueryListener)
	        }
	      });
	    }

	    return () => {
	      if(isAttached) {
	        keys.forEach(media => {
	          if(typeof queries[media] === 'string') {
	            mediaQueryLists[media].removeListener(handleQueryListener)
	          }
	        });
	      }
	    }
	}, [queries]);

	useEffect(() => {
		setAppContext(state => ({
			...state,
			media: queryMatch
		}))
	},[queryMatch])

    return (
        <AppContext.Provider value={{appContext, setAppContext}}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => useContext(AppContext);
