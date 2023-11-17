import { router, usePage } from "@inertiajs/react";

import { Button, Container } from "@mantine/core";

export default function Home() {
  const { props } = usePage<{ name: string; id: number }>();

  return (
    <Container className="pt-8">
      <div className="text-blue-400">
        Hello {props.name}! Your id is {props?.id}
      </div>
      <Button onClick={() => router.post(window.location.pathname)}>Post</Button>
    </Container>
  );
}
