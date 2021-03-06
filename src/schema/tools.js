const {gql} = require("apollo-server-express");

module.exports = gql`
    scalar Date

    directive @cost(
        multipliers: [String],
        useMultipliers: Boolean,
        complexity: CostComplexity
    ) on OBJECT | FIELD_DEFINITION

    input CostComplexity {
        min: Int = 1,
        max: Int
    }
`;
