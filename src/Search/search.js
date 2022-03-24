import uuid from "react-uuid";
import {TextField} from "@material-ui/core";

export default function SearchProduct({handleSearchChange, handleSelectChange, categoryOptions}) {
    return (
        <div>
            <TextField
                type='search'
                label='search'
                variant='standard'
                fullWidth
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