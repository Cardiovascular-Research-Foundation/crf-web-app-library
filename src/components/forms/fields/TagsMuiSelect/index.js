import { useState } from "react"
import { TextField, MenuItem, Select, OutlinedInput, Box, Chip, InputLabel, FormControl } from "@mui/material"
import { Controller } from "react-hook-form"

export default function Tags({ fieldData, control }) {
    const [tags, setTags] = useState(fieldData.value || [])

    const ITEM_HEIGHT = 48
    const ITEM_PADDING_TOP = 8
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    }

    const handleChange = event => {
        const {
            target: { value },
        } = event
        setTags(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        )
    }

    const handleDelete = (event, val) => {
        const { target } = event
        console.log(val)
        // setTags(
        //     // On autofill we get a stringified value.
        //     typeof value === "string" ? value.split(",") : value
        // )
    }

    return (
        <Controller
            name={fieldData.name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                // console.log(error)
                return (
                    <FormControl>
                        <InputLabel>{fieldData.title}</InputLabel>
                        <Select
                            variant="standard"
                            multiple
                            value={tags}
                            MenuProps={MenuProps}
                            onChange={handleChange}
                            // input={<OutlinedInput label="Chip" />}
                            renderValue={selected => (
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                    {selected.map(val => (
                                        <Chip
                                            key={val}
                                            label={val}
                                            onDelete={val => handleDelete(val)}
                                            sx={{ borderRadius: 1 }}
                                        />
                                    ))}
                                </Box>
                            )}
                        >
                            {fieldData.options.map((opt, i) => (
                                <MenuItem key={i} value={opt.option_value}>
                                    {opt.option_text}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )
            }}
        />
    )
}
