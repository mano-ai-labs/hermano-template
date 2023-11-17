import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";

import { theme } from "../theme";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export function BaseLayout({ children }: PropsWithChildren<{}>) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Head>
        <title>Mano AI</title>
      </Head>
      {children}
    </MantineProvider>
  );
}
