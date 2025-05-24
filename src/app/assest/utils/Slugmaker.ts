export default function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-") // replace spaces with dashes
    .replace(/-+/g, "-") // remove duplicate dashes
    .replace(/^-|-$/g, "")
    .trim();
}
