interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUser(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);
    const data = (await response.json()) as User[];
    console.log(data);
  } catch (error) {
    console.error('Error: ', error);
  }
}

fetchUser();

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function pocketMonster(): Promise<void> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = (await response.json()) as Pokemon[];
    console.log(data);
  } catch (error) {
    console.error('Error: ', error);
  }
}

pocketMonster();
