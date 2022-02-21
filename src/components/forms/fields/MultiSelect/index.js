import { useState } from "react"
import { TextField, MenuItem, OutlinedInput, Box, Chip, InputLabel, FormControl } from "@mui/material"
import { Controller } from "react-hook-form"
import Select from "react-select"

export default function MultiSelect({ fieldData, control }) {
    const [tags, setTags] = useState(fieldData.value || [])

    const handleChange = value => {
        setTags(
            // On autofill we get a stringified value ??
            typeof value === "string" ? value.split(",") : value
        )
    }

    return (
        <Controller
            name={fieldData.name}
            defaultValue={fieldData.default_value}
            control={control}
            render={({ onChange, value, name, ref }) => (
                <Select
                    inputRef={ref}
                    isMulti
                    isClearable
                    options={fieldData.options}
                    value={fieldData.options.find(c => c.value === value)}
                    onChange={val => handleChange(val)}
                    placeholder={fieldData.label}
                />
            )}
        />
    )
}
