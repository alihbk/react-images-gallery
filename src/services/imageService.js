import { axiosContext } from "../utility/axiosContetx";
import { imageApiUrl } from "../utility/const";

class imageService {
  async getImages() {
    let result = await axiosContext().get(`${imageApiUrl}`);
    return result;
  }
}

export default new imageService();
