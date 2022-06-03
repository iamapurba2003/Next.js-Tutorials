import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "apu", name: "Apurba" },
    { id: "annu", name: "Anindita" },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        <li>
          <Link href="/clients/apurba">Apurba</Link>
        </li>
        <li>
          <Link href="clients/annu">Anindita</Link>
        </li>

        {/* In Order to Generate Dynamic Paths for Dynamic IDs Automatically based on the Data we Receive we can do it like this */}

        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/${params}/${client.id}`}>{client.name}</Link>
          </li>
        ))}

        {/* Alternative Way of Mentioning Paths in Link */}

        {
            clients.map(client => <li key={client.id}>
                <Link href={{
                    pathname: "/clients/[id]",
                    query: { id: client.id },
                }}>{client.name}</Link>
            </li> )
        }

      </ul>
    </div>
  );
};

export default ClientsPage;
