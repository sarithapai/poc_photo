import { getUploadedFile, sendUploadFile } from '../Utils/api';
import { ERROR, FAILED, STORE_ID } from '../Utils/Constants';

export const uploadPhoto = (inUploadFile) => {
  const formData = new FormData();
  formData.append('user_photo[printable_image]', inUploadFile);
  formData.append('user_photo[user_photo_type]', 'UserPhotoScene');
  formData.append('user_photo[is_tiled]', false);
  formData.append('user_photo[is_photo]', false);
  formData.append('store_id', STORE_ID);

  const config = {
    onUploadProgress: (progressEvent) => {
      const totalLength = progressEvent.lengthComputable
        ? progressEvent.total
        : progressEvent.target.getResponseHeader('content-length') ||
          progressEvent.target.getResponseHeader(
            'x-decompressed-content-length'
          );
      const fileSizeInMB = totalLength / (1024 * 1024);
      console.log('fileSizeInMB', fileSizeInMB);

      if (totalLength !== null) {
        const progressData = Math.round(
          (progressEvent.loaded * 100) / totalLength
        );
        console.log('progressData', progressData);
      }
    },
  };

  sendUploadFile(formData, config).then((postResponse) => {
    getResponse(getUploadedFile, postResponse.data.id, 10000)
      .then((res) => {
        uploadIsCompleted(res);
      })
      .catch(() => {});
  });
};

const getResponse = async (func, id, time) => {
  let retries = 50;
  let success = false;
  let failed = false;
  let data = {};

  async function checkUploadIsCompleted() {
    func(id, STORE_ID).then((res) => {
      if (res.data.result === 'SUCCESS') {
        success = true;
        data = res.data;
      } else if (res.data.result === FAILED || res.data.result === ERROR) {
        failed = true;
        data = res.data;
      }
    });
  }
  while (retries-- > 0 && !success && !failed) {
    checkUploadIsCompleted();
    await new Promise((resolve) => setTimeout(resolve, time));
  }
  return data;
};

const uploadIsCompleted = (res) => {
  if (Object.keys(res).length == 0) {
    console.log('UPLOAD ERROR');
  } else if (res.result === ERROR || res.result === FAILED) {
    console.log('ERROR', res.reason);
  } else {
    console.log('UPLOAD SUCCESS', res);
  }
};
