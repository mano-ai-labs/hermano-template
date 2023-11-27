import { usePage } from "@inertiajs/react";

import { Container } from "@mantine/core";

export default function Home() {
  const { props } = usePage<{ name: string; id: number }>();

  return (
    <Container>
      <div className="text-center">can't stop me now #{props.id}</div>
    </Container>
  );
}
