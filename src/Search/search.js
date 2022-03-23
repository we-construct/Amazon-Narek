import uuid from "react-uuid";

export default function SearchProduct({handleSearchChange, handleSelectChange, categoryOptions}) {
    return (
        <div>
            <input
                type="text"
                placeholder={'search'}
                onChange={handleSearchChange}
            />
            <select onChange={handleSelectChange}>
                {
                    categoryOptions.map((category) => (
                        <option key={uuid()}>
                            {category}
                        </option>
                    ))}
                }
            </select>
        </div>
    )
}