import React from 'react';

type CallbackFunction = (key: string, value: any) => void;

const globalData: {
    [key: string]: Record<string, unknown>;
} = {};

const subscribeQueue: {
    [key: string]: CallbackFunction[];
} = {};

// invoking hook functions by key
const notify = (key: string, subKey?: string): void => {
    const queue = subscribeQueue[key];
    queue.forEach((fn: CallbackFunction) => {
        subKey && globalData[key] && fn(subKey, globalData[key][subKey]);
    });
};

type StoreType<T> = {
    nameSpace: string;
    key: string;
    crossBundle?: boolean;
    runTime?: boolean;
};

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

const getValueFromLocalStore = <T>(key: string): T | undefined => {
    const str = localStorage.getItem(key);
    return str && JSON.parse(str);
};

const setValueToLocalStore = (
    key: string,
    value: Record<string, unknown>,
): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

const createStore = <T extends Record<string, unknown>>(
    props: StoreType<T> = {
        nameSpace: '',
        key: '',
        crossBundle: false,
        runTime: true,
    },
): {
    useStore: () => [
        <K extends keyof T>(key: K) => T[K] | undefined,
        <K extends keyof T>(key: K, val: T[K]) => void,
    ];
    get: <K extends keyof T>(key: K) => T[K] | undefined;
    set: <K extends keyof T>(key: K, val: T[K]) => void;
} => {
    const useStore = (): [
        <K extends keyof T>(key: K) => T[K] | undefined,
        <K extends keyof T>(key: K, val: T[K]) => void,
    ] => {
        const { crossBundle, nameSpace, key, runTime = true } = props;
        const storeKey = `${nameSpace}_${key}`;

        const initValue = crossBundle
            ? getValueFromLocalStore(storeKey)
            : (globalData[storeKey] as any) || {};

        const [storeVal, setStoreVal] = React.useState<Pick<T, any>>(initValue);

        const get = <K extends keyof T>(key: K) => {
            if (crossBundle) {
                const store = getValueFromLocalStore<Pick<T, any>>(storeKey);
                return store && store[key];
            }
            return storeVal && storeVal[key];
        };

        const set = <K extends keyof T>(key: K, val: T[K]) => {
            if (crossBundle) {
                const newStore = { ...storeVal, [key]: val };
                setValueToLocalStore(storeKey, newStore);
                //https://stackoverflow.com/questions/35865481/storage-event-not-firing
                window.dispatchEvent(new Event('storage'));
                return;
            }
            if (!globalData[storeKey]) {
                globalData[storeKey] = {};
            }
            globalData[storeKey][key as string] = val;
            notify(storeKey, key as string);
        };

        const setByKey = <K extends keyof T>(key: K, val: T[K]): void => {
            setStoreVal({ ...(globalData[storeKey] as any) });
        };

        React.useEffect(() => {
            if (crossBundle) {
                const callback = () => {
                    const store = getValueFromLocalStore<Pick<T, any>>(storeKey);
                    store && setStoreVal(store);
                };

                const clear = () => {
                    //do this before remove
                    window.removeEventListener('storage', callback);
                    localStorage.removeItem(storeKey);
                };

                window.addEventListener('storage', callback);

                if (runTime) {
                    window.addEventListener('beforeunload', clear);
                }

                return (): void => {
                    window.removeEventListener('storage', callback);
                    if (runTime) {
                        window.removeEventListener('beforeunload', clear);
                    }
                };
            } else {
                if (!subscribeQueue[storeKey]) {
                    subscribeQueue[storeKey] = [];
                }
                subscribeQueue[storeKey].push(setByKey);
                return (): void => {
                    const target = subscribeQueue[storeKey].indexOf(set);
                    subscribeQueue[storeKey].splice(target, 1);
                };
            }
        }, [crossBundle, runTime]);

        return [get, set];
    };

    const get = <K extends keyof T>(subKey: K) => {
        const { crossBundle, nameSpace, key } = props;
        const storeKey = `${nameSpace}_${key}`;
        if (crossBundle) {
            const store = getValueFromLocalStore<Pick<T, any>>(storeKey);
            return store && store[subKey];
        }
        return globalData[storeKey] && (globalData[storeKey] as any)[subKey];
    };

    const set = <K extends keyof T>(subKey: K, val: T[K]) => {
        const { crossBundle, nameSpace, key } = props;
        const storeKey = `${nameSpace}_${key}`;
        if (crossBundle) {
            const current = getValueFromLocalStore<Pick<T, any>>(storeKey)
                ? { ...getValueFromLocalStore<Pick<T, any>>(storeKey) }
                : {};
            const newStore = { ...current, [subKey]: val };
            setValueToLocalStore(storeKey, newStore);
            //https://stackoverflow.com/questions/35865481/storage-event-not-firing
            window.dispatchEvent(new Event('storage'));
            return;
        }

        if (!globalData[storeKey]) {
            globalData[storeKey] = {};
        }
        globalData[storeKey][key as string] = val;
        notify(storeKey, key as string);
    };
    return { useStore, get, set };
};

export default { createStore };
