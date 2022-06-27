import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useDebounce from '../../hooks/useDebounce';

interface SearchProps {
    value: string | undefined;
    onChange: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function Search({ value = '', onChange }: SearchProps) {
    const [searchDebounce, setSearchDebounce] = useState<string | undefined>(value);
    const debouncedSearch = useDebounce(searchDebounce, 500);

    useEffect(() => {
        onChange(debouncedSearch);
    }, [debouncedSearch]);

    return (
        <div className="w-full flex items-center bg-c_grayscale_light p-5 gap-4 outline-none rounded-2xl">
            <AiOutlineSearch className="text-c_grayscale" size={20} />
            <input
                aria-label="inputSearch"
                placeholder="Pesquisar"
                value={searchDebounce}
                onChange={event => setSearchDebounce(event.target.value)}
                className="outline-none bg-c_grayscale_light w-full text-c_grayscale_medium"
            />
        </div>
    );
}
export default Search;
