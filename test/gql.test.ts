import { APIGatewayProxyEvent, Callback, Context } from 'aws-lambda';
import { handler } from '../src/lambdas/gql';
import httpPostEvent from './events/httpPost.json';

interface Response {
  statusCode: number,
  body: string
}

async function invokeHandler(event: APIGatewayProxyEvent): Promise<Response> {
  const context = {} as unknown as Context
  return new Promise((resolve, reject) => {
    const callback: Callback = (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result as Response);
    }
    handler(event, context, callback);
  });
}

test("hello returns hello world", async () => {
  const result: Response = await invokeHandler(httpPostEvent as unknown as APIGatewayProxyEvent)
  expect(result.statusCode).toEqual(200);
  expect(JSON.parse(result.body)).toEqual({
    data: {
      hello: "Hello World!"
    }
  });
});
