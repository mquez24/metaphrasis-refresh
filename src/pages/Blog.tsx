import { useState } from "react";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import heroBanner from "@/assets/blog-hero-banner.jpg";
import featuredImage from "@/assets/blog-featured-post.jpg";
import post1 from "@/assets/blog-post-1.jpg";
import post2 from "@/assets/blog-post-2.jpg";
import post3 from "@/assets/blog-post-3.jpg";
import post4 from "@/assets/blog-post-4.jpg";
import post5 from "@/assets/blog-post-5.jpg";
import post6 from "@/assets/blog-post-6.jpg";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Translation", "Interpreting", "HR Manual", "Language Services", "Community"];

  const featuredPost = {
    category: "Community",
    title: "Metaphrasis Sponsors the Midwest Association of Translators and Interpreters (MATI) 22nd Annual Conference",
    date: "October 14, 2025",
    excerpt: "Metaphrasis was proud to attend the Midwest Association of Translators and Interpreters (MATI) Annual Conference 2025 — a weekend dedicated to advancing professional standards and connecting experts across the language industry.",
    image: featuredImage,
    slug: "mati-conference-2025",
  };

  const blogPosts = [
    {
      id: 1,
      category: "Translation",
      title: "The Art and Science of Specialized Medical Translations",
      excerpt: "In today's interconnected world of healthcare, accurate translation of medical documents goes far beyond words—it's a matter of safety, trust, and care.",
      date: "October 27, 2025",
      image: post1,
      slug: "art-science-medical-translations",
    },
    {
      id: 2,
      category: "Translation",
      title: "Document Translation for Onboarding: A Must-Have in Today's Workplaces",
      excerpt: "Across industries, organizations are increasingly recognizing how essential document translation is in creating inclusive, effective, and scalable training and onboarding programs.",
      date: "October 20, 2025",
      image: post2,
      slug: "document-translation-onboarding",
    },
    {
      id: 3,
      category: "Language Services",
      title: "Honoring Hispanic Heritage Through Language: Why Bilingual Education and Language Access Matter",
      excerpt: "Every year, Hispanic Heritage Month offers the United States a meaningful opportunity to reflect on the extraordinary contributions of Latino communities.",
      date: "October 10, 2025",
      image: post3,
      slug: "hispanic-heritage-language",
    },
    {
      id: 4,
      category: "Interpreting",
      title: "Best Practices for Participants Using Interpretation Services at Multilingual Events",
      excerpt: "Attending a meeting where you don't speak the language? In today's global world, it doesn't mean you will be left out. Professional language services are here to help.",
      date: "October 5, 2025",
      image: post4,
      slug: "interpretation-services-events",
    },
    {
      id: 5,
      category: "Translation",
      title: "International Translation Day 2025: Celebrating the Art and Science of Language",
      excerpt: "Every Sept. 30 the world comes together to take a moment to appreciate a profession that is too often working quietly in the background, but one that has profound impact.",
      date: "September 30, 2025",
      image: post5,
      slug: "international-translation-day-2025",
    },
    {
      id: 6,
      category: "Community",
      title: "Metaphrasis Language Celebrates Hispanic Heritage Month",
      excerpt: "Every year, from September 15 to October 15, we celebrate Hispanic Heritage Month—an opportunity to honor the generations of Hispanic Americans whose contributions have shaped our nation.",
      date: "September 14, 2025",
      image: post6,
      slug: "celebrates-hispanic-heritage-month",
    },
    {
      id: 7,
      category: "Translation",
      title: "False Friends in Translation: Avoiding Costly Mistakes Across Languages",
      excerpt: "Ever used a word in a foreign language that looked familiar? But it didn't mean what you thought? Translators call these false friends.",
      date: "September 12, 2025",
      image: post1,
      slug: "false-friends-translation",
    },
    {
      id: 8,
      category: "Language Services",
      title: "Language Access for HR Professionals: Building Inclusive Workplaces",
      excerpt: "As HR professionals, your role in fostering communication, inclusivity, and compliance in the workplace is more important than ever, especially in today's increasingly diverse workplaces.",
      date: "September 10, 2025",
      image: post2,
      slug: "language-access-hr-professionals",
    },
    {
      id: 9,
      category: "Language Services",
      title: "Addressing Language Equity in Education: A Guide for Administrators",
      excerpt: "In today's diverse educational landscape, language equity is not just important—it is essential. Schools and districts across the United States are increasingly serving students from multilingual backgrounds.",
      date: "September 5, 2025",
      image: post3,
      slug: "language-equity-education",
    },
    {
      id: 10,
      category: "HR Manual",
      title: "Translation Services are Essential for Global Human Resources",
      excerpt: "Human resource departments are usually a core part of any organization, playing major roles in responsibilities ranging from recruitment and training to performance appraisals.",
      date: "August 20, 2025",
      image: post4,
      slug: "translation-services-global-hr",
    },
    {
      id: 11,
      category: "HR Manual",
      title: "Making Human Resources Multilingual: Why It Matters",
      excerpt: "Whether you are a multinational company with offices overseas or a local Chicago business with non-English speaking employees, you must be adept at bridging the gaps between languages and cultures.",
      date: "August 15, 2025",
      image: post5,
      slug: "hr-multilingual-matters",
    },
    {
      id: 12,
      category: "HR Manual",
      title: "HR Translation for Compliance and Employee Engagement",
      excerpt: "In today's globalized workforce, effective communication plays a pivotal role in fostering employee engagement, maintaining legal compliance, and ensuring that all employees can access essential HR resources.",
      date: "March 26, 2025",
      image: post6,
      slug: "hr-translation-compliance",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/80 to-brand-teal/60" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Insights & Stories</h1>
          <p className="text-xl md:text-2xl font-light">
            Explore language solutions, industry trends, and stories from the Metaphrasis community.
          </p>
          <p className="text-sm md:text-base mt-6 italic opacity-90">
            "Everyone Deserves to Be Understood — in every industry, every language."
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-6 py-16">
        <div className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${featuredPost.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
            <span className="inline-block px-4 py-1 bg-brand-teal text-white text-sm font-semibold rounded-full mb-4">
              {featuredPost.category}
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4 max-w-4xl">
              {featuredPost.title}
            </h2>
            <p className="text-lg mb-4 max-w-3xl opacity-90">{featuredPost.excerpt}</p>
            <div className="flex items-center gap-6">
              <span className="text-sm opacity-75">{featuredPost.date}</span>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-muted/30 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-brand-teal text-white shadow-md"
                      : "bg-background text-foreground hover:bg-brand-teal/10 hover:text-brand-teal border border-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full md:w-[300px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <span className="inline-block px-3 py-1 bg-brand-teal/10 text-brand-teal text-xs font-semibold rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <Button variant="ghost" size="sm" className="text-brand-teal hover:text-brand-teal hover:bg-brand-teal/10">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No posts found matching your search.</p>
          </div>
        )}
      </section>

      {/* Subscribe Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-8">
            Stay connected with the latest language insights and industry updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button variant="default" size="lg" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal to-brand-teal/80" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Need expert language support?
          </h2>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white text-brand-teal hover:bg-white/90 border-white text-lg px-8 py-6 h-auto"
          >
            Request a Quote
          </Button>
          <div className="mt-8 text-white/90 text-sm">
            <a href="mailto:info@metaphrasislcs.com" className="hover:underline">
              info@metaphrasislcs.com
            </a>
            {" | "}
            <a href="tel:8154641423" className="hover:underline">
              (815) 464-1423
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
