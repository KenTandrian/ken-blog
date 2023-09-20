export default function PreviewBanner() {
  return (
    <div className="bg-gray-950 p-3 text-center text-white">
      {"Previewing drafts. "}
      <a
        className="text-[#F7AB0A] underline transition hover:opacity-50"
        href="/api/exit-preview"
      >
        Back to published
      </a>
    </div>
  );
}
