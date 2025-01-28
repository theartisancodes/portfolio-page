/* eslint-disable */
declare module 'reactjs-localstorage' {
  export const reactLocalStorage: {
    set: (key: string, value: string | object | boolean) => void;
    get: (key: string, defaultValue?: string) => string;
    remove: (key: string) => void;
    clear: () => void;
    keys: () => string[];
  };
}
