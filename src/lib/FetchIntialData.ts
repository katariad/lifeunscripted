export const fetchInitialData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts?select=*`,
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch posts. Status:", response.status);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    console.log("Fetched posts:", posts.length);
    return { posts };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { posts: [] };
  }
};
