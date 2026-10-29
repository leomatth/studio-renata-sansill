import type { CSSProperties, ElementType, ReactNode } from "react";

// Atraso de revelação em ms, lido pelo CSS como --d.
export function delay(ms: number) {
  return { "--d": `${ms}ms` } as CSSProperties;
}

export function index(i: number) {
  return { "--i": i } as CSSProperties;
}

// Título cujas linhas sobem por trás de uma máscara quando entram na tela.
export function RevealLines({
  as: Tag = "h2",
  lines,
  className,
  id,
  wait = 0,
}: {
  as?: ElementType;
  lines: ReactNode[];
  className?: string;
  id?: string;
  wait?: number;
}) {
  return (
    <Tag id={id} className={className} data-reveal="lines" style={delay(wait)}>
      {lines.map((line, i) => (
        <span key={i} className="line">
          <span className="line-inner" style={index(i)}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
