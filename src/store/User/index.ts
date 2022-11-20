import TinyStore from '../tinyStore';

type User = {
    name: string;
    age: number;
};

type UserModal = {
    data: User;
    loading: boolean;
};

const Store = TinyStore.createStore<UserModal>({
    nameSpace: 'klarity',
    key: 'user',
    crossBundle: false,
    runTime: true,
});

export default Store;
