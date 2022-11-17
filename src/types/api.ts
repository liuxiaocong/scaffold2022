export type CommonRes = {
    success: boolean;
    error?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type RequestParam<T> = {
    url: string;
    timeout?: number;
    errorHandle?: (err: Error) => void; //set handle will remove default error handle behavior
};

export type GetParam<T> = RequestParam<T> & {
    param?: T;
};

export type PostParam<T> = RequestParam<T> & {
    data?: T;
};

export type ApiRes<T> = T & CommonRes;
