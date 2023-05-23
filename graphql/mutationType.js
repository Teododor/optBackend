const {
    GraphQLObjectType,
} = require('graphql');

const createEquipmentMutation = require('./mutations/createEquipmentMutation');
const updateEquipmentMutation = require('./mutations/updateEquipmentMutation');
const deleteEquipmentMutation = require('./mutations/deleteEquipmentMutation');
const createNewJoinerMutation = require('./mutations/createNewJoinerMutation');
const updateNewJoinerMutation = require('./mutations/updateNewJoinerMutation');
const deleteNewJoinerMutation = require('./mutations/deleteNewJoinerMutation');
const loginMutation = require('./mutations/loginMutation');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createEquipment: createEquipmentMutation,
        updateEquipment: updateEquipmentMutation,
        deleteEquipment: deleteEquipmentMutation,
        createNewJoiner: createNewJoinerMutation,
        updateNewJoiner: updateNewJoinerMutation,
        deleteNewJoiner: deleteNewJoinerMutation,
        login: loginMutation,
    }
});

module.exports = mutationType;
