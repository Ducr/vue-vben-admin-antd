// .vitepress/config/index.mts
import { withPwa } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/@vite-pwa+vitepress@1.0.1_v_22711a1074ec998f25a9bd3a76aa8589/node_modules/@vite-pwa/vitepress/dist/index.mjs";
import { defineConfigWithTheme } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_7b553e681b6ee23b18b4a6964646ea73/node_modules/vitepress/dist/node/index.js";

// .vitepress/config/en.mts
import { defineConfig } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_7b553e681b6ee23b18b4a6964646ea73/node_modules/vitepress/dist/node/index.js";

// ../package.json
var version = "5.5.9";

// .vitepress/config/en.mts
var en = defineConfig({
  description: "Vben Admin & Enterprise level management system framework",
  lang: "en-US",
  themeConfig: {
    darkModeSwitchLabel: "Theme",
    darkModeSwitchTitle: "Switch to Dark Mode",
    docFooter: {
      next: "Next Page",
      prev: "Previous Page"
    },
    editLink: {
      pattern: "https://github.com/vbenjs/vue-vben-admin/edit/main/docs/src/:path",
      text: "Edit this page on GitHub"
    },
    footer: {
      copyright: `Copyright \xA9 2020-${(/* @__PURE__ */ new Date()).getFullYear()} Vben`,
      message: "Released under the MIT License."
    },
    langMenuLabel: "Language",
    lastUpdated: {
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      },
      text: "Last updated on"
    },
    lightModeSwitchTitle: "Switch to Light Mode",
    nav: nav(),
    outline: {
      label: "Navigate"
    },
    returnToTopLabel: "Back to top",
    sidebar: {
      "/en/commercial/": {
        base: "/en/commercial/",
        items: sidebarCommercial()
      },
      "/en/guide/": { base: "/en/guide/", items: sidebarGuide() }
    }
  }
});
function sidebarGuide() {
  return [
    {
      collapsed: false,
      text: "Introduction",
      items: [
        {
          link: "introduction/vben",
          text: "About Vben Admin"
        },
        {
          link: "introduction/why",
          text: "Why Choose Us?"
        },
        { link: "introduction/quick-start", text: "Quick Start" },
        { link: "introduction/thin", text: "Lite Version" }
      ]
    },
    {
      text: "Basics",
      items: [
        { link: "essentials/concept", text: "Basic Concepts" },
        { link: "essentials/development", text: "Local Development" },
        { link: "essentials/route", text: "Routing and Menu" },
        { link: "essentials/settings", text: "Configuration" },
        { link: "essentials/icons", text: "Icons" },
        { link: "essentials/styles", text: "Styles" },
        { link: "essentials/external-module", text: "External Modules" },
        { link: "essentials/build", text: "Build and Deployment" },
        { link: "essentials/server", text: "Server Interaction and Data Mock" }
      ]
    },
    {
      text: "Advanced",
      items: [
        { link: "in-depth/login", text: "Login" },
        { link: "in-depth/theme", text: "Theme" },
        { link: "in-depth/access", text: "Access Control" },
        { link: "in-depth/locale", text: "Internationalization" },
        { link: "in-depth/features", text: "Common Features" },
        { link: "in-depth/check-updates", text: "Check Updates" },
        { link: "in-depth/loading", text: "Global Loading" },
        { link: "in-depth/ui-framework", text: "UI Framework Switching" }
      ]
    },
    {
      text: "Engineering",
      items: [
        { link: "project/standard", text: "Standards" },
        { link: "project/cli", text: "CLI" },
        { link: "project/dir", text: "Directory Explanation" },
        { link: "project/test", text: "Unit Testing" },
        { link: "project/tailwindcss", text: "Tailwind CSS" },
        { link: "project/changeset", text: "Changeset" },
        { link: "project/vite", text: "Vite Config" }
      ]
    },
    {
      text: "Others",
      items: [
        { link: "other/project-update", text: "Project Update" },
        { link: "other/remove-code", text: "Remove Code" },
        { link: "other/faq", text: "FAQ" }
      ]
    }
  ];
}
function sidebarCommercial() {
  return [
    {
      link: "community",
      text: "Community"
    },
    {
      link: "technical-support",
      text: "Technical-support"
    },
    {
      link: "customized",
      text: "Customized"
    }
  ];
}
function nav() {
  return [
    {
      activeMatch: "^/en/(guide|components)/",
      text: "Doc",
      items: [
        {
          activeMatch: "^/en/guide/",
          link: "/en/guide/introduction/vben",
          text: "Guide"
        },
        // {
        //   activeMatch: '^/en/components/',
        //   link: '/en/components/introduction',
        //   text: 'Components',
        // },
        {
          text: "Historical Versions",
          items: [
            {
              link: "https://doc.vvbin.cn",
              text: "2.x Version Documentation"
            }
          ]
        }
      ]
    },
    {
      text: "Demo",
      items: [
        {
          text: "Vben Admin",
          items: [
            {
              link: "https://www.vben.pro",
              text: "Demo Version"
            },
            {
              link: "https://ant.vben.pro",
              text: "Ant Design Vue Version"
            },
            {
              link: "https://naive.vben.pro",
              text: "Naive Version"
            },
            {
              link: "https://ele.vben.pro",
              text: "Element Plus Version"
            }
          ]
        },
        {
          text: "Others",
          items: [
            {
              link: "https://vben.vvbin.cn",
              text: "Vben Admin 2.x"
            }
          ]
        }
      ]
    },
    {
      text: version,
      items: [
        {
          link: "https://github.com/vbenjs/vue-vben-admin/releases",
          text: "Changelog"
        },
        {
          link: "https://github.com/orgs/vbenjs/projects/5",
          text: "Roadmap"
        },
        {
          link: "https://github.com/vbenjs/vue-vben-admin/blob/main/.github/contributing.md",
          text: "Contribution"
        }
      ]
    },
    {
      link: "/commercial/technical-support",
      text: "\u{1F984} Tech Support"
    },
    {
      link: "/sponsor/personal",
      text: "\u2728 Sponsor"
    },
    {
      link: "/commercial/community",
      text: "\u{1F468}\u200D\u{1F466}\u200D\u{1F466} Community"
    }
    // {
    //   link: '/friend-links/',
    //   text: '🤝 Friend Links',
    // },
  ];
}

// .vitepress/config/shared.mts
import { fileURLToPath, URL as URL2 } from "node:url";
import { resolve } from "node:path";

// ../internal/vite-config/src/config/application.ts
import { findMonorepoRoot } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/internal/node-utils/dist/index.mjs";
import { NodePackageImporter } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/sass@1.94.2/node_modules/sass/sass.node.mjs";
import { defineConfig as defineConfig2, loadEnv as loadEnv2, mergeConfig } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vite@7.2.4_@types+node@24.1_358ba57db08c2314bb16178808681f29/node_modules/vite/dist/node/index.js";

// ../internal/vite-config/src/options.ts
var isDevelopment = process.env.NODE_ENV === "development";

// ../internal/vite-config/src/plugins/index.ts
import viteVueI18nPlugin from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/@intlify+unplugin-vue-i18n@_8a2ac022656061113d35d37cfa075cea/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import viteVue from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/@vitejs+plugin-vue@6.0.2_vi_96be4139e4802cd7e03fedfcf0cd4946/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import viteVueJsx from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/@vitejs+plugin-vue-jsx@5.1._aad3a5d244d6b0ca9863e34cc1b81e90/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { visualizer as viteVisualizerPlugin } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/rollup-plugin-visualizer@5.14.0_rollup@4.53.3/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import viteCompressPlugin from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vite-plugin-compression@0.5_75704e7da2e6adfe1e1536e292f927b4/node_modules/vite-plugin-compression/dist/index.mjs";
import viteDtsPlugin from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vite-plugin-dts@4.5.4_@type_b107fe7f0245a35ca4b301cf8360a8b2/node_modules/vite-plugin-dts/dist/index.mjs";
import { createHtmlPlugin as viteHtmlPlugin } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vite-plugin-html@3.2.2_vite_136ee1ede248f556283b4f44f49b9b9b/node_modules/vite-plugin-html/dist/index.mjs";
import { VitePWA } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vite-plugin-pwa@1.1.0_vite@_3559873b35fb1256e39ae10a26984d9f/node_modules/vite-plugin-pwa/dist/index.js";
import viteVueDevTools from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vite-plugin-vue-devtools@7._d3214ab1c127cfb8eb170f4493493d1c/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";

// ../internal/vite-config/src/plugins/archiver.ts
import fs from "node:fs";
import fsp from "node:fs/promises";
import { join } from "node:path";
import archiver from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/archiver@7.0.1/node_modules/archiver/index.js";
var viteArchiverPlugin = (options = {}) => {
  return {
    apply: "build",
    closeBundle: {
      handler() {
        const { name = "dist", outputDir = "." } = options;
        setTimeout(async () => {
          const folderToZip = "dist";
          const zipOutputDir = join(process.cwd(), outputDir);
          const zipOutputPath = join(zipOutputDir, `${name}.zip`);
          try {
            await fsp.mkdir(zipOutputDir, { recursive: true });
          } catch {
          }
          try {
            await zipFolder(folderToZip, zipOutputPath);
            console.log(`Folder has been zipped to: ${zipOutputPath}`);
          } catch (error) {
            console.error("Error zipping folder:", error);
          }
        }, 0);
      },
      order: "post"
    },
    enforce: "post",
    name: "vite:archiver"
  };
};
async function zipFolder(folderPath, outputPath) {
  return new Promise((resolve2, reject) => {
    const output = fs.createWriteStream(outputPath);
    const archive = archiver("zip", {
      zlib: { level: 9 }
      // 设置压缩级别为 9 以实现最高压缩率
    });
    output.on("close", () => {
      console.log(
        `ZIP file created: ${outputPath} (${archive.pointer()} total bytes)`
      );
      resolve2();
    });
    archive.on("error", (err) => {
      reject(err);
    });
    archive.pipe(output);
    archive.directory(folderPath, false);
    archive.finalize();
  });
}

// ../internal/vite-config/src/plugins/extra-app-config.ts
import {
  colors,
  generatorContentHash,
  readPackageJSON
} from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/internal/node-utils/dist/index.mjs";

// ../internal/vite-config/src/utils/env.ts
import { fs as fs2 } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/internal/node-utils/dist/index.mjs";
import dotenv from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/dotenv@16.6.1/node_modules/dotenv/lib/main.js";

// ../internal/vite-config/src/plugins/importmap.ts
import { Generator } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/@jspm+generator@2.7.6/node_modules/@jspm/generator/dist/generator.js";
import { load } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/cheerio@1.1.2/node_modules/cheerio/dist/esm/index.js";
import { minify } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/html-minifier-terser@7.2.0/node_modules/html-minifier-terser/src/htmlminifier.js";

// ../internal/vite-config/src/plugins/inject-app-loading/index.ts
import { readPackageJSON as readPackageJSON2 } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/pkg-types@2.3.0/node_modules/pkg-types/dist/index.mjs";

// ../internal/vite-config/src/plugins/inject-metadata.ts
import dayjs from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/dayjs.min.js";
import { getPackagesSync } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/@manypkg+get-packages@3.1.0/node_modules/@manypkg/get-packages/dist/manypkg-get-packages.js";
import { readPackageJSON as readPackageJSON3 } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/pkg-types@2.3.0/node_modules/pkg-types/dist/index.mjs";
import { findUpSync } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/find-up@7.0.0/node_modules/find-up/index.js";
import { readWorkspaceManifest } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/@pnpm+workspace.read-manifest@1000.2.7/node_modules/@pnpm/workspace.read-manifest/lib/index.js";

// ../internal/vite-config/src/plugins/license.ts
import { dateUtil, readPackageJSON as readPackageJSON4 } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/internal/node-utils/dist/index.mjs";

// ../internal/vite-config/src/plugins/nitro-mock.ts
import { colors as colors2, consola, getPackage } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/internal/node-utils/dist/index.mjs";
import getPort from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/get-port@7.1.0/node_modules/get-port/index.js";
import { build, createDevServer, createNitro, prepare } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/nitropack@2.12.9/node_modules/nitropack/dist/core/index.mjs";

// ../internal/vite-config/src/plugins/print.ts
import { colors as colors3 } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/internal/node-utils/dist/index.mjs";

// ../internal/vite-config/src/plugins/vxe-table.ts
import { lazyImport, VxeResolver } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vite-plugin-lazy-import@1.0.7/node_modules/vite-plugin-lazy-import/dist/index.cjs";
async function viteVxeTableImportsPlugin() {
  return [
    lazyImport({
      resolvers: [
        VxeResolver({
          libraryName: "vxe-table"
        }),
        VxeResolver({
          libraryName: "vxe-pc-ui"
        })
      ]
    })
  ];
}

// ../internal/vite-config/src/config/library.ts
import { readPackageJSON as readPackageJSON5 } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/internal/node-utils/dist/index.mjs";
import { defineConfig as defineConfig3, mergeConfig as mergeConfig2 } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vite@7.2.4_@types+node@24.1_358ba57db08c2314bb16178808681f29/node_modules/vite/dist/node/index.js";

// .vitepress/config/shared.mts
import {
  GitChangelog,
  GitChangelogMarkdownSection
} from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/@nolebase+vitepress-plugin-_ddb56cb1bb7ffd0ad5e320e216acbe92/node_modules/@nolebase/vitepress-plugin-git-changelog/dist/vite/index.mjs";
import tailwind from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/tailwindcss@3.4.18_yaml@2.8.1/node_modules/tailwindcss/lib/index.js";
import { defineConfig as defineConfig5, postcssIsolateStyles } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_7b553e681b6ee23b18b4a6964646ea73/node_modules/vitepress/dist/node/index.js";
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vitepress-plugin-group-icon_91375fb5895993139e845db41dbafb6f/node_modules/vitepress-plugin-group-icons/dist/index.js";

// .vitepress/config/plugins/demo-preview.ts
import crypto from "node:crypto";
import { readdirSync } from "node:fs";
import { join as join2 } from "node:path";
var rawPathRegexp = (
  // eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/strict
  /^(.+?(?:\.([\da-z]+))?)(#[\w-]+)?(?: ?{(\d+(?:[,-]\d+)*)? ?(\S+)?})? ?(?:\[(.+)])?$/
);
function rawPathToToken(rawPath) {
  const [
    filepath = "",
    extension = "",
    region = "",
    lines = "",
    lang = "",
    rawTitle = ""
  ] = (rawPathRegexp.exec(rawPath) || []).slice(1);
  const title = rawTitle || filepath.split("/").pop() || "";
  return { extension, filepath, lang, lines, region, title };
}
var demoPreviewPlugin = (md) => {
  md.core.ruler.after("inline", "demo-preview", (state) => {
    const insertComponentImport = (importString) => {
      const index = state.tokens.findIndex(
        (i) => i.type === "html_block" && i.content.match(/<script setup>/g)
      );
      if (index === -1) {
        const importComponent = new state.Token("html_block", "", 0);
        importComponent.content = `<script setup>
${importString}
</script>
`;
        state.tokens.splice(0, 0, importComponent);
      } else {
        if (state.tokens[index]) {
          const content = state.tokens[index].content;
          state.tokens[index].content = content.replace(
            "</script>",
            `${importString}
</script>`
          );
        }
      }
    };
    const regex = /<DemoPreview[^>]*\sdir="([^"]*)"/g;
    state.src = state.src.replaceAll(regex, (_match, dir) => {
      const componentDir = join2(process.cwd(), "src", dir).replaceAll(
        "\\",
        "/"
      );
      let childFiles = [];
      let dirExists = true;
      try {
        childFiles = readdirSync(componentDir, {
          encoding: "utf8",
          recursive: false,
          withFileTypes: false
        }) || [];
      } catch {
        dirExists = false;
      }
      if (!dirExists) {
        return "";
      }
      const uniqueWord = generateContentHash(componentDir);
      const ComponentName = `DemoComponent_${uniqueWord}`;
      insertComponentImport(
        `import ${ComponentName} from '${componentDir}/index.vue'`
      );
      const { path: _path } = state.env;
      const index = state.tokens.findIndex((i) => i.content.match(regex));
      if (!state.tokens[index]) {
        return "";
      }
      const firstString = "index.vue";
      childFiles = childFiles.sort((a, b) => {
        if (a === firstString) return -1;
        if (b === firstString) return 1;
        return a.localeCompare(b, "en", { sensitivity: "base" });
      });
      state.tokens[index].content = `<DemoPreview files="${encodeURIComponent(JSON.stringify(childFiles))}" ><${ComponentName}/>
        `;
      const _dummyToken = new state.Token("", "", 0);
      const tokenArray = [];
      childFiles.forEach((filename) => {
        const templateStart = new state.Token("html_inline", "", 0);
        templateStart.content = `<template #${filename}>`;
        tokenArray.push(templateStart);
        const resolvedPath = join2(componentDir, filename);
        const { extension, filepath, lang, lines, title } = rawPathToToken(resolvedPath);
        const token = new state.Token("fence", "code", 0);
        token.info = `${lang || extension}${lines ? `{${lines}}` : ""}${title ? `[${title}]` : ""}`;
        token.content = `<<< ${filepath}`;
        token.src = [resolvedPath];
        tokenArray.push(token);
        const templateEnd = new state.Token("html_inline", "", 0);
        templateEnd.content = "</template>";
        tokenArray.push(templateEnd);
      });
      const endTag = new state.Token("html_inline", "", 0);
      endTag.content = "</DemoPreview>";
      tokenArray.push(endTag);
      state.tokens.splice(index + 1, 0, ...tokenArray);
      return "";
    });
  });
};
function generateContentHash(input, length = 10) {
  const hash = crypto.createHash("sha256").update(input).digest("hex");
  return Number.parseInt(hash, 16).toString(36).slice(0, length);
}

// .vitepress/config/zh.mts
import { defineConfig as defineConfig4 } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_7b553e681b6ee23b18b4a6964646ea73/node_modules/vitepress/dist/node/index.js";
var zh = defineConfig4({
  description: "Vben Admin & \u4F01\u4E1A\u7EA7\u7BA1\u7406\u7CFB\u7EDF\u6846\u67B6",
  lang: "zh-Hans",
  themeConfig: {
    darkModeSwitchLabel: "\u4E3B\u9898",
    darkModeSwitchTitle: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F",
    docFooter: {
      next: "\u4E0B\u4E00\u9875",
      prev: "\u4E0A\u4E00\u9875"
    },
    editLink: {
      pattern: "https://github.com/vbenjs/vue-vben-admin/edit/main/docs/src/:path",
      text: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875\u9762"
    },
    footer: {
      copyright: `Copyright \xA9 2020-${(/* @__PURE__ */ new Date()).getFullYear()} Vben`,
      message: "\u57FA\u4E8E MIT \u8BB8\u53EF\u53D1\u5E03."
    },
    langMenuLabel: "\u591A\u8BED\u8A00",
    lastUpdated: {
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      },
      text: "\u6700\u540E\u66F4\u65B0\u4E8E"
    },
    lightModeSwitchTitle: "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F",
    nav: nav2(),
    outline: {
      label: "\u9875\u9762\u5BFC\u822A"
    },
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebar: {
      "/commercial/": { base: "/commercial/", items: sidebarCommercial2() },
      "/components/": { base: "/components/", items: sidebarComponents() },
      "/guide/": { base: "/guide/", items: sidebarGuide2() }
    },
    sidebarMenuLabel: "\u83DC\u5355"
  }
});
function sidebarGuide2() {
  return [
    {
      collapsed: false,
      text: "\u7B80\u4ECB",
      items: [
        {
          link: "introduction/vben",
          text: "\u5173\u4E8E Vben Admin"
        },
        {
          link: "introduction/why",
          text: "\u4E3A\u4EC0\u4E48\u9009\u62E9\u6211\u4EEC?"
        },
        { link: "introduction/quick-start", text: "\u5FEB\u901F\u5F00\u59CB" },
        { link: "introduction/thin", text: "\u7CBE\u7B80\u7248\u672C" },
        {
          base: "/",
          link: "components/introduction",
          text: "\u7EC4\u4EF6\u6587\u6863"
        }
      ]
    },
    {
      text: "\u57FA\u7840",
      items: [
        { link: "essentials/concept", text: "\u57FA\u7840\u6982\u5FF5" },
        { link: "essentials/development", text: "\u672C\u5730\u5F00\u53D1" },
        { link: "essentials/route", text: "\u8DEF\u7531\u548C\u83DC\u5355" },
        { link: "essentials/settings", text: "\u914D\u7F6E" },
        { link: "essentials/icons", text: "\u56FE\u6807" },
        { link: "essentials/styles", text: "\u6837\u5F0F" },
        { link: "essentials/external-module", text: "\u5916\u90E8\u6A21\u5757" },
        { link: "essentials/build", text: "\u6784\u5EFA\u4E0E\u90E8\u7F72" },
        { link: "essentials/server", text: "\u670D\u52A1\u7AEF\u4EA4\u4E92\u4E0E\u6570\u636EMock" }
      ]
    },
    {
      text: "\u6DF1\u5165",
      items: [
        { link: "in-depth/login", text: "\u767B\u5F55" },
        // { link: 'in-depth/layout', text: '布局' },
        { link: "in-depth/theme", text: "\u4E3B\u9898" },
        { link: "in-depth/access", text: "\u6743\u9650" },
        { link: "in-depth/locale", text: "\u56FD\u9645\u5316" },
        { link: "in-depth/features", text: "\u5E38\u7528\u529F\u80FD" },
        { link: "in-depth/check-updates", text: "\u68C0\u67E5\u66F4\u65B0" },
        { link: "in-depth/loading", text: "\u5168\u5C40loading" },
        { link: "in-depth/ui-framework", text: "\u7EC4\u4EF6\u5E93\u5207\u6362" }
      ]
    },
    {
      text: "\u5DE5\u7A0B",
      items: [
        { link: "project/standard", text: "\u89C4\u8303" },
        { link: "project/cli", text: "CLI" },
        { link: "project/dir", text: "\u76EE\u5F55\u8BF4\u660E" },
        { link: "project/test", text: "\u5355\u5143\u6D4B\u8BD5" },
        { link: "project/tailwindcss", text: "Tailwind CSS" },
        { link: "project/changeset", text: "Changeset" },
        { link: "project/vite", text: "Vite Config" }
      ]
    },
    {
      text: "\u5176\u4ED6",
      items: [
        { link: "other/project-update", text: "\u9879\u76EE\u66F4\u65B0" },
        { link: "other/remove-code", text: "\u79FB\u9664\u4EE3\u7801" },
        { link: "other/faq", text: "\u5E38\u89C1\u95EE\u9898" }
      ]
    }
  ];
}
function sidebarCommercial2() {
  return [
    {
      link: "community",
      text: "\u4EA4\u6D41\u7FA4"
    },
    {
      link: "technical-support",
      text: "\u6280\u672F\u652F\u6301"
    },
    {
      link: "customized",
      text: "\u5B9A\u5236\u5F00\u53D1"
    }
  ];
}
function sidebarComponents() {
  return [
    {
      text: "\u7EC4\u4EF6",
      items: [
        {
          link: "introduction",
          text: "\u4ECB\u7ECD"
        }
      ]
    },
    {
      collapsed: false,
      text: "\u5E03\u5C40\u7EC4\u4EF6",
      items: [
        {
          link: "layout-ui/page",
          text: "Page \u9875\u9762"
        }
      ]
    },
    {
      collapsed: false,
      text: "\u901A\u7528\u7EC4\u4EF6",
      items: [
        {
          link: "common-ui/vben-api-component",
          text: "ApiComponent Api\u7EC4\u4EF6\u5305\u88C5\u5668"
        },
        {
          link: "common-ui/vben-alert",
          text: "Alert \u8F7B\u91CF\u63D0\u793A\u6846"
        },
        {
          link: "common-ui/vben-modal",
          text: "Modal \u6A21\u6001\u6846"
        },
        {
          link: "common-ui/vben-drawer",
          text: "Drawer \u62BD\u5C49"
        },
        {
          link: "common-ui/vben-form",
          text: "Form \u8868\u5355"
        },
        {
          link: "common-ui/vben-vxe-table",
          text: "Vxe Table \u8868\u683C"
        },
        {
          link: "common-ui/vben-count-to-animator",
          text: "CountToAnimator \u6570\u5B57\u52A8\u753B"
        },
        {
          link: "common-ui/vben-ellipsis-text",
          text: "EllipsisText \u7701\u7565\u6587\u672C"
        }
      ]
    }
  ];
}
function nav2() {
  return [
    {
      activeMatch: "^/(guide|components)/",
      text: "\u6587\u6863",
      items: [
        {
          activeMatch: "^/guide/",
          link: "/guide/introduction/vben",
          text: "\u6307\u5357"
        },
        {
          activeMatch: "^/components/",
          link: "/components/introduction",
          text: "\u7EC4\u4EF6"
        },
        {
          text: "\u5386\u53F2\u7248\u672C",
          items: [
            {
              link: "https://doc.vvbin.cn",
              text: "2.x\u7248\u672C\u6587\u6863"
            }
          ]
        }
      ]
    },
    {
      text: "\u6F14\u793A",
      items: [
        {
          text: "Vben Admin",
          items: [
            {
              link: "https://www.vben.pro",
              text: "\u6F14\u793A\u7248\u672C"
            },
            {
              link: "https://ant.vben.pro",
              text: "Ant Design Vue \u7248\u672C"
            },
            {
              link: "https://naive.vben.pro",
              text: "Naive \u7248\u672C"
            },
            {
              link: "https://ele.vben.pro",
              text: "Element Plus\u7248\u672C"
            }
          ]
        },
        {
          text: "\u5176\u4ED6",
          items: [
            {
              link: "https://vben.vvbin.cn",
              text: "Vben Admin 2.x"
            }
          ]
        }
      ]
    },
    {
      text: version,
      items: [
        {
          link: "https://github.com/vbenjs/vue-vben-admin/releases",
          text: "\u66F4\u65B0\u65E5\u5FD7"
        },
        {
          link: "https://github.com/orgs/vbenjs/projects/5",
          text: "\u8DEF\u7EBF\u56FE"
        },
        {
          link: "https://github.com/vbenjs/vue-vben-admin/blob/main/.github/contributing.md",
          text: "\u8D21\u732E"
        }
      ]
    },
    {
      link: "/commercial/technical-support",
      text: "\u{1F984} \u6280\u672F\u652F\u6301"
    },
    {
      link: "/sponsor/personal",
      text: "\u2728 \u8D5E\u52A9"
    },
    {
      link: "/commercial/community",
      text: "\u{1F468}\u200D\u{1F466}\u200D\u{1F466} \u4EA4\u6D41\u7FA4"
      // items: [
      //   {
      //     link: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=22ySzj7pKiw&businessType=9&from=246610&biz=ka&mainSourceId=share&subSourceId=others&jumpsource=shorturl#/pc',
      //     text: 'QQ频道',
      //   },
      //   {
      //     link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=mjZmlhgVzzUxvdxllB6C1vHpX8O8QRL0&authKey=DBdFbBwERmfaKY95JvRWqLCJIRGJAmKyZbrpzZ41EKDMZ5SR6MfbjOBaaNRN73fr&noverify=0&group_code=4286109',
      //     text: 'QQ群',
      //   },
      //   {
      //     link: 'https://discord.gg/VU62jTecad',
      //     text: 'Discord',
      //   },
      // ],
    }
    // {
    //   link: '/friend-links/',
    //   text: '🤝 友情链接',
    // },
  ];
}
var search = {
  root: {
    placeholder: "\u641C\u7D22\u6587\u6863",
    translations: {
      button: {
        buttonAriaLabel: "\u641C\u7D22\u6587\u6863",
        buttonText: "\u641C\u7D22\u6587\u6863"
      },
      modal: {
        errorScreen: {
          helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5",
          titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C"
        },
        footer: {
          closeText: "\u5173\u95ED",
          navigateText: "\u5207\u6362",
          searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005",
          selectText: "\u9009\u62E9"
        },
        noResultsScreen: {
          noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
          reportMissingResultsLinkText: "\u70B9\u51FB\u53CD\u9988",
          reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
          suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2"
        },
        searchBox: {
          cancelButtonAriaLabel: "\u53D6\u6D88",
          cancelButtonText: "\u53D6\u6D88",
          resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
          resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6"
        },
        startScreen: {
          favoriteSearchesTitle: "\u6536\u85CF",
          noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
          recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
          removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664",
          removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
          saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2"
        }
      }
    }
  }
};

// .vitepress/config/shared.mts
var __vite_injected_original_import_meta_url = "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/docs/.vitepress/config/shared.mts";
var shared = defineConfig5({
  appearance: "dark",
  head: head(),
  markdown: {
    preConfig(md) {
      md.use(demoPreviewPlugin);
      md.use(groupIconMdPlugin);
    }
  },
  pwa: pwa(),
  srcDir: "src",
  themeConfig: {
    i18nRouting: true,
    logo: "https://unpkg.com/@vbenjs/static-source@0.1.7/source/logo-v1.webp",
    search: {
      options: {
        locales: {
          ...search
        }
      },
      provider: "local"
    },
    siteTitle: "Vben Admin",
    socialLinks: [
      { icon: "github", link: "https://github.com/vbenjs/vue-vben-admin" }
    ]
  },
  title: "Vben Admin",
  vite: {
    build: {
      chunkSizeWarningLimit: Infinity,
      minify: "terser"
    },
    css: {
      postcss: {
        plugins: [
          tailwind(),
          postcssIsolateStyles({ includeFiles: [/vp-doc\.css/] })
        ]
      },
      preprocessorOptions: {
        scss: {
          api: "modern"
        }
      }
    },
    json: {
      stringify: true
    },
    resolve: {
      alias: [
        {
          find: "@vben/node-utils",
          replacement: fileURLToPath(new URL2("../../../internal/node-utils/src/index.ts", __vite_injected_original_import_meta_url))
        },
        {
          find: "@vben/vite-config",
          replacement: fileURLToPath(new URL2("../../../internal/vite-config/src/index.ts", __vite_injected_original_import_meta_url))
        }
      ]
    },
    optimizeDeps: {
      include: ["@vben/node-utils", "@vben/vite-config"]
    },
    plugins: [
      GitChangelog({
        mapAuthors: [
          {
            mapByNameAliases: ["Vben"],
            name: "vben",
            username: "anncwb"
          },
          {
            name: "vince",
            username: "vince292007"
          },
          {
            name: "Li Kui",
            username: "likui628"
          }
        ],
        repoURL: () => "https://github.com/vbenjs/vue-vben-admin"
      }),
      GitChangelogMarkdownSection(),
      viteArchiverPlugin({ outputDir: ".vitepress" }),
      groupIconVitePlugin(),
      await viteVxeTableImportsPlugin()
    ],
    server: {
      fs: {
        allow: ["../.."]
      },
      host: true,
      port: 6173
    },
    ssr: {
      external: ["@vue/repl"],
      noExternal: ["@vben/node-utils", "@vben/vite-config"]
    }
  }
});
function head() {
  return [
    ["meta", { content: "Vbenjs Team", name: "author" }],
    [
      "meta",
      {
        content: "vben, vitejs, vite, shacdn-ui, vue",
        name: "keywords"
      }
    ],
    ["link", { href: "/favicon.ico", rel: "icon", type: "image/svg+xml" }],
    [
      "meta",
      {
        content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
        name: "viewport"
      }
    ],
    ["meta", { content: "vben admin docs", name: "keywords" }],
    ["link", { href: "/favicon.ico", rel: "icon" }]
    // [
    //   'script',
    //   {
    //     src: 'https://cdn.tailwindcss.com',
    //   },
    // ],
  ];
}
function pwa() {
  return {
    includeManifestIcons: false,
    manifest: {
      description: "Vben Admin is a modern admin dashboard template based on Vue 3. ",
      icons: [
        {
          sizes: "192x192",
          src: "https://unpkg.com/@vbenjs/static-source@0.1.7/source/pwa-icon-192.png",
          type: "image/png"
        },
        {
          sizes: "512x512",
          src: "https://unpkg.com/@vbenjs/static-source@0.1.7/source/pwa-icon-512.png",
          type: "image/png"
        }
      ],
      id: "/",
      name: "Vben Admin Doc",
      short_name: "vben_admin_doc",
      theme_color: "#ffffff"
    },
    outDir: resolve(process.cwd(), ".vitepress/dist"),
    registerType: "autoUpdate",
    workbox: {
      globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
    }
  };
}

// .vitepress/config/index.mts
var config_default = withPwa(
  defineConfigWithTheme({
    ...shared,
    locales: {
      en: {
        label: "English",
        lang: "en",
        link: "/en/",
        ...en
      },
      root: {
        label: "\u7B80\u4F53\u4E2D\u6587",
        lang: "zh-CN",
        ...zh
      }
    }
  })
);
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcvaW5kZXgubXRzIiwgIi52aXRlcHJlc3MvY29uZmlnL2VuLm10cyIsICIuLi9wYWNrYWdlLmpzb24iLCAiLnZpdGVwcmVzcy9jb25maWcvc2hhcmVkLm10cyIsICIuLi9pbnRlcm5hbC92aXRlLWNvbmZpZy9zcmMvY29uZmlnL2FwcGxpY2F0aW9uLnRzIiwgIi4uL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9vcHRpb25zLnRzIiwgIi4uL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9wbHVnaW5zL2luZGV4LnRzIiwgIi4uL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9wbHVnaW5zL2FyY2hpdmVyLnRzIiwgIi4uL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9wbHVnaW5zL2V4dHJhLWFwcC1jb25maWcudHMiLCAiLi4vaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL3V0aWxzL2Vudi50cyIsICIuLi9pbnRlcm5hbC92aXRlLWNvbmZpZy9zcmMvcGx1Z2lucy9pbXBvcnRtYXAudHMiLCAiLi4vaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL3BsdWdpbnMvaW5qZWN0LWFwcC1sb2FkaW5nL2luZGV4LnRzIiwgIi4uL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9wbHVnaW5zL2luamVjdC1tZXRhZGF0YS50cyIsICIuLi9pbnRlcm5hbC92aXRlLWNvbmZpZy9zcmMvcGx1Z2lucy9saWNlbnNlLnRzIiwgIi4uL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9wbHVnaW5zL25pdHJvLW1vY2sudHMiLCAiLi4vaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL3BsdWdpbnMvcHJpbnQudHMiLCAiLi4vaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL3BsdWdpbnMvdnhlLXRhYmxlLnRzIiwgIi4uL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9jb25maWcvbGlicmFyeS50cyIsICIudml0ZXByZXNzL2NvbmZpZy9wbHVnaW5zL2RlbW8tcHJldmlldy50cyIsICIudml0ZXByZXNzL2NvbmZpZy96aC5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLWFudGRcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxpbmRleC5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9pbmRleC5tdHNcIjtpbXBvcnQgeyB3aXRoUHdhIH0gZnJvbSAnQHZpdGUtcHdhL3ZpdGVwcmVzcyc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWdXaXRoVGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyBlbiB9IGZyb20gJy4vZW4ubXRzJztcbmltcG9ydCB7IHNoYXJlZCB9IGZyb20gJy4vc2hhcmVkLm10cyc7XG5pbXBvcnQgeyB6aCB9IGZyb20gJy4vemgubXRzJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFB3YShcbiAgZGVmaW5lQ29uZmlnV2l0aFRoZW1lKHtcbiAgICAuLi5zaGFyZWQsXG4gICAgbG9jYWxlczoge1xuICAgICAgZW46IHtcbiAgICAgICAgbGFiZWw6ICdFbmdsaXNoJyxcbiAgICAgICAgbGFuZzogJ2VuJyxcbiAgICAgICAgbGluazogJy9lbi8nLFxuICAgICAgICAuLi5lbixcbiAgICAgIH0sXG4gICAgICByb290OiB7XG4gICAgICAgIGxhYmVsOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcbiAgICAgICAgbGFuZzogJ3poLUNOJyxcbiAgICAgICAgLi4uemgsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcZW4ubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8kd29yay9BZG1pbi12dWUvdnVlLXZiZW4tYWRtaW4vc3BhLXdlYi92dWUtdmJlbi1hZG1pbi1hbnRkL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvZW4ubXRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IGVuID0gZGVmaW5lQ29uZmlnKHtcbiAgZGVzY3JpcHRpb246ICdWYmVuIEFkbWluICYgRW50ZXJwcmlzZSBsZXZlbCBtYW5hZ2VtZW50IHN5c3RlbSBmcmFtZXdvcmsnLFxuICBsYW5nOiAnZW4tVVMnLFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGRhcmtNb2RlU3dpdGNoTGFiZWw6ICdUaGVtZScsXG4gICAgZGFya01vZGVTd2l0Y2hUaXRsZTogJ1N3aXRjaCB0byBEYXJrIE1vZGUnLFxuICAgIGRvY0Zvb3Rlcjoge1xuICAgICAgbmV4dDogJ05leHQgUGFnZScsXG4gICAgICBwcmV2OiAnUHJldmlvdXMgUGFnZScsXG4gICAgfSxcbiAgICBlZGl0TGluazoge1xuICAgICAgcGF0dGVybjpcbiAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS92YmVuanMvdnVlLXZiZW4tYWRtaW4vZWRpdC9tYWluL2RvY3Mvc3JjLzpwYXRoJyxcbiAgICAgIHRleHQ6ICdFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWInLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBjb3B5cmlnaHQ6IGBDb3B5cmlnaHQgXHUwMEE5IDIwMjAtJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IFZiZW5gLFxuICAgICAgbWVzc2FnZTogJ1JlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4nLFxuICAgIH0sXG4gICAgbGFuZ01lbnVMYWJlbDogJ0xhbmd1YWdlJyxcbiAgICBsYXN0VXBkYXRlZDoge1xuICAgICAgZm9ybWF0T3B0aW9uczoge1xuICAgICAgICBkYXRlU3R5bGU6ICdzaG9ydCcsXG4gICAgICAgIHRpbWVTdHlsZTogJ21lZGl1bScsXG4gICAgICB9LFxuICAgICAgdGV4dDogJ0xhc3QgdXBkYXRlZCBvbicsXG4gICAgfSxcbiAgICBsaWdodE1vZGVTd2l0Y2hUaXRsZTogJ1N3aXRjaCB0byBMaWdodCBNb2RlJyxcbiAgICBuYXY6IG5hdigpLFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGxhYmVsOiAnTmF2aWdhdGUnLFxuICAgIH0sXG4gICAgcmV0dXJuVG9Ub3BMYWJlbDogJ0JhY2sgdG8gdG9wJyxcbiAgICBzaWRlYmFyOiB7XG4gICAgICAnL2VuL2NvbW1lcmNpYWwvJzoge1xuICAgICAgICBiYXNlOiAnL2VuL2NvbW1lcmNpYWwvJyxcbiAgICAgICAgaXRlbXM6IHNpZGViYXJDb21tZXJjaWFsKCksXG4gICAgICB9LFxuICAgICAgJy9lbi9ndWlkZS8nOiB7IGJhc2U6ICcvZW4vZ3VpZGUvJywgaXRlbXM6IHNpZGViYXJHdWlkZSgpIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBzaWRlYmFyR3VpZGUoKTogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICB0ZXh0OiAnSW50cm9kdWN0aW9uJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaW50cm9kdWN0aW9uL3ZiZW4nLFxuICAgICAgICAgIHRleHQ6ICdBYm91dCBWYmVuIEFkbWluJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdpbnRyb2R1Y3Rpb24vd2h5JyxcbiAgICAgICAgICB0ZXh0OiAnV2h5IENob29zZSBVcz8nLFxuICAgICAgICB9LFxuICAgICAgICB7IGxpbms6ICdpbnRyb2R1Y3Rpb24vcXVpY2stc3RhcnQnLCB0ZXh0OiAnUXVpY2sgU3RhcnQnIH0sXG4gICAgICAgIHsgbGluazogJ2ludHJvZHVjdGlvbi90aGluJywgdGV4dDogJ0xpdGUgVmVyc2lvbicgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQmFzaWNzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvY29uY2VwdCcsIHRleHQ6ICdCYXNpYyBDb25jZXB0cycgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9kZXZlbG9wbWVudCcsIHRleHQ6ICdMb2NhbCBEZXZlbG9wbWVudCcgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9yb3V0ZScsIHRleHQ6ICdSb3V0aW5nIGFuZCBNZW51JyB9LFxuICAgICAgICB7IGxpbms6ICdlc3NlbnRpYWxzL3NldHRpbmdzJywgdGV4dDogJ0NvbmZpZ3VyYXRpb24nIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvaWNvbnMnLCB0ZXh0OiAnSWNvbnMnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvc3R5bGVzJywgdGV4dDogJ1N0eWxlcycgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9leHRlcm5hbC1tb2R1bGUnLCB0ZXh0OiAnRXh0ZXJuYWwgTW9kdWxlcycgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9idWlsZCcsIHRleHQ6ICdCdWlsZCBhbmQgRGVwbG95bWVudCcgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9zZXJ2ZXInLCB0ZXh0OiAnU2VydmVyIEludGVyYWN0aW9uIGFuZCBEYXRhIE1vY2snIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0FkdmFuY2VkJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL2xvZ2luJywgdGV4dDogJ0xvZ2luJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC90aGVtZScsIHRleHQ6ICdUaGVtZScgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvYWNjZXNzJywgdGV4dDogJ0FjY2VzcyBDb250cm9sJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9sb2NhbGUnLCB0ZXh0OiAnSW50ZXJuYXRpb25hbGl6YXRpb24nIH0sXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL2ZlYXR1cmVzJywgdGV4dDogJ0NvbW1vbiBGZWF0dXJlcycgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvY2hlY2stdXBkYXRlcycsIHRleHQ6ICdDaGVjayBVcGRhdGVzJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9sb2FkaW5nJywgdGV4dDogJ0dsb2JhbCBMb2FkaW5nJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC91aS1mcmFtZXdvcmsnLCB0ZXh0OiAnVUkgRnJhbWV3b3JrIFN3aXRjaGluZycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRW5naW5lZXJpbmcnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC9zdGFuZGFyZCcsIHRleHQ6ICdTdGFuZGFyZHMnIH0sXG4gICAgICAgIHsgbGluazogJ3Byb2plY3QvY2xpJywgdGV4dDogJ0NMSScgfSxcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC9kaXInLCB0ZXh0OiAnRGlyZWN0b3J5IEV4cGxhbmF0aW9uJyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L3Rlc3QnLCB0ZXh0OiAnVW5pdCBUZXN0aW5nJyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L3RhaWx3aW5kY3NzJywgdGV4dDogJ1RhaWx3aW5kIENTUycgfSxcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC9jaGFuZ2VzZXQnLCB0ZXh0OiAnQ2hhbmdlc2V0JyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L3ZpdGUnLCB0ZXh0OiAnVml0ZSBDb25maWcnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ090aGVycycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IGxpbms6ICdvdGhlci9wcm9qZWN0LXVwZGF0ZScsIHRleHQ6ICdQcm9qZWN0IFVwZGF0ZScgfSxcbiAgICAgICAgeyBsaW5rOiAnb3RoZXIvcmVtb3ZlLWNvZGUnLCB0ZXh0OiAnUmVtb3ZlIENvZGUnIH0sXG4gICAgICAgIHsgbGluazogJ290aGVyL2ZhcScsIHRleHQ6ICdGQVEnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG59XG5cbmZ1bmN0aW9uIHNpZGViYXJDb21tZXJjaWFsKCk6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBsaW5rOiAnY29tbXVuaXR5JyxcbiAgICAgIHRleHQ6ICdDb21tdW5pdHknLFxuICAgIH0sXG4gICAge1xuICAgICAgbGluazogJ3RlY2huaWNhbC1zdXBwb3J0JyxcbiAgICAgIHRleHQ6ICdUZWNobmljYWwtc3VwcG9ydCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAnY3VzdG9taXplZCcsXG4gICAgICB0ZXh0OiAnQ3VzdG9taXplZCcsXG4gICAgfSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gbmF2KCk6IERlZmF1bHRUaGVtZS5OYXZJdGVtW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGFjdGl2ZU1hdGNoOiAnXi9lbi8oZ3VpZGV8Y29tcG9uZW50cykvJyxcbiAgICAgIHRleHQ6ICdEb2MnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGFjdGl2ZU1hdGNoOiAnXi9lbi9ndWlkZS8nLFxuICAgICAgICAgIGxpbms6ICcvZW4vZ3VpZGUvaW50cm9kdWN0aW9uL3ZiZW4nLFxuICAgICAgICAgIHRleHQ6ICdHdWlkZScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBhY3RpdmVNYXRjaDogJ14vZW4vY29tcG9uZW50cy8nLFxuICAgICAgICAvLyAgIGxpbms6ICcvZW4vY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24nLFxuICAgICAgICAvLyAgIHRleHQ6ICdDb21wb25lbnRzJyxcbiAgICAgICAgLy8gfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdIaXN0b3JpY2FsIFZlcnNpb25zJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kb2MudnZiaW4uY24nLFxuICAgICAgICAgICAgICB0ZXh0OiAnMi54IFZlcnNpb24gRG9jdW1lbnRhdGlvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0RlbW8nLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdWYmVuIEFkbWluJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cudmJlbi5wcm8nLFxuICAgICAgICAgICAgICB0ZXh0OiAnRGVtbyBWZXJzaW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2FudC52YmVuLnBybycsXG4gICAgICAgICAgICAgIHRleHQ6ICdBbnQgRGVzaWduIFZ1ZSBWZXJzaW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL25haXZlLnZiZW4ucHJvJyxcbiAgICAgICAgICAgICAgdGV4dDogJ05haXZlIFZlcnNpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZWxlLnZiZW4ucHJvJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0VsZW1lbnQgUGx1cyBWZXJzaW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdPdGhlcnMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3ZiZW4udnZiaW4uY24nLFxuICAgICAgICAgICAgICB0ZXh0OiAnVmJlbiBBZG1pbiAyLngnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IHZlcnNpb24sXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS92YmVuanMvdnVlLXZiZW4tYWRtaW4vcmVsZWFzZXMnLFxuICAgICAgICAgIHRleHQ6ICdDaGFuZ2Vsb2cnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9vcmdzL3ZiZW5qcy9wcm9qZWN0cy81JyxcbiAgICAgICAgICB0ZXh0OiAnUm9hZG1hcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZiZW5qcy92dWUtdmJlbi1hZG1pbi9ibG9iL21haW4vLmdpdGh1Yi9jb250cmlidXRpbmcubWQnLFxuICAgICAgICAgIHRleHQ6ICdDb250cmlidXRpb24nLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICcvY29tbWVyY2lhbC90ZWNobmljYWwtc3VwcG9ydCcsXG4gICAgICB0ZXh0OiAnXHVEODNFXHVERDg0IFRlY2ggU3VwcG9ydCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAnL3Nwb25zb3IvcGVyc29uYWwnLFxuICAgICAgdGV4dDogJ1x1MjcyOCBTcG9uc29yJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICcvY29tbWVyY2lhbC9jb21tdW5pdHknLFxuICAgICAgdGV4dDogJ1x1RDgzRFx1REM2OFx1MjAwRFx1RDgzRFx1REM2Nlx1MjAwRFx1RDgzRFx1REM2NiBDb21tdW5pdHknLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgbGluazogJy9mcmllbmQtbGlua3MvJyxcbiAgICAvLyAgIHRleHQ6ICdcdUQ4M0VcdUREMUQgRnJpZW5kIExpbmtzJyxcbiAgICAvLyB9LFxuICBdO1xufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwidnVlLXZiZW4tYWRtaW4tYW50ZFwiLFxuICBcInZlcnNpb25cIjogXCI1LjUuOVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiXHU1N0ZBXHU0RThFIFZ1ZSBWYmVuIEFkbWluIHY1LjUuOSBcdTcyRUNcdTdBQ0JcdTYyQzZcdTUyMDZcdTc2ODQgQW50IERlc2lnbiBWdWUgXHU3MjQ4XHU2NzJDXHU1MzU1XHU5ODc1XHU1RTk0XHU3NTI4XHVGRjA4U1BBXHVGRjA5XHVGRjBDXHU1QjhDXHU1MTY4XHU4MTMxXHU3OUJCIG1vbm9yZXBvIFx1NEY5RFx1OEQ1Nlx1RkYwQ1x1NTNFRlx1NzJFQ1x1N0FDQlx1OTBFOFx1N0Y3Mlx1NTQ4Q1x1NTNEMVx1NUUwM1x1MzAwMlwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZHVjcm9uZy5jb20vdnVlLXZiZW4tYWRtaW4tYW50ZFwiLFxuICBcImJ1Z3NcIjogXCJodHRwczovL2dpdGh1Yi5jb20vRHVjci92dWUtdmJlbi1hZG1pbi1hbnRkL2lzc3Vlc1wiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EdWNyL3Z1ZS12YmVuLWFkbWluLWFudGQuZ2l0XCJcbiAgfSxcbiAgXCJhdXRob3JcIjoge1xuICAgIFwibmFtZVwiOiBcIkR1Y3JcIixcbiAgICBcImVtYWlsXCI6IFwiZHVjcm9uZ0AxMjYuY29tXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vRHVjclwiXG4gIH0sXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkIC0tbW9kZSBwcm9kdWN0aW9uXCIsXG4gICAgXCJidWlsZDphbmFseXplXCI6IFwidml0ZSBidWlsZCAtLW1vZGUgYW5hbHl6ZVwiLFxuICAgIFwiY2hhbmdlc2V0XCI6IFwiY2hhbmdlc2V0XCIsXG4gICAgXCJkZXZcIjogXCJ2aXRlIC0tbW9kZSBkZXZlbG9wbWVudFwiLFxuICAgIFwiZGV2OmRvY3NcIjogXCJwbnBtIC0tZmlsdGVyIEB2YmVuL2RvY3MgcnVuIGRldlwiLFxuICAgIFwiZGV2OmFsbFwiOiBcInBucG0gcnVuIGRldiAmIHBucG0gcnVuIGRldjpkb2NzXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC4gLS1leHQgLnRzLC50c3gsLmpzLC5qc3gsLnZ1ZVwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiLFxuICAgIFwidGVzdFwiOiBcInZpdGVzdCBydW5cIixcbiAgICBcInRlc3Q6d2F0Y2hcIjogXCJ2aXRlc3RcIixcbiAgICBcInR5cGVjaGVja1wiOiBcInZ1ZS10c2MgLS1ub0VtaXQgLS1za2lwTGliQ2hlY2tcIlxuICB9LFxuICBcImltcG9ydHNcIjoge1xuICAgIFwiIy8qXCI6IFwiLi9zcmMvKlwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB2YmVuL2FjY2Vzc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi9jb21tb24tdWlcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vY29uc3RhbnRzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL2hvb2tzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL2ljb25zXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL2xheW91dHNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vbG9jYWxlc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi9wbHVnaW5zXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL3ByZWZlcmVuY2VzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL3JlcXVlc3RcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vc3RvcmVzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL3N0eWxlc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi90eXBlc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi91dGlsc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdnVldXNlL2NvcmVcIjogXCJeMTMuNC4wXCIsXG4gICAgXCJhbnQtZGVzaWduLXZ1ZVwiOiBcIl40LjIuNlwiLFxuICAgIFwiZGF5anNcIjogXCJeMS4xMS4xM1wiLFxuICAgIFwicGluaWFcIjogXCJeMy4wLjNcIixcbiAgICBcInZ1ZVwiOiBcIl4zLjUuMTdcIixcbiAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC41LjFcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAY2hhbmdlc2V0cy9jaGFuZ2Vsb2ctZ2l0aHViXCI6IFwiXjAuNS4xXCIsXG4gICAgXCJAY2hhbmdlc2V0cy9jbGlcIjogXCJeMi4yOS41XCIsXG4gICAgXCJAZXNsaW50L2pzXCI6IFwiXjkuMzAuMVwiLFxuICAgIFwiQGZha2VyLWpzL2Zha2VyXCI6IFwiY2F0YWxvZzpcIixcbiAgICBcIkBpY29uaWZ5L3RhaWx3aW5kXCI6IFwiXjEuMi4wXCIsXG4gICAgXCJAdGFpbHdpbmRjc3MvdHlwb2dyYXBoeVwiOiBcIl4wLjUuMTZcIixcbiAgICBcIkB0eXBlcy9qc29ud2VidG9rZW5cIjogXCJjYXRhbG9nOlwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjQuOS4yXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNi4wLjFcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjogXCJeNS4wLjFcIixcbiAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjIxXCIsXG4gICAgXCJjc3NuYW5vXCI6IFwiXjcuMC43XCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOS4zMC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXZ1ZVwiOiBcIl4xMC4yLjBcIixcbiAgICBcIkBtYW55cGtnL2dldC1wYWNrYWdlc1wiOiBcImNhdGFsb2c6XCIsXG4gICAgXCJnZXQtcG9ydFwiOiBcImNhdGFsb2c6XCIsXG4gICAgXCJnbG9iYWxzXCI6IFwiXjE2LjMuMFwiLFxuICAgIFwiaDNcIjogXCJjYXRhbG9nOlwiLFxuICAgIFwiaGFwcHktZG9tXCI6IFwiXjEyLjEwLjNcIixcbiAgICBcImpzb253ZWJ0b2tlblwiOiBcImNhdGFsb2c6XCIsXG4gICAgXCJuaXRyb3BhY2tcIjogXCJjYXRhbG9nOlwiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjUuNlwiLFxuICAgIFwicG9zdGNzcy1hbnRkLWZpeGVzXCI6IFwiXjAuMi4wXCIsXG4gICAgXCJwb3N0Y3NzLWltcG9ydFwiOiBcIl4xNi4xLjFcIixcbiAgICBcInBvc3Rjc3MtcHJlc2V0LWVudlwiOiBcIl4xMC4yLjRcIixcbiAgICBcInNhc3NcIjogXCJeMS44OS4yXCIsXG4gICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjQuMTdcIixcbiAgICBcInRhaWx3aW5kY3NzLWFuaW1hdGVcIjogXCJeMS4wLjdcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS44LjNcIixcbiAgICBcInR5cGVzY3JpcHQtZXNsaW50XCI6IFwiXjguMy4wXCIsXG4gICAgXCJ2aXRlXCI6IFwiXjcuMS4yXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1odG1sXCI6IFwiY2F0YWxvZzpcIixcbiAgICBcInZpdGVzdFwiOiBcIl4zLjIuNFwiLFxuICAgIFwidnVlLXRzY1wiOiBcIjIuMi4xMFwiXG4gIH0sXG4gIFwicGFja2FnZU1hbmFnZXJcIjogXCJwbnBtQDEwLjE0LjBcIlxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLWFudGRcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxzaGFyZWQubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8kd29yay9BZG1pbi12dWUvdnVlLXZiZW4tYWRtaW4vc3BhLXdlYi92dWUtdmJlbi1hZG1pbi1hbnRkL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvc2hhcmVkLm10c1wiO2ltcG9ydCB0eXBlIHsgUHdhT3B0aW9ucyB9IGZyb20gJ0B2aXRlLXB3YS92aXRlcHJlc3MnO1xuaW1wb3J0IHR5cGUgeyBIZWFkQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJztcblxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCc7XG5cbmltcG9ydCB7XG4gIHZpdGVBcmNoaXZlclBsdWdpbixcbiAgdml0ZVZ4ZVRhYmxlSW1wb3J0c1BsdWdpbixcbn0gZnJvbSAnLi4vLi4vLi4vaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL2luZGV4LnRzJztcblxuaW1wb3J0IHtcbiAgR2l0Q2hhbmdlbG9nLFxuICBHaXRDaGFuZ2Vsb2dNYXJrZG93blNlY3Rpb24sXG59IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWdpdC1jaGFuZ2Vsb2cvdml0ZSc7XG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBwb3N0Y3NzSXNvbGF0ZVN0eWxlcyB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5pbXBvcnQge1xuICBncm91cEljb25NZFBsdWdpbixcbiAgZ3JvdXBJY29uVml0ZVBsdWdpbixcbn0gZnJvbSAndml0ZXByZXNzLXBsdWdpbi1ncm91cC1pY29ucyc7XG5cbmltcG9ydCB7IGRlbW9QcmV2aWV3UGx1Z2luIH0gZnJvbSAnLi9wbHVnaW5zL2RlbW8tcHJldmlldyc7XG5pbXBvcnQgeyBzZWFyY2ggYXMgemhTZWFyY2ggfSBmcm9tICcuL3poLm10cyc7XG5cbmV4cG9ydCBjb25zdCBzaGFyZWQgPSBkZWZpbmVDb25maWcoe1xuICBhcHBlYXJhbmNlOiAnZGFyaycsXG4gIGhlYWQ6IGhlYWQoKSxcbiAgbWFya2Rvd246IHtcbiAgICBwcmVDb25maWcobWQpIHtcbiAgICAgIG1kLnVzZShkZW1vUHJldmlld1BsdWdpbik7XG4gICAgICBtZC51c2UoZ3JvdXBJY29uTWRQbHVnaW4pO1xuICAgIH0sXG4gIH0sXG4gIHB3YTogcHdhKCksXG4gIHNyY0RpcjogJ3NyYycsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgaTE4blJvdXRpbmc6IHRydWUsXG4gICAgbG9nbzogJ2h0dHBzOi8vdW5wa2cuY29tL0B2YmVuanMvc3RhdGljLXNvdXJjZUAwLjEuNy9zb3VyY2UvbG9nby12MS53ZWJwJyxcbiAgICBzZWFyY2g6IHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbG9jYWxlczoge1xuICAgICAgICAgIC4uLnpoU2VhcmNoLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnLFxuICAgIH0sXG4gICAgc2l0ZVRpdGxlOiAnVmJlbiBBZG1pbicsXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdmJlbmpzL3Z1ZS12YmVuLWFkbWluJyB9LFxuICAgIF0sXG4gIH0sXG4gIHRpdGxlOiAnVmJlbiBBZG1pbicsXG4gIHZpdGU6IHtcbiAgICBidWlsZDoge1xuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiBJbmZpbml0eSxcbiAgICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIHBvc3Rjc3M6IHtcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIHRhaWx3aW5kKCksXG4gICAgICAgICAgcG9zdGNzc0lzb2xhdGVTdHlsZXMoeyBpbmNsdWRlRmlsZXM6IFsvdnAtZG9jXFwuY3NzL10gfSksXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgYXBpOiAnbW9kZXJuJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBqc29uOiB7XG4gICAgICBzdHJpbmdpZnk6IHRydWUsXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczogW1xuICAgICAgICB7XG4gICAgICAgICAgZmluZDogJ0B2YmVuL25vZGUtdXRpbHMnLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4uLy4uLy4uL2ludGVybmFsL25vZGUtdXRpbHMvc3JjL2luZGV4LnRzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAnQHZiZW4vdml0ZS1jb25maWcnLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4uLy4uLy4uL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9pbmRleC50cycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgaW5jbHVkZTogWydAdmJlbi9ub2RlLXV0aWxzJywgJ0B2YmVuL3ZpdGUtY29uZmlnJ10sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBHaXRDaGFuZ2Vsb2coe1xuICAgICAgICBtYXBBdXRob3JzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWFwQnlOYW1lQWxpYXNlczogWydWYmVuJ10sXG4gICAgICAgICAgICBuYW1lOiAndmJlbicsXG4gICAgICAgICAgICB1c2VybmFtZTogJ2FubmN3YicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAndmluY2UnLFxuICAgICAgICAgICAgdXNlcm5hbWU6ICd2aW5jZTI5MjAwNycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTGkgS3VpJyxcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnbGlrdWk2MjgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHJlcG9VUkw6ICgpID0+ICdodHRwczovL2dpdGh1Yi5jb20vdmJlbmpzL3Z1ZS12YmVuLWFkbWluJyxcbiAgICAgIH0pLFxuICAgICAgR2l0Q2hhbmdlbG9nTWFya2Rvd25TZWN0aW9uKCksXG4gICAgICB2aXRlQXJjaGl2ZXJQbHVnaW4oeyBvdXRwdXREaXI6ICcudml0ZXByZXNzJyB9KSxcbiAgICAgIGdyb3VwSWNvblZpdGVQbHVnaW4oKSxcbiAgICAgIGF3YWl0IHZpdGVWeGVUYWJsZUltcG9ydHNQbHVnaW4oKSxcbiAgICBdLFxuICAgIHNlcnZlcjoge1xuICAgICAgZnM6IHtcbiAgICAgICAgYWxsb3c6IFsnLi4vLi4nXSxcbiAgICAgIH0sXG4gICAgICBob3N0OiB0cnVlLFxuICAgICAgcG9ydDogNjE3MyxcbiAgICB9LFxuXG4gICAgc3NyOiB7XG4gICAgICBleHRlcm5hbDogWydAdnVlL3JlcGwnXSxcbiAgICAgIG5vRXh0ZXJuYWw6IFsnQHZiZW4vbm9kZS11dGlscycsICdAdmJlbi92aXRlLWNvbmZpZyddLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gaGVhZCgpOiBIZWFkQ29uZmlnW10ge1xuICByZXR1cm4gW1xuICAgIFsnbWV0YScsIHsgY29udGVudDogJ1ZiZW5qcyBUZWFtJywgbmFtZTogJ2F1dGhvcicgfV0sXG4gICAgW1xuICAgICAgJ21ldGEnLFxuICAgICAge1xuICAgICAgICBjb250ZW50OiAndmJlbiwgdml0ZWpzLCB2aXRlLCBzaGFjZG4tdWksIHZ1ZScsXG4gICAgICAgIG5hbWU6ICdrZXl3b3JkcycsXG4gICAgICB9LFxuICAgIF0sXG4gICAgWydsaW5rJywgeyBocmVmOiAnL2Zhdmljb24uaWNvJywgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9zdmcreG1sJyB9XSxcbiAgICBbXG4gICAgICAnbWV0YScsXG4gICAgICB7XG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsbWluaW11bS1zY2FsZT0xLjAsbWF4aW11bS1zY2FsZT0xLjAsdXNlci1zY2FsYWJsZT1ubycsXG4gICAgICAgIG5hbWU6ICd2aWV3cG9ydCcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgWydtZXRhJywgeyBjb250ZW50OiAndmJlbiBhZG1pbiBkb2NzJywgbmFtZTogJ2tleXdvcmRzJyB9XSxcbiAgICBbJ2xpbmsnLCB7IGhyZWY6ICcvZmF2aWNvbi5pY28nLCByZWw6ICdpY29uJyB9XSxcbiAgICAvLyBbXG4gICAgLy8gICAnc2NyaXB0JyxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgc3JjOiAnaHR0cHM6Ly9jZG4udGFpbHdpbmRjc3MuY29tJyxcbiAgICAvLyAgIH0sXG4gICAgLy8gXSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gcHdhKCk6IFB3YU9wdGlvbnMge1xuICByZXR1cm4ge1xuICAgIGluY2x1ZGVNYW5pZmVzdEljb25zOiBmYWxzZSxcbiAgICBtYW5pZmVzdDoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdWYmVuIEFkbWluIGlzIGEgbW9kZXJuIGFkbWluIGRhc2hib2FyZCB0ZW1wbGF0ZSBiYXNlZCBvbiBWdWUgMy4gJyxcbiAgICAgIGljb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vdW5wa2cuY29tL0B2YmVuanMvc3RhdGljLXNvdXJjZUAwLjEuNy9zb3VyY2UvcHdhLWljb24tMTkyLnBuZycsXG4gICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vdW5wa2cuY29tL0B2YmVuanMvc3RhdGljLXNvdXJjZUAwLjEuNy9zb3VyY2UvcHdhLWljb24tNTEyLnBuZycsXG4gICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgaWQ6ICcvJyxcbiAgICAgIG5hbWU6ICdWYmVuIEFkbWluIERvYycsXG4gICAgICBzaG9ydF9uYW1lOiAndmJlbl9hZG1pbl9kb2MnLFxuICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIG91dERpcjogcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLnZpdGVwcmVzcy9kaXN0JyksXG4gICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgd29ya2JveDoge1xuICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2NzcyxqcyxodG1sLHN2ZyxwbmcsaWNvLHR4dCx3b2ZmMn0nXSxcbiAgICAgIG1heGltdW1GaWxlU2l6ZVRvQ2FjaGVJbkJ5dGVzOiA1ICogMTAyNCAqIDEwMjQsXG4gICAgfSxcbiAgfTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGludGVybmFsXFxcXHZpdGUtY29uZmlnXFxcXHNyY1xcXFxjb25maWdcXFxcYXBwbGljYXRpb24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL2NvbmZpZy9hcHBsaWNhdGlvbi50c1wiO2ltcG9ydCB0eXBlIHsgQ1NTT3B0aW9ucywgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuXG5pbXBvcnQgdHlwZSB7IERlZmluZUFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gJy4uL3R5cGluZyc7XG5cbmltcG9ydCBwYXRoLCB7IHJlbGF0aXZlIH0gZnJvbSAnbm9kZTpwYXRoJztcblxuaW1wb3J0IHsgZmluZE1vbm9yZXBvUm9vdCB9IGZyb20gJ0B2YmVuL25vZGUtdXRpbHMnO1xuXG5pbXBvcnQgeyBOb2RlUGFja2FnZUltcG9ydGVyIH0gZnJvbSAnc2Fzcyc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYsIG1lcmdlQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbmltcG9ydCB7IGRlZmF1bHRJbXBvcnRtYXBPcHRpb25zLCBnZXREZWZhdWx0UHdhT3B0aW9ucyB9IGZyb20gJy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgbG9hZEFwcGxpY2F0aW9uUGx1Z2lucyB9IGZyb20gJy4uL3BsdWdpbnMnO1xuaW1wb3J0IHsgbG9hZEFuZENvbnZlcnRFbnYgfSBmcm9tICcuLi91dGlscy9lbnYnO1xuaW1wb3J0IHsgZ2V0Q29tbW9uQ29uZmlnIH0gZnJvbSAnLi9jb21tb24nO1xuXG5mdW5jdGlvbiBkZWZpbmVBcHBsaWNhdGlvbkNvbmZpZyh1c2VyQ29uZmlnUHJvbWlzZT86IERlZmluZUFwcGxpY2F0aW9uT3B0aW9ucykge1xuICByZXR1cm4gZGVmaW5lQ29uZmlnKGFzeW5jIChjb25maWcpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgdXNlckNvbmZpZ1Byb21pc2U/Lihjb25maWcpO1xuICAgIGNvbnN0IHsgYXBwVGl0bGUsIGJhc2UsIHBvcnQsIC4uLmVudkNvbmZpZyB9ID0gYXdhaXQgbG9hZEFuZENvbnZlcnRFbnYoKTtcbiAgICBjb25zdCB7IGNvbW1hbmQsIG1vZGUgfSA9IGNvbmZpZztcbiAgICBjb25zdCB7IGFwcGxpY2F0aW9uID0ge30sIHZpdGUgPSB7fSB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKTtcbiAgICBjb25zdCBpc0J1aWxkID0gY29tbWFuZCA9PT0gJ2J1aWxkJztcbiAgICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHJvb3QpO1xuXG4gICAgY29uc3QgcGx1Z2lucyA9IGF3YWl0IGxvYWRBcHBsaWNhdGlvblBsdWdpbnMoe1xuICAgICAgYXJjaGl2ZXI6IHRydWUsXG4gICAgICBhcmNoaXZlclBsdWdpbk9wdGlvbnM6IHt9LFxuICAgICAgY29tcHJlc3M6IGZhbHNlLFxuICAgICAgY29tcHJlc3NUeXBlczogWydicm90bGknLCAnZ3ppcCddLFxuICAgICAgZGV2dG9vbHM6IHRydWUsXG4gICAgICBlbnYsXG4gICAgICBleHRyYUFwcENvbmZpZzogdHJ1ZSxcbiAgICAgIGh0bWw6IHRydWUsXG4gICAgICBpMThuOiB0cnVlLFxuICAgICAgaW1wb3J0bWFwT3B0aW9uczogZGVmYXVsdEltcG9ydG1hcE9wdGlvbnMsXG4gICAgICBpbmplY3RBcHBMb2FkaW5nOiB0cnVlLFxuICAgICAgaW5qZWN0TWV0YWRhdGE6IHRydWUsXG4gICAgICBpc0J1aWxkLFxuICAgICAgbGljZW5zZTogdHJ1ZSxcbiAgICAgIG1vZGUsXG4gICAgICBuaXRyb01vY2s6ICFpc0J1aWxkLFxuICAgICAgbml0cm9Nb2NrT3B0aW9uczoge30sXG4gICAgICBwcmludDogIWlzQnVpbGQsXG4gICAgICBwcmludEluZm9NYXA6IHtcbiAgICAgICAgJ1ZiZW4gQWRtaW4gRG9jcyc6ICdodHRwczovL2R1Y3JvbmcuY29tL3Z1ZS12YmVuLWFkbWluLWFudGQnLFxuICAgICAgfSxcbiAgICAgIHB3YTogdHJ1ZSxcbiAgICAgIHB3YU9wdGlvbnM6IGdldERlZmF1bHRQd2FPcHRpb25zKGFwcFRpdGxlKSxcbiAgICAgIHZ4ZVRhYmxlTGF6eUltcG9ydDogdHJ1ZSxcbiAgICAgIC4uLmVudkNvbmZpZyxcbiAgICAgIC4uLmFwcGxpY2F0aW9uLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBpbmplY3RHbG9iYWxTY3NzID0gdHJ1ZSB9ID0gYXBwbGljYXRpb247XG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbkNvbmZpZzogVXNlckNvbmZpZyA9IHtcbiAgICAgIGJhc2UsXG4gICAgICBidWlsZDoge1xuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nLFxuICAgICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdqcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnanNlL2luZGV4LVtuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRhcmdldDogJ2VzMjAxNScsXG4gICAgICB9LFxuICAgICAgY3NzOiBjcmVhdGVDc3NPcHRpb25zKGluamVjdEdsb2JhbFNjc3MpLFxuICAgICAgZXNidWlsZDoge1xuICAgICAgICBkcm9wOiBpc0J1aWxkXG4gICAgICAgICAgPyBbXG4gICAgICAgICAgICAgIC8vICdjb25zb2xlJyxcbiAgICAgICAgICAgICAgJ2RlYnVnZ2VyJyxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IFtdLFxuICAgICAgICBsZWdhbENvbW1lbnRzOiAnbm9uZScsXG4gICAgICB9LFxuICAgICAgcGx1Z2lucyxcbiAgICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiB0cnVlLFxuICAgICAgICBwb3J0LFxuICAgICAgICB3YXJtdXA6IHtcbiAgICAgICAgICAvLyBcdTk4ODRcdTcwRURcdTY1ODdcdTRFRjZcbiAgICAgICAgICBjbGllbnRGaWxlczogW1xuICAgICAgICAgICAgJy4vaW5kZXguaHRtbCcsXG4gICAgICAgICAgICAnLi9zcmMvYm9vdHN0cmFwLnRzJyxcbiAgICAgICAgICAgICcuL3NyYy97dmlld3MsbGF5b3V0cyxyb3V0ZXIsc3RvcmUsYXBpLGFkYXB0ZXJ9LyonLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBtZXJnZWRDb21tb25Db25maWcgPSBtZXJnZUNvbmZpZyhcbiAgICAgIGF3YWl0IGdldENvbW1vbkNvbmZpZygpLFxuICAgICAgYXBwbGljYXRpb25Db25maWcsXG4gICAgKTtcbiAgICByZXR1cm4gbWVyZ2VDb25maWcobWVyZ2VkQ29tbW9uQ29uZmlnLCB2aXRlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNzc09wdGlvbnMoaW5qZWN0R2xvYmFsU2NzcyA9IHRydWUpOiBDU1NPcHRpb25zIHtcbiAgY29uc3Qgcm9vdCA9IGZpbmRNb25vcmVwb1Jvb3QoKTtcbiAgcmV0dXJuIHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiBpbmplY3RHbG9iYWxTY3NzXG4gICAgICA/IHtcbiAgICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogKGNvbnRlbnQ6IHN0cmluZywgZmlsZXBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSByZWxhdGl2ZShyb290LCBmaWxlcGF0aCk7XG4gICAgICAgICAgICAgIC8vIGFwcHNcdTRFMEJcdTc2ODRcdTUzMDVcdTZDRThcdTUxNjVcdTUxNjhcdTVDNDBcdTY4MzdcdTVGMEZcbiAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKGBhcHBzJHtwYXRoLnNlcH1gKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgQHVzZSBcIkB2YmVuL3N0eWxlcy9nbG9iYWxcIiBhcyAqO1xcbiR7Y29udGVudH1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFwaTogJ21vZGVybicsXG4gICAgICAgICAgICBpbXBvcnRlcnM6IFtuZXcgTm9kZVBhY2thZ2VJbXBvcnRlcigpXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICA6IHt9LFxuICB9O1xufVxuXG5leHBvcnQgeyBkZWZpbmVBcHBsaWNhdGlvbkNvbmZpZyB9O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGludGVybmFsXFxcXHZpdGUtY29uZmlnXFxcXHNyY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxcb3B0aW9ucy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJHdvcmsvQWRtaW4tdnVlL3Z1ZS12YmVuLWFkbWluL3NwYS13ZWIvdnVlLXZiZW4tYWRtaW4tYW50ZC9pbnRlcm5hbC92aXRlLWNvbmZpZy9zcmMvb3B0aW9ucy50c1wiO2ltcG9ydCB0eXBlIHsgT3B0aW9ucyBhcyBQd2FQbHVnaW5PcHRpb25zIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcblxuaW1wb3J0IHR5cGUgeyBJbXBvcnRtYXBQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi90eXBpbmcnO1xuXG5jb25zdCBpc0RldmVsb3BtZW50ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG5cbmNvbnN0IGdldERlZmF1bHRQd2FPcHRpb25zID0gKG5hbWU6IHN0cmluZyk6IFBhcnRpYWw8UHdhUGx1Z2luT3B0aW9ucz4gPT4gKHtcbiAgbWFuaWZlc3Q6IHtcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdWYmVuIEFkbWluIGlzIGEgbW9kZXJuIGFkbWluIGRhc2hib2FyZCB0ZW1wbGF0ZSBiYXNlZCBvbiBWdWUgMy4gJyxcbiAgICBpY29uczogW1xuICAgICAge1xuICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICBzcmM6ICdodHRwczovL3VucGtnLmNvbS9AdmJlbmpzL3N0YXRpYy1zb3VyY2VAMC4xLjcvc291cmNlL3B3YS1pY29uLTE5Mi5wbmcnLFxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgIHNyYzogJ2h0dHBzOi8vdW5wa2cuY29tL0B2YmVuanMvc3RhdGljLXNvdXJjZUAwLjEuNy9zb3VyY2UvcHdhLWljb24tNTEyLnBuZycsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIG5hbWU6IGAke25hbWV9JHtpc0RldmVsb3BtZW50ID8gJyBkZXYnIDogJyd9YCxcbiAgICBzaG9ydF9uYW1lOiBgJHtuYW1lfSR7aXNEZXZlbG9wbWVudCA/ICcgZGV2JyA6ICcnfWAsXG4gIH0sXG59KTtcblxuLyoqXG4gKiBpbXBvcnRtYXAgQ0ROIFx1NjY4Mlx1NjVGNlx1NEUwRFx1NUYwMFx1NTQyRlx1RkYwQ1x1NTZFMFx1NEUzQVx1NjcwOVx1NEU5Qlx1NTMwNVx1NEUwRFx1NjUyRlx1NjMwMVx1RkYwQ1x1NEUxNFx1N0Y1MVx1N0VEQ1x1NEUwRFx1N0EzM1x1NUI5QVxuICovXG5jb25zdCBkZWZhdWx0SW1wb3J0bWFwT3B0aW9uczogSW1wb3J0bWFwUGx1Z2luT3B0aW9ucyA9IHtcbiAgLy8gXHU5MDFBXHU4RkM3IEltcG9ydG1hcCBDRE4gXHU2NUI5XHU1RjBGXHU1RjE1XHU1MTY1LFxuICAvLyBcdTc2RUVcdTUyNERcdTUzRUFcdTY3MDllc20uc2hcdTZFOTBcdTUxN0NcdTVCQjlcdTYwMjdcdTU5N0RcdTRFMDBcdTcwQjlcdUZGMENqc3BtLmlvXHU1QkY5XHU0RThFIGVzbSBcdTUxNjVcdTUzRTNcdTg5ODFcdTZDNDJcdTlBRDhcbiAgZGVmYXVsdFByb3ZpZGVyOiAnZXNtLnNoJyxcbiAgaW1wb3J0bWFwOiBbXG4gICAgeyBuYW1lOiAndnVlJyB9LFxuICAgIHsgbmFtZTogJ3BpbmlhJyB9LFxuICAgIHsgbmFtZTogJ3Z1ZS1yb3V0ZXInIH0sXG4gICAgLy8geyBuYW1lOiAndnVlLWkxOG4nIH0sXG4gICAgeyBuYW1lOiAnZGF5anMnIH0sXG4gICAgeyBuYW1lOiAndnVlLWRlbWknIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0SW1wb3J0bWFwT3B0aW9ucywgZ2V0RGVmYXVsdFB3YU9wdGlvbnMgfTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1xcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJHdvcmsvQWRtaW4tdnVlL3Z1ZS12YmVuLWFkbWluL3NwYS13ZWIvdnVlLXZiZW4tYWRtaW4tYW50ZC9pbnRlcm5hbC92aXRlLWNvbmZpZy9zcmMvcGx1Z2lucy9pbmRleC50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSc7XG5cbmltcG9ydCB0eXBlIHtcbiAgQXBwbGljYXRpb25QbHVnaW5PcHRpb25zLFxuICBDb21tb25QbHVnaW5PcHRpb25zLFxuICBDb25kaXRpb25QbHVnaW4sXG4gIExpYnJhcnlQbHVnaW5PcHRpb25zLFxufSBmcm9tICcuLi90eXBpbmcnO1xuXG5pbXBvcnQgdml0ZVZ1ZUkxOG5QbHVnaW4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSc7XG5pbXBvcnQgdml0ZVZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHZpdGVWdWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XG5pbXBvcnQgeyB2aXN1YWxpemVyIGFzIHZpdGVWaXN1YWxpemVyUGx1Z2luIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcbmltcG9ydCB2aXRlQ29tcHJlc3NQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xuaW1wb3J0IHZpdGVEdHNQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gYXMgdml0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJztcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xuaW1wb3J0IHZpdGVWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnO1xuXG5pbXBvcnQgeyB2aXRlQXJjaGl2ZXJQbHVnaW4gfSBmcm9tICcuL2FyY2hpdmVyJztcbmltcG9ydCB7IHZpdGVFeHRyYUFwcENvbmZpZ1BsdWdpbiB9IGZyb20gJy4vZXh0cmEtYXBwLWNvbmZpZyc7XG5pbXBvcnQgeyB2aXRlSW1wb3J0TWFwUGx1Z2luIH0gZnJvbSAnLi9pbXBvcnRtYXAnO1xuaW1wb3J0IHsgdml0ZUluamVjdEFwcExvYWRpbmdQbHVnaW4gfSBmcm9tICcuL2luamVjdC1hcHAtbG9hZGluZyc7XG5pbXBvcnQgeyB2aXRlTWV0YWRhdGFQbHVnaW4gfSBmcm9tICcuL2luamVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgeyB2aXRlTGljZW5zZVBsdWdpbiB9IGZyb20gJy4vbGljZW5zZSc7XG5pbXBvcnQgeyB2aXRlTml0cm9Nb2NrUGx1Z2luIH0gZnJvbSAnLi9uaXRyby1tb2NrJztcbmltcG9ydCB7IHZpdGVQcmludFBsdWdpbiB9IGZyb20gJy4vcHJpbnQnO1xuaW1wb3J0IHsgdml0ZVZ4ZVRhYmxlSW1wb3J0c1BsdWdpbiB9IGZyb20gJy4vdnhlLXRhYmxlJztcblxuLyoqXG4gKiBcdTgzQjdcdTUzRDZcdTY3NjFcdTRFRjZcdTYyMTBcdTdBQ0JcdTc2ODQgdml0ZSBcdTYzRDJcdTRFRjZcbiAqIEBwYXJhbSBjb25kaXRpb25QbHVnaW5zXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDb25kaXRpb25QbHVnaW5zKGNvbmRpdGlvblBsdWdpbnM6IENvbmRpdGlvblBsdWdpbltdKSB7XG4gIGNvbnN0IHBsdWdpbnM6IFBsdWdpbk9wdGlvbltdID0gW107XG4gIGZvciAoY29uc3QgY29uZGl0aW9uUGx1Z2luIG9mIGNvbmRpdGlvblBsdWdpbnMpIHtcbiAgICBpZiAoY29uZGl0aW9uUGx1Z2luLmNvbmRpdGlvbikge1xuICAgICAgY29uc3QgcmVhbFBsdWdpbnMgPSBhd2FpdCBjb25kaXRpb25QbHVnaW4ucGx1Z2lucygpO1xuICAgICAgcGx1Z2lucy5wdXNoKC4uLnJlYWxQbHVnaW5zKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBsdWdpbnMuZmxhdCgpO1xufVxuXG4vKipcbiAqIFx1NjgzOVx1NjM2RVx1Njc2MVx1NEVGNlx1ODNCN1x1NTNENlx1OTAxQVx1NzUyOFx1NzY4NHZpdGVcdTYzRDJcdTRFRjZcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZENvbW1vblBsdWdpbnMoXG4gIG9wdGlvbnM6IENvbW1vblBsdWdpbk9wdGlvbnMsXG4pOiBQcm9taXNlPENvbmRpdGlvblBsdWdpbltdPiB7XG4gIGNvbnN0IHsgZGV2dG9vbHMsIGluamVjdE1ldGFkYXRhLCBpc0J1aWxkLCB2aXN1YWxpemVyIH0gPSBvcHRpb25zO1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGNvbmRpdGlvbjogdHJ1ZSxcbiAgICAgIHBsdWdpbnM6ICgpID0+IFtcbiAgICAgICAgdml0ZVZ1ZSh7XG4gICAgICAgICAgc2NyaXB0OiB7XG4gICAgICAgICAgICBkZWZpbmVNb2RlbDogdHJ1ZSxcbiAgICAgICAgICAgIC8vIHByb3BzRGVzdHJ1Y3R1cmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHZpdGVWdWVKc3goKSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGNvbmRpdGlvbjogIWlzQnVpbGQgJiYgZGV2dG9vbHMsXG4gICAgICBwbHVnaW5zOiAoKSA9PiBbdml0ZVZ1ZURldlRvb2xzKCldLFxuICAgIH0sXG4gICAge1xuICAgICAgY29uZGl0aW9uOiBpbmplY3RNZXRhZGF0YSxcbiAgICAgIHBsdWdpbnM6IGFzeW5jICgpID0+IFthd2FpdCB2aXRlTWV0YWRhdGFQbHVnaW4oKV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb25kaXRpb246IGlzQnVpbGQgJiYgISF2aXN1YWxpemVyLFxuICAgICAgcGx1Z2luczogKCkgPT4gWzxQbHVnaW5PcHRpb24+dml0ZVZpc3VhbGl6ZXJQbHVnaW4oe1xuICAgICAgICAgIGZpbGVuYW1lOiAnLi9ub2RlX21vZHVsZXMvLmNhY2hlL3Zpc3VhbGl6ZXIvc3RhdHMuaHRtbCcsXG4gICAgICAgICAgZ3ppcFNpemU6IHRydWUsXG4gICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgfSldLFxuICAgIH0sXG4gIF07XG59XG5cbi8qKlxuICogXHU2ODM5XHU2MzZFXHU2NzYxXHU0RUY2XHU4M0I3XHU1M0Q2XHU1RTk0XHU3NTI4XHU3QzdCXHU1NzhCXHU3Njg0dml0ZVx1NjNEMlx1NEVGNlxuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkQXBwbGljYXRpb25QbHVnaW5zKFxuICBvcHRpb25zOiBBcHBsaWNhdGlvblBsdWdpbk9wdGlvbnMsXG4pOiBQcm9taXNlPFBsdWdpbk9wdGlvbltdPiB7XG4gIC8vIFx1NTM1NVx1NzJFQ1x1NTNENlx1RkYwQ1x1NTQyNlx1NTIxOWNvbW1vbk9wdGlvbnNcdTYyRkZcdTRFMERcdTUyMzBcbiAgY29uc3QgaXNCdWlsZCA9IG9wdGlvbnMuaXNCdWlsZDtcbiAgY29uc3QgZW52ID0gb3B0aW9ucy5lbnY7XG5cbiAgY29uc3Qge1xuICAgIGFyY2hpdmVyLFxuICAgIGFyY2hpdmVyUGx1Z2luT3B0aW9ucyxcbiAgICBjb21wcmVzcyxcbiAgICBjb21wcmVzc1R5cGVzLFxuICAgIGV4dHJhQXBwQ29uZmlnLFxuICAgIGh0bWwsXG4gICAgaTE4bixcbiAgICBpbXBvcnRtYXAsXG4gICAgaW1wb3J0bWFwT3B0aW9ucyxcbiAgICBpbmplY3RBcHBMb2FkaW5nLFxuICAgIGxpY2Vuc2UsXG4gICAgbml0cm9Nb2NrLFxuICAgIG5pdHJvTW9ja09wdGlvbnMsXG4gICAgcHJpbnQsXG4gICAgcHJpbnRJbmZvTWFwLFxuICAgIHB3YSxcbiAgICBwd2FPcHRpb25zLFxuICAgIHZ4ZVRhYmxlTGF6eUltcG9ydCxcbiAgICAuLi5jb21tb25PcHRpb25zXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IGNvbW1vblBsdWdpbnMgPSBhd2FpdCBsb2FkQ29tbW9uUGx1Z2lucyhjb21tb25PcHRpb25zKTtcblxuICByZXR1cm4gYXdhaXQgbG9hZENvbmRpdGlvblBsdWdpbnMoW1xuICAgIC4uLmNvbW1vblBsdWdpbnMsXG4gICAge1xuICAgICAgY29uZGl0aW9uOiBpMThuLFxuICAgICAgcGx1Z2luczogYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHZpdGVWdWVJMThuUGx1Z2luKHtcbiAgICAgICAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGZ1bGxJbnN0YWxsOiB0cnVlLFxuICAgICAgICAgICAgcnVudGltZU9ubHk6IHRydWUsXG4gICAgICAgICAgfSksXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgY29uZGl0aW9uOiBwcmludCxcbiAgICAgIHBsdWdpbnM6IGFzeW5jICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFthd2FpdCB2aXRlUHJpbnRQbHVnaW4oeyBpbmZvTWFwOiBwcmludEluZm9NYXAgfSldO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbmRpdGlvbjogdnhlVGFibGVMYXp5SW1wb3J0LFxuICAgICAgcGx1Z2luczogYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gW2F3YWl0IHZpdGVWeGVUYWJsZUltcG9ydHNQbHVnaW4oKV07XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgY29uZGl0aW9uOiBuaXRyb01vY2ssXG4gICAgICBwbHVnaW5zOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbYXdhaXQgdml0ZU5pdHJvTW9ja1BsdWdpbihuaXRyb01vY2tPcHRpb25zKV07XG4gICAgICB9LFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBjb25kaXRpb246IGluamVjdEFwcExvYWRpbmcsXG4gICAgICBwbHVnaW5zOiBhc3luYyAoKSA9PiBbYXdhaXQgdml0ZUluamVjdEFwcExvYWRpbmdQbHVnaW4oISFpc0J1aWxkLCBlbnYpXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbmRpdGlvbjogbGljZW5zZSxcbiAgICAgIHBsdWdpbnM6IGFzeW5jICgpID0+IFthd2FpdCB2aXRlTGljZW5zZVBsdWdpbigpXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbmRpdGlvbjogcHdhLFxuICAgICAgcGx1Z2luczogKCkgPT5cbiAgICAgICAgVml0ZVBXQSh7XG4gICAgICAgICAgaW5qZWN0UmVnaXN0ZXI6IGZhbHNlLFxuICAgICAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgICAgIGdsb2JQYXR0ZXJuczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi5wd2FPcHRpb25zLFxuICAgICAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgICAgICAgICBzdGFydF91cmw6ICcvJyxcbiAgICAgICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAuLi5wd2FPcHRpb25zPy5tYW5pZmVzdCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbmRpdGlvbjogaXNCdWlsZCAmJiAhIWNvbXByZXNzLFxuICAgICAgcGx1Z2luczogKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wcmVzc1BsdWdpbnM6IFBsdWdpbk9wdGlvbltdID0gW107XG4gICAgICAgIGlmIChjb21wcmVzc1R5cGVzPy5pbmNsdWRlcygnYnJvdGxpJykpIHtcbiAgICAgICAgICBjb21wcmVzc1BsdWdpbnMucHVzaChcbiAgICAgICAgICAgIHZpdGVDb21wcmVzc1BsdWdpbih7IGRlbGV0ZU9yaWdpbkZpbGU6IGZhbHNlLCBleHQ6ICcuYnInIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXByZXNzVHlwZXM/LmluY2x1ZGVzKCdnemlwJykpIHtcbiAgICAgICAgICBjb21wcmVzc1BsdWdpbnMucHVzaChcbiAgICAgICAgICAgIHZpdGVDb21wcmVzc1BsdWdpbih7IGRlbGV0ZU9yaWdpbkZpbGU6IGZhbHNlLCBleHQ6ICcuZ3onIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXByZXNzUGx1Z2lucztcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb25kaXRpb246ICEhaHRtbCxcbiAgICAgIHBsdWdpbnM6ICgpID0+IFt2aXRlSHRtbFBsdWdpbih7IG1pbmlmeTogdHJ1ZSB9KV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb25kaXRpb246IGlzQnVpbGQgJiYgaW1wb3J0bWFwLFxuICAgICAgcGx1Z2luczogKCkgPT4ge1xuICAgICAgICByZXR1cm4gW3ZpdGVJbXBvcnRNYXBQbHVnaW4oaW1wb3J0bWFwT3B0aW9ucyldO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbmRpdGlvbjogaXNCdWlsZCAmJiBleHRyYUFwcENvbmZpZyxcbiAgICAgIHBsdWdpbnM6IGFzeW5jICgpID0+IFtcbiAgICAgICAgYXdhaXQgdml0ZUV4dHJhQXBwQ29uZmlnUGx1Z2luKHsgaXNCdWlsZDogdHJ1ZSwgcm9vdDogcHJvY2Vzcy5jd2QoKSB9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb25kaXRpb246IGFyY2hpdmVyLFxuICAgICAgcGx1Z2luczogYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gW2F3YWl0IHZpdGVBcmNoaXZlclBsdWdpbihhcmNoaXZlclBsdWdpbk9wdGlvbnMpXTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXSk7XG59XG5cbi8qKlxuICogXHU2ODM5XHU2MzZFXHU2NzYxXHU0RUY2XHU4M0I3XHU1M0Q2XHU1RTkzXHU3QzdCXHU1NzhCXHU3Njg0dml0ZVx1NjNEMlx1NEVGNlxuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkTGlicmFyeVBsdWdpbnMoXG4gIG9wdGlvbnM6IExpYnJhcnlQbHVnaW5PcHRpb25zLFxuKTogUHJvbWlzZTxQbHVnaW5PcHRpb25bXT4ge1xuICAvLyBcdTUzNTVcdTcyRUNcdTUzRDZcdUZGMENcdTU0MjZcdTUyMTljb21tb25PcHRpb25zXHU2MkZGXHU0RTBEXHU1MjMwXG4gIGNvbnN0IGlzQnVpbGQgPSBvcHRpb25zLmlzQnVpbGQ7XG4gIGNvbnN0IHsgZHRzLCAuLi5jb21tb25PcHRpb25zIH0gPSBvcHRpb25zO1xuICBjb25zdCBjb21tb25QbHVnaW5zID0gYXdhaXQgbG9hZENvbW1vblBsdWdpbnMoY29tbW9uT3B0aW9ucyk7XG4gIHJldHVybiBhd2FpdCBsb2FkQ29uZGl0aW9uUGx1Z2lucyhbXG4gICAgLi4uY29tbW9uUGx1Z2lucyxcbiAgICB7XG4gICAgICBjb25kaXRpb246IGlzQnVpbGQgJiYgISFkdHMsXG4gICAgICBwbHVnaW5zOiAoKSA9PiBbdml0ZUR0c1BsdWdpbih7IGxvZ0xldmVsOiAnZXJyb3InIH0pXSxcbiAgICB9LFxuICBdKTtcbn1cblxuZXhwb3J0IHtcbiAgbG9hZEFwcGxpY2F0aW9uUGx1Z2lucyxcbiAgbG9hZExpYnJhcnlQbHVnaW5zLFxuICB2aXRlQXJjaGl2ZXJQbHVnaW4sXG4gIHZpdGVDb21wcmVzc1BsdWdpbixcbiAgdml0ZUR0c1BsdWdpbixcbiAgdml0ZUh0bWxQbHVnaW4sXG4gIHZpdGVWaXN1YWxpemVyUGx1Z2luLFxuICB2aXRlVnhlVGFibGVJbXBvcnRzUGx1Z2luLFxufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1xcXFxhcmNoaXZlci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJHdvcmsvQWRtaW4tdnVlL3Z1ZS12YmVuLWFkbWluL3NwYS13ZWIvdnVlLXZiZW4tYWRtaW4tYW50ZC9pbnRlcm5hbC92aXRlLWNvbmZpZy9zcmMvcGx1Z2lucy9hcmNoaXZlci50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSc7XG5cbmltcG9ydCB0eXBlIHsgQXJjaGl2ZXJQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi4vdHlwaW5nJztcblxuaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IGZzcCBmcm9tICdub2RlOmZzL3Byb21pc2VzJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdub2RlOnBhdGgnO1xuXG5pbXBvcnQgYXJjaGl2ZXIgZnJvbSAnYXJjaGl2ZXInO1xuXG5leHBvcnQgY29uc3Qgdml0ZUFyY2hpdmVyUGx1Z2luID0gKFxuICBvcHRpb25zOiBBcmNoaXZlclBsdWdpbk9wdGlvbnMgPSB7fSxcbik6IFBsdWdpbk9wdGlvbiA9PiB7XG4gIHJldHVybiB7XG4gICAgYXBwbHk6ICdidWlsZCcsXG4gICAgY2xvc2VCdW5kbGU6IHtcbiAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSA9ICdkaXN0Jywgb3V0cHV0RGlyID0gJy4nIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvbGRlclRvWmlwID0gJ2Rpc3QnO1xuXG4gICAgICAgICAgY29uc3QgemlwT3V0cHV0RGlyID0gam9pbihwcm9jZXNzLmN3ZCgpLCBvdXRwdXREaXIpO1xuICAgICAgICAgIGNvbnN0IHppcE91dHB1dFBhdGggPSBqb2luKHppcE91dHB1dERpciwgYCR7bmFtZX0uemlwYCk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGZzcC5ta2Rpcih6aXBPdXRwdXREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHppcEZvbGRlcihmb2xkZXJUb1ppcCwgemlwT3V0cHV0UGF0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRm9sZGVyIGhhcyBiZWVuIHppcHBlZCB0bzogJHt6aXBPdXRwdXRQYXRofWApO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB6aXBwaW5nIGZvbGRlcjonLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH0sXG4gICAgICBvcmRlcjogJ3Bvc3QnLFxuICAgIH0sXG4gICAgZW5mb3JjZTogJ3Bvc3QnLFxuICAgIG5hbWU6ICd2aXRlOmFyY2hpdmVyJyxcbiAgfTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIHppcEZvbGRlcihcbiAgZm9sZGVyUGF0aDogc3RyaW5nLFxuICBvdXRwdXRQYXRoOiBzdHJpbmcsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBvdXRwdXQgPSBmcy5jcmVhdGVXcml0ZVN0cmVhbShvdXRwdXRQYXRoKTtcbiAgICBjb25zdCBhcmNoaXZlID0gYXJjaGl2ZXIoJ3ppcCcsIHtcbiAgICAgIHpsaWI6IHsgbGV2ZWw6IDkgfSwgLy8gXHU4QkJFXHU3RjZFXHU1MzhCXHU3RjI5XHU3RUE3XHU1MjJCXHU0RTNBIDkgXHU0RUU1XHU1QjlFXHU3M0IwXHU2NzAwXHU5QUQ4XHU1MzhCXHU3RjI5XHU3Mzg3XG4gICAgfSk7XG5cbiAgICBvdXRwdXQub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBaSVAgZmlsZSBjcmVhdGVkOiAke291dHB1dFBhdGh9ICgke2FyY2hpdmUucG9pbnRlcigpfSB0b3RhbCBieXRlcylgLFxuICAgICAgKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcblxuICAgIGFyY2hpdmUub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfSk7XG5cbiAgICBhcmNoaXZlLnBpcGUob3V0cHV0KTtcblxuICAgIC8vIFx1NEY3Rlx1NzUyOCBkaXJlY3RvcnkgXHU2NUI5XHU2Q0Q1XHU0RUU1XHU2RDQxXHU3Njg0XHU2NUI5XHU1RjBGXHU1MzhCXHU3RjI5XHU2NTg3XHU0RUY2XHU1OTM5XHVGRjBDXHU1MUNGXHU1QzExXHU1MTg1XHU1QjU4XHU2RDg4XHU4MDE3XG4gICAgYXJjaGl2ZS5kaXJlY3RvcnkoZm9sZGVyUGF0aCwgZmFsc2UpO1xuXG4gICAgLy8gXHU2RDQxXHU1RjBGXHU1OTA0XHU3NDA2XHU1QjhDXHU2MjEwXG4gICAgYXJjaGl2ZS5maW5hbGl6ZSgpO1xuICB9KTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1xcXFxleHRyYS1hcHAtY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8kd29yay9BZG1pbi12dWUvdnVlLXZiZW4tYWRtaW4vc3BhLXdlYi92dWUtdmJlbi1hZG1pbi1hbnRkL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9wbHVnaW5zL2V4dHJhLWFwcC1jb25maWcudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xuXG5pbXBvcnQge1xuICBjb2xvcnMsXG4gIGdlbmVyYXRvckNvbnRlbnRIYXNoLFxuICByZWFkUGFja2FnZUpTT04sXG59IGZyb20gJ0B2YmVuL25vZGUtdXRpbHMnO1xuXG5pbXBvcnQgeyBsb2FkRW52IH0gZnJvbSAnLi4vdXRpbHMvZW52JztcblxuaW50ZXJmYWNlIFBsdWdpbk9wdGlvbnMge1xuICBpc0J1aWxkOiBib29sZWFuO1xuICByb290OiBzdHJpbmc7XG59XG5cbmNvbnN0IEdMT0JBTF9DT05GSUdfRklMRV9OQU1FID0gJ19hcHAuY29uZmlnLmpzJztcbmNvbnN0IFZCRU5fQURNSU5fUFJPX0FQUF9DT05GID0gJ19WQkVOX0FETUlOX1BST19BUFBfQ09ORl8nO1xuXG4vKipcbiAqIFx1NzUyOFx1NEU4RVx1NUMwNlx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNlx1NjJCRFx1NzlCQlx1NTFGQVx1Njc2NVx1NUU3Nlx1NkNFOFx1NTE2NVx1NTIzMFx1OTg3OVx1NzZFRVx1NEUyRFxuICogQHJldHVybnNcbiAqL1xuXG5hc3luYyBmdW5jdGlvbiB2aXRlRXh0cmFBcHBDb25maWdQbHVnaW4oe1xuICBpc0J1aWxkLFxuICByb290LFxufTogUGx1Z2luT3B0aW9ucyk6IFByb21pc2U8UGx1Z2luT3B0aW9uIHwgdW5kZWZpbmVkPiB7XG4gIGxldCBwdWJsaWNQYXRoOiBzdHJpbmc7XG4gIGxldCBzb3VyY2U6IHN0cmluZztcblxuICBpZiAoIWlzQnVpbGQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHZlcnNpb24gPSAnJyB9ID0gYXdhaXQgcmVhZFBhY2thZ2VKU09OKHJvb3QpO1xuXG4gIHJldHVybiB7XG4gICAgYXN5bmMgY29uZmlnUmVzb2x2ZWQoY29uZmlnKSB7XG4gICAgICBwdWJsaWNQYXRoID0gZW5zdXJlVHJhaWxpbmdTbGFzaChjb25maWcuYmFzZSk7XG4gICAgICBzb3VyY2UgPSBhd2FpdCBnZXRDb25maWdTb3VyY2UoKTtcbiAgICB9LFxuICAgIGFzeW5jIGdlbmVyYXRlQnVuZGxlKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5lbWl0RmlsZSh7XG4gICAgICAgICAgZmlsZU5hbWU6IEdMT0JBTF9DT05GSUdfRklMRV9OQU1FLFxuICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICB0eXBlOiAnYXNzZXQnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjb2xvcnMuY3lhbihgXHUyNzI4Y29uZmlndXJhdGlvbiBmaWxlIGlzIGJ1aWxkIHN1Y2Nlc3NmdWxseSFgKSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBjb2xvcnMucmVkKFxuICAgICAgICAgICAgYGNvbmZpZ3VyYXRpb24gZmlsZSBjb25maWd1cmF0aW9uIGZpbGUgZmFpbGVkIHRvIHBhY2thZ2U6XFxuJHtlcnJvcn1gLFxuICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICBuYW1lOiAndml0ZTpleHRyYS1hcHAtY29uZmlnJyxcbiAgICBhc3luYyB0cmFuc2Zvcm1JbmRleEh0bWwoaHRtbCkge1xuICAgICAgY29uc3QgaGFzaCA9IGB2PSR7dmVyc2lvbn0tJHtnZW5lcmF0b3JDb250ZW50SGFzaChzb3VyY2UsIDgpfWA7XG5cbiAgICAgIGNvbnN0IGFwcENvbmZpZ1NyYyA9IGAke3B1YmxpY1BhdGh9JHtHTE9CQUxfQ09ORklHX0ZJTEVfTkFNRX0/JHtoYXNofWA7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGh0bWwsXG4gICAgICAgIHRhZ3M6IFt7IGF0dHJzOiB7IHNyYzogYXBwQ29uZmlnU3JjIH0sIHRhZzogJ3NjcmlwdCcgfV0sXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvbmZpZ1NvdXJjZSgpIHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZEVudigpO1xuICBjb25zdCB3aW5kb3dWYXJpYWJsZSA9IGB3aW5kb3cuJHtWQkVOX0FETUlOX1BST19BUFBfQ09ORn1gO1xuICAvLyBcdTc4NkVcdTRGRERcdTUzRDhcdTkxQ0ZcdTRFMERcdTRGMUFcdTg4QUJcdTRGRUVcdTY1MzlcbiAgbGV0IHNvdXJjZSA9IGAke3dpbmRvd1ZhcmlhYmxlfT0ke0pTT04uc3RyaW5naWZ5KGNvbmZpZyl9O2A7XG4gIHNvdXJjZSArPSBgXG4gICAgT2JqZWN0LmZyZWV6ZSgke3dpbmRvd1ZhcmlhYmxlfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgXCIke1ZCRU5fQURNSU5fUFJPX0FQUF9DT05GfVwiLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIH0pO1xuICBgLnJlcGxhY2VBbGwoL1xccy9nLCAnJyk7XG4gIHJldHVybiBzb3VyY2U7XG59XG5cbmZ1bmN0aW9uIGVuc3VyZVRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKSB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgPyBwYXRoIDogYCR7cGF0aH0vYDtcbn1cblxuZXhwb3J0IHsgdml0ZUV4dHJhQXBwQ29uZmlnUGx1Z2luIH07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLWFudGRcXFxcaW50ZXJuYWxcXFxcdml0ZS1jb25maWdcXFxcc3JjXFxcXHV0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGludGVybmFsXFxcXHZpdGUtY29uZmlnXFxcXHNyY1xcXFx1dGlsc1xcXFxlbnYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL3V0aWxzL2Vudi50c1wiO2ltcG9ydCB0eXBlIHsgQXBwbGljYXRpb25QbHVnaW5PcHRpb25zIH0gZnJvbSAnLi4vdHlwaW5nJztcblxuaW1wb3J0IHsgZXhpc3RzU3luYyB9IGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ25vZGU6cGF0aCc7XG5cbmltcG9ydCB7IGZzIH0gZnJvbSAnQHZiZW4vbm9kZS11dGlscyc7XG5cbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcblxuY29uc3QgZ2V0Qm9vbGVhbiA9ICh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB2YWx1ZSA9PT0gJ3RydWUnO1xuXG5jb25zdCBnZXRTdHJpbmcgPSAodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCwgZmFsbGJhY2s6IHN0cmluZykgPT5cbiAgdmFsdWUgPz8gZmFsbGJhY2s7XG5cbmNvbnN0IGdldE51bWJlciA9ICh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmYWxsYmFjazogbnVtYmVyKSA9PlxuICBOdW1iZXIodmFsdWUpIHx8IGZhbGxiYWNrO1xuXG4vKipcbiAqIFx1ODNCN1x1NTNENlx1NUY1M1x1NTI0RFx1NzNBRlx1NTg4M1x1NEUwQlx1NzUxRlx1NjU0OFx1NzY4NFx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNlx1NTQwRFxuICovXG5mdW5jdGlvbiBnZXRDb25mRmlsZXMoKSB7XG4gIGNvbnN0IHNjcmlwdCA9IHByb2Nlc3MuZW52Lm5wbV9saWZlY3ljbGVfc2NyaXB0IGFzIHN0cmluZztcbiAgY29uc3QgcmVnID0gLy0tbW9kZSAoW1xcZF9hLXpdKykvO1xuICBjb25zdCByZXN1bHQgPSByZWcuZXhlYyhzY3JpcHQpO1xuICBsZXQgbW9kZSA9ICdwcm9kdWN0aW9uJztcbiAgaWYgKHJlc3VsdCkge1xuICAgIG1vZGUgPSByZXN1bHRbMV0gYXMgc3RyaW5nO1xuICB9XG4gIHJldHVybiBbJy5lbnYnLCAnLmVudi5sb2NhbCcsIGAuZW52LiR7bW9kZX1gLCBgLmVudi4ke21vZGV9LmxvY2FsYF07XG59XG5cbi8qKlxuICogR2V0IHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc3RhcnRpbmcgd2l0aCB0aGUgc3BlY2lmaWVkIHByZWZpeFxuICogQHBhcmFtIG1hdGNoIHByZWZpeFxuICogQHBhcmFtIGNvbmZGaWxlcyBleHRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZEVudjxUID0gUmVjb3JkPHN0cmluZywgc3RyaW5nPj4oXG4gIG1hdGNoID0gJ1ZJVEVfR0xPQl8nLFxuICBjb25mRmlsZXMgPSBnZXRDb25mRmlsZXMoKSxcbikge1xuICBsZXQgZW52Q29uZmlnID0ge307XG5cbiAgZm9yIChjb25zdCBjb25mRmlsZSBvZiBjb25mRmlsZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29uZkZpbGVQYXRoID0gam9pbihwcm9jZXNzLmN3ZCgpLCBjb25mRmlsZSk7XG4gICAgICBpZiAoZXhpc3RzU3luYyhjb25mRmlsZVBhdGgpKSB7XG4gICAgICAgIGNvbnN0IGVudlBhdGggPSBhd2FpdCBmcy5yZWFkRmlsZShjb25mRmlsZVBhdGgsIHtcbiAgICAgICAgICBlbmNvZGluZzogJ3V0ZjgnLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZW52ID0gZG90ZW52LnBhcnNlKGVudlBhdGgpO1xuICAgICAgICBlbnZDb25maWcgPSB7IC4uLmVudkNvbmZpZywgLi4uZW52IH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoaWxlIHBhcnNpbmcgJHtjb25mRmlsZX1gLCBlcnJvcik7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYF4oJHttYXRjaH0pYCk7XG4gIE9iamVjdC5rZXlzKGVudkNvbmZpZykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFyZWcudGVzdChrZXkpKSB7XG4gICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGVudkNvbmZpZywga2V5KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZW52Q29uZmlnIGFzIFQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRBbmRDb252ZXJ0RW52KFxuICBtYXRjaCA9ICdWSVRFXycsXG4gIGNvbmZGaWxlcyA9IGdldENvbmZGaWxlcygpLFxuKTogUHJvbWlzZTxcbiAgUGFydGlhbDxBcHBsaWNhdGlvblBsdWdpbk9wdGlvbnM+ICYge1xuICAgIGFwcFRpdGxlOiBzdHJpbmc7XG4gICAgYmFzZTogc3RyaW5nO1xuICAgIHBvcnQ6IG51bWJlcjtcbiAgfVxuPiB7XG4gIGNvbnN0IGVudkNvbmZpZyA9IGF3YWl0IGxvYWRFbnYobWF0Y2gsIGNvbmZGaWxlcyk7XG5cbiAgY29uc3Qge1xuICAgIFZJVEVfQVBQX1RJVExFLFxuICAgIFZJVEVfQVJDSElWRVIsXG4gICAgVklURV9CQVNFLFxuICAgIFZJVEVfQ09NUFJFU1MsXG4gICAgVklURV9ERVZUT09MUyxcbiAgICBWSVRFX0lOSkVDVF9BUFBfTE9BRElORyxcbiAgICBWSVRFX05JVFJPX01PQ0ssXG4gICAgVklURV9QT1JULFxuICAgIFZJVEVfUFdBLFxuICAgIFZJVEVfVklTVUFMSVpFUixcbiAgfSA9IGVudkNvbmZpZztcblxuICBjb25zdCBjb21wcmVzc1R5cGVzID0gKFZJVEVfQ09NUFJFU1MgPz8gJycpXG4gICAgLnNwbGl0KCcsJylcbiAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtID09PSAnYnJvdGxpJyB8fCBpdGVtID09PSAnZ3ppcCcpO1xuXG4gIHJldHVybiB7XG4gICAgYXBwVGl0bGU6IGdldFN0cmluZyhWSVRFX0FQUF9USVRMRSwgJ1ZiZW4gQWRtaW4nKSxcbiAgICBhcmNoaXZlcjogZ2V0Qm9vbGVhbihWSVRFX0FSQ0hJVkVSKSxcbiAgICBiYXNlOiBnZXRTdHJpbmcoVklURV9CQVNFLCAnLycpLFxuICAgIGNvbXByZXNzOiBjb21wcmVzc1R5cGVzLmxlbmd0aCA+IDAsXG4gICAgY29tcHJlc3NUeXBlcyxcbiAgICBkZXZ0b29sczogZ2V0Qm9vbGVhbihWSVRFX0RFVlRPT0xTKSxcbiAgICBpbmplY3RBcHBMb2FkaW5nOiBnZXRCb29sZWFuKFZJVEVfSU5KRUNUX0FQUF9MT0FESU5HKSxcbiAgICBuaXRyb01vY2s6IGdldEJvb2xlYW4oVklURV9OSVRST19NT0NLKSxcbiAgICBwb3J0OiBnZXROdW1iZXIoVklURV9QT1JULCA1MTczKSxcbiAgICBwd2E6IGdldEJvb2xlYW4oVklURV9QV0EpLFxuICAgIHZpc3VhbGl6ZXI6IGdldEJvb2xlYW4oVklURV9WSVNVQUxJWkVSKSxcbiAgfTtcbn1cblxuZXhwb3J0IHsgbG9hZEFuZENvbnZlcnRFbnYsIGxvYWRFbnYgfTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1xcXFxpbXBvcnRtYXAudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL3BsdWdpbnMvaW1wb3J0bWFwLnRzXCI7LyoqXG4gKiBcdTUzQzJcdTgwMDMgaHR0cHM6Ly9naXRodWIuY29tL2pzcG0vdml0ZS1wbHVnaW4tanNwbVx1RkYwQ1x1OEMwM1x1NjU3NFx1NEUzQVx1OTcwMFx1ODk4MVx1NzY4NFx1NTI5Rlx1ODBGRFxuICovXG5pbXBvcnQgdHlwZSB7IEdlbmVyYXRvck9wdGlvbnMgfSBmcm9tICdAanNwbS9nZW5lcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tICd2aXRlJztcblxuaW1wb3J0IHsgR2VuZXJhdG9yIH0gZnJvbSAnQGpzcG0vZ2VuZXJhdG9yJztcbmltcG9ydCB7IGxvYWQgfSBmcm9tICdjaGVlcmlvJztcbmltcG9ydCB7IG1pbmlmeSB9IGZyb20gJ2h0bWwtbWluaWZpZXItdGVyc2VyJztcblxuY29uc3QgREVGQVVMVF9QUk9WSURFUiA9ICdqc3BtLmlvJztcblxudHlwZSBwbHVnaW5PcHRpb25zID0gR2VuZXJhdG9yT3B0aW9ucyAmIHtcbiAgZGVidWc/OiBib29sZWFuO1xuICBkZWZhdWx0UHJvdmlkZXI/OiAnZXNtLnNoJyB8ICdqc2RlbGl2cicgfCAnanNwbS5pbyc7XG4gIGltcG9ydG1hcD86IEFycmF5PHsgbmFtZTogc3RyaW5nOyByYW5nZT86IHN0cmluZyB9Pjtcbn07XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdFZlcnNpb25PZlNoaW1zKCkge1xuLy8gICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9nYS5qc3BtLmlvL25wbTplcy1tb2R1bGUtc2hpbXMnKTtcbi8vICAgY29uc3QgdmVyc2lvbiA9IHJlc3VsdC50ZXh0KCk7XG4vLyAgIHJldHVybiB2ZXJzaW9uO1xuLy8gfVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTaGltc1VybChwcm92aWRlOiBzdHJpbmcpIHtcbiAgLy8gY29uc3QgdmVyc2lvbiA9IGF3YWl0IGdldExhdGVzdFZlcnNpb25PZlNoaW1zKCk7XG4gIGNvbnN0IHZlcnNpb24gPSAnMS4xMC4wJztcblxuICBjb25zdCBzaGltc1N1YnBhdGggPSBgZGlzdC9lcy1tb2R1bGUtc2hpbXMuanNgO1xuICBjb25zdCBwcm92aWRlclNoaW1zTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICdlc20uc2gnOiBgaHR0cHM6Ly9lc20uc2gvZXMtbW9kdWxlLXNoaW1zQCR7dmVyc2lvbn0vJHtzaGltc1N1YnBhdGh9YCxcbiAgICAvLyB1bnBrZzogYGh0dHBzOi8vdW5wa2cuY29tL2VzLW1vZHVsZS1zaGltc0Ake3ZlcnNpb259LyR7c2hpbXNTdWJwYXRofWAsXG4gICAganNkZWxpdnI6IGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2VzLW1vZHVsZS1zaGltc0Ake3ZlcnNpb259LyR7c2hpbXNTdWJwYXRofWAsXG5cbiAgICAvLyBcdTRFMEJcdTk3NjJcdTRFMjRcdTRFMkFDRE5cdTRFMERcdTdBMzNcdTVCOUFcdUZGMENcdTY2ODJcdTY1RjZcdTRFMERcdTc1MjhcbiAgICAnanNwbS5pbyc6IGBodHRwczovL2dhLmpzcG0uaW8vbnBtOmVzLW1vZHVsZS1zaGltc0Ake3ZlcnNpb259LyR7c2hpbXNTdWJwYXRofWAsXG4gIH07XG5cbiAgcmV0dXJuIHByb3ZpZGVyU2hpbXNNYXBbcHJvdmlkZV0gfHwgcHJvdmlkZXJTaGltc01hcFtERUZBVUxUX1BST1ZJREVSXTtcbn1cblxubGV0IGdlbmVyYXRvcjogR2VuZXJhdG9yO1xuXG5hc3luYyBmdW5jdGlvbiB2aXRlSW1wb3J0TWFwUGx1Z2luKFxuICBwbHVnaW5PcHRpb25zPzogcGx1Z2luT3B0aW9ucyxcbik6IFByb21pc2U8UGx1Z2luW10+IHtcbiAgY29uc3QgeyBpbXBvcnRtYXAgfSA9IHBsdWdpbk9wdGlvbnMgfHwge307XG5cbiAgbGV0IGlzU1NSID0gZmFsc2U7XG4gIGxldCBpc0J1aWxkID0gZmFsc2U7XG4gIGxldCBpbnN0YWxsZWQgPSBmYWxzZTtcbiAgbGV0IGluc3RhbGxFcnJvcjogRXJyb3IgfCBudWxsID0gbnVsbDtcblxuICBjb25zdCBvcHRpb25zOiBwbHVnaW5PcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICBkZWZhdWx0UHJvdmlkZXI6ICdqc3BtLmlvJyxcbiAgICAgIGVudjogWydwcm9kdWN0aW9uJywgJ2Jyb3dzZXInLCAnbW9kdWxlJ10sXG4gICAgICBpbXBvcnRtYXA6IFtdLFxuICAgIH0sXG4gICAgcGx1Z2luT3B0aW9ucyxcbiAgKTtcblxuICBnZW5lcmF0b3IgPSBuZXcgR2VuZXJhdG9yKHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGJhc2VVcmw6IHByb2Nlc3MuY3dkKCksXG4gIH0pO1xuXG4gIGlmIChvcHRpb25zPy5kZWJ1Zykge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBmb3IgYXdhaXQgKGNvbnN0IHsgbWVzc2FnZSwgdHlwZSB9IG9mIGdlbmVyYXRvci5sb2dTdHJlYW0oKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0eXBlfTogJHttZXNzYWdlfWApO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH1cblxuICBjb25zdCBpbXBvcnRzID0gb3B0aW9ucy5pbnB1dE1hcD8uaW1wb3J0cyA/PyB7fTtcbiAgY29uc3Qgc2NvcGVzID0gb3B0aW9ucy5pbnB1dE1hcD8uc2NvcGVzID8/IHt9O1xuICBjb25zdCBmaXJzdExheWVyS2V5cyA9IE9iamVjdC5rZXlzKHNjb3Blcyk7XG4gIGNvbnN0IGlucHV0TWFwU2NvcGVzOiBzdHJpbmdbXSA9IFtdO1xuICBmaXJzdExheWVyS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpbnB1dE1hcFNjb3Blcy5wdXNoKC4uLk9iamVjdC5rZXlzKHNjb3Blc1trZXldIHx8IHt9KSk7XG4gIH0pO1xuICBjb25zdCBpbnB1dE1hcEltcG9ydHMgPSBPYmplY3Qua2V5cyhpbXBvcnRzKTtcblxuICBjb25zdCBhbGxEZXBOYW1lczogc3RyaW5nW10gPSBbXG4gICAgLi4uKGltcG9ydG1hcD8ubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpIHx8IFtdKSxcbiAgICAuLi5pbnB1dE1hcEltcG9ydHMsXG4gICAgLi4uaW5wdXRNYXBTY29wZXMsXG4gIF07XG4gIGNvbnN0IGRlcE5hbWVzID0gbmV3IFNldDxzdHJpbmc+KGFsbERlcE5hbWVzKTtcblxuICBjb25zdCBpbnN0YWxsRGVwcyA9IGltcG9ydG1hcD8ubWFwKChpdGVtKSA9PiAoe1xuICAgIHJhbmdlOiBpdGVtLnJhbmdlLFxuICAgIHRhcmdldDogaXRlbS5uYW1lLFxuICB9KSk7XG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBhc3luYyBjb25maWcoXywgeyBjb21tYW5kLCBpc1NzckJ1aWxkIH0pIHtcbiAgICAgICAgaXNCdWlsZCA9IGNvbW1hbmQgPT09ICdidWlsZCc7XG4gICAgICAgIGlzU1NSID0gISFpc1NzckJ1aWxkO1xuICAgICAgfSxcbiAgICAgIGVuZm9yY2U6ICdwcmUnLFxuICAgICAgbmFtZTogJ2ltcG9ydG1hcDpleHRlcm5hbCcsXG4gICAgICByZXNvbHZlSWQoaWQpIHtcbiAgICAgICAgaWYgKGlzU1NSIHx8ICFpc0J1aWxkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlcE5hbWVzLmhhcyhpZCkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBleHRlcm5hbDogdHJ1ZSwgaWQgfTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgICBuYW1lOiAnaW1wb3J0bWFwOmluc3RhbGwnLFxuICAgICAgYXN5bmMgcmVzb2x2ZUlkKCkge1xuICAgICAgICBpZiAoaXNTU1IgfHwgIWlzQnVpbGQgfHwgaW5zdGFsbGVkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpbnN0YWxsZWQgPSB0cnVlO1xuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChcbiAgICAgICAgICAgIChpbnN0YWxsRGVwcyB8fCBbXSkubWFwKChkZXApID0+IGdlbmVyYXRvci5pbnN0YWxsKGRlcCkpLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICBpbnN0YWxsRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICBpbnN0YWxsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBidWlsZEVuZCgpIHtcbiAgICAgICAgLy8gXHU2NzJBXHU3NTFGXHU2MjEwaW1wb3J0bWFwXHU2NUY2XHVGRjBDXHU2MjlCXHU1MUZBXHU5NTE5XHU4QkVGXHVGRjBDXHU5NjMyXHU2QjYyXHU4OEFCdHVyYm9cdTdGMTNcdTVCNThcbiAgICAgICAgaWYgKCFpbnN0YWxsZWQgJiYgIWlzU1NSKSB7XG4gICAgICAgICAgaW5zdGFsbEVycm9yICYmIGNvbnNvbGUuZXJyb3IoaW5zdGFsbEVycm9yKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltcG9ydG1hcCBpbnN0YWxsYXRpb24gZmFpbGVkLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZW5mb3JjZTogJ3Bvc3QnLFxuICAgICAgbmFtZTogJ2ltcG9ydG1hcDpodG1sJyxcbiAgICAgIHRyYW5zZm9ybUluZGV4SHRtbDoge1xuICAgICAgICBhc3luYyBoYW5kbGVyKGh0bWwpIHtcbiAgICAgICAgICBpZiAoaXNTU1IgfHwgIWlzQnVpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGltcG9ydG1hcEpzb24gPSBnZW5lcmF0b3IuZ2V0TWFwKCk7XG5cbiAgICAgICAgICBpZiAoIWltcG9ydG1hcEpzb24pIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGVzTW9kdWxlU2hpbXNTcmMgPSBhd2FpdCBnZXRTaGltc1VybChcbiAgICAgICAgICAgIG9wdGlvbnMuZGVmYXVsdFByb3ZpZGVyIHx8IERFRkFVTFRfUFJPVklERVIsXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IHJlc3VsdEh0bWwgPSBhd2FpdCBpbmplY3RTaGltc1RvSHRtbChcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBlc01vZHVsZVNoaW1zU3JjIHx8ICcnLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaHRtbCA9IGF3YWl0IG1pbmlmeShyZXN1bHRIdG1sIHx8IGh0bWwsIHtcbiAgICAgICAgICAgIGNvbGxhcHNlV2hpdGVzcGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pbmlmeUNTUzogdHJ1ZSxcbiAgICAgICAgICAgIG1pbmlmeUpTOiB0cnVlLFxuICAgICAgICAgICAgcmVtb3ZlQ29tbWVudHM6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICB0YWdzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2ltcG9ydG1hcCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbmplY3RUbzogJ2hlYWQtcHJlcGVuZCcsXG4gICAgICAgICAgICAgICAgdGFnOiAnc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogYCR7SlNPTi5zdHJpbmdpZnkoaW1wb3J0bWFwSnNvbil9YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgb3JkZXI6ICdwb3N0JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5qZWN0U2hpbXNUb0h0bWwoaHRtbDogc3RyaW5nLCBlc01vZHVsZVNoaW1Vcmw6IHN0cmluZykge1xuICBjb25zdCAkID0gbG9hZChodG1sKTtcblxuICBjb25zdCAkc2NyaXB0ID0gJChgc2NyaXB0W3R5cGU9J21vZHVsZSddYCk7XG5cbiAgaWYgKCEkc2NyaXB0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZW50cnkgPSAkc2NyaXB0LmF0dHIoJ3NyYycpO1xuXG4gICRzY3JpcHQucmVtb3ZlQXR0cigndHlwZScpO1xuICAkc2NyaXB0LnJlbW92ZUF0dHIoJ2Nyb3Nzb3JpZ2luJyk7XG4gICRzY3JpcHQucmVtb3ZlQXR0cignc3JjJyk7XG4gICRzY3JpcHQuaHRtbChgXG5pZiAoIUhUTUxTY3JpcHRFbGVtZW50LnN1cHBvcnRzIHx8ICFIVE1MU2NyaXB0RWxlbWVudC5zdXBwb3J0cygnaW1wb3J0bWFwJykpIHtcbiAgc2VsZi5pbXBvcnRTaGltID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpLCB7XG4gICAgICAgICAgICAgICAgICBzcmM6ICcke2VzTW9kdWxlU2hpbVVybH0nLFxuICAgICAgICAgICAgICAgICAgY3Jvc3NvcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgICBvbmxvYWQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbXBvcnRTaGltLiRwcm94eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGltcG9ydFNoaW0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ05vIGdsb2JhbFRoaXMuaW1wb3J0U2hpbSBmb3VuZDonICsgZXNNb2R1bGVTaGltVXJsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uZXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgaW1wb3J0U2hpbS4kcHJveHkgPSB0cnVlO1xuICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoaW1wb3J0U2hpbSkgPT4gaW1wb3J0U2hpbSguLi5hcmd1bWVudHMpKTtcbiAgfTtcbn1cblxudmFyIG1vZHVsZXMgPSBbJyR7ZW50cnl9J107XG50eXBlb2YgaW1wb3J0U2hpbSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IG1vZHVsZXMuZm9yRWFjaCgobW9kdWxlTmFtZSkgPT4gaW1wb3J0U2hpbShtb2R1bGVOYW1lKSlcbiAgOiBtb2R1bGVzLmZvckVhY2goKG1vZHVsZU5hbWUpID0+IGltcG9ydChtb2R1bGVOYW1lKSk7XG4gYCk7XG4gICQoJ2JvZHknKS5hZnRlcigkc2NyaXB0KTtcbiAgJCgnaGVhZCcpLnJlbW92ZShgc2NyaXB0W3R5cGU9J21vZHVsZSddYCk7XG4gIHJldHVybiAkLmh0bWwoKTtcbn1cblxuZXhwb3J0IHsgdml0ZUltcG9ydE1hcFBsdWdpbiB9O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGludGVybmFsXFxcXHZpdGUtY29uZmlnXFxcXHNyY1xcXFxwbHVnaW5zXFxcXGluamVjdC1hcHAtbG9hZGluZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1xcXFxpbmplY3QtYXBwLWxvYWRpbmdcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL3BsdWdpbnMvaW5qZWN0LWFwcC1sb2FkaW5nL2luZGV4LnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJztcblxuaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IGZzcCBmcm9tICdub2RlOmZzL3Byb21pc2VzJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcblxuaW1wb3J0IHsgcmVhZFBhY2thZ2VKU09OIH0gZnJvbSAncGtnLXR5cGVzJztcblxuLyoqXG4gKiBcdTc1MjhcdTRFOEVcdTc1MUZcdTYyMTBcdTVDMDZsb2FkaW5nXHU2ODM3XHU1RjBGXHU2Q0U4XHU1MTY1XHU1MjMwXHU5ODc5XHU3NkVFXHU0RTJEXG4gKiBcdTRFM0FcdTU5MUFhcHBcdTYzRDBcdTRGOUJsb2FkaW5nXHU2ODM3XHU1RjBGXHVGRjBDXHU2NUUwXHU5NzAwXHU1NzI4XHU2QkNGXHU0RTJBIGFwcCAtPiBpbmRleC5odG1sXHU1MzU1XHU3MkVDXHU1RjE1XHU1MTY1XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHZpdGVJbmplY3RBcHBMb2FkaW5nUGx1Z2luKFxuICBpc0J1aWxkOiBib29sZWFuLFxuICBlbnY6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fSxcbiAgbG9hZGluZ1RlbXBsYXRlID0gJ2xvYWRpbmcuaHRtbCcsXG4gIGFwcFRpdGxlPzogc3RyaW5nLFxuKTogUHJvbWlzZTxQbHVnaW5PcHRpb24gfCB1bmRlZmluZWQ+IHtcbiAgbGV0IGxvYWRpbmdIdG1sID0gYXdhaXQgZ2V0TG9hZGluZ1Jhd0J5SHRtbFRlbXBsYXRlKGxvYWRpbmdUZW1wbGF0ZSk7XG4gIGNvbnN0IHsgdmVyc2lvbiB9ID0gYXdhaXQgcmVhZFBhY2thZ2VKU09OKHByb2Nlc3MuY3dkKCkpO1xuICBjb25zdCBlbnZSYXcgPSBpc0J1aWxkID8gJ3Byb2QnIDogJ2Rldic7XG4gIGNvbnN0IGNhY2hlTmFtZSA9IGAnJHtlbnYuVklURV9BUFBfTkFNRVNQQUNFfS0ke3ZlcnNpb259LSR7ZW52UmF3fS1wcmVmZXJlbmNlcy10aGVtZSdgO1xuXG4gIC8vIFx1NjZGRlx1NjM2Mlx1NkEyMVx1Njc3Rlx1NTNEOFx1OTFDRlxuICBpZiAoYXBwVGl0bGUgJiYgbG9hZGluZ0h0bWwpIHtcbiAgICBsb2FkaW5nSHRtbCA9IGxvYWRpbmdIdG1sLnJlcGxhY2UoLzwlPSBWSVRFX0FQUF9USVRMRSAlPi9nLCBhcHBUaXRsZSk7XG4gIH1cblxuICAvLyBcdTgzQjdcdTUzRDZcdTdGMTNcdTVCNThcdTc2ODRcdTRFM0JcdTk4OThcbiAgLy8gXHU0RkREXHU4QkMxXHU5RUQxXHU2Njk3XHU0RTNCXHU5ODk4XHU0RTBCXHVGRjBDXHU1MjM3XHU2NUIwXHU5ODc1XHU5NzYyXHU2NUY2XHVGRjBDbG9hZGluZ1x1NEU1Rlx1NjYyRlx1OUVEMVx1NjY5N1x1NEUzQlx1OTg5OFxuICBjb25zdCBpbmplY3RTY3JpcHQgPSBgXG4gIDxzY3JpcHQgZGF0YS1hcHAtbG9hZGluZz1cImluamVjdC1qc1wiPlxuICB2YXIgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgke2NhY2hlTmFtZX0pO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycsIC9kYXJrLy50ZXN0KHRoZW1lKSk7XG48L3NjcmlwdD5cbmA7XG5cbiAgaWYgKCFsb2FkaW5nSHRtbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZW5mb3JjZTogJ3ByZScsXG4gICAgbmFtZTogJ3ZpdGU6aW5qZWN0LWFwcC1sb2FkaW5nJyxcbiAgICB0cmFuc2Zvcm1JbmRleEh0bWw6IHtcbiAgICAgIGhhbmRsZXIoaHRtbCkge1xuICAgICAgICBjb25zdCByZSA9IC88Ym9keVxccyo+LztcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZShyZSwgYDxib2R5PiR7aW5qZWN0U2NyaXB0fSR7bG9hZGluZ0h0bWx9YCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgICAgfSxcbiAgICAgIG9yZGVyOiAncHJlJyxcbiAgICB9LFxuICB9O1xufVxuXG4vKipcbiAqIFx1NzUyOFx1NEU4RVx1ODNCN1x1NTNENmxvYWRpbmdcdTc2ODRodG1sXHU2QTIxXHU2NzdGXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldExvYWRpbmdSYXdCeUh0bWxUZW1wbGF0ZShsb2FkaW5nVGVtcGxhdGU6IHN0cmluZykge1xuICAvLyBcdTY1MkZcdTYzMDFcdTU3MjhhcHBcdTUxODVcdTgxRUFcdTVCOUFcdTRFNDlsb2FkaW5nXHU2QTIxXHU2NzdGXHVGRjBDXHU2QTIxXHU3MjQ4XHU1M0MyXHU4MDAzZGVmYXVsdC1sb2FkaW5nLmh0bWxcdTUzNzNcdTUzRUZcbiAgbGV0IGFwcExvYWRpbmdQYXRoID0gam9pbihwcm9jZXNzLmN3ZCgpLCBsb2FkaW5nVGVtcGxhdGUpO1xuXG4gIGlmICghZnMuZXhpc3RzU3luYyhhcHBMb2FkaW5nUGF0aCkpIHtcbiAgICBjb25zdCBfX2Rpcm5hbWUgPSBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4nLCBpbXBvcnQubWV0YS51cmwpKTtcbiAgICBhcHBMb2FkaW5nUGF0aCA9IGpvaW4oX19kaXJuYW1lLCAnLi9kZWZhdWx0LWxvYWRpbmcuaHRtbCcpO1xuICB9XG5cbiAgcmV0dXJuIGF3YWl0IGZzcC5yZWFkRmlsZShhcHBMb2FkaW5nUGF0aCwgJ3V0ZjgnKTtcbn1cblxuZXhwb3J0IHsgdml0ZUluamVjdEFwcExvYWRpbmdQbHVnaW4gfTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1xcXFxpbmplY3QtbWV0YWRhdGEudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL3BsdWdpbnMvaW5qZWN0LW1ldGFkYXRhLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJztcblxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCB7IGRpcm5hbWUgfSBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZ2V0UGFja2FnZXNTeW5jIH0gZnJvbSAnQG1hbnlwa2cvZ2V0LXBhY2thZ2VzJztcbmltcG9ydCB7IHJlYWRQYWNrYWdlSlNPTiB9IGZyb20gJ3BrZy10eXBlcyc7XG5pbXBvcnQgeyBmaW5kVXBTeW5jIH0gZnJvbSAnZmluZC11cCc7XG5pbXBvcnQgeyByZWFkV29ya3NwYWNlTWFuaWZlc3QgfSBmcm9tICdAcG5wbS93b3Jrc3BhY2UucmVhZC1tYW5pZmVzdCc7XG5cbi8vIFx1NjdFNVx1NjI3RSBtb25vcmVwbyBcdTY4MzlcdTc2RUVcdTVGNTVcbmZ1bmN0aW9uIGZpbmRNb25vcmVwb1Jvb3QoY3dkOiBzdHJpbmcgPSBwcm9jZXNzLmN3ZCgpKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd29ya3NwYWNlRmlsZSA9IGZpbmRVcFN5bmMoJ3BucG0td29ya3NwYWNlLnlhbWwnLCB7XG4gICAgICBjd2QsXG4gICAgICB0eXBlOiAnZmlsZScsXG4gICAgfSk7XG4gICAgaWYgKHdvcmtzcGFjZUZpbGUpIHtcbiAgICAgIHJldHVybiBkaXJuYW1lKHdvcmtzcGFjZUZpbGUpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsb2NrRmlsZSA9IGZpbmRVcFN5bmMoJ3BucG0tbG9jay55YW1sJywge1xuICAgICAgY3dkLFxuICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgIH0pO1xuICAgIGlmIChsb2NrRmlsZSkge1xuICAgICAgcmV0dXJuIGRpcm5hbWUobG9ja0ZpbGUpO1xuICAgIH1cbiAgICBcbiAgICAvLyBcdTU5ODJcdTY3OUNcdTkwRkRcdTYyN0VcdTRFMERcdTUyMzBcdUZGMENcdThGRDRcdTU2REVcdTVGNTNcdTUyNERcdTc2RUVcdTVGNTVcbiAgICByZXR1cm4gY3dkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIFx1NTFGQVx1OTUxOVx1NjVGNlx1OEZENFx1NTZERVx1NUY1M1x1NTI0RFx1NzZFRVx1NUY1NVxuICAgIHJldHVybiBjd2Q7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVBhY2thZ2VWZXJzaW9uKFxuICBwa2dzTWV0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgbmFtZTogc3RyaW5nLFxuICB2YWx1ZTogc3RyaW5nLFxuICBjYXRhbG9nOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuKSB7XG4gIGlmICh2YWx1ZS5pbmNsdWRlcygnY2F0YWxvZzonKSkge1xuICAgIHJldHVybiBjYXRhbG9nW25hbWVdO1xuICB9XG5cbiAgaWYgKHZhbHVlLmluY2x1ZGVzKCd3b3Jrc3BhY2UnKSkge1xuICAgIHJldHVybiBwa2dzTWV0YVtuYW1lXTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU1vbm9yZXBvRGVwZW5kZW5jaWVzKCkge1xuICBjb25zdCByb290ID0gZmluZE1vbm9yZXBvUm9vdCgpO1xuICBjb25zdCB7IHBhY2thZ2VzIH0gPSBnZXRQYWNrYWdlc1N5bmMocm9vdCk7XG4gIGNvbnN0IG1hbmlmZXN0ID0gcmVhZFdvcmtzcGFjZU1hbmlmZXN0KHJvb3QpO1xuICBjb25zdCBjYXRhbG9nID0gbWFuaWZlc3Q/LmNhdGFsb2cgfHwge307XG5cbiAgY29uc3QgcmVzdWx0RGV2RGVwZW5kZW5jaWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0ge307XG4gIGNvbnN0IHJlc3VsdERlcGVuZGVuY2llczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHt9O1xuICBjb25zdCBwa2dzTWV0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gIGZvciAoY29uc3QgeyBwYWNrYWdlSnNvbiB9IG9mIHBhY2thZ2VzKSB7XG4gICAgcGtnc01ldGFbcGFja2FnZUpzb24ubmFtZV0gPSBwYWNrYWdlSnNvbi52ZXJzaW9uO1xuICB9XG5cbiAgZm9yIChjb25zdCB7IHBhY2thZ2VKc29uIH0gb2YgcGFja2FnZXMpIHtcbiAgICBjb25zdCB7IGRlcGVuZGVuY2llcyA9IHt9LCBkZXZEZXBlbmRlbmNpZXMgPSB7fSB9ID0gcGFja2FnZUpzb247XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGVwZW5kZW5jaWVzKSkge1xuICAgICAgcmVzdWx0RGVwZW5kZW5jaWVzW2tleV0gPSByZXNvbHZlUGFja2FnZVZlcnNpb24oXG4gICAgICAgIHBrZ3NNZXRhLFxuICAgICAgICBrZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjYXRhbG9nLFxuICAgICAgKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGV2RGVwZW5kZW5jaWVzKSkge1xuICAgICAgcmVzdWx0RGV2RGVwZW5kZW5jaWVzW2tleV0gPSByZXNvbHZlUGFja2FnZVZlcnNpb24oXG4gICAgICAgIHBrZ3NNZXRhLFxuICAgICAgICBrZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjYXRhbG9nLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZXBlbmRlbmNpZXM6IHJlc3VsdERlcGVuZGVuY2llcyxcbiAgICBkZXZEZXBlbmRlbmNpZXM6IHJlc3VsdERldkRlcGVuZGVuY2llcyxcbiAgfTtcbn1cblxuLyoqXG4gKiBcdTc1MjhcdTRFOEVcdTZDRThcdTUxNjVcdTk4NzlcdTc2RUVcdTRGRTFcdTYwNkZcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdml0ZU1ldGFkYXRhUGx1Z2luKFxuICByb290ID0gcHJvY2Vzcy5jd2QoKSxcbik6IFByb21pc2U8UGx1Z2luT3B0aW9uIHwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IHsgYXV0aG9yLCBkZXNjcmlwdGlvbiwgaG9tZXBhZ2UsIGxpY2Vuc2UsIHZlcnNpb24gfSA9XG4gICAgYXdhaXQgcmVhZFBhY2thZ2VKU09OKHJvb3QpO1xuXG4gIGNvbnN0IGJ1aWxkVGltZSA9IGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBhc3luYyBjb25maWcoKSB7XG4gICAgICBjb25zdCB7IGRlcGVuZGVuY2llcywgZGV2RGVwZW5kZW5jaWVzIH0gPVxuICAgICAgICBhd2FpdCByZXNvbHZlTW9ub3JlcG9EZXBlbmRlbmNpZXMoKTtcblxuICAgICAgY29uc3QgaXNBdXRob3JPYmplY3QgPSB0eXBlb2YgYXV0aG9yID09PSAnb2JqZWN0JztcbiAgICAgIGNvbnN0IGF1dGhvck5hbWUgPSBpc0F1dGhvck9iamVjdCA/IGF1dGhvci5uYW1lIDogYXV0aG9yO1xuICAgICAgY29uc3QgYXV0aG9yRW1haWwgPSBpc0F1dGhvck9iamVjdCA/IGF1dGhvci5lbWFpbCA6IG51bGw7XG4gICAgICBjb25zdCBhdXRob3JVcmwgPSBpc0F1dGhvck9iamVjdCA/IGF1dGhvci51cmwgOiBudWxsO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWZpbmU6IHtcbiAgICAgICAgICBfX1ZCRU5fQURNSU5fTUVUQURBVEFfXzogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgYXV0aG9yRW1haWwsXG4gICAgICAgICAgICBhdXRob3JOYW1lLFxuICAgICAgICAgICAgYXV0aG9yVXJsLFxuICAgICAgICAgICAgYnVpbGRUaW1lLFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkZXZEZXBlbmRlbmNpZXMsXG4gICAgICAgICAgICBob21lcGFnZSxcbiAgICAgICAgICAgIGxpY2Vuc2UsXG4gICAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgICdpbXBvcnQubWV0YS5lbnYuVklURV9BUFBfVkVSU0lPTic6IEpTT04uc3RyaW5naWZ5KHZlcnNpb24pLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGVuZm9yY2U6ICdwb3N0JyxcbiAgICBuYW1lOiAndml0ZTppbmplY3QtbWV0YWRhdGEnLFxuICB9O1xufVxuXG5leHBvcnQgeyB2aXRlTWV0YWRhdGFQbHVnaW4gfTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1xcXFxsaWNlbnNlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8kd29yay9BZG1pbi12dWUvdnVlLXZiZW4tYWRtaW4vc3BhLXdlYi92dWUtdmJlbi1hZG1pbi1hbnRkL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9wbHVnaW5zL2xpY2Vuc2UudHNcIjtpbXBvcnQgdHlwZSB7XG4gIE5vcm1hbGl6ZWRPdXRwdXRPcHRpb25zLFxuICBPdXRwdXRCdW5kbGUsXG4gIE91dHB1dENodW5rLFxufSBmcm9tICdyb2xsdXAnO1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJztcblxuaW1wb3J0IHsgRU9MIH0gZnJvbSAnbm9kZTpvcyc7XG5cbmltcG9ydCB7IGRhdGVVdGlsLCByZWFkUGFja2FnZUpTT04gfSBmcm9tICdAdmJlbi9ub2RlLXV0aWxzJztcblxuLyoqXG4gKiBcdTc1MjhcdTRFOEVcdTZDRThcdTUxNjVcdTcyNDhcdTY3NDNcdTRGRTFcdTYwNkZcbiAqIEByZXR1cm5zXG4gKi9cblxuYXN5bmMgZnVuY3Rpb24gdml0ZUxpY2Vuc2VQbHVnaW4oXG4gIHJvb3QgPSBwcm9jZXNzLmN3ZCgpLFxuKTogUHJvbWlzZTxQbHVnaW5PcHRpb24gfCB1bmRlZmluZWQ+IHtcbiAgY29uc3Qge1xuICAgIGRlc2NyaXB0aW9uID0gJycsXG4gICAgaG9tZXBhZ2UgPSAnJyxcbiAgICB2ZXJzaW9uID0gJycsXG4gIH0gPSBhd2FpdCByZWFkUGFja2FnZUpTT04ocm9vdCk7XG5cbiAgcmV0dXJuIHtcbiAgICBhcHBseTogJ2J1aWxkJyxcbiAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgZ2VuZXJhdGVCdW5kbGU6IHtcbiAgICAgIGhhbmRsZXI6IChfb3B0aW9uczogTm9ybWFsaXplZE91dHB1dE9wdGlvbnMsIGJ1bmRsZTogT3V0cHV0QnVuZGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlVXRpbCgpLmZvcm1hdCgnWVlZWS1NTS1ERCAnKTtcbiAgICAgICAgY29uc3QgY29weXJpZ2h0VGV4dCA9IGAvKiFcbiAgKiBWYmVuIEFkbWluXG4gICogVmVyc2lvbjogJHt2ZXJzaW9ufVxuICAqIEF1dGhvcjogdmJlblxuICAqIENvcHlyaWdodCAoQykgMjAyNCBWYmVuXG4gICogTGljZW5zZTogTUlUIExpY2Vuc2VcbiAgKiBEZXNjcmlwdGlvbjogJHtkZXNjcmlwdGlvbn1cbiAgKiBEYXRlIENyZWF0ZWQ6ICR7ZGF0ZX1cbiAgKiBIb21lcGFnZTogJHtob21lcGFnZX1cbiAgKiBDb250YWN0OiBhbm4udmJlbkBnbWFpbC5jb21cbiovXG4gICAgICAgICAgICAgIGAudHJpbSgpO1xuXG4gICAgICAgIGZvciAoY29uc3QgWywgZmlsZUNvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGJ1bmRsZSkpIHtcbiAgICAgICAgICBpZiAoZmlsZUNvbnRlbnQudHlwZSA9PT0gJ2NodW5rJyAmJiBmaWxlQ29udGVudC5pc0VudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBjaHVua0NvbnRlbnQgPSBmaWxlQ29udGVudCBhcyBPdXRwdXRDaHVuaztcbiAgICAgICAgICAgIC8vIFx1NjNEMlx1NTE2NVx1NzI0OFx1Njc0M1x1NEZFMVx1NjA2RlxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNodW5rQ29udGVudC5jb2RlO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENvbnRlbnQgPSBgJHtjb3B5cmlnaHRUZXh0fSR7RU9MfSR7Y29udGVudH1gO1xuXG4gICAgICAgICAgICAvLyBcdTY2RjRcdTY1QjBidW5kbGVcbiAgICAgICAgICAgIChmaWxlQ29udGVudCBhcyBPdXRwdXRDaHVuaykuY29kZSA9IHVwZGF0ZWRDb250ZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyOiAncG9zdCcsXG4gICAgfSxcbiAgICBuYW1lOiAndml0ZTpsaWNlbnNlJyxcbiAgfTtcbn1cblxuZXhwb3J0IHsgdml0ZUxpY2Vuc2VQbHVnaW4gfTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1xcXFxuaXRyby1tb2NrLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8kd29yay9BZG1pbi12dWUvdnVlLXZiZW4tYWRtaW4vc3BhLXdlYi92dWUtdmJlbi1hZG1pbi1hbnRkL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9wbHVnaW5zL25pdHJvLW1vY2sudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xuXG5pbXBvcnQgdHlwZSB7IE5pdHJvTW9ja1BsdWdpbk9wdGlvbnMgfSBmcm9tICcuLi90eXBpbmcnO1xuXG5pbXBvcnQgeyBjb2xvcnMsIGNvbnNvbGEsIGdldFBhY2thZ2UgfSBmcm9tICdAdmJlbi9ub2RlLXV0aWxzJztcblxuaW1wb3J0IGdldFBvcnQgZnJvbSAnZ2V0LXBvcnQnO1xuaW1wb3J0IHsgYnVpbGQsIGNyZWF0ZURldlNlcnZlciwgY3JlYXRlTml0cm8sIHByZXBhcmUgfSBmcm9tICduaXRyb3BhY2snO1xuXG5jb25zdCBobXJLZXlSZSA9IC9ecnVudGltZUNvbmZpZ1xcLnxyb3V0ZVJ1bGVzXFwuLztcblxuZXhwb3J0IGNvbnN0IHZpdGVOaXRyb01vY2tQbHVnaW4gPSAoe1xuICBtb2NrU2VydmVyUGFja2FnZSA9ICdAdmJlbi9iYWNrZW5kLW1vY2snLFxuICBwb3J0ID0gNTMyMCxcbiAgdmVyYm9zZSA9IHRydWUsXG59OiBOaXRyb01vY2tQbHVnaW5PcHRpb25zID0ge30pOiBQbHVnaW5PcHRpb24gPT4ge1xuICByZXR1cm4ge1xuICAgIGFzeW5jIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZVBvcnQgPSBhd2FpdCBnZXRQb3J0KHsgcG9ydCB9KTtcbiAgICAgIGlmIChhdmFpbGFibGVQb3J0ICE9PSBwb3J0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGtnID0gYXdhaXQgZ2V0UGFja2FnZShtb2NrU2VydmVyUGFja2FnZSk7XG4gICAgICBpZiAoIXBrZykge1xuICAgICAgICBjb25zb2xhLmxvZyhcbiAgICAgICAgICBgUGFja2FnZSAke21vY2tTZXJ2ZXJQYWNrYWdlfSBub3QgZm91bmQuIFNraXAgbW9jayBzZXJ2ZXIuYCxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBydW5OaXRyb1NlcnZlcihwa2cuZGlyLCBwb3J0LCB2ZXJib3NlKTtcblxuICAgICAgY29uc3QgX3ByaW50VXJscyA9IHNlcnZlci5wcmludFVybHM7XG4gICAgICBzZXJ2ZXIucHJpbnRVcmxzID0gKCkgPT4ge1xuICAgICAgICBfcHJpbnRVcmxzKCk7XG5cbiAgICAgICAgY29uc29sYS5sb2coXG4gICAgICAgICAgYCAgJHtjb2xvcnMuZ3JlZW4oJ1x1Mjc5QycpfSAgJHtjb2xvcnMuYm9sZCgnTml0cm8gTW9jayBTZXJ2ZXInKX06ICR7Y29sb3JzLmN5YW4oYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fS9hcGlgKX1gLFxuICAgICAgICApO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGVuZm9yY2U6ICdwcmUnLFxuICAgIG5hbWU6ICd2aXRlOm1vY2stc2VydmVyJyxcbiAgfTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1bk5pdHJvU2VydmVyKHJvb3REaXI6IHN0cmluZywgcG9ydDogbnVtYmVyLCB2ZXJib3NlOiBib29sZWFuKSB7XG4gIGxldCBuaXRybzogYW55O1xuICBjb25zdCByZWxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKG5pdHJvKSB7XG4gICAgICBjb25zb2xhLmluZm8oJ1Jlc3RhcnRpbmcgZGV2IHNlcnZlci4uLicpO1xuICAgICAgaWYgKCd1bndhdGNoJyBpbiBuaXRyby5vcHRpb25zLl9jMTIpIHtcbiAgICAgICAgYXdhaXQgbml0cm8ub3B0aW9ucy5fYzEyLnVud2F0Y2goKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IG5pdHJvLmNsb3NlKCk7XG4gICAgfVxuICAgIG5pdHJvID0gYXdhaXQgY3JlYXRlTml0cm8oXG4gICAgICB7XG4gICAgICAgIGRldjogdHJ1ZSxcbiAgICAgICAgcHJlc2V0OiAnbml0cm8tZGV2JyxcbiAgICAgICAgcm9vdERpcixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGMxMjoge1xuICAgICAgICAgIGFzeW5jIG9uVXBkYXRlKHsgZ2V0RGlmZiwgbmV3Q29uZmlnIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBnZXREaWZmKCk7XG4gICAgICAgICAgICBpZiAoZGlmZi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmVyYm9zZSAmJlxuICAgICAgICAgICAgICBjb25zb2xhLmluZm8oXG4gICAgICAgICAgICAgICAgYE5pdHJvIGNvbmZpZyB1cGRhdGVkOlxcbiR7ZGlmZlxuICAgICAgICAgICAgICAgICAgLm1hcCgoZW50cnkpID0+IGAgICR7ZW50cnkudG9TdHJpbmcoKX1gKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJ1xcbicpfWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhd2FpdCAoZGlmZi5ldmVyeSgoZSkgPT4gaG1yS2V5UmUudGVzdChlLmtleSkpXG4gICAgICAgICAgICAgID8gbml0cm8udXBkYXRlQ29uZmlnKG5ld0NvbmZpZy5jb25maWcpXG4gICAgICAgICAgICAgIDogcmVsb2FkKCkpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgfSxcbiAgICApO1xuICAgIG5pdHJvLmhvb2tzLmhvb2tPbmNlKCdyZXN0YXJ0JywgcmVsb2FkKTtcblxuICAgIGNvbnN0IHNlcnZlciA9IGNyZWF0ZURldlNlcnZlcihuaXRybyk7XG4gICAgYXdhaXQgc2VydmVyLmxpc3Rlbihwb3J0LCB7IHNob3dVUkw6IGZhbHNlIH0pO1xuICAgIGF3YWl0IHByZXBhcmUobml0cm8pO1xuICAgIGF3YWl0IGJ1aWxkKG5pdHJvKTtcblxuICAgIGlmICh2ZXJib3NlKSB7XG4gICAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgICBjb25zb2xhLnN1Y2Nlc3MoY29sb3JzLmJvbGQoY29sb3JzLmdyZWVuKCdOaXRybyBNb2NrIFNlcnZlciBzdGFydGVkLicpKSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gYXdhaXQgcmVsb2FkKCk7XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLWFudGRcXFxcaW50ZXJuYWxcXFxcdml0ZS1jb25maWdcXFxcc3JjXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLWFudGRcXFxcaW50ZXJuYWxcXFxcdml0ZS1jb25maWdcXFxcc3JjXFxcXHBsdWdpbnNcXFxccHJpbnQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL3BsdWdpbnMvcHJpbnQudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xuXG5pbXBvcnQgdHlwZSB7IFByaW50UGx1Z2luT3B0aW9ucyB9IGZyb20gJy4uL3R5cGluZyc7XG5cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ0B2YmVuL25vZGUtdXRpbHMnO1xuXG5leHBvcnQgY29uc3Qgdml0ZVByaW50UGx1Z2luID0gKFxuICBvcHRpb25zOiBQcmludFBsdWdpbk9wdGlvbnMgPSB7fSxcbik6IFBsdWdpbk9wdGlvbiA9PiB7XG4gIGNvbnN0IHsgaW5mb01hcCA9IHt9IH0gPSBvcHRpb25zO1xuXG4gIHJldHVybiB7XG4gICAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xuICAgICAgY29uc3QgX3ByaW50VXJscyA9IHNlcnZlci5wcmludFVybHM7XG4gICAgICBzZXJ2ZXIucHJpbnRVcmxzID0gKCkgPT4ge1xuICAgICAgICBfcHJpbnRVcmxzKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoaW5mb01hcCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGAgICR7Y29sb3JzLmdyZWVuKCdcdTI3OUMnKX0gICR7Y29sb3JzLmJvbGQoa2V5KX06ICR7Y29sb3JzLmN5YW4odmFsdWUpfWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIGVuZm9yY2U6ICdwcmUnLFxuICAgIG5hbWU6ICd2aXRlOnByaW50LWluZm8nLFxuICB9O1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxccGx1Z2luc1xcXFx2eGUtdGFibGUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL3BsdWdpbnMvdnhlLXRhYmxlLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJztcblxuaW1wb3J0IHsgbGF6eUltcG9ydCwgVnhlUmVzb2x2ZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1sYXp5LWltcG9ydCc7XG5cbmFzeW5jIGZ1bmN0aW9uIHZpdGVWeGVUYWJsZUltcG9ydHNQbHVnaW4oKTogUHJvbWlzZTxQbHVnaW5PcHRpb24+IHtcbiAgcmV0dXJuIFtcbiAgICBsYXp5SW1wb3J0KHtcbiAgICAgIHJlc29sdmVyczogW1xuICAgICAgICBWeGVSZXNvbHZlcih7XG4gICAgICAgICAgbGlicmFyeU5hbWU6ICd2eGUtdGFibGUnLFxuICAgICAgICB9KSxcbiAgICAgICAgVnhlUmVzb2x2ZXIoe1xuICAgICAgICAgIGxpYnJhcnlOYW1lOiAndnhlLXBjLXVpJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0pLFxuICBdO1xufVxuXG5leHBvcnQgeyB2aXRlVnhlVGFibGVJbXBvcnRzUGx1Z2luIH07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLWFudGRcXFxcaW50ZXJuYWxcXFxcdml0ZS1jb25maWdcXFxcc3JjXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxpbnRlcm5hbFxcXFx2aXRlLWNvbmZpZ1xcXFxzcmNcXFxcY29uZmlnXFxcXGxpYnJhcnkudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvaW50ZXJuYWwvdml0ZS1jb25maWcvc3JjL2NvbmZpZy9saWJyYXJ5LnRzXCI7aW1wb3J0IHR5cGUgeyBDb25maWdFbnYsIFVzZXJDb25maWcgfSBmcm9tICd2aXRlJztcblxuaW1wb3J0IHR5cGUgeyBEZWZpbmVMaWJyYXJ5T3B0aW9ucyB9IGZyb20gJy4uL3R5cGluZyc7XG5cbmltcG9ydCB7IHJlYWRQYWNrYWdlSlNPTiB9IGZyb20gJ0B2YmVuL25vZGUtdXRpbHMnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIG1lcmdlQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbmltcG9ydCB7IGxvYWRMaWJyYXJ5UGx1Z2lucyB9IGZyb20gJy4uL3BsdWdpbnMnO1xuaW1wb3J0IHsgZ2V0Q29tbW9uQ29uZmlnIH0gZnJvbSAnLi9jb21tb24nO1xuXG5mdW5jdGlvbiBkZWZpbmVMaWJyYXJ5Q29uZmlnKHVzZXJDb25maWdQcm9taXNlPzogRGVmaW5lTGlicmFyeU9wdGlvbnMpIHtcbiAgcmV0dXJuIGRlZmluZUNvbmZpZyhhc3luYyAoY29uZmlnOiBDb25maWdFbnYpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgdXNlckNvbmZpZ1Byb21pc2U/Lihjb25maWcpO1xuICAgIGNvbnN0IHsgY29tbWFuZCwgbW9kZSB9ID0gY29uZmlnO1xuICAgIGNvbnN0IHsgbGlicmFyeSA9IHt9LCB2aXRlID0ge30gfSA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qgcm9vdCA9IHByb2Nlc3MuY3dkKCk7XG4gICAgY29uc3QgaXNCdWlsZCA9IGNvbW1hbmQgPT09ICdidWlsZCc7XG5cbiAgICBjb25zdCBwbHVnaW5zID0gYXdhaXQgbG9hZExpYnJhcnlQbHVnaW5zKHtcbiAgICAgIGR0czogZmFsc2UsXG4gICAgICBpbmplY3RNZXRhZGF0YTogdHJ1ZSxcbiAgICAgIGlzQnVpbGQsXG4gICAgICBtb2RlLFxuICAgICAgLi4ubGlicmFyeSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZGVwZW5kZW5jaWVzID0ge30sIHBlZXJEZXBlbmRlbmNpZXMgPSB7fSB9ID1cbiAgICAgIGF3YWl0IHJlYWRQYWNrYWdlSlNPTihyb290KTtcblxuICAgIGNvbnN0IGV4dGVybmFsUGFja2FnZXMgPSBbXG4gICAgICAuLi5PYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLFxuICAgICAgLi4uT2JqZWN0LmtleXMocGVlckRlcGVuZGVuY2llcyksXG4gICAgXTtcblxuICAgIGNvbnN0IHBhY2thZ2VDb25maWc6IFVzZXJDb25maWcgPSB7XG4gICAgICBidWlsZDoge1xuICAgICAgICBsaWI6IHtcbiAgICAgICAgICBlbnRyeTogJ3NyYy9pbmRleC50cycsXG4gICAgICAgICAgZmlsZU5hbWU6ICgpID0+ICdpbmRleC5tanMnLFxuICAgICAgICAgIGZvcm1hdHM6IFsnZXMnXSxcbiAgICAgICAgfSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgIGV4dGVybmFsOiAoaWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBleHRlcm5hbFBhY2thZ2VzLnNvbWUoXG4gICAgICAgICAgICAgIChwa2cpID0+IGlkID09PSBwa2cgfHwgaWQuc3RhcnRzV2l0aChgJHtwa2d9L2ApLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHBsdWdpbnMsXG4gICAgfTtcbiAgICBjb25zdCBjb21tb25Db25maWcgPSBhd2FpdCBnZXRDb21tb25Db25maWcoKTtcbiAgICBjb25zdCBtZXJnZWRDb25tb25Db25maWcgPSBtZXJnZUNvbmZpZyhjb21tb25Db25maWcsIHBhY2thZ2VDb25maWcpO1xuICAgIHJldHVybiBtZXJnZUNvbmZpZyhtZXJnZWRDb25tb25Db25maWcsIHZpdGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgZGVmaW5lTGlicmFyeUNvbmZpZyB9O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHBsdWdpbnNcXFxcZGVtby1wcmV2aWV3LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8kd29yay9BZG1pbi12dWUvdnVlLXZiZW4tYWRtaW4vc3BhLXdlYi92dWUtdmJlbi1hZG1pbi1hbnRkL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvcGx1Z2lucy9kZW1vLXByZXZpZXcudHNcIjtpbXBvcnQgdHlwZSB7IE1hcmtkb3duRW52LCBNYXJrZG93blJlbmRlcmVyIH0gZnJvbSAndml0ZXByZXNzJztcblxuaW1wb3J0IGNyeXB0byBmcm9tICdub2RlOmNyeXB0byc7XG5pbXBvcnQgeyByZWFkZGlyU3luYyB9IGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ25vZGU6cGF0aCc7XG5cbmV4cG9ydCBjb25zdCByYXdQYXRoUmVnZXhwID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1zdXBlci1saW5lYXItYmFja3RyYWNraW5nLCByZWdleHAvc3RyaWN0XG4gIC9eKC4rPyg/OlxcLihbXFxkYS16XSspKT8pKCNbXFx3LV0rKT8oPzogP3soXFxkKyg/OlssLV1cXGQrKSopPyA/KFxcUyspP30pPyA/KD86XFxbKC4rKV0pPyQvO1xuXG5mdW5jdGlvbiByYXdQYXRoVG9Ub2tlbihyYXdQYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgW1xuICAgIGZpbGVwYXRoID0gJycsXG4gICAgZXh0ZW5zaW9uID0gJycsXG4gICAgcmVnaW9uID0gJycsXG4gICAgbGluZXMgPSAnJyxcbiAgICBsYW5nID0gJycsXG4gICAgcmF3VGl0bGUgPSAnJyxcbiAgXSA9IChyYXdQYXRoUmVnZXhwLmV4ZWMocmF3UGF0aCkgfHwgW10pLnNsaWNlKDEpO1xuXG4gIGNvbnN0IHRpdGxlID0gcmF3VGl0bGUgfHwgZmlsZXBhdGguc3BsaXQoJy8nKS5wb3AoKSB8fCAnJztcblxuICByZXR1cm4geyBleHRlbnNpb24sIGZpbGVwYXRoLCBsYW5nLCBsaW5lcywgcmVnaW9uLCB0aXRsZSB9O1xufVxuXG5leHBvcnQgY29uc3QgZGVtb1ByZXZpZXdQbHVnaW4gPSAobWQ6IE1hcmtkb3duUmVuZGVyZXIpID0+IHtcbiAgbWQuY29yZS5ydWxlci5hZnRlcignaW5saW5lJywgJ2RlbW8tcHJldmlldycsIChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGluc2VydENvbXBvbmVudEltcG9ydCA9IChpbXBvcnRTdHJpbmc6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS50b2tlbnMuZmluZEluZGV4KFxuICAgICAgICAoaSkgPT4gaS50eXBlID09PSAnaHRtbF9ibG9jaycgJiYgaS5jb250ZW50Lm1hdGNoKC88c2NyaXB0IHNldHVwPi9nKSxcbiAgICAgICk7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGltcG9ydENvbXBvbmVudCA9IG5ldyBzdGF0ZS5Ub2tlbignaHRtbF9ibG9jaycsICcnLCAwKTtcbiAgICAgICAgaW1wb3J0Q29tcG9uZW50LmNvbnRlbnQgPSBgPHNjcmlwdCBzZXR1cD5cXG4ke2ltcG9ydFN0cmluZ31cXG48L3NjcmlwdD5cXG5gO1xuICAgICAgICBzdGF0ZS50b2tlbnMuc3BsaWNlKDAsIDAsIGltcG9ydENvbXBvbmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhdGUudG9rZW5zW2luZGV4XSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzdGF0ZS50b2tlbnNbaW5kZXhdLmNvbnRlbnQ7XG4gICAgICAgICAgc3RhdGUudG9rZW5zW2luZGV4XS5jb250ZW50ID0gY29udGVudC5yZXBsYWNlKFxuICAgICAgICAgICAgJzwvc2NyaXB0PicsXG4gICAgICAgICAgICBgJHtpbXBvcnRTdHJpbmd9XFxuPC9zY3JpcHQ+YCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyBEZWZpbmUgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCB0aGUgZGVzaXJlZCBwYXR0ZXJuXG4gICAgY29uc3QgcmVnZXggPSAvPERlbW9QcmV2aWV3W14+XSpcXHNkaXI9XCIoW15cIl0qKVwiL2c7XG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBNYXJrZG93biBjb250ZW50IGFuZCByZXBsYWNlIHRoZSBwYXR0ZXJuXG4gICAgc3RhdGUuc3JjID0gc3RhdGUuc3JjLnJlcGxhY2VBbGwocmVnZXgsIChfbWF0Y2gsIGRpcikgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50RGlyID0gam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjJywgZGlyKS5yZXBsYWNlQWxsKFxuICAgICAgICAnXFxcXCcsXG4gICAgICAgICcvJyxcbiAgICAgICk7XG5cbiAgICAgIGxldCBjaGlsZEZpbGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgbGV0IGRpckV4aXN0cyA9IHRydWU7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNoaWxkRmlsZXMgPVxuICAgICAgICAgIHJlYWRkaXJTeW5jKGNvbXBvbmVudERpciwge1xuICAgICAgICAgICAgZW5jb2Rpbmc6ICd1dGY4JyxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZTogZmFsc2UsXG4gICAgICAgICAgICB3aXRoRmlsZVR5cGVzOiBmYWxzZSxcbiAgICAgICAgICB9KSB8fCBbXTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBkaXJFeGlzdHMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkaXJFeGlzdHMpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1bmlxdWVXb3JkID0gZ2VuZXJhdGVDb250ZW50SGFzaChjb21wb25lbnREaXIpO1xuXG4gICAgICBjb25zdCBDb21wb25lbnROYW1lID0gYERlbW9Db21wb25lbnRfJHt1bmlxdWVXb3JkfWA7XG4gICAgICBpbnNlcnRDb21wb25lbnRJbXBvcnQoXG4gICAgICAgIGBpbXBvcnQgJHtDb21wb25lbnROYW1lfSBmcm9tICcke2NvbXBvbmVudERpcn0vaW5kZXgudnVlJ2AsXG4gICAgICApO1xuICAgICAgY29uc3QgeyBwYXRoOiBfcGF0aCB9ID0gc3RhdGUuZW52IGFzIE1hcmtkb3duRW52O1xuXG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnRva2Vucy5maW5kSW5kZXgoKGkpID0+IGkuY29udGVudC5tYXRjaChyZWdleCkpO1xuXG4gICAgICBpZiAoIXN0YXRlLnRva2Vuc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgY29uc3QgZmlyc3RTdHJpbmcgPSAnaW5kZXgudnVlJztcbiAgICAgIGNoaWxkRmlsZXMgPSBjaGlsZEZpbGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEgPT09IGZpcnN0U3RyaW5nKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChiID09PSBmaXJzdFN0cmluZykgcmV0dXJuIDE7XG4gICAgICAgIHJldHVybiBhLmxvY2FsZUNvbXBhcmUoYiwgJ2VuJywgeyBzZW5zaXRpdml0eTogJ2Jhc2UnIH0pO1xuICAgICAgfSk7XG4gICAgICBzdGF0ZS50b2tlbnNbaW5kZXhdLmNvbnRlbnQgPVxuICAgICAgICBgPERlbW9QcmV2aWV3IGZpbGVzPVwiJHtlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY2hpbGRGaWxlcykpfVwiID48JHtDb21wb25lbnROYW1lfS8+XG4gICAgICAgIGA7XG5cbiAgICAgIGNvbnN0IF9kdW1teVRva2VuID0gbmV3IHN0YXRlLlRva2VuKCcnLCAnJywgMCk7XG4gICAgICBjb25zdCB0b2tlbkFycmF5OiBBcnJheTx0eXBlb2YgX2R1bW15VG9rZW4+ID0gW107XG4gICAgICBjaGlsZEZpbGVzLmZvckVhY2goKGZpbGVuYW1lKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHNsb3ROYW1lID0gZmlsZW5hbWUucmVwbGFjZShleHRuYW1lKGZpbGVuYW1lKSwgJycpO1xuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlU3RhcnQgPSBuZXcgc3RhdGUuVG9rZW4oJ2h0bWxfaW5saW5lJywgJycsIDApO1xuICAgICAgICB0ZW1wbGF0ZVN0YXJ0LmNvbnRlbnQgPSBgPHRlbXBsYXRlICMke2ZpbGVuYW1lfT5gO1xuICAgICAgICB0b2tlbkFycmF5LnB1c2godGVtcGxhdGVTdGFydCk7XG5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRQYXRoID0gam9pbihjb21wb25lbnREaXIsIGZpbGVuYW1lKTtcblxuICAgICAgICBjb25zdCB7IGV4dGVuc2lvbiwgZmlsZXBhdGgsIGxhbmcsIGxpbmVzLCB0aXRsZSB9ID1cbiAgICAgICAgICByYXdQYXRoVG9Ub2tlbihyZXNvbHZlZFBhdGgpO1xuICAgICAgICAvLyBBZGQgY29kZSB0b2tlbnMgZm9yIGVhY2ggbGluZVxuICAgICAgICBjb25zdCB0b2tlbiA9IG5ldyBzdGF0ZS5Ub2tlbignZmVuY2UnLCAnY29kZScsIDApO1xuICAgICAgICB0b2tlbi5pbmZvID0gYCR7bGFuZyB8fCBleHRlbnNpb259JHtsaW5lcyA/IGB7JHtsaW5lc319YCA6ICcnfSR7XG4gICAgICAgICAgdGl0bGUgPyBgWyR7dGl0bGV9XWAgOiAnJ1xuICAgICAgICB9YDtcblxuICAgICAgICB0b2tlbi5jb250ZW50ID0gYDw8PCAke2ZpbGVwYXRofWA7XG4gICAgICAgICh0b2tlbiBhcyBhbnkpLnNyYyA9IFtyZXNvbHZlZFBhdGhdO1xuICAgICAgICB0b2tlbkFycmF5LnB1c2godG9rZW4pO1xuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlRW5kID0gbmV3IHN0YXRlLlRva2VuKCdodG1sX2lubGluZScsICcnLCAwKTtcbiAgICAgICAgdGVtcGxhdGVFbmQuY29udGVudCA9ICc8L3RlbXBsYXRlPic7XG4gICAgICAgIHRva2VuQXJyYXkucHVzaCh0ZW1wbGF0ZUVuZCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGVuZFRhZyA9IG5ldyBzdGF0ZS5Ub2tlbignaHRtbF9pbmxpbmUnLCAnJywgMCk7XG4gICAgICBlbmRUYWcuY29udGVudCA9ICc8L0RlbW9QcmV2aWV3Pic7XG4gICAgICB0b2tlbkFycmF5LnB1c2goZW5kVGFnKTtcblxuICAgICAgc3RhdGUudG9rZW5zLnNwbGljZShpbmRleCArIDEsIDAsIC4uLnRva2VuQXJyYXkpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgIC8vICAgc3RhdGUubWQucmVuZGVyZXIucmVuZGVyKHN0YXRlLnRva2Vucywgc3RhdGU/Lm9wdGlvbnMgPz8gW10sIHN0YXRlLmVudiksXG4gICAgICAvLyApO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudEhhc2goaW5wdXQ6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIgPSAxMCk6IHN0cmluZyB7XG4gIC8vIFx1NEY3Rlx1NzUyOCBTSEEtMjU2IFx1NzUxRlx1NjIxMFx1NTRDOFx1NUUwQ1x1NTAzQ1xuICBjb25zdCBoYXNoID0gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShpbnB1dCkuZGlnZXN0KCdoZXgnKTtcblxuICAvLyBcdTVDMDZcdTU0QzhcdTVFMENcdTUwM0NcdThGNkNcdTYzNjJcdTRFM0EgQmFzZTM2IFx1N0YxNlx1NzgwMVx1RkYwQ1x1NUU3Nlx1NTNENlx1NjMwN1x1NUI5QVx1OTU3Rlx1NUVBNlx1NzY4NFx1NUI1N1x1N0IyNlx1NEY1Q1x1NEUzQVx1N0VEM1x1Njc5Q1xuICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KGhhc2gsIDE2KS50b1N0cmluZygzNikuc2xpY2UoMCwgbGVuZ3RoKTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcemgubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8kd29yay9BZG1pbi12dWUvdnVlLXZiZW4tYWRtaW4vc3BhLXdlYi92dWUtdmJlbi1hZG1pbi1hbnRkL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvemgubXRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IHpoID0gZGVmaW5lQ29uZmlnKHtcbiAgZGVzY3JpcHRpb246ICdWYmVuIEFkbWluICYgXHU0RjAxXHU0RTFBXHU3RUE3XHU3QkExXHU3NDA2XHU3Q0ZCXHU3RURGXHU2ODQ2XHU2N0I2JyxcbiAgbGFuZzogJ3poLUhhbnMnLFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGRhcmtNb2RlU3dpdGNoTGFiZWw6ICdcdTRFM0JcdTk4OTgnLFxuICAgIGRhcmtNb2RlU3dpdGNoVGl0bGU6ICdcdTUyMDdcdTYzNjJcdTUyMzBcdTZERjFcdTgyNzJcdTZBMjFcdTVGMEYnLFxuICAgIGRvY0Zvb3Rlcjoge1xuICAgICAgbmV4dDogJ1x1NEUwQlx1NEUwMFx1OTg3NScsXG4gICAgICBwcmV2OiAnXHU0RTBBXHU0RTAwXHU5ODc1JyxcbiAgICB9LFxuICAgIGVkaXRMaW5rOiB7XG4gICAgICBwYXR0ZXJuOlxuICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL3ZiZW5qcy92dWUtdmJlbi1hZG1pbi9lZGl0L21haW4vZG9jcy9zcmMvOnBhdGgnLFxuICAgICAgdGV4dDogJ1x1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1XHU5NzYyJyxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgY29weXJpZ2h0OiBgQ29weXJpZ2h0IFx1MDBBOSAyMDIwLSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBWYmVuYCxcbiAgICAgIG1lc3NhZ2U6ICdcdTU3RkFcdTRFOEUgTUlUIFx1OEJCOFx1NTNFRlx1NTNEMVx1NUUwMy4nLFxuICAgIH0sXG4gICAgbGFuZ01lbnVMYWJlbDogJ1x1NTkxQVx1OEJFRFx1OEEwMCcsXG4gICAgbGFzdFVwZGF0ZWQ6IHtcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHtcbiAgICAgICAgZGF0ZVN0eWxlOiAnc2hvcnQnLFxuICAgICAgICB0aW1lU3R5bGU6ICdtZWRpdW0nLFxuICAgICAgfSxcbiAgICAgIHRleHQ6ICdcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcdTRFOEUnLFxuICAgIH0sXG4gICAgbGlnaHRNb2RlU3dpdGNoVGl0bGU6ICdcdTUyMDdcdTYzNjJcdTUyMzBcdTZENDVcdTgyNzJcdTZBMjFcdTVGMEYnLFxuICAgIG5hdjogbmF2KCksXG5cbiAgICBvdXRsaW5lOiB7XG4gICAgICBsYWJlbDogJ1x1OTg3NVx1OTc2Mlx1NUJGQ1x1ODIyQScsXG4gICAgfSxcbiAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4JyxcblxuICAgIHNpZGViYXI6IHtcbiAgICAgICcvY29tbWVyY2lhbC8nOiB7IGJhc2U6ICcvY29tbWVyY2lhbC8nLCBpdGVtczogc2lkZWJhckNvbW1lcmNpYWwoKSB9LFxuICAgICAgJy9jb21wb25lbnRzLyc6IHsgYmFzZTogJy9jb21wb25lbnRzLycsIGl0ZW1zOiBzaWRlYmFyQ29tcG9uZW50cygpIH0sXG4gICAgICAnL2d1aWRlLyc6IHsgYmFzZTogJy9ndWlkZS8nLCBpdGVtczogc2lkZWJhckd1aWRlKCkgfSxcbiAgICB9LFxuICAgIHNpZGViYXJNZW51TGFiZWw6ICdcdTgzRENcdTUzNTUnLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIHNpZGViYXJHdWlkZSgpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIHRleHQ6ICdcdTdCODBcdTRFQ0InLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdpbnRyb2R1Y3Rpb24vdmJlbicsXG4gICAgICAgICAgdGV4dDogJ1x1NTE3M1x1NEU4RSBWYmVuIEFkbWluJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdpbnRyb2R1Y3Rpb24vd2h5JyxcbiAgICAgICAgICB0ZXh0OiAnXHU0RTNBXHU0RUMwXHU0RTQ4XHU5MDA5XHU2MkU5XHU2MjExXHU0RUVDPycsXG4gICAgICAgIH0sXG4gICAgICAgIHsgbGluazogJ2ludHJvZHVjdGlvbi9xdWljay1zdGFydCcsIHRleHQ6ICdcdTVGRUJcdTkwMUZcdTVGMDBcdTU5Q0InIH0sXG4gICAgICAgIHsgbGluazogJ2ludHJvZHVjdGlvbi90aGluJywgdGV4dDogJ1x1N0NCRVx1N0I4MFx1NzI0OFx1NjcyQycgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJhc2U6ICcvJyxcbiAgICAgICAgICBsaW5rOiAnY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24nLFxuICAgICAgICAgIHRleHQ6ICdcdTdFQzRcdTRFRjZcdTY1ODdcdTY4NjMnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTU3RkFcdTc4NDAnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9jb25jZXB0JywgdGV4dDogJ1x1NTdGQVx1Nzg0MFx1Njk4Mlx1NUZGNScgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9kZXZlbG9wbWVudCcsIHRleHQ6ICdcdTY3MkNcdTU3MzBcdTVGMDBcdTUzRDEnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvcm91dGUnLCB0ZXh0OiAnXHU4REVGXHU3NTMxXHU1NDhDXHU4M0RDXHU1MzU1JyB9LFxuICAgICAgICB7IGxpbms6ICdlc3NlbnRpYWxzL3NldHRpbmdzJywgdGV4dDogJ1x1OTE0RFx1N0Y2RScgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9pY29ucycsIHRleHQ6ICdcdTU2RkVcdTY4MDcnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvc3R5bGVzJywgdGV4dDogJ1x1NjgzN1x1NUYwRicgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9leHRlcm5hbC1tb2R1bGUnLCB0ZXh0OiAnXHU1OTE2XHU5MEU4XHU2QTIxXHU1NzU3JyB9LFxuICAgICAgICB7IGxpbms6ICdlc3NlbnRpYWxzL2J1aWxkJywgdGV4dDogJ1x1Njc4NFx1NUVGQVx1NEUwRVx1OTBFOFx1N0Y3MicgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9zZXJ2ZXInLCB0ZXh0OiAnXHU2NzBEXHU1MkExXHU3QUVGXHU0RUE0XHU0RTkyXHU0RTBFXHU2NTcwXHU2MzZFTW9jaycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2REYxXHU1MTY1JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL2xvZ2luJywgdGV4dDogJ1x1NzY3Qlx1NUY1NScgfSxcbiAgICAgICAgLy8geyBsaW5rOiAnaW4tZGVwdGgvbGF5b3V0JywgdGV4dDogJ1x1NUUwM1x1NUM0MCcgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvdGhlbWUnLCB0ZXh0OiAnXHU0RTNCXHU5ODk4JyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9hY2Nlc3MnLCB0ZXh0OiAnXHU2NzQzXHU5NjUwJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9sb2NhbGUnLCB0ZXh0OiAnXHU1NkZEXHU5NjQ1XHU1MzE2JyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9mZWF0dXJlcycsIHRleHQ6ICdcdTVFMzhcdTc1MjhcdTUyOUZcdTgwRkQnIH0sXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL2NoZWNrLXVwZGF0ZXMnLCB0ZXh0OiAnXHU2OEMwXHU2N0U1XHU2NkY0XHU2NUIwJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9sb2FkaW5nJywgdGV4dDogJ1x1NTE2OFx1NUM0MGxvYWRpbmcnIH0sXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL3VpLWZyYW1ld29yaycsIHRleHQ6ICdcdTdFQzRcdTRFRjZcdTVFOTNcdTUyMDdcdTYzNjInIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NURFNVx1N0EwQicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L3N0YW5kYXJkJywgdGV4dDogJ1x1ODlDNFx1ODMwMycgfSxcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC9jbGknLCB0ZXh0OiAnQ0xJJyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L2RpcicsIHRleHQ6ICdcdTc2RUVcdTVGNTVcdThCRjRcdTY2MEUnIH0sXG4gICAgICAgIHsgbGluazogJ3Byb2plY3QvdGVzdCcsIHRleHQ6ICdcdTUzNTVcdTUxNDNcdTZENEJcdThCRDUnIH0sXG4gICAgICAgIHsgbGluazogJ3Byb2plY3QvdGFpbHdpbmRjc3MnLCB0ZXh0OiAnVGFpbHdpbmQgQ1NTJyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L2NoYW5nZXNldCcsIHRleHQ6ICdDaGFuZ2VzZXQnIH0sXG4gICAgICAgIHsgbGluazogJ3Byb2plY3Qvdml0ZScsIHRleHQ6ICdWaXRlIENvbmZpZycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1MTc2XHU0RUQ2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbGluazogJ290aGVyL3Byb2plY3QtdXBkYXRlJywgdGV4dDogJ1x1OTg3OVx1NzZFRVx1NjZGNFx1NjVCMCcgfSxcbiAgICAgICAgeyBsaW5rOiAnb3RoZXIvcmVtb3ZlLWNvZGUnLCB0ZXh0OiAnXHU3OUZCXHU5NjY0XHU0RUUzXHU3ODAxJyB9LFxuICAgICAgICB7IGxpbms6ICdvdGhlci9mYXEnLCB0ZXh0OiAnXHU1RTM4XHU4OUMxXHU5NUVFXHU5ODk4JyB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xufVxuXG5mdW5jdGlvbiBzaWRlYmFyQ29tbWVyY2lhbCgpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgbGluazogJ2NvbW11bml0eScsXG4gICAgICB0ZXh0OiAnXHU0RUE0XHU2RDQxXHU3RkE0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICd0ZWNobmljYWwtc3VwcG9ydCcsXG4gICAgICB0ZXh0OiAnXHU2MjgwXHU2NzJGXHU2NTJGXHU2MzAxJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICdjdXN0b21pemVkJyxcbiAgICAgIHRleHQ6ICdcdTVCOUFcdTUyMzZcdTVGMDBcdTUzRDEnLFxuICAgIH0sXG4gIF07XG59XG5cbmZ1bmN0aW9uIHNpZGViYXJDb21wb25lbnRzKCk6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaW50cm9kdWN0aW9uJyxcbiAgICAgICAgICB0ZXh0OiAnXHU0RUNCXHU3RUNEJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgdGV4dDogJ1x1NUUwM1x1NUM0MFx1N0VDNFx1NEVGNicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2xheW91dC11aS9wYWdlJyxcbiAgICAgICAgICB0ZXh0OiAnUGFnZSBcdTk4NzVcdTk3NjInLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICB0ZXh0OiAnXHU5MDFBXHU3NTI4XHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnY29tbW9uLXVpL3ZiZW4tYXBpLWNvbXBvbmVudCcsXG4gICAgICAgICAgdGV4dDogJ0FwaUNvbXBvbmVudCBBcGlcdTdFQzRcdTRFRjZcdTUzMDVcdTg4QzVcdTU2NjgnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2NvbW1vbi11aS92YmVuLWFsZXJ0JyxcbiAgICAgICAgICB0ZXh0OiAnQWxlcnQgXHU4RjdCXHU5MUNGXHU2M0QwXHU3OTNBXHU2ODQ2JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdjb21tb24tdWkvdmJlbi1tb2RhbCcsXG4gICAgICAgICAgdGV4dDogJ01vZGFsIFx1NkEyMVx1NjAwMVx1Njg0NicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnY29tbW9uLXVpL3ZiZW4tZHJhd2VyJyxcbiAgICAgICAgICB0ZXh0OiAnRHJhd2VyIFx1NjJCRFx1NUM0OScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnY29tbW9uLXVpL3ZiZW4tZm9ybScsXG4gICAgICAgICAgdGV4dDogJ0Zvcm0gXHU4ODY4XHU1MzU1JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdjb21tb24tdWkvdmJlbi12eGUtdGFibGUnLFxuICAgICAgICAgIHRleHQ6ICdWeGUgVGFibGUgXHU4ODY4XHU2ODNDJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdjb21tb24tdWkvdmJlbi1jb3VudC10by1hbmltYXRvcicsXG4gICAgICAgICAgdGV4dDogJ0NvdW50VG9BbmltYXRvciBcdTY1NzBcdTVCNTdcdTUyQThcdTc1M0InLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2NvbW1vbi11aS92YmVuLWVsbGlwc2lzLXRleHQnLFxuICAgICAgICAgIHRleHQ6ICdFbGxpcHNpc1RleHQgXHU3NzAxXHU3NTY1XHU2NTg3XHU2NzJDJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gbmF2KCk6IERlZmF1bHRUaGVtZS5OYXZJdGVtW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGFjdGl2ZU1hdGNoOiAnXi8oZ3VpZGV8Y29tcG9uZW50cykvJyxcbiAgICAgIHRleHQ6ICdcdTY1ODdcdTY4NjMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGFjdGl2ZU1hdGNoOiAnXi9ndWlkZS8nLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGUvaW50cm9kdWN0aW9uL3ZiZW4nLFxuICAgICAgICAgIHRleHQ6ICdcdTYzMDdcdTUzNTcnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYWN0aXZlTWF0Y2g6ICdeL2NvbXBvbmVudHMvJyxcbiAgICAgICAgICBsaW5rOiAnL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uJyxcbiAgICAgICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTUzODZcdTUzRjJcdTcyNDhcdTY3MkMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2RvYy52dmJpbi5jbicsXG4gICAgICAgICAgICAgIHRleHQ6ICcyLnhcdTcyNDhcdTY3MkNcdTY1ODdcdTY4NjMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTZGMTRcdTc5M0EnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdWYmVuIEFkbWluJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cudmJlbi5wcm8nLFxuICAgICAgICAgICAgICB0ZXh0OiAnXHU2RjE0XHU3OTNBXHU3MjQ4XHU2NzJDJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2FudC52YmVuLnBybycsXG4gICAgICAgICAgICAgIHRleHQ6ICdBbnQgRGVzaWduIFZ1ZSBcdTcyNDhcdTY3MkMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vbmFpdmUudmJlbi5wcm8nLFxuICAgICAgICAgICAgICB0ZXh0OiAnTmFpdmUgXHU3MjQ4XHU2NzJDJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2VsZS52YmVuLnBybycsXG4gICAgICAgICAgICAgIHRleHQ6ICdFbGVtZW50IFBsdXNcdTcyNDhcdTY3MkMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NTE3Nlx1NEVENicsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vdmJlbi52dmJpbi5jbicsXG4gICAgICAgICAgICAgIHRleHQ6ICdWYmVuIEFkbWluIDIueCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogdmVyc2lvbixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZiZW5qcy92dWUtdmJlbi1hZG1pbi9yZWxlYXNlcycsXG4gICAgICAgICAgdGV4dDogJ1x1NjZGNFx1NjVCMFx1NjVFNVx1NUZENycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL29yZ3MvdmJlbmpzL3Byb2plY3RzLzUnLFxuICAgICAgICAgIHRleHQ6ICdcdThERUZcdTdFQkZcdTU2RkUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS92YmVuanMvdnVlLXZiZW4tYWRtaW4vYmxvYi9tYWluLy5naXRodWIvY29udHJpYnV0aW5nLm1kJyxcbiAgICAgICAgICB0ZXh0OiAnXHU4RDIxXHU3MzJFJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAnL2NvbW1lcmNpYWwvdGVjaG5pY2FsLXN1cHBvcnQnLFxuICAgICAgdGV4dDogJ1x1RDgzRVx1REQ4NCBcdTYyODBcdTY3MkZcdTY1MkZcdTYzMDEnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGluazogJy9zcG9uc29yL3BlcnNvbmFsJyxcbiAgICAgIHRleHQ6ICdcdTI3MjggXHU4RDVFXHU1MkE5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICcvY29tbWVyY2lhbC9jb21tdW5pdHknLFxuICAgICAgdGV4dDogJ1x1RDgzRFx1REM2OFx1MjAwRFx1RDgzRFx1REM2Nlx1MjAwRFx1RDgzRFx1REM2NiBcdTRFQTRcdTZENDFcdTdGQTQnLFxuICAgICAgLy8gaXRlbXM6IFtcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGxpbms6ICdodHRwczovL3F1bi5xcS5jb20vcXF3ZWIvcXVucHJvL3NoYXJlP193dj0zJl93d3Y9MTI4JmFwcENoYW5uZWw9c2hhcmUmaW52aXRlQ29kZT0yMnlTemo3cEtpdyZidXNpbmVzc1R5cGU9OSZmcm9tPTI0NjYxMCZiaXo9a2EmbWFpblNvdXJjZUlkPXNoYXJlJnN1YlNvdXJjZUlkPW90aGVycyZqdW1wc291cmNlPXNob3J0dXJsIy9wYycsXG4gICAgICAvLyAgICAgdGV4dDogJ1FRXHU5ODkxXHU5MDUzJyxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGxpbms6ICdodHRwczovL3FtLnFxLmNvbS9jZ2ktYmluL3FtL3FyP193dj0xMDI3Jms9bWpabWxoZ1Z6elV4dmR4bGxCNkMxdkhwWDhPOFFSTDAmYXV0aEtleT1EQmRGYkJ3RVJtZmFLWTk1SnZSV3FMQ0pJUkdKQW1LeVpicnB6WjQxRUtETVo1U1I2TWZiak9CYWFOUk43M2ZyJm5vdmVyaWZ5PTAmZ3JvdXBfY29kZT00Mjg2MTA5JyxcbiAgICAgIC8vICAgICB0ZXh0OiAnUVFcdTdGQTQnLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgbGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy9WVTYyalRlY2FkJyxcbiAgICAgIC8vICAgICB0ZXh0OiAnRGlzY29yZCcsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyBdLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgbGluazogJy9mcmllbmQtbGlua3MvJyxcbiAgICAvLyAgIHRleHQ6ICdcdUQ4M0VcdUREMUQgXHU1M0NCXHU2MEM1XHU5NEZFXHU2M0E1JyxcbiAgICAvLyB9LFxuICBdO1xufVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoOiBEZWZhdWx0VGhlbWUuQWxnb2xpYVNlYXJjaE9wdGlvbnNbJ2xvY2FsZXMnXSA9IHtcbiAgcm9vdDoge1xuICAgIHBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcbiAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBidXR0b25BcmlhTGFiZWw6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnLFxuICAgICAgICBidXR0b25UZXh0OiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcbiAgICAgIH0sXG4gICAgICBtb2RhbDoge1xuICAgICAgICBlcnJvclNjcmVlbjoge1xuICAgICAgICAgIGhlbHBUZXh0OiAnXHU0RjYwXHU1M0VGXHU4MEZEXHU5NzAwXHU4OTgxXHU2OEMwXHU2N0U1XHU0RjYwXHU3Njg0XHU3RjUxXHU3RURDXHU4RkRFXHU2M0E1JyxcbiAgICAgICAgICB0aXRsZVRleHQ6ICdcdTY1RTBcdTZDRDVcdTgzQjdcdTUzRDZcdTdFRDNcdTY3OUMnLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICBjbG9zZVRleHQ6ICdcdTUxNzNcdTk1RUQnLFxuICAgICAgICAgIG5hdmlnYXRlVGV4dDogJ1x1NTIwN1x1NjM2MicsXG4gICAgICAgICAgc2VhcmNoQnlUZXh0OiAnXHU2NDFDXHU3RDIyXHU2M0QwXHU0RjlCXHU4MDA1JyxcbiAgICAgICAgICBzZWxlY3RUZXh0OiAnXHU5MDA5XHU2MkU5JyxcbiAgICAgICAgfSxcbiAgICAgICAgbm9SZXN1bHRzU2NyZWVuOiB7XG4gICAgICAgICAgbm9SZXN1bHRzVGV4dDogJ1x1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5QycsXG4gICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogJ1x1NzBCOVx1NTFGQlx1NTNDRFx1OTk4OCcsXG4gICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0OiAnXHU0RjYwXHU4QkE0XHU0RTNBXHU4QkU1XHU2N0U1XHU4QkUyXHU1RTk0XHU4QkU1XHU2NzA5XHU3RUQzXHU2NzlDXHVGRjFGJyxcbiAgICAgICAgICBzdWdnZXN0ZWRRdWVyeVRleHQ6ICdcdTRGNjBcdTUzRUZcdTRFRTVcdTVDMURcdThCRDVcdTY3RTVcdThCRTInLFxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2hCb3g6IHtcbiAgICAgICAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICdcdTUzRDZcdTZEODgnLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdcdTUzRDZcdTZEODgnLFxuICAgICAgICAgIHJlc2V0QnV0dG9uQXJpYUxhYmVsOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcbiAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRTY3JlZW46IHtcbiAgICAgICAgICBmYXZvcml0ZVNlYXJjaGVzVGl0bGU6ICdcdTY1MzZcdTg1Q0YnLFxuICAgICAgICAgIG5vUmVjZW50U2VhcmNoZXNUZXh0OiAnXHU2Q0ExXHU2NzA5XHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcbiAgICAgICAgICByZWNlbnRTZWFyY2hlc1RpdGxlOiAnXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcbiAgICAgICAgICByZW1vdmVGYXZvcml0ZVNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RUNFXHU2NTM2XHU4NUNGXHU0RTJEXHU3OUZCXHU5NjY0JyxcbiAgICAgICAgICByZW1vdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEVDRVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlx1NEUyRFx1NzlGQlx1OTY2NCcsXG4gICAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RkREXHU1QjU4XHU4MUYzXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNiLFNBQVMsZUFBZTtBQUM5YyxTQUFTLDZCQUE2Qjs7O0FDQ3RDLFNBQVMsb0JBQW9COzs7QUNBM0IsY0FBVzs7O0FESU4sSUFBTSxLQUFLLGFBQWE7QUFBQSxFQUM3QixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsSUFDWCxxQkFBcUI7QUFBQSxJQUNyQixxQkFBcUI7QUFBQSxJQUNyQixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsU0FDRTtBQUFBLE1BQ0YsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLFdBQVcsd0JBQW9CLG9CQUFJLEtBQUssR0FBRSxZQUFZLENBQUM7QUFBQSxNQUN2RCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsZUFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLE1BQ1gsZUFBZTtBQUFBLFFBQ2IsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxzQkFBc0I7QUFBQSxJQUN0QixLQUFLLElBQUk7QUFBQSxJQUNULFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQSxr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QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLFNBQVMsTUFBOEI7QUFDckMsU0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLGFBQWE7QUFBQSxNQUNiLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1BO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFB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O0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFlUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLRjtBQUNGO0FBRU8sSUFBTSxTQUF1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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT2hEO0FBQ0Y7QUFFQSxTQUFTLE1BQWtCO0FBQ3pCLFNBQU87QUFBQSxJQUNMLHNCQUFzQjtBQUFBLElBQ3RCLFVBQVU7QUFBQSxNQUNSLGFBQ0U7QUFBQSxNQUNGLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLE1BQ0EsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFFBQVEsUUFBUSxRQUFRLElBQUksR0FBRyxpQkFBaUI7QUFBQSxJQUNoRCxjQUFjO0FBQUEsSUFDZCxTQUFTO0FBQUEsTUFDUCxjQUFjLENBQUMsMENBQTBDO0FBQUEsTUFDekQsK0JBQStCLElBQUksT0FBTztBQUFBLElBQzVDO0FBQUEsRUFDRjtBQUNGOzs7QUhyTEEsSUFBTyxpQkFBUTtBQUFBLEVBQ2Isc0JBQXNCO0FBQUEsSUFDcEIsR0FBRztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLFFBQ0YsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sR0FBRztBQUFBLE1BQ0w7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLEdBQUc7QUFBQSxNQUNMO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogWyJVUkwiLCAiZGVmaW5lQ29uZmlnIiwgImxvYWRFbnYiLCAicmVzb2x2ZSIsICJmcyIsICJyZWFkUGFja2FnZUpTT04iLCAicmVhZFBhY2thZ2VKU09OIiwgInJlYWRQYWNrYWdlSlNPTiIsICJjb2xvcnMiLCAiY29sb3JzIiwgInJlYWRQYWNrYWdlSlNPTiIsICJkZWZpbmVDb25maWciLCAibWVyZ2VDb25maWciLCAiZGVmaW5lQ29uZmlnIiwgImpvaW4iLCAiam9pbiIsICJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIiwgIm5hdiIsICJzaWRlYmFyQ29tbWVyY2lhbCIsICJzaWRlYmFyR3VpZGUiLCAiZGVmaW5lQ29uZmlnIiwgIlVSTCJdCn0K
