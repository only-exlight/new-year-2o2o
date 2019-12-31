import { ICreateForm } from '@app/interfaces';
import { API_HOST } from '@app/consts';

export async function createPostcard(body: ICreateForm): Promise<Response> {
  return fetch(`${API_HOST}/postcard`, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
}

export async function getPostcard(id: string): Promise<ICreateForm> {
  const response = await fetch(`${API_HOST}/postcard/${id}`, { method: 'GET' });
  return response.json();
}
