const SkeletonCard = () => (
  <div className="animate-pulse rounded-xl border border-border bg-card p-6">
    <div className="mb-4 h-4 w-3/4 rounded bg-muted"></div>
    <div className="mb-2 h-3 w-full rounded bg-muted"></div>
    <div className="mb-2 h-3 w-5/6 rounded bg-muted"></div>
    <div className="h-3 w-2/3 rounded bg-muted"></div>
  </div>
);

const SkeletonHero = () => (
  <div className="animate-pulse space-y-6 py-20">
    <div className="mx-auto h-8 w-2/3 rounded bg-muted"></div>
    <div className="mx-auto h-4 w-1/2 rounded bg-muted"></div>
    <div className="mx-auto h-12 w-40 rounded-full bg-muted"></div>
  </div>
);

export { SkeletonCard, SkeletonHero };
