// Generic API utilities
export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorText = await response.text();
    throw new APIError(
      `API error: ${errorText}`,
      response.status,
      response.statusText
    );
  }

  const data = await response.json();
  if (!data) {
    throw new APIError('Invalid response: No data received');
  }

  return data;
}