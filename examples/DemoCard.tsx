type DemoItem = { id: string; title: string };

export function DemoCard({ item }: { item: DemoItem }) {
  return <article aria-labelledby={`title-${item.id}`}>
    <h2 id={`title-${item.id}`}>{item.title}</h2>
  </article>;
}
