import Image from "next/image";

// The Plusnet mark on a red pill, sized to the surrounding text.
export default function MarkPill() {
  return (
    <span className="hidden h-[0.9em] w-[1.6em] items-center justify-center rounded-full bg-brand align-middle sm:inline-flex">
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={64}
        height={64}
        className="h-[0.8em] w-[0.8em] brightness-0 invert"
      />
    </span>
  );
}
