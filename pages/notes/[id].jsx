/** @jsxImportSource theme-ui */
import { useRouter } from "next/router";
import Link from "next/link";

const Page = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <h1>Note {id} Page 📝</h1>
    </div>
  );
};

export default Page;
