import { usePage } from "@inertiajs/react";

export default function Home() {
  const { props } = usePage<{ name: string }>();

  return <div>Hello {props.name}</div>;
}
