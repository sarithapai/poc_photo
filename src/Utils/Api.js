import { API_END_POINT } from './Constants';
import axios from 'axios';

export function sendUploadFile(data, config) {
  config.headers = { 'designer-source': 'hp-poc-designer' };
  return axios.post(`${API_END_POINT}/content/user_photos`, data, config);
}

export function getUploadedFile(id, storeId) {
  return axios.get(
    `${API_END_POINT}/content/user_photos/${id}/ajax_check_for_upload_completion?store_id=${storeId}&source_store_id=${storeId}`
  );
}
