import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

type Props = {
  children: React.ReactNode;
};
const DashBoardLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-screen w-screen">
      <div>{props.children}</div>
    </div>
  );
};

export default DashBoardLayout;
