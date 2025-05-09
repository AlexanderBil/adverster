import CardList from './components/cardList/CardList';

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await res.json();
  return result;
}

export default async function Home() {
  const users = await fetchUsers();
  return (
    <div className="flex justify-center">
      <CardList users={users} />
    </div>
  );
}
