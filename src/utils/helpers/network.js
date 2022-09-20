import axios from "axios";

const configuredAxios = async (method, url, data, headers) => {
  try {
    const response = await axios({
      url: "https://murat-sasat.kp" + url,
      method,
      data,
      headers: {
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

const getData = async (url, headers) => {
  const data = await configuredAxios("get", url, undefined, headers);

  return data;
};

// const postData;

// const deleteData;

export { getData };
