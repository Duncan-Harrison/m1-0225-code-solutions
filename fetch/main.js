'use strict';
async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error: ', error);
  }
}
fetchUser();
async function pocketMonster() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error: ', error);
  }
}
pocketMonster();
