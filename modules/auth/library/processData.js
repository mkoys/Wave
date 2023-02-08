import applyRule from "./applyRule.js";

export default async (rules, data) => {
    let errors = [];
    const fields = Object.keys(rules);

    for (const field of fields) {
        const fieldRules = rules[field];
        const fieldRuleKeys = Object.keys(fieldRules);

        for (const rule of fieldRuleKeys) {
            const value = fieldRules[rule];
            const ruleResult = await applyRule(rule, data, field, value);

            if (ruleResult.error) {
                error(field, rule, value);
            } else {
                data = ruleResult.data;
            }
        }
    }

    function error(field, message) {
        let newError = {};

        newError[field] = message;
        errors.push(newError);
    }

    return { errors: errors };
}