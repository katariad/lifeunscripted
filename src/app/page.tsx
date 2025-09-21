import { fetchInitialData } from "../lib/FetchIntialData";
import HomePostList from "./components/HomePostList";

interface PageProps {
  searchParams: { q?: string; page?: string };
}

export default async function HomePage({ searchParams }: PageProps) {
  const initialData = await fetchInitialData();

  return (
    <div className="container mx-auto px-4">
      <HomePostList
        initialPosts={initialData.posts || []}
        searchParams={searchParams}
      />
    </div>
  );
}
