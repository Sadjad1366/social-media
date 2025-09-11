import { GetPostById } from "@/types";
import { SlDislike, SlLike, SlEye } from "react-icons/sl";

type RecordType = { post: GetPostById };

export const PostDetailCard: React.FC<RecordType> = ({ post }) => {
  return (
    <article
      className="
        group relative overflow-hidden
         bg-slate-50 backdrop-blur
        p-5 shadow-sm transition"
    >
      <div className="absolute inset-x-5 top-3 h-[3px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 opacity-80" />

      <header className="mb-3 mt-1">
        <h2
          className="
            text-xl font-semibold tracking-tight text-slate-800"
        >
          {post.title}
        </h2>
      </header>

      <p className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
        {post.body}
      </p>

      {post.tags?.length ? (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full border border-slate-200 bg-slate-50
                px-3 py-1 text-xs font-medium text-slate-700
                dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600
              "
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <footer
        className="
          mt-2 flex items-center justify-between border-t border-slate-300 pt-3"
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Likes"
            className="
              inline-flex items-center gap-1 rounded-full
              bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700
              transition hover:bg-slate-200"
          >
            <SlLike className="text-base transition-transform group-hover:scale-110" />
            <span>{post.reactions?.likes || 0}</span>
          </button>

          <button
            type="button"
            aria-label="Dislikes"
            className="
              inline-flex items-center gap-1 rounded-full
              bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700
              transition hover:bg-slate-200"
          >
            <SlDislike className="text-base transition-transform group-hover:scale-110" />
            <span>{post.reactions?.dislikes || 0}</span>
          </button>
        </div>

        <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
          <SlEye className="text-base" />
          <span>{post.views}</span>
        </div>
      </footer>
    </article>
  );
};
