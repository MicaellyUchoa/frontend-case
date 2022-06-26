import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchProps {
    value: string | undefined;
    onChange: Function;
}

function Search({ value, onChange }: SearchProps) {
    const [searchDebounce, setSearchDebounce] = useState<string | undefined>(value);

    useEffect(() => {
        setTimeout(() => {
            onChange(searchDebounce);
        }, 1000);
    }, [searchDebounce]);

    return (
        <div className="w-full flex items-center bg-c_grayscale_light p-5 gap-4 outline-none rounded-2xl">
            <AiOutlineSearch className="text-c_grayscale" size={20} />
            <input
                placeholder="Pesquisar"
                value={searchDebounce}
                onChange={event => setSearchDebounce(event.target.value)}
                className="outline-none bg-c_grayscale_light w-full text-c_grayscale_medium"
            />
        </div>
    );
}
export default Search;
