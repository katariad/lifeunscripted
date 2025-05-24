export const fetchInitialData = async () => {
  try {
    const response = await fetch(
      "https://kcbxusbaborzdjedpsbe.supabase.co/rest/v1/posts?select=*",
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    return { posts };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { posts: [] };
  }
};
