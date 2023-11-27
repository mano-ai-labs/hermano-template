import { BellAlertIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

import { Brand } from "../components/Brand";

import "../styles/global.css";
import { theme } from "../theme";

import { ActionIcon, AppShell, Avatar, Burger, Group, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";

export function BaseLayout({ children }: PropsWithChildren<{}>) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Head>
        <title>Mano AI</title>
        <link rel="icon" href="/static/web/favicon.ico" />
      </Head>
      <div className="min-h-screen mano-wrapper">
        <AppShell
          header={{ height: { base: 60 } }}
          navbar={{ width: 300, breakpoint: "sm", collapsed: { desktop: true, mobile: !opened } }}
          padding="md"
          withBorder={false}
        >
          <AppShell.Header>
            <Group h="100%" px="md">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              {/* NAVBAR CONTENT */}
              <div className="flex justify-between flex-grow">
                {/* LEFT SIDE */}
                <div className="flex items-center">
                  <Link href="/">
                    <Brand className="h-6 text-white sm:ml-16" />
                  </Link>
                </div>
                {/* RIGHT SIDE */}
                <div className="flex items-center gap-4 sm:mr-16">
                  <ActionIcon variant="transparent" color="gray">
                    <BellAlertIcon className="h-6" />
                  </ActionIcon>
                  <ActionIcon variant="transparent" color="gray">
                    <QuestionMarkCircleIcon className="h-6" />
                  </ActionIcon>
                  <ActionIcon variant="transparent" color="gray">
                    <Avatar src={null} alt="no image here" color="gray" />
                  </ActionIcon>
                </div>
              </div>
            </Group>
          </AppShell.Header>
          {/* MOBILE MENU */}
          <AppShell.Navbar py="md" px={4}></AppShell.Navbar>

          <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
      </div>
    </MantineProvider>
  );
}
