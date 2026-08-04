import Container from "./Container";

interface Props {
  title: string;
  description?: string;
}

export default function PageHeader({
  title,
  description,
}: Props) {
  return (
    <div className="border-b border-border bg-surface">
      <Container>
        <div className="py-10">
          <h1 className="text-4xl font-bold text-foreground">
            {title}
          </h1>

          {description && (
            <p className="mt-3 max-w-2xl text-muted">
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}