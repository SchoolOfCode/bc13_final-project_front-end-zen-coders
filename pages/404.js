import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Page does not exist, click here to go back to home</Link>
    </>
  );
}
