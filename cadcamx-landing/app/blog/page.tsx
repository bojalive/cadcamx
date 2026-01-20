import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { blogPosts, blogCategories, getFeaturedBlogPosts } from "@/lib/blog-data";
import { FaCalendar, FaClock, FaArrowRight, FaNewspaper } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Blog | CAD/CAM Insights & Engineering Guides | CADCAMX",
  description: "Expert insights on CAD outsourcing, engineering best practices, software guides, and manufacturing tips. Stay updated with the latest in CAD/CAM.",
  openGraph: {
    title: "Blog | CAD/CAM Insights & Engineering Guides | CADCAMX",
    description: "Expert insights on CAD outsourcing, engineering best practices, and manufacturing tips.",
    type: "website",
    url: "https://cadcamx.com/blog",
  },
};

export default function BlogPage() {
  const featuredPosts = getFeaturedBlogPosts();
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Blog" }]} />

          <div className="mb-12">
            <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-4">
              <FaNewspaper className="mr-2" />
              Engineering Insights
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              CADCAMX Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Expert insights on CAD outsourcing, engineering best practices,
              software guides, and manufacturing tips.
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="bg-white/5 border-accent-gold/30 hover:border-accent-gold/50 transition-all duration-300 hover:-translate-y-1 h-full">
                      <CardContent className="p-6">
                        <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold text-xs mb-4">
                          Featured
                        </Badge>
                        <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center">
                            <FaCalendar className="mr-1" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <FaClock className="mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Categories</h2>
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((category) => (
                <Badge
                  key={category}
                  className="bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 cursor-pointer"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="bg-white/5 border-white/10 hover:border-accent-gold/30 transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-6">
                      <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-400 text-xs mb-4">
                        {post.category}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center">
                            <FaCalendar className="mr-1" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <FaClock className="mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <FaArrowRight className="text-accent-gold" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
