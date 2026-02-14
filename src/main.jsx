import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Breadcrumbs from "./Breadcrumbs";

// 🔹 Mount Breadcrumbs
const breadcrumbsEl = document.getElementById("react-breadcrumbs");
if (breadcrumbsEl) {
  createRoot(breadcrumbsEl).render(<Breadcrumbs />);
}

function PostsToggle() {
  const [posts, setPosts] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);



  async function loadPosts() {
    if (posts.length > 0) return;
    setLoading(true);

    const res = await fetch("/wp-json/wp/v2/posts?per_page=100");
    const data = await res.json();

    setPosts(data);
    setLoading(false);
  }
  useEffect(() => {
    loadPosts();
  }, []);

  function handleClick() {
    if (!expanded) loadPosts();
    setExpanded((v) => !v);
  }

  const visiblePosts = expanded ? posts : posts.slice(0, 3);

  return (
    <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {visiblePosts.map((post) => (
          <div
            key={post.id}
            className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs"
          >
            <h5
              className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <p
              className="text-body mb-6"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <a
              href={post.link}
              className="inline-flex items-center text-black border rounded-base text-sm px-4 py-2.5"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleClick}
          disabled={loading}
          className="text-heading border border-buffer hover:border-default bg-neutral-primary rounded-base text-base font-medium px-5 py-2.5"
        >
          {loading ? "Loading..." : expanded ? "Show Less" : "Show All Posts"}
        </button>
      </div>
    </section>
  );
}

const el = document.getElementById("react-posts");
if (el) createRoot(el).render(<PostsToggle />);



//header font change during scrolling
window.addEventListener('scroll', function() {
  const header = document.getElementById('site-header');
  if (window.scrollY > 50) {
    header.classList.add("bg-neutral-100");
    header.classList.remove("bg-neutral-primary");
  } else {
    header.classList.remove("bg-neutral-100");
    header.classList.add("bg-neutral-primary");
  }
});
