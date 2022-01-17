import express from "express";
import cors from 'cors';
import { getGraphQLParameters, processRequest, renderGraphiQL, sendResult, shouldRenderGraphiQL } from "graphql-helix";
import { createSchema} from './createSchema';

const boot = async () => {
  const schema = await createSchema();
  const app = express();

  app.use(cors())
  app.use(express.json());

  app.use("/graphql", async (req, res) => {
    const request = {
      body: req.body,
      headers: req.headers,
      method: req.method,
      query: req.query,
    };

    if (shouldRenderGraphiQL(request)) {
      res.send(renderGraphiQL());
    } else {
      const { operationName, query, variables } = getGraphQLParameters(request);

      const result = await processRequest({
        operationName,
        query,
        variables,
        request,
        schema,
      });

      sendResult(result, res);
    }
  });

  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`GraphQL server is running on port ${port}.`);
  });
}

boot();