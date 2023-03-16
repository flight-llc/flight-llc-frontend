
import { toast } from "react-toastify";

export async function httpRequest({ url, data=undefined, method, baseUrl=undefined, contentType=undefined }: {url:string, data?: any, method: string, baseUrl?: string, contentType?: string}) {
  if (!contentType) contentType ="json";
  if (!method) method ="GET";
  function PrepareData(Data: { [x: string]: string | Blob; }, type = "json") {
    //change default based on app's api default content type
    if (type === "json") {
      return JSON.stringify(Data);
    } else if (type === "multipart") {
      const formData = new FormData();
      Object.keys(Data).forEach((e) => {
        formData.append(e, Data[e]);
      });
      return formData;
    }
  }
  
  const baseHost = process.env.NEXT_PUBLIC_BACKEND_HOST;
    if (!baseUrl) baseUrl = baseHost + "/";
    let host = baseUrl;
    let _contentType = contentType === "json" ? "application/json" : contentType;
    const requestOptions: any = {
      method: method,
      headers: {},
    };
  
    if (contentType === "json") {
      requestOptions.headers["Content-Type"] = "application/json";
    }
  
    if (data?._headers) {
      requestOptions.headers = { ...requestOptions.headers, ...data._headers };
      delete data._headers;
    } else {
      requestOptions.headers = { ...requestOptions.headers, ...{Authorization: `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}` } };
    }
    if (data && contentType === "json") {
      requestOptions["body"] = PrepareData(data, "json");
    } else {
      requestOptions["body"] = data;
    }

    if (method.toLowerCase() == 'get') {
      delete requestOptions["body"];
    }
  
    // console.log('`${host}${url}`, requestOptions', `${host}${url}`, requestOptions);
    return await fetch(`${host}${url}`, requestOptions)
      .then(async (res) => {
        return await res.json();
      })
      .then(async (data) => {
        return data;
      })
      .catch((err) => {
        console.error(err);
        return {
          status: false,
          error: "An error occurred, please try again.",
          errorObject: err.toString(),
        };
      });
  }

  export function showToast({ type, message }: {type: string, message: string}) {
    if (type === "error") toast.error(message);
    if (type === "success") toast.success(message);
    return;
  }