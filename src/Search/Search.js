import uuid from "react-uuid";
import {InputLabel, MenuItem, Select, TextField, Divider, FormControl} from "@material-ui/core";
import {useEffect, useState} from "react";

export default function SearchProduct({categoryOptions, initialProducts, searchProducts, setProducts}) {

    const [searchTerm, setSearchTerm] = useState("")
    const [selectTerm, setSelectTerm] = useState(null)
    useEffect(() => {
        if (searchTerm || selectTerm) {
            searchProducts(searchTerm, selectTerm);
        } else {
            setProducts(initialProducts)
        }
    }, [searchTerm, selectTerm])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSelectChange = (event) => {
        setSelectTerm(event.target.value)
    }

    return (
        <div>
            <TextField
                type='search'
                label='search'
                variant='standard'
                fullWidth
                onChange={handleSearchChange}
            />
            <Divider/>
            <FormControl variant="filled" style={{minWidth: 250}}>
                <InputLabel id="demo-simple-select-filled-label">Select Categories</InputLabel>
                <Select
                    onChange={handleSelectChange}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Categories"
                    value={selectTerm ? selectTerm : ""}
                >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    {
                        categoryOptions.map((category) => (
                            <MenuItem key={uuid()}
                                      value={category}
                            >
                                {category}
                            </MenuItem>
                        ))}
                    }
                </Select>
            </FormControl>
        </div>
    )
}