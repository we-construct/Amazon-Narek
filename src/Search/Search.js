import uuid from "react-uuid";
import {InputLabel, MenuItem, Select, TextField, Divider, FormControl} from "@material-ui/core";

export default function SearchProduct({handleSearchChange, handleSelectChange, categoryOptions, selectTerm}) {
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