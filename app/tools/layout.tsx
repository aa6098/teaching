import React from "react";

function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>ToolsLayout</div>
      <div>{children}</div>
    </>
  );
}

export default ToolsLayout;
