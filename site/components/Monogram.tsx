// Monograma provisório até chegar o arquivo original do logo "RS".
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span aria-hidden="true" className="font-script text-4xl leading-none text-rose-light">
        RS
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] tracking-[0.18em] uppercase">
          Renata Sansill
        </span>
        <span className="mt-1 text-[0.62rem] tracking-[0.32em] uppercase opacity-80">
          Estética avançada
        </span>
      </span>
    </span>
  );
}
