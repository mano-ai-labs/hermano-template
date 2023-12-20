import { BellAlertIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

import Head from "next/head";
import Link from "next/link";

import { Brand } from "~/components/Brand";

import "../styles/global.css";
import { theme } from "../theme";

import { ActionIcon, AppShell, Avatar, Burger, Group, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme} forceColorScheme="dark">
      <Head>
        <title>Mano Template</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <div className="min-h-screen background-image background-animate">
      <AppShell
        header={{ height: { base: 60 } }}
        navbar={{ width: 300, breakpoint: "sm", collapsed: { desktop: true, mobile: !opened } }}
        padding="md"
        withBorder={false}
        classNames={{ header: "!bg-[#141414]", navbar: "!bg-[#141414]" }}
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
                  <Avatar src={null} alt="no image here" color="gray" />
                </ActionIcon>
              </div>
            </div>
          </Group>
        </AppShell.Header>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </div>
  );
}
