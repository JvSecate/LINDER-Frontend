export type ApiResponse<T> = {
    message: string;
    status_code: number;
    body: T;
};

type Method = "POST" | "GET" | "PUT" | "DELETE";

export class Api {
    public static builder() {
        return new ApiBuilder();
    }

    public static async post<T>(url: string, body: object, headers: object) {
        return Api.apiFetch(url, "POST", body, headers);
    }

    public static async get<T>(url: string, body: object, headers: object) {
        return Api.apiFetch(url, "GET", body, headers);
    }

    public static async put<T>(url: string, body: object, headers: object) {
        return Api.apiFetch(url, "PUT", body, headers);
    }

    public static async delete<T>(url: string, body: object, headers: object) {
        return Api.apiFetch(url, "DELETE", body, headers);
    }

    public static async apiFetch<T>(
        url: string,
        method: string,
        body: any,
        headers: any
    ): Promise<ApiResponse<T>> {
        return fetch(url, {
            method,
            body,
            headers,
        }).then((res) => res.json());
    }
}

class ApiBuilder {
    private headers: Record<string, string> = {};
    private body: any;
    private method: string;
    private url: string;
    public static BASE_URL = "http://192.168.15.34:8000/";

    public useMethod(method: Method) {
        this.method = method;
        return this;
    }

    private _defineProperty(
        records: Record<string, any>,
        key: string,
        value: any
    ) {
        Object.defineProperty(records, key, {
            value,
        });
    }

    public useHeader(key: string, value: string) {
        this._defineProperty(this.headers, key, value);
        return this;
    }

    public useValue(key: string, value: any) {
        this._defineProperty(this.body, key, value);
        return this;
    }

    public useValues(values: Record<string, any>) {
        this.body = values;
        return this;
    }

    public stringifyBody() {
        this.body = JSON.stringify(this.body);
        return this;
    }

    public useBody(body: any) {
        this.body = body;
        return this;
    }

    public useUrl(url: string) {
        this.url = url;
        return this;
    }

    public useDefaultHeaders() {
        return this.useHeader("Content-Type", "application/json").useHeader(
            "Accept",
            "application/json"
        );
    }

    public usePost() {
        return this.useMethod("POST");
    }

    public useGet() {
        return this.useMethod("GET");
    }

    public usePut() {
        return this.useMethod("PUT");
    }

    public useDelete() {
        return this.useMethod("DELETE");
    }

    public switchToFetcher<T = any>(): () => Promise<ApiResponse<T>> {
        return async () =>
            Api.apiFetch<T>(
                ApiBuilder.BASE_URL +
                (this.url.startsWith("/") ? this.url.substring(1) : this.url),
                this.method,
                this.body,
                this.headers
            );
    }

    public async fecth<T = any>(): Promise<ApiResponse<T>> {
        return this.switchToFetcher()();
    }
}
