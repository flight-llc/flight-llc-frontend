import { HttpRequestParametersInterface } from "./types";
import { toast } from "react-toastify";
import axios from "axios";
import https from 'https';

export async function httpRequest({ url, data, method, baseUrl, contentType } : HttpRequestParametersInterface) {
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
    const requestOptions : any = {
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
  export function validateEmail(email: string): boolean {
    const re =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi;
    ///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  export function validatePhoneNumberString(numberString: string): boolean {
    const pattern = /^[\+][0-9]{10,20}/g;
    return pattern.test(numberString);
  }

  export function getParam(name: string | number | boolean) {
    if (typeof window !== "undefined") {
      let queryName:any;
      if (
        (queryName = new RegExp("[?&]" + encodeURIComponent(name) + "=([^&]*)").exec(
          window.location.search
        ))
      )
        return decodeURIComponent(queryName[1]);
    }
    return null;
  }

  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  export const bookFlightAction = async (bookedFlightsPayload: any[]) => {
    const result = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}flights/book-flight`, bookedFlightsPayload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
        },
        httpsAgent: httpsAgent,
    }).catch(err => err);
    return result;
};