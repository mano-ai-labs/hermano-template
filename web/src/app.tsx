import { createInertiaApp } from "@inertiajs/react";
import { ReactNode } from "react";
import { createRoot } from "react-dom/client";

import { BaseLayout } from "./layouts/base";

import { InertiaProgress } from "@inertiajs/progress";
import "vite/modulepreload-polyfill";

createInertiaApp({
  resolve: async (name) => {
    const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
    const page = pages[`./pages/${name}.tsx`] as any;
    page.default.layout ||= (page: ReactNode) => <BaseLayout children={page} />;

    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});

InertiaProgress.init({ color: "#FF0000" });
