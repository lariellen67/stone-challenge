import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000
});

export async function signIn({
  user,
  pass
}: {
  user: string;
  pass: string;
}): Promise<any> {
  const formData = new FormData();
  formData.append('user', user);
  formData.append('pass', pass);
  return api.post('/api/User/Login', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
}

export async function listUsers() {
  return api.get(`/users`);
}

export async function listCards() {
  return api.get(`/cards`);
}
