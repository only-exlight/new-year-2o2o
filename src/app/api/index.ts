import { ICreateForm } from '@app/interfaces';

export async function createPostcard(body: ICreateForm): Promise<Response> {
  return fetch('http://localhost:3000/postcard', {
    body: JSON.stringify(body),
    method: 'POST',
  });
}

export async function getPostcard(id: string): Promise<ICreateForm> {
  const response = await fetch(`http://localhost:3000/postcard/${id}`, { method: 'GET' });
  return response.json();
}
