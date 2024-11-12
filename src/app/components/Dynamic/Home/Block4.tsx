import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cookies_recipes_articles } from "@/apis/graphql/articles";
import { Archivo } from "next/font/google";
import { RxDividerVertical } from "react-icons/rx";
import { GoPlus } from "react-icons/go";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-old-standard-tt",
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

// Server-side HTML sanitization function
const sanitizeHtml = (html: string) => {
  // Basic sanitization - remove HTML tags
  return html.replace(/<[^>]*>/g, "");
};

const truncateContent = (content: string, maxLength: number) => {
  // First sanitize the HTML content
  const sanitizedContent = sanitizeHtml(content);
  // Then truncate
  return sanitizedContent.length > maxLength
    ? sanitizedContent.substring(0, maxLength) + "..."
    : sanitizedContent;
};

const Block4 = async () => {
  const posts = await cookies_recipes_articles();

  return (
    <div className="py-16 bg-white mb-14" aria-label="Tires Size Articles">
      <section className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6" aria-label="Tire Size Articles">
        <div className="flex flex-col items-center">
        <h3
          className={`${archivo.className} text-gray-900 font-bold mb-5 text-3xl text-center`}
        >
          Cookies {""}
          <span className="bg-orange-500 rounded text-white pb-0.5 px-2">
            Recipes
          </span>
        </h3>
          <p className="text-slate-700 max-w-[580px] text-center mb-8">
          From chewy cookies to crispy treats, explore essential guidelines for selecting the perfect cookie recipe that maximizes flavor and texture effortlessly.
          </p>
          {posts.length > 0 ? (
            <section className="columns-1 sm:columns-2 lg:columns-2 xl:columns-3 gap-6 space-y-5">
              {posts.map((post) => (
                <div
                  className="break-inside-avoid bg-white shadow-md overflow-hidden"
                  key={post.id}
                >
                  <Link
                    href={`/${post.slug}`}
                    aria-label={`View recipe: ${post.title}`}
                  >
                    <Image
                      src={
                        post.featuredImage?.node?.sourceUrl ||
                        `https://dev-foudrecipes.pantheonsite.io/wp-content/uploads/2024/10/loading.webp`
                      }
                      alt={`${post.title}`}
                      title={post.featuredImage?.node.title || post.title}
                      loading="lazy"
                      width={400}
                      height={280}
                      objectFit="cover"
                      className="w-full h-auto"
                    />
                  </Link>
                  <div className="flex justify-center items-center">
                    <Link
                      href={`/${post.slug}`}
                      className="rounded-full h-20 w-20 bg-orange-500 border-[5px] border-white transition-all hover:bg-amber-400 text-gray-900 -mt-10 flex justify-center items-center"
                      aria-label={`Read more about ${post.title}`}
                    >
                      <GoPlus className="size-10" />
                    </Link>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-start items-center gap-1 mt-1 mb-4">
                      <Link
                        href="/about"
                        className="animated-underline text-slate-800 text-sm font-semibold underline decoration-amber-500 underline-offset-2"
                        aria-label="About the author"
                      >
                        Easton Boehm
                      </Link>
                      <span>
                        <RxDividerVertical className="text-slate-300" />
                      </span>
                      <time
                        dateTime={post.date}
                        className="text-slate-500 text-sm"
                      >
                        {formatDate(post.date)}
                      </time>
                    </div>
                    <Link
                      href={`/${post.slug}`}
                      aria-label={`Read ${post.title}`}
                    >
                      <h4 className="text-lg leading-6 font-bold mb-3 text-gray-800 transition-all hover:text-gray-900 capitalize">
                        {post.title}
                      </h4>
                    </Link>
                    {/* Replace dangerouslySetInnerHTML with direct text rendering */}
                    <p className="text-slate-500 text-sm">
                      {truncateContent(post.content, 100)}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Block4;
