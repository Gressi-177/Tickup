import { OrganizationProfile, auth } from "@clerk/nextjs";
import { Props } from "next/script";
import React from "react";

const WorkspacePage: React.FC<Props> = (props) => {
  const { userId, user, organization } = auth();

  return (
    <div>
      Workspace Page
      {/* <p>{user}</p>
      <p>{userId}</p> */}
      {organization && <p>{JSON.stringify(organization)}</p>}
      <OrganizationProfile />
    </div>
  );
};

export default WorkspacePage;
