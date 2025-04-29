import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Search = ({link}) => {
  const router = useRouter();
  const [search, setSearch] = useState("");


  useEffect(() => {
    if (window.location.pathname.includes(`/${link}`)) {
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get("query") || "";
      setSearch(query);
    }
  }, [link]);
  


  useEffect(() => {
    Cookies.set("search", search, { expires: 7 }); 
  }, [search]);


  useEffect(() => {
    if (!window.location.search.includes("query=")) {
      setSearch("");
    }
  }, []);

  const toggleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/${link}?query=${search.toLowerCase()}`);
      window.location.href = `/${link}?query=${search.toLowerCase()}`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="flex w-full justify-between min-w-[125px] border border-black/25 p1">
      <input
        type="text"
        value={search}
        onChange={toggleChange}
        placeholder="Search"
        onKeyDown={handleKeyDown}
        className="w-full outline-none h-fit p-3 p1"
      />
      <button onClick={handleSearch} aria-label="Search" className='
      p-3'>
        <Image src="/search.svg" width={20} height={20} alt="search icon" />
      </button>
    </section>
  );
};

export default Search;
