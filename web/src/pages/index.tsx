import { usePage } from "@inertiajs/react";

export default function Home() {
  const { props } = usePage<{ name: string }>();

  return <div className="text-blue-400">Hello {props.name}</div>;
}
