import { Stack, Box, RadioGroup, Radio, FormControl, FormLabel, FormControlLabel, FormHelperText } from "@mui/material"
import { Controller } from "react-hook-form"

export default function RadioButtonsGrid({ fieldData, control }) {
    // console.log({ fieldData })

    const ratingLabels = ["Excellent", "Very Good", "Good", "Fair", "Poor"]

    return (
        <Controller
            name={fieldData.name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                const updateValue = (e, idx) => {
                    // console.log(idx, e.target.value)
                    const _updatedValue = value.map((item, i) => {
                        if (i === idx) {
                            return e.target.value
                        }
                        return item
                    })
                    // call react-hook-form's onChange to update the overall value of the grouped field
                    onChange(_updatedValue)
                }

                return (
                    <Stack>
                        <Stack direction="row" sx={{ alignItems: "center", width: "660px" }}>
                            <Box sx={{ flexGrow: 1 }} />
                            <Stack direction="row" sx={{ width: "380px" }}>
                                {ratingLabels.map((label, idx) => {
                                    return (
                                        <Box
                                            key={idx}
                                            sx={{
                                                flex: "1 1 0px",
                                                fontSize: "14px",
                                                fontWeight: 600,
                                                textAlign: "center",
                                                py: "10px",
                                            }}
                                        >
                                            {label}
                                        </Box>
                                    )
                                })}
                            </Stack>
                        </Stack>
                        {fieldData.subFields.map((question, questionIndex) => {
                            return (
                                <FormControl
                                    key={questionIndex}
                                    required={true}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        width: "660px",
                                        // bgcolor: questionIndex % 2 === 0 ? "#e3e3e3" : null,
                                    }}
                                >
                                    <FormLabel
                                        id="demo-row-radio-buttons-group-label"
                                        sx={{ flexGrow: 1, lineHeight: 1, pl: null }}
                                    >
                                        {question.label}
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        sx={{ width: "380px" }}
                                    >
                                        {question.options.map((option, optionIndex) => {
                                            // maybe can use question.value for checked?
                                            return (
                                                <FormControlLabel
                                                    key={optionIndex}
                                                    value={option.value}
                                                    control={<Radio />}
                                                    label=""
                                                    onChange={e => updateValue(e, questionIndex)}
                                                    checked={value[questionIndex] === option.value}
                                                    sx={{ width: "20%", justifyContent: "center", marginRight: 0 }}
                                                />
                                            )
                                        })}
                                    </RadioGroup>
                                </FormControl>
                            )
                        })}
                    </Stack>
                )
            }}
        />
    )
}
