import { 
	GraphQLObjectType, 
	GraphQLString,
	GraphQLID, 
	GraphQLList, 
	GraphQLSchema,
	GraphQLNonNull
	} from 'graphql'

import { chefs } from '../model/'

const ChefType = new GraphQLObjectType({
	name: 'chef',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString}
	})
})

const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		chefs: {
			type: new GraphQLList(ChefType),
			resolve() {
				return chefs
			}
		}
	}
})

const Mutations = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		deleteChef: {
			type: ChefType,
			args: { 
				id: { type: new GraphQLNonNull(GraphQLID)}
			},
			resolve(parent, args) {
				const returnedData = chefs.filter(chef => {
					return chef.id == args.id
				})
				return returnedData[0]
			}
		},
		addChef: {
			type: new GraphQLList(ChefType),
			args: {
				name: {type: new GraphQLNonNull(GraphQLString)}
			},
			resolve(parent, args) {
				args.id = Math.floor(Math.random() * 10)
				return [...chefs, args]
			}
		}
	}
})

export const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutations
})
