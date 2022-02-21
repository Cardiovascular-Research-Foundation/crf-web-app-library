const formData = {
    id: 2,
    title: "Event",
    description: "",
    fields: [
        {
            id: 16,
            show: true,
            name: "title",
            label: "Title",
            defaultValue: "",
            value: "The Role of SGLT2 Inhibitors Across the Spectrum of Heart Failure",
            rules: [
                {
                    type: "required",
                    value: 1,
                    msg: "Title is required",
                },
                {
                    type: "maxlength",
                    value: 350,
                    msg: "Title cannot be longer than 350 characters",
                },
            ],
            subFields: [],
            type: "text",
        },
        {
            id: 17,
            show: true,
            name: "description",
            label: "Description",
            defaultValue: "",
            value: null,
            rules: [
                {
                    type: "sometimes",
                    value: null,
                    msg: "",
                },
                {
                    type: "nullable",
                    value: null,
                    msg: "",
                },
                {
                    type: "maxlength",
                    value: 350,
                    msg: "Description cannot be longer than 350 characters",
                },
            ],
            subFields: [],
            type: "text",
        },
        {
            id: 20,
            show: true,
            name: "recording_datetime_start",
            label: "Recording Time",
            defaultValue: "",
            value: "2022-02-01 06:15:00",
            rules: [
                {
                    type: "sometimes",
                    value: null,
                    msg: "",
                },
                {
                    type: "nullable",
                    value: null,
                    msg: "",
                },
                {
                    type: "between_dates",
                    value: "2021-10-01 00:00:00,2022-02-01 06:45:00",
                    msg: "Recording Time must be less than four months before broadcast time and not come after",
                },
            ],
            subFields: [],
            type: "datetime",
        },
        {
            id: 21,
            show: true,
            name: "recording_duration",
            label: "Recording Duration",
            defaultValue: "",
            value: 90,
            rules: [
                {
                    type: "sometimes",
                    value: null,
                    msg: "",
                },
                {
                    type: "nullable",
                    value: null,
                    msg: "",
                },
                {
                    type: "pattern",
                    value: "digits",
                    msg: "Please make sure the Recording Duration is a number",
                },
            ],
            subFields: [],
            type: "text",
        },
        {
            id: 23,
            show: true,
            name: "tracks",
            label: "Tracks",
            defaultValue: "",
            value: [],
            rules: [],
            subFields: [],
            type: "multiSelect",
            options: [
                {
                    label: "Challenging Cases",
                    value: "Challenging Cases",
                },
                {
                    label: "Coronary: CHIP",
                    value: "Coronary: CHIP",
                },
                {
                    label: "Coronary: Core",
                    value: "Coronary: Core",
                },
                {
                    label: "E-Satellite",
                    value: "E-Satellite",
                },
                {
                    label: "E-Training",
                    value: "E-Training",
                },
                {
                    label: "Endovascular",
                    value: "Endovascular",
                },
                {
                    label: "Fellows",
                    value: "Fellows",
                },
                {
                    label: "Hot Topics",
                    value: "Hot Topics",
                },
                {
                    label: "Innovation",
                    value: "Innovation",
                },
                {
                    label: "Innovation & FDA Townhall",
                    value: "Innovation & FDA Townhall",
                },
                {
                    label: "Late Breaking Clinical Science",
                    value: "Late Breaking Clinical Science",
                },
                {
                    label: "Late Breaking Science",
                    value: "Late Breaking Science",
                },
                {
                    label: "Live Cases",
                    value: "Live Cases",
                },
                {
                    label: "Master Classes",
                    value: "Master Classes",
                },
                {
                    label: "Nurse \\ Technologist",
                    value: "Nurse \\ Technologist",
                },
                {
                    label: "Satellites",
                    value: "Satellites",
                },
                {
                    label: "Satellites & Training",
                    value: "Satellites & Training",
                },
                {
                    label: "Structural: Non-Valve",
                    value: "Structural: Non-Valve",
                },
                {
                    label: "Structural: Valve",
                    value: "Structural: Valve",
                },
            ],
        },
        {
            id: 26,
            show: true,
            name: "videoconference_url",
            label: "Videoconference Url",
            defaultValue: "",
            value: null,
            rules: [
                {
                    type: "nullable",
                    value: null,
                    msg: "",
                },
                {
                    type: "maxlength",
                    value: 255,
                    msg: "Videoconference Url field cannot be longer than 255 characters",
                },
            ],
            subFields: [],
            type: "text",
        },
        {
            id: 28,
            show: true,
            name: "concurrent",
            label: "Concurrent",
            defaultValue: 0,
            value: 0,
            rules: [],
            subFields: [],
            type: "switch",
        },
        {
            id: 31,
            show: true,
            name: "params",
            label: "Parameters",
            defaultValue: "",
            value: null,
            rules: [],
            subFields: [
                {
                    show: true,
                    name: "feedback",
                    label: "Feedback Enabled",
                    defaultValue: 1,
                    value: 1,
                    rules: [],
                    type: "switch",
                },
            ],
            type: "event_params_combo",
        },
    ],
}

export default formData
