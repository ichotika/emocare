import AuthOrganizationList from "@/components/organizations/AuthOrganizationList";
import styled from "styled-components";
function AuthOrganization() {
  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold">Authorize Request!</h2>
      <AuthOrganizationList />
      <AuthOrganizationList />
    </div>
  );
}

export default AuthOrganization;
