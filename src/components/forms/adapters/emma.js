/*

    Adapts an Emma form data object to a form model object.

 */

class Adapter {
    constructor() {}

    adapt(formData) {
        return {
            id: formData.form.id,
            title: formData.form.title,
            description: formData.form.description,
            fields: this.processFields(formData.form.fields),
        }
    }

    processFields(fields) {
        return fields.map(field => {
            return this.processField(field)
        })
    }

    processField(field) {
        let fieldData = {
            type: field.type,
            id: field.id,
            show: field.show,
            name: field.name,
            label: field.title,
            description: field.description,
            defaultValue: field.default,
            value: field.value,
            params: field.params,
            rules: this.processRules(field.rules),
            subFields: field.sub_fields && this.processSubFields(field.sub_fields),
        }
        switch (field.template) {
            case "select":
                fieldData.type = field.params.type === "multiple" ? "multiSelect" : "select"
                fieldData.options = field.options.map(option => {
                    return {
                        label: option.option_text,
                        value: option.option_value,
                    }
                })
                break
            case "single_radio":
                fieldData.type = "switch"
                break
        }
        return fieldData
    }

    processRules(rules) {
        let rulesArray = []
        for (const [ruleKey, rule] of Object.entries(rules)) {
            rulesArray.push({
                type: rule.rule_type,
                value: rule.rule_value,
                msg: rule.rule_msg,
            })
        }
        return rulesArray
    }

    processSubFields(subFields) {
        return subFields.map(subField => {
            return this.processField(subField)
        })
    }
}

export default Adapter
