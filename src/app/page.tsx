import { fetchInitialData } from "../lib/FetchIntialData";
import HomePostList from "./components/HomePostList";

// ✅ New Way
interface PageProps {
  searchParams: Promise<{ q?: string; page?: string }>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams; // Await it
  const initialData = await fetchInitialData();

  return (
    <div className="container mx-auto px-4">
      <HomePostList
        initialPosts={initialData.posts || []}
        searchParams={resolvedSearchParams}
      />
    </div>
  );
}
