//@ts-nocheck
import React from 'react';
import { expect, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import Template from 'pages/Template/components/Header';
import 'isomorphic-fetch';

const doFetch = () => {
    return new Promise((resolve, reject) => {
        fetch('https://api.carefreemining.com/info').then((data) => data.json()).then((jsonData) => {
            resolve(jsonData);
        }).catch((ex) => {
            reject(ex);
        });
    });
};

test('对象赋值', () => {
    const data = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 });
    expect([1, 2, 3].includes(2)).toBeTruthy();
});

test('do fetch', async () => {
    const data = await doFetch();
    expect(data).toEqual(
        { code: -1, success: false, message: 'No session found, please login' },
    );
});

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);

// 此 mock 函数被调用了两次
expect(mockCallback.mock.calls.length).toBe(2);

// 第一次调用函数时的第一个参数是 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// 第二次调用函数时的第一个参数是 1
expect(mockCallback.mock.calls[1][0]).toBe(1);

// 第一次函数调用的返回值是 42
expect(mockCallback.mock.results[0].value).toBe(42);

it('renders correctly', () => {
    const tree = renderer
        .create(<Template />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
