import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getBlogPostBySlug, getAllBlogPostSlugs, blogPosts } from "@/lib/blog-data";
import { FaCalendar, FaClock, FaUser, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | CADCAMX" };
  }

  return {
    title: `${post.title} | CADCAMX Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://cadcamx.com/blog/${slug}`,
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          {/* Article Header */}
          <header className="mb-12">
            <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-400 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <span className="flex items-center">
                <FaUser className="mr-2" />
                {post.author}
              </span>
              <span className="flex items-center">
                <FaCalendar className="mr-2" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center">
                <FaClock className="mr-2" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <div
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mt-10 mb-4">$1</h2>')
                  .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-white mt-8 mb-3">$1</h3>')
                  .replace(/^\*\*(.*)\*\*/gim, '<strong class="text-white">$1</strong>')
                  .replace(/^- (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
              }}
            />
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-white/10 border-white/20 text-gray-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mb-16">
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-accent-gold/30 text-accent-gold hover:bg-accent-gold/10"
              >
                <FaArrowLeft className="mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <Card className="bg-white/5 border-white/10 hover:border-accent-gold/30 transition-all h-full">
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center mt-3 text-accent-gold text-sm">
                          Read More <FaArrowRight className="ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}
