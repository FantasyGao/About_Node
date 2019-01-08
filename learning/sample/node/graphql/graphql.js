const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');
const mysqlCon = require('./mysql');

  
let count = 0;

let UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: ()=>{
    return ({
      id: {type: GraphQLInt},
      name: {type: GraphQLString},
      uid: {type: new GraphQLNonNull(GraphQLString)},
      age: {type: GraphQLInt},
      sex: {
        type: GraphQLString,
        resolve: (data)=> {
          return data.sex === 1 ? '男':'女'
        }
      },
      createdTime: {
        type: GraphQLString,
        resolve: (data)=> {
          return String(data.createdAt)
        }
      },
      updatedTime: {
        type: GraphQLString,
        resolve: (data)=> {
          return String(data.updatedAt)
        }
      },
      description: {
        type: GraphQLString,
        resolve: (data)=> {
          return data.description;
        }
      }
    })
  }
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'queryTest',
    fields: {
      getUsers: {
        type: new GraphQLList(UserType),
        description:'get all User info',
        resolve: async (source,params) => {
          count += 1;
          let users = await mysqlCon.pifySelect('select * from Tab_User_Info')
          return users;
        }
      },
      getUserById: {
        type: UserType,
        description:'get single User info',
        args: {
          id: {type: new GraphQLNonNull(GraphQLInt)}
        },
        resolve: async (_,params) => {
          let users = await mysqlCon.pifySelect(`select * from Tab_User_Info where id=${params.id}`)
          return users[0];
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'mutationTest',
    fields: {
      invokeCount: {
        type: GraphQLInt,
        description: 'api invoke counts',
        resolve: ()=>{
          return count;
        }
      }
    }
  })
});
