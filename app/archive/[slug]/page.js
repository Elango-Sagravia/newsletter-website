import blogs from "@/blogs";

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default function Home({ params }) {
  const post = blogs.find((blog) => blog.slug === params.slug);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <section className="w-1/2 mx-auto">
      <h2>{post.title}</h2>
    </section>
  );
}
