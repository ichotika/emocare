import AuthEmployeList from "@/components/employers/AuthEmployeList";
import styled from "styled-components";
function AuthEmployee() {
  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold">Authorize Request!</h2>
      <AuthEmployeList />
      <AuthEmployeList />
    </div>
  );
}

export default AuthEmployee;
