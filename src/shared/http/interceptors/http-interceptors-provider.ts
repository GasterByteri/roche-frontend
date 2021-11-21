import { HttpInterceptorInterface } from '../../model';

export class HttpInterceptorsProvider {

    private readonly interceptors: HttpInterceptorInterface[];

    public constructor(interceptors?: HttpInterceptorInterface[]) {
        this.interceptors = interceptors && interceptors.length > 0 ? interceptors : [];
    }

    public get(): HttpInterceptorInterface[] {
        return this.interceptors;
    }

}
