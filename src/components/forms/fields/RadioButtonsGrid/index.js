import {
    Stack,
    Box,
    RadioGroup,
    Radio,
    FormControl,
    FormLabel,
    FormControlLabel,
    FormHelperText,
    Typography,
} from "@mui/material"
import { Controller } from "react-hook-form"

export default function RadioButtonsGrid({ fieldData, control }) {
    const ratingLabels = ["Excellent", "Very Good", "Good", "Fair", "Poor"]

    console.log(fieldData)

    return (
        <Controller
            name={fieldData.name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                const updateValue = (e, questionId) => {
                    value[questionId] = e.target.value
                    onChange(value)
                }

                return (
                    <Box sx={{ borderBottom: "1px dashed #bbb", pt: "20px", pb: "20px" }}>
                        <FormLabel sx={{ fontWeight: 600, mb: "20px", display: "block" }}>{fieldData.label}</FormLabel>
                        <Typography maxWidth="750px" mb={2}>
                            To evaluate the speakers, please check the answer that best represents your level of
                            agreement is a speaker was 'Qualified, knowledgeable, organized, and effective' in their
                            teaching method.
                        </Typography>
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
                                            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                                        }}
                                    >
                                        <FormLabel
                                            id="demo-row-radio-buttons-group-label"
                                            sx={{
                                                flexGrow: 1,
                                                lineHeight: 1,
                                                pl: null,
                                            }}
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
                                                // maybe can use question.value instead of value[question.id] for checked?
                                                return (
                                                    <FormControlLabel
                                                        key={optionIndex}
                                                        value={option.value}
                                                        control={<Radio />}
                                                        label=""
                                                        onChange={e => updateValue(e, question.id)}
                                                        checked={value[question.id] === option.value}
                                                        sx={{
                                                            width: "20%",
                                                            justifyContent: "center",
                                                            marginRight: 0,
                                                        }}
                                                    />
                                                )
                                            })}
                                        </RadioGroup>
                                    </FormControl>
                                )
                            })}
                        </Stack>
                        {error && (
                            <Box
                                sx={{
                                    color: "red",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                }}
                            >
                                {error.message}
                            </Box>
                        )}
                    </Box>
                )
            }}
        />
    )
}
