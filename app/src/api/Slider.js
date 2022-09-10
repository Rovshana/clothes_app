import { AxiosMock, mock } from '../mocks';
import Data from '../mocks/clothes/ClothesSlider.json'

mock.onGet("/clothes").reply(200, {
    clothes: Data
  });
 export const clothesApi = AxiosMock.get("/clothes")