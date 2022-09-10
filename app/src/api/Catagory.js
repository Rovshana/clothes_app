import { AxiosMock, mock } from '../mocks';
import Data from '../mocks/Catagories/Catagory.json'

mock.onGet("/catagory").reply(200, {
    catagory: Data,
  });

  export const catagoryApi = AxiosMock.get("/catagory")