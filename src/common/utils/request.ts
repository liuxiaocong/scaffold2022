import { CommonRes, GetParam, PostParam, ApiRes } from "./types";
import { message } from "antd";
export const DEFAULT_TIMEOUT_MILLISECOND: number = 30 * 1000;

export const LONGER_TIEMOUT_MILLISECOND: number = 120 * 1000;

export type RequestWithTimeoutOptions = RequestInit & { timeout?: number };

const parseJSON = async (response: Response): Promise<any> => {
  if (response.status >= 200 && response.status < 400) {
    return response.status === 204 ? {} : response.json();
  }

  if (response.status >= 400 && response.status < 500) {
    return response.json().then((text) => {
      const errorText = text?.error_msg ?? text.error?.message;
      throw new Error(errorText ?? `${response.status} ${response.statusText}`);
    });
  }

  if (response.status >= 500 && response.status < 600) {
    // exception in backend
    return response.json().then((text) => {
      const errorText = text?.error_msg ?? text.error?.message;
      throw new Error(errorText ?? `${response.status} ${response.statusText}`);
    });
  }

  throw new Error(
    `${response.status} ${response.statusText}: Unexpected status code`
  );
};

const handleError = (err?: Error) => {
  message.error(err?.message);
};

// use fpr cors request, can disable in product env
const corsOptions: RequestInit = { credentials: "include" };

const commonOptions = {
  headers: {
    Accept: "application/json",
  },
  ...corsOptions,
};

export const requestWithTimeout = async (
  resource: string,
  options: RequestWithTimeoutOptions = {}
) => {
  const { timeout } = options;
  const controller = new AbortController();
  const id = setTimeout(
    () => controller.abort(),
    timeout || DEFAULT_TIMEOUT_MILLISECOND
  );
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
};

export const get = async <Req, Res>(
  props: GetParam<Req>
): Promise<ApiRes<Res> | CommonRes> => {
  const {
    url,
    timeout = DEFAULT_TIMEOUT_MILLISECOND,
    param,
    errorHandle,
  } = props;
  const options = {
    ...commonOptions,
    method: "get",
    timeout: timeout || DEFAULT_TIMEOUT_MILLISECOND,
  };

  try {
    const response = await requestWithTimeout(url, options);
    return await parseJSON(response);
  } catch (err) {
    const error = err as Error;
    errorHandle ? errorHandle(error) : handleError(error);
    return { success: false, error: error?.message };
  }
};

export const post = async <Req, Res>(
  props: PostParam<Req>
): Promise<ApiRes<Res> | CommonRes> => {
  const {
    url,
    timeout = DEFAULT_TIMEOUT_MILLISECOND,
    data = {},
    errorHandle,
  } = props;
  const options = {
    ...corsOptions,
    method: "post",
    body: JSON.stringify(data),
    timeout: timeout || DEFAULT_TIMEOUT_MILLISECOND,
  };

  try {
    const response = await requestWithTimeout(url, options);
    return await parseJSON(response);
  } catch (err) {
    const error = err as Error;
    errorHandle ? errorHandle(error) : handleError(error);
    return { success: false, error: error?.message };
  }
};
