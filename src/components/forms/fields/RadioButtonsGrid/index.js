import {
    Stack,
    Box,
    RadioGroup,
    Radio,
    FormControl,
    FormLabel,
    FormControlLabel,
    Typography,
    Select,
    MenuItem,
    InputLabel,
    useMediaQuery,
} from "@mui/material"
import { Controller } from "react-hook-form"

export default function RadioButtonsGrid({ fieldData, control }) {
    const isMobile = useMediaQuery("(max-width:700px)")
    // const isMobile = true
    const ratingLabels = ["Excellent", "Very Good", "Good", "Fair", "Poor"]

    // console.log(fieldData)

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
                    // <Box sx={{ borderBottom: "1px dashed #bbb", pt: "20px", pb: "20px" }}>
                    <Box sx={{ pt: "20px", pb: "20px" }}>
                        <FormLabel
                            sx={{
                                fontWeight: 600,
                                mb: "20px",
                                display: "block",
                            }}
                        >
                            {fieldData.label}
                        </FormLabel>
                        <Typography maxWidth="750px" mb={2}>
                            To evaluate the speakers, please check the answer that best represents your level of
                            agreement is a speaker was 'Qualified, knowledgeable, organized, and effective' in their
                            teaching method.
                        </Typography>
                        <Stack>
                            {!isMobile && (
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
                            )}
                            {fieldData.subFields.map((question, questionIndex) => {
                                return (
                                    <FormControl
                                        key={questionIndex}
                                        required={true}
                                        sx={{
                                            flexDirection: "row",
                                            justifyContent: isMobile ? "space-between" : null,
                                            alignItems: "center",
                                            width: isMobile ? "100%" : "660px",
                                            maxWidth: isMobile ? "380px" : null,
                                            // bgcolor: questionIndex % 2 === 0 ? "#e3e3e3" : null,
                                            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                                        }}
                                    >
                                        <FormLabel
                                            id="demo-row-radio-buttons-group-label"
                                            sx={{
                                                flexGrow: isMobile ? null : 1,
                                                lineHeight: 1,
                                                pl: null,
                                            }}
                                        >
                                            {question.label}
                                        </FormLabel>
                                        {isMobile ? (
                                            <FormControl sx={{ width: "160px" }}>
                                                <InputLabel id={`${question.id}-${questionIndex}`}>Rating</InputLabel>
                                                <Select
                                                    labelId={`${question.id}-${questionIndex}`}
                                                    value={value[question.id]}
                                                    label="Rating"
                                                    onChange={e => updateValue(e, question.id)}
                                                >
                                                    {question.options.map((option, optionIndex) => {
                                                        return (
                                                            <MenuItem key={optionIndex} value={option.value}>
                                                                {ratingLabels[optionIndex]}
                                                            </MenuItem>
                                                        )
                                                    })}
                                                </Select>
                                            </FormControl>
                                        ) : (
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
                                        )}
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
