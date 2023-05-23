const {
    GraphQLObjectType,
} = require('graphql');

const equipmentQuery = require('./queries/equipmentQuery');
const equipmentsQuery = require('./queries/equipmentsQuery');
const newJoinerQuery = require('./queries/newJoinerQuery');
const newJoinersQuery = require('./queries/newJoinersQuery');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      equipment: equipmentQuery,
      equipments: equipmentsQuery,
      newJoiner: newJoinerQuery,
      newJoiners: newJoinersQuery
    }
  });

module.exports = queryType;
