import { ErrorResponse } from "@/types/auth";

export async function makeApiRequest<TParams, TResponse>({
  endpoint,
  params,
  method,
}: {
  endpoint: string;
  params?: TParams;
  method: "GET" | "POST" | "PUT" | "DELETE";
}): Promise<TResponse | ErrorResponse> {
  try {

    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (method === "POST") {
      options.body = JSON.stringify(params);
    }

    const response = await fetch(`/api${endpoint}`, options);

    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        status: response.status,
        statusText: response.statusText,
        data: data,
      } as ErrorResponse;
    }

    return data as TResponse;
    
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      error: true,
      status: 500,
      statusText: error,
      message: error,
      data: error
    } as ErrorResponse;
  }
}