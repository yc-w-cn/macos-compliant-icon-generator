import ImageUploader from "@/components/ImageUploader";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen justify-center items-center p-12 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold">macOS Compliant Icon Generator</h2>
      <section className="w-full">
        <h3 className="sm:hidden text-lg font-medium">Introduction</h3>
        <p className="text-gray-500 text-sm">
          Size of RoundedRectangular for art design would be (13/16) of
          1024X1024 equal 832X832 CornerRadius of RoundedRectangular would be
          (22/100) of 832.0 or in other word would be (22/100)X(13/16)X1024.0
        </p>
      </section>
      
      <ImageUploader />

      <section className="w-full">
        <h3 className="text-lg font-medium">References</h3>
        <ol className="list-decimal text-sm">
          <li>
            <Link
              href="https://developer.apple.com/design/human-interface-guidelines/macos/icons-and-images/app-icon/"
              target="_blanket"
              className="underline text-blue-500"
            >
              Human Interface Guidelines/App Icons and images
            </Link>
          </li>
          <li>
            <Link
              href="https://developer.apple.com/design/resources/"
              target="_blanket"
              className="underline text-blue-500"
            >
              Apple Design Resources
            </Link>
          </li>
          <li>
            <Link
              href="https://stackoverflow.com/questions/71118094/why-is-my-app-icon-bigger-than-the-others-in-the-macos-dock"
              target="_blanket"
              className="underline text-blue-500"
            >
              Why is my app icon bigger than the others in the macOS dock?
            </Link>
          </li>
          <li>
            <Link
              href="/app-icons.png"
              target="_blanket"
              className="underline text-blue-500"
            >
              Apple Icons
            </Link>
          </li>
        </ol>
      </section>
    </main>
  );
}
