import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Protected = () => {
  const router = useRouter();
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("./");
  }, [router, status]);

  if (status === "authenticated")
    return (
      <div className="text-white m-auto">
        This page is Protected for special people {"\n"}
        {JSON.stringify(data.user, null, 2)}
      </div>
    );

  return <div className="text-white m-auto">Loading</div>;
};

export default Protected;
