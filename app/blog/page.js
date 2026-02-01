
import CardList from "../components/CardList/CardList";

export const dynamic = "force-dynamic";

export default async function BlogPage({ searchParams }) {
  // const category = searchParams?.category ?? null;
  // const page = Number(searchParams?.page) || 1;

  const params = await searchParams;

  const category = params?.category ?? null;
  const page = Number(params?.page) || 1;

  return (
    <div>
      <CardList category={category} page={page} />
    </div>
  );
}

