const resolvers = {
  Query: {
    async posts(parent: any, args: any, context: any) {
      return [{
        id: 'post1',
        author: { id: 'user1', name: 'bob'},
        content: 'hello world'
      }]
    }
  }
}

export default resolvers;