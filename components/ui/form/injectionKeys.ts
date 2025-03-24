import type { InjectionKey } from 'vue';

export const FORM_ITEM_INJECTION_KEY = Symbol('formItemInjectionKey') as InjectionKey<string>;
export const FORM_LOADING_INJECTION_KEY: InjectionKey<Readonly<Ref<boolean>>> = Symbol('formLoadingInjectionKey');
