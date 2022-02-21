const formData = {
    success: true,
    form: {
        id: 2,
        content_type_id: "event",
        title: "Event",
        description: "",
        fields: [
            {
                id: 16,
                parent_id: null,
                title: "Title",
                name: "title",
                type: "text",
                template: "single_text",
                description: "",
                default: "",
                class: null,
                params: {
                    input_type: "text",
                },
                value: "The Role of SGLT2 Inhibitors Across the Spectrum of Heart Failure",
                options: [],
                show: true,
                rules: {
                    required: {
                        rule_type: "required",
                        rule_value: 1,
                        rule_msg: "Title is required",
                    },
                    maxlength: {
                        rule_type: "maxlength",
                        rule_value: 350,
                        rule_msg: "Title cannot be longer than 350 characters",
                    },
                },
                sub_fields: [],
            },
            {
                id: 17,
                parent_id: null,
                title: "Description",
                name: "description",
                type: "text",
                template: "single_text",
                description: "",
                default: "",
                class: null,
                params: {
                    input_type: "text",
                },
                value: null,
                options: [],
                show: true,
                rules: {
                    sometimes: {
                        rule_type: "sometimes",
                        rule_value: null,
                        rule_msg: "",
                    },
                    nullable: {
                        rule_type: "nullable",
                        rule_value: null,
                        rule_msg: "",
                    },
                    maxlength: {
                        rule_type: "maxlength",
                        rule_value: 350,
                        rule_msg:
                            "Description cannot be longer than 350 characters",
                    },
                },
                sub_fields: [],
            },
            {
                id: 20,
                parent_id: null,
                title: "Recording Time",
                name: "recording_datetime_start",
                type: "datetime",
                template: "datetime",
                description: "Scheduled recording date and start time",
                default: "",
                class: null,
                params: null,
                value: "2022-02-01 06:15:00",
                options: [],
                show: true,
                rules: {
                    sometimes: {
                        rule_type: "sometimes",
                        rule_value: null,
                        rule_msg: "",
                    },
                    nullable: {
                        rule_type: "nullable",
                        rule_value: null,
                        rule_msg: "",
                    },
                    between_dates: {
                        rule_type: "between_dates",
                        rule_value: "2021-10-01 00:00:00,2022-02-01 06:45:00",
                        rule_msg:
                            "Recording Time must be less than four months before broadcast time and not come after",
                    },
                },
                sub_fields: [],
            },
            {
                id: 21,
                parent_id: null,
                title: "Recording Duration",
                name: "recording_duration",
                type: "text",
                template: "single_text",
                description: "Total time allotted for recording (in minutes)",
                default: "",
                class: null,
                params: {
                    input_type: "text",
                    hide_on: {
                        field: "recording_datetime_start",
                        value: "",
                    },
                },
                value: 90,
                options: [],
                show: true,
                rules: {
                    sometimes: {
                        rule_type: "sometimes",
                        rule_value: null,
                        rule_msg: "",
                    },
                    nullable: {
                        rule_type: "nullable",
                        rule_value: null,
                        rule_msg: "",
                    },
                    pattern: {
                        rule_type: "pattern",
                        rule_value: "digits",
                        rule_msg:
                            "Please make sure the Recording Duration is a number",
                    },
                },
                sub_fields: [],
            },
            {
                id: 23,
                parent_id: null,
                title: "Tracks",
                name: "tracks",
                type: "tag",
                template: "select",
                description:
                    "Choose any tracks this event should be included in",
                default: "",
                class: null,
                params: {
                    group: "tracks",
                    type: "multiple",
                    grouped: false,
                },
                value: [],
                options: [
                    {
                        option_text: "Challenging Cases",
                        option_value: "Challenging Cases",
                    },
                    {
                        option_text: "Coronary: CHIP",
                        option_value: "Coronary: CHIP",
                    },
                    {
                        option_text: "Coronary: Core",
                        option_value: "Coronary: Core",
                    },
                    {
                        option_text: "E-Satellite",
                        option_value: "E-Satellite",
                    },
                    {
                        option_text: "E-Training",
                        option_value: "E-Training",
                    },
                    {
                        option_text: "Endovascular",
                        option_value: "Endovascular",
                    },
                    {
                        option_text: "Fellows",
                        option_value: "Fellows",
                    },
                    {
                        option_text: "Hot Topics",
                        option_value: "Hot Topics",
                    },
                    {
                        option_text: "Innovation",
                        option_value: "Innovation",
                    },
                    {
                        option_text: "Innovation & FDA Townhall",
                        option_value: "Innovation & FDA Townhall",
                    },
                    {
                        option_text: "Late Breaking Clinical Science",
                        option_value: "Late Breaking Clinical Science",
                    },
                    {
                        option_text: "Late Breaking Science",
                        option_value: "Late Breaking Science",
                    },
                    {
                        option_text: "Live Cases",
                        option_value: "Live Cases",
                    },
                    {
                        option_text: "Master Classes",
                        option_value: "Master Classes",
                    },
                    {
                        option_text: "Nurse \\ Technologist",
                        option_value: "Nurse \\ Technologist",
                    },
                    {
                        option_text: "Satellites",
                        option_value: "Satellites",
                    },
                    {
                        option_text: "Satellites & Training",
                        option_value: "Satellites & Training",
                    },
                    {
                        option_text: "Structural: Non-Valve",
                        option_value: "Structural: Non-Valve",
                    },
                    {
                        option_text: "Structural: Valve",
                        option_value: "Structural: Valve",
                    },
                ],
                show: true,
                rules: [],
                sub_fields: [],
            },
            {
                id: 26,
                parent_id: null,
                title: "Videoconference Url",
                name: "videoconference_url",
                type: "text",
                template: "single_text",
                description: "Enter the video conference meeting url",
                default: "",
                class: null,
                params: {
                    input_type: "text",
                },
                options: [],
                value: null,
                show: true,
                rules: {
                    nullable: {
                        rule_type: "nullable",
                        rule_value: null,
                        rule_msg: "",
                    },
                    maxlength: {
                        rule_type: "maxlength",
                        rule_value: 255,
                        rule_msg:
                            "Videoconference Url field cannot be longer than 255 characters",
                    },
                },
                sub_fields: [],
            },
            {
                id: 28,
                parent_id: null,
                title: "Concurrent",
                name: "concurrent",
                type: "radio",
                template: "single_radio",
                description:
                    "Should sessions within this event run concurrently?",
                default: 0,
                class: "highlight_yes_no",
                params: null,
                value: 0,
                options: [
                    {
                        id: 6,
                        option_type: null,
                        option_text: "Yes",
                        option_value: 1,
                        dynamic_option_text: "",
                    },
                    {
                        id: 7,
                        option_type: null,
                        option_text: "No",
                        option_value: 0,
                        dynamic_option_text: "",
                    },
                ],
                show: true,
                rules: [],
                sub_fields: [],
            },
            {
                id: 31,
                parent_id: null,
                title: "Parameters",
                name: "params",
                type: "event_params_combo",
                template: "sub_field",
                description: null,
                default: "",
                class: null,
                params: [],
                value: null,
                options: [],
                show: true,
                rules: [],
                sub_fields: [
                    {
                        title: "Feedback Enabled",
                        name: "feedback",
                        type: "radio",
                        template: "single_radio",
                        description: "Should feedback be solicited?",
                        default: 1,
                        value: 1,
                        params: {
                            type: "single",
                            grouped: false,
                        },
                        show: true,
                        rules: [],
                        options: [
                            {
                                option_text: "Yes",
                                option_value: 1,
                            },
                            {
                                option_text: "No",
                                option_value: 0,
                            },
                        ],
                    },
                ],
            },
        ],
    },
}

export default formData
