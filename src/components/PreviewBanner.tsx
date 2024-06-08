import Link from "next/link";

export default function PreviewBanner() {
  return (
    <div className="bg-gray-950 p-3 text-center text-white">
      {"Previewing drafts. "}
      <Link
        className="text-[#F7AB0A] underline transition hover:opacity-50"
        href="/api/disable-draft"
        prefetch={false}
      >
        Back to published
      </Link>
    </div>
  );
}
