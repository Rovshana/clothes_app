
import { AxiosMock, mock } from '../mocks';
import Data from '../mocks/Products/Product.json'

mock.onGet("/product").reply(200, {
    product: Data,
  });

  export const catagoryApi = AxiosMock.get("/product")