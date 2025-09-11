// components/post/post-card.tsx

type PostCardType = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
  onClickFunc: (id: number) => void;
};

type Props = { post: PostCardType };

export const PostCard: React.FC<Props> = ({ post }) => {
  const preview = post.body;

  return (
    <article
    //   role="button"
    //   tabIndex={0}
      onClick={() => post.onClickFunc(post.id)}
      className="
        group relative overflow-hidden rounded-2xl
        border border-slate-200 bg-white/90 backdrop-blur
        p-4 shadow-sm transition duration-300
        hover:-translate-y-0.5 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
    >
      <div className="absolute inset-x-4 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 opacity-90" />

      <div className="absolute -inset-8 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40"/>

      <h3 className="mb-2 line-clamp-1 text-lg font-semibold tracking-tight text-slate-900">
        {post.title}
      </h3>

      <p className="mb-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {preview}
      </p>

      {/* تگ‌ها */}
      {!!post.tags?.length && (
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {post.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="
                rounded-full border border-slate-200 bg-slate-50
                px-3 py-1 text-xs font-medium text-slate-700
                transition-colors hover:bg-slate-100"
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > 4 && (
            <span className="text-xs text-slate-500">+{post.tags.length - 4}</span>
          )}
        </div>
      )}
     
    </article>
  );
};
