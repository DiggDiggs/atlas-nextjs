import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  //Simulate Page loading
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>Topics Page: {params.id}</div>;
}
