// .vitepress/config/index.mts
import { withPwa } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/@vite-pwa+vitepress@1.0.1_v_22711a1074ec998f25a9bd3a76aa8589/node_modules/@vite-pwa/vitepress/dist/index.mjs";
import { defineConfigWithTheme } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_7b553e681b6ee23b18b4a6964646ea73/node_modules/vitepress/dist/node/index.js";

// .vitepress/config/en.mts
import { defineConfig } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_7b553e681b6ee23b18b4a6964646ea73/node_modules/vitepress/dist/node/index.js";

// ../package.json
var version = "5.5.9";

// .vitepress/config/en.mts
var en = defineConfig({
  description: "Vben Admin Antd - Ant Design Vue version SPA independently split from Vue Vben Admin v5.5.9",
  lang: "en-US",
  themeConfig: {
    darkModeSwitchLabel: "Theme",
    darkModeSwitchTitle: "Switch to Dark Mode",
    docFooter: {
      next: "Next Page",
      prev: "Previous Page"
    },
    editLink: {
      pattern: "https://github.com/Ducr/vue-vben-admin-antd/edit/main/docs/src/:path",
      text: "Edit this page on GitHub"
    },
    footer: {
      copyright: `Copyright \xA9 2020-${(/* @__PURE__ */ new Date()).getFullYear()} Ducr`,
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
              link: "https://ducrong.com/vue-vben-admin-antd",
              text: "Ant Design Vue Version (Current)"
            },
            {
              link: "https://ducrong.com/vue-vben-admin-ele",
              text: "Element Plus Version"
            },
            {
              link: "https://ducrong.com/vue-vben-admin-naive",
              text: "Naive UI Version"
            },
            {
              link: "https://ducrong.com/vue-vben-admin-tdesign",
              text: "TDesign Version"
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
          link: "https://github.com/Ducr/vue-vben-admin-antd/releases",
          text: "Changelog"
        },
        {
          link: "https://github.com/Ducr/vue-vben-admin-antd",
          text: "GitHub Repository"
        },
        {
          link: "https://github.com/Ducr/vue-vben-admin-antd/blob/main/.github/contributing.md",
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
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";
import {
  viteArchiverPlugin,
  viteVxeTableImportsPlugin
} from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/internal/vite-config/dist/index.mjs";
import {
  GitChangelog,
  GitChangelogMarkdownSection
} from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/@nolebase+vitepress-plugin-_ddb56cb1bb7ffd0ad5e320e216acbe92/node_modules/@nolebase/vitepress-plugin-git-changelog/dist/vite/index.mjs";
import tailwind from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/tailwindcss@3.4.18_yaml@2.8.1/node_modules/tailwindcss/lib/index.js";
import { defineConfig as defineConfig3, postcssIsolateStyles } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_7b553e681b6ee23b18b4a6964646ea73/node_modules/vitepress/dist/node/index.js";
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vitepress-plugin-group-icon_91375fb5895993139e845db41dbafb6f/node_modules/vitepress-plugin-group-icons/dist/index.js";

// .vitepress/config/plugins/demo-preview.ts
import crypto from "node:crypto";
import { readdirSync } from "node:fs";
import { join } from "node:path";
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
      const componentDir = join(process.cwd(), "src", dir).replaceAll(
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
        const resolvedPath = join(componentDir, filename);
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
import { defineConfig as defineConfig2 } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-antd/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_7b553e681b6ee23b18b4a6964646ea73/node_modules/vitepress/dist/node/index.js";
var zh = defineConfig2({
  description: "Vben Admin Antd - \u57FA\u4E8E Vue Vben Admin v5.5.9 \u72EC\u7ACB\u62C6\u5206\u7684 Ant Design Vue \u7248\u672C\u5355\u9875\u5E94\u7528\uFF08SPA\uFF09",
  lang: "zh-Hans",
  themeConfig: {
    darkModeSwitchLabel: "\u4E3B\u9898",
    darkModeSwitchTitle: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F",
    docFooter: {
      next: "\u4E0B\u4E00\u9875",
      prev: "\u4E0A\u4E00\u9875"
    },
    editLink: {
      pattern: "https://github.com/Ducr/vue-vben-admin-antd/edit/main/docs/src/:path",
      text: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875\u9762"
    },
    footer: {
      copyright: `Copyright \xA9 2020-${(/* @__PURE__ */ new Date()).getFullYear()} Ducr`,
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
              link: "https://ducrong.com/vue-vben-admin-antd",
              text: "Ant Design Vue \u7248\u672C\uFF08\u5F53\u524D\uFF09"
            },
            {
              link: "https://ducrong.com/vue-vben-admin-ele",
              text: "Element Plus \u7248\u672C"
            },
            {
              link: "https://ducrong.com/vue-vben-admin-naive",
              text: "Naive UI \u7248\u672C"
            },
            {
              link: "https://ducrong.com/vue-vben-admin-tdesign",
              text: "TDesign \u7248\u672C"
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
          link: "https://github.com/Ducr/vue-vben-admin-antd/releases",
          text: "\u66F4\u65B0\u65E5\u5FD7"
        },
        {
          link: "https://github.com/Ducr/vue-vben-admin-antd",
          text: "GitHub \u4ED3\u5E93"
        },
        {
          link: "https://github.com/Ducr/vue-vben-admin-antd/blob/main/.github/contributing.md",
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
var shared = defineConfig3({
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
    siteTitle: "Vben Admin Antd",
    socialLinks: [
      { icon: "github", link: "https://github.com/Ducr/vue-vben-admin-antd" }
    ]
  },
  title: "Vben Admin Antd",
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
          find: "@vben/vite-config",
          replacement: fileURLToPath(new URL("../../../internal/vite-config/src/index.ts", __vite_injected_original_import_meta_url))
        }
      ]
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
        repoURL: () => "https://github.com/Ducr/vue-vben-admin-antd"
      }),
      GitChangelogMarkdownSection(),
      groupIconVitePlugin(),
      viteArchiverPlugin({ outputDir: ".vitepress" }),
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
      external: ["@vue/repl"]
    }
  }
});
function head() {
  return [
    ["meta", { content: "Ducr", name: "author" }],
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
      description: "Vben Admin Antd is an Ant Design Vue version SPA independently split from Vue Vben Admin v5.5.9. A modern admin dashboard template based on Vue 3.",
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
      name: "Vben Admin Antd Doc",
      short_name: "vben_admin_antd_doc",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcvaW5kZXgubXRzIiwgIi52aXRlcHJlc3MvY29uZmlnL2VuLm10cyIsICIuLi9wYWNrYWdlLmpzb24iLCAiLnZpdGVwcmVzcy9jb25maWcvc2hhcmVkLm10cyIsICIudml0ZXByZXNzL2NvbmZpZy9wbHVnaW5zL2RlbW8tcHJldmlldy50cyIsICIudml0ZXByZXNzL2NvbmZpZy96aC5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLWFudGRcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxpbmRleC5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9pbmRleC5tdHNcIjtpbXBvcnQgeyB3aXRoUHdhIH0gZnJvbSAnQHZpdGUtcHdhL3ZpdGVwcmVzcyc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWdXaXRoVGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyBlbiB9IGZyb20gJy4vZW4ubXRzJztcbmltcG9ydCB7IHNoYXJlZCB9IGZyb20gJy4vc2hhcmVkLm10cyc7XG5pbXBvcnQgeyB6aCB9IGZyb20gJy4vemgubXRzJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFB3YShcbiAgZGVmaW5lQ29uZmlnV2l0aFRoZW1lKHtcbiAgICAuLi5zaGFyZWQsXG4gICAgbG9jYWxlczoge1xuICAgICAgZW46IHtcbiAgICAgICAgbGFiZWw6ICdFbmdsaXNoJyxcbiAgICAgICAgbGFuZzogJ2VuJyxcbiAgICAgICAgbGluazogJy9lbi8nLFxuICAgICAgICAuLi5lbixcbiAgICAgIH0sXG4gICAgICByb290OiB7XG4gICAgICAgIGxhYmVsOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcbiAgICAgICAgbGFuZzogJ3poLUNOJyxcbiAgICAgICAgLi4uemgsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcZW4ubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8kd29yay9BZG1pbi12dWUvdnVlLXZiZW4tYWRtaW4vc3BhLXdlYi92dWUtdmJlbi1hZG1pbi1hbnRkL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvZW4ubXRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IGVuID0gZGVmaW5lQ29uZmlnKHtcbiAgZGVzY3JpcHRpb246ICdWYmVuIEFkbWluIEFudGQgLSBBbnQgRGVzaWduIFZ1ZSB2ZXJzaW9uIFNQQSBpbmRlcGVuZGVudGx5IHNwbGl0IGZyb20gVnVlIFZiZW4gQWRtaW4gdjUuNS45JyxcbiAgbGFuZzogJ2VuLVVTJyxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBkYXJrTW9kZVN3aXRjaExhYmVsOiAnVGhlbWUnLFxuICAgIGRhcmtNb2RlU3dpdGNoVGl0bGU6ICdTd2l0Y2ggdG8gRGFyayBNb2RlJyxcbiAgICBkb2NGb290ZXI6IHtcbiAgICAgIG5leHQ6ICdOZXh0IFBhZ2UnLFxuICAgICAgcHJldjogJ1ByZXZpb3VzIFBhZ2UnLFxuICAgIH0sXG4gICAgZWRpdExpbms6IHtcbiAgICAgIHBhdHRlcm46XG4gICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vRHVjci92dWUtdmJlbi1hZG1pbi1hbnRkL2VkaXQvbWFpbi9kb2NzL3NyYy86cGF0aCcsXG4gICAgICB0ZXh0OiAnRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViJyxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgY29weXJpZ2h0OiBgQ29weXJpZ2h0IFx1MDBBOSAyMDIwLSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBEdWNyYCxcbiAgICAgIG1lc3NhZ2U6ICdSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuJyxcbiAgICB9LFxuICAgIGxhbmdNZW51TGFiZWw6ICdMYW5ndWFnZScsXG4gICAgbGFzdFVwZGF0ZWQ6IHtcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHtcbiAgICAgICAgZGF0ZVN0eWxlOiAnc2hvcnQnLFxuICAgICAgICB0aW1lU3R5bGU6ICdtZWRpdW0nLFxuICAgICAgfSxcbiAgICAgIHRleHQ6ICdMYXN0IHVwZGF0ZWQgb24nLFxuICAgIH0sXG4gICAgbGlnaHRNb2RlU3dpdGNoVGl0bGU6ICdTd2l0Y2ggdG8gTGlnaHQgTW9kZScsXG4gICAgbmF2OiBuYXYoKSxcbiAgICBvdXRsaW5lOiB7XG4gICAgICBsYWJlbDogJ05hdmlnYXRlJyxcbiAgICB9LFxuICAgIHJldHVyblRvVG9wTGFiZWw6ICdCYWNrIHRvIHRvcCcsXG4gICAgc2lkZWJhcjoge1xuICAgICAgJy9lbi9jb21tZXJjaWFsLyc6IHtcbiAgICAgICAgYmFzZTogJy9lbi9jb21tZXJjaWFsLycsXG4gICAgICAgIGl0ZW1zOiBzaWRlYmFyQ29tbWVyY2lhbCgpLFxuICAgICAgfSxcbiAgICAgICcvZW4vZ3VpZGUvJzogeyBiYXNlOiAnL2VuL2d1aWRlLycsIGl0ZW1zOiBzaWRlYmFyR3VpZGUoKSB9LFxuICAgIH0sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gc2lkZWJhckd1aWRlKCk6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgdGV4dDogJ0ludHJvZHVjdGlvbicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2ludHJvZHVjdGlvbi92YmVuJyxcbiAgICAgICAgICB0ZXh0OiAnQWJvdXQgVmJlbiBBZG1pbicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaW50cm9kdWN0aW9uL3doeScsXG4gICAgICAgICAgdGV4dDogJ1doeSBDaG9vc2UgVXM/JyxcbiAgICAgICAgfSxcbiAgICAgICAgeyBsaW5rOiAnaW50cm9kdWN0aW9uL3F1aWNrLXN0YXJ0JywgdGV4dDogJ1F1aWNrIFN0YXJ0JyB9LFxuICAgICAgICB7IGxpbms6ICdpbnRyb2R1Y3Rpb24vdGhpbicsIHRleHQ6ICdMaXRlIFZlcnNpb24nIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0Jhc2ljcycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IGxpbms6ICdlc3NlbnRpYWxzL2NvbmNlcHQnLCB0ZXh0OiAnQmFzaWMgQ29uY2VwdHMnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvZGV2ZWxvcG1lbnQnLCB0ZXh0OiAnTG9jYWwgRGV2ZWxvcG1lbnQnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvcm91dGUnLCB0ZXh0OiAnUm91dGluZyBhbmQgTWVudScgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9zZXR0aW5ncycsIHRleHQ6ICdDb25maWd1cmF0aW9uJyB9LFxuICAgICAgICB7IGxpbms6ICdlc3NlbnRpYWxzL2ljb25zJywgdGV4dDogJ0ljb25zJyB9LFxuICAgICAgICB7IGxpbms6ICdlc3NlbnRpYWxzL3N0eWxlcycsIHRleHQ6ICdTdHlsZXMnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvZXh0ZXJuYWwtbW9kdWxlJywgdGV4dDogJ0V4dGVybmFsIE1vZHVsZXMnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvYnVpbGQnLCB0ZXh0OiAnQnVpbGQgYW5kIERlcGxveW1lbnQnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvc2VydmVyJywgdGV4dDogJ1NlcnZlciBJbnRlcmFjdGlvbiBhbmQgRGF0YSBNb2NrJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdBZHZhbmNlZCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9sb2dpbicsIHRleHQ6ICdMb2dpbicgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvdGhlbWUnLCB0ZXh0OiAnVGhlbWUnIH0sXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL2FjY2VzcycsIHRleHQ6ICdBY2Nlc3MgQ29udHJvbCcgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvbG9jYWxlJywgdGV4dDogJ0ludGVybmF0aW9uYWxpemF0aW9uJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9mZWF0dXJlcycsIHRleHQ6ICdDb21tb24gRmVhdHVyZXMnIH0sXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL2NoZWNrLXVwZGF0ZXMnLCB0ZXh0OiAnQ2hlY2sgVXBkYXRlcycgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvbG9hZGluZycsIHRleHQ6ICdHbG9iYWwgTG9hZGluZycgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvdWktZnJhbWV3b3JrJywgdGV4dDogJ1VJIEZyYW1ld29yayBTd2l0Y2hpbmcnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0VuZ2luZWVyaW5nJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbGluazogJ3Byb2plY3Qvc3RhbmRhcmQnLCB0ZXh0OiAnU3RhbmRhcmRzJyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L2NsaScsIHRleHQ6ICdDTEknIH0sXG4gICAgICAgIHsgbGluazogJ3Byb2plY3QvZGlyJywgdGV4dDogJ0RpcmVjdG9yeSBFeHBsYW5hdGlvbicgfSxcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC90ZXN0JywgdGV4dDogJ1VuaXQgVGVzdGluZycgfSxcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC90YWlsd2luZGNzcycsIHRleHQ6ICdUYWlsd2luZCBDU1MnIH0sXG4gICAgICAgIHsgbGluazogJ3Byb2plY3QvY2hhbmdlc2V0JywgdGV4dDogJ0NoYW5nZXNldCcgfSxcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC92aXRlJywgdGV4dDogJ1ZpdGUgQ29uZmlnJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdPdGhlcnMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyBsaW5rOiAnb3RoZXIvcHJvamVjdC11cGRhdGUnLCB0ZXh0OiAnUHJvamVjdCBVcGRhdGUnIH0sXG4gICAgICAgIHsgbGluazogJ290aGVyL3JlbW92ZS1jb2RlJywgdGV4dDogJ1JlbW92ZSBDb2RlJyB9LFxuICAgICAgICB7IGxpbms6ICdvdGhlci9mYXEnLCB0ZXh0OiAnRkFRJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xufVxuXG5mdW5jdGlvbiBzaWRlYmFyQ29tbWVyY2lhbCgpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgbGluazogJ2NvbW11bml0eScsXG4gICAgICB0ZXh0OiAnQ29tbXVuaXR5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICd0ZWNobmljYWwtc3VwcG9ydCcsXG4gICAgICB0ZXh0OiAnVGVjaG5pY2FsLXN1cHBvcnQnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGluazogJ2N1c3RvbWl6ZWQnLFxuICAgICAgdGV4dDogJ0N1c3RvbWl6ZWQnLFxuICAgIH0sXG4gIF07XG59XG5cbmZ1bmN0aW9uIG5hdigpOiBEZWZhdWx0VGhlbWUuTmF2SXRlbVtdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBhY3RpdmVNYXRjaDogJ14vZW4vKGd1aWRlfGNvbXBvbmVudHMpLycsXG4gICAgICB0ZXh0OiAnRG9jJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBhY3RpdmVNYXRjaDogJ14vZW4vZ3VpZGUvJyxcbiAgICAgICAgICBsaW5rOiAnL2VuL2d1aWRlL2ludHJvZHVjdGlvbi92YmVuJyxcbiAgICAgICAgICB0ZXh0OiAnR3VpZGUnLFxuICAgICAgICB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgYWN0aXZlTWF0Y2g6ICdeL2VuL2NvbXBvbmVudHMvJyxcbiAgICAgICAgLy8gICBsaW5rOiAnL2VuL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uJyxcbiAgICAgICAgLy8gICB0ZXh0OiAnQ29tcG9uZW50cycsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSGlzdG9yaWNhbCBWZXJzaW9ucycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZG9jLnZ2YmluLmNuJyxcbiAgICAgICAgICAgICAgdGV4dDogJzIueCBWZXJzaW9uIERvY3VtZW50YXRpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdEZW1vJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnVmJlbiBBZG1pbicsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZHVjcm9uZy5jb20vdnVlLXZiZW4tYWRtaW4tYW50ZCcsXG4gICAgICAgICAgICAgIHRleHQ6ICdBbnQgRGVzaWduIFZ1ZSBWZXJzaW9uIChDdXJyZW50KScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kdWNyb25nLmNvbS92dWUtdmJlbi1hZG1pbi1lbGUnLFxuICAgICAgICAgICAgICB0ZXh0OiAnRWxlbWVudCBQbHVzIFZlcnNpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZHVjcm9uZy5jb20vdnVlLXZiZW4tYWRtaW4tbmFpdmUnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTmFpdmUgVUkgVmVyc2lvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kdWNyb25nLmNvbS92dWUtdmJlbi1hZG1pbi10ZGVzaWduJyxcbiAgICAgICAgICAgICAgdGV4dDogJ1REZXNpZ24gVmVyc2lvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnT3RoZXJzJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly92YmVuLnZ2YmluLmNuJyxcbiAgICAgICAgICAgICAgdGV4dDogJ1ZiZW4gQWRtaW4gMi54JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiB2ZXJzaW9uLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vRHVjci92dWUtdmJlbi1hZG1pbi1hbnRkL3JlbGVhc2VzJyxcbiAgICAgICAgICB0ZXh0OiAnQ2hhbmdlbG9nJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vRHVjci92dWUtdmJlbi1hZG1pbi1hbnRkJyxcbiAgICAgICAgICB0ZXh0OiAnR2l0SHViIFJlcG9zaXRvcnknLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9EdWNyL3Z1ZS12YmVuLWFkbWluLWFudGQvYmxvYi9tYWluLy5naXRodWIvY29udHJpYnV0aW5nLm1kJyxcbiAgICAgICAgICB0ZXh0OiAnQ29udHJpYnV0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAnL2NvbW1lcmNpYWwvdGVjaG5pY2FsLXN1cHBvcnQnLFxuICAgICAgdGV4dDogJ1x1RDgzRVx1REQ4NCBUZWNoIFN1cHBvcnQnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGluazogJy9zcG9uc29yL3BlcnNvbmFsJyxcbiAgICAgIHRleHQ6ICdcdTI3MjggU3BvbnNvcicsXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAnL2NvbW1lcmNpYWwvY29tbXVuaXR5JyxcbiAgICAgIHRleHQ6ICdcdUQ4M0RcdURDNjhcdTIwMERcdUQ4M0RcdURDNjZcdTIwMERcdUQ4M0RcdURDNjYgQ29tbXVuaXR5JyxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIGxpbms6ICcvZnJpZW5kLWxpbmtzLycsXG4gICAgLy8gICB0ZXh0OiAnXHVEODNFXHVERDFEIEZyaWVuZCBMaW5rcycsXG4gICAgLy8gfSxcbiAgXTtcbn1cbiIsICJ7XG4gIFwibmFtZVwiOiBcInZ1ZS12YmVuLWFkbWluLWFudGRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiNS41LjlcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlx1NTdGQVx1NEU4RSBWdWUgVmJlbiBBZG1pbiB2NS41LjkgXHU3MkVDXHU3QUNCXHU2MkM2XHU1MjA2XHU3Njg0IEFudCBEZXNpZ24gVnVlIFx1NzI0OFx1NjcyQ1x1NTM1NVx1OTg3NVx1NUU5NFx1NzUyOFx1RkYwOFNQQVx1RkYwOVx1RkYwQ1x1NUI4Q1x1NTE2OFx1ODEzMVx1NzlCQiBtb25vcmVwbyBcdTRGOURcdThENTZcdUZGMENcdTUzRUZcdTcyRUNcdTdBQ0JcdTkwRThcdTdGNzJcdTU0OENcdTUzRDFcdTVFMDNcdTMwMDJcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2R1Y3JvbmcuY29tL3Z1ZS12YmVuLWFkbWluLWFudGRcIixcbiAgXCJidWdzXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0R1Y3IvdnVlLXZiZW4tYWRtaW4tYW50ZC9pc3N1ZXNcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vRHVjci92dWUtdmJlbi1hZG1pbi1hbnRkLmdpdFwiXG4gIH0sXG4gIFwiYXV0aG9yXCI6IHtcbiAgICBcIm5hbWVcIjogXCJEdWNyXCIsXG4gICAgXCJlbWFpbFwiOiBcImR1Y3JvbmdAMTI2LmNvbVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0R1Y3JcIlxuICB9LFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwidml0ZSBidWlsZCAtLW1vZGUgcHJvZHVjdGlvblwiLFxuICAgIFwiYnVpbGQ6YW5hbHl6ZVwiOiBcInZpdGUgYnVpbGQgLS1tb2RlIGFuYWx5emVcIixcbiAgICBcImNoYW5nZXNldFwiOiBcImNoYW5nZXNldFwiLFxuICAgIFwiZGV2XCI6IFwidml0ZSAtLW1vZGUgZGV2ZWxvcG1lbnRcIixcbiAgICBcImRldjpkb2NzXCI6IFwicG5wbSAtLWZpbHRlciBAdmJlbi9kb2NzIHJ1biBkZXZcIixcbiAgICBcImRldjphbGxcIjogXCJwbnBtIHJ1biBkZXYgJiBwbnBtIHJ1biBkZXY6ZG9jc1wiLFxuICAgIFwiYnVpbGQ6ZG9jc1wiOiBcInBucG0gLS1maWx0ZXIgQHZiZW4vZG9jcyBydW4gYnVpbGRcIixcbiAgICBcInByZWRldjpkb2NzXCI6IFwiY2QgaW50ZXJuYWwvbm9kZS11dGlscyAmJiBucHggdW5idWlsZCAtLXN0dWIgPm51bCAyPiYxICYmIGNkIC4uL3ZpdGUtY29uZmlnICYmIG5weCB1bmJ1aWxkIC0tc3R1YiA+bnVsIDI+JjEgJiYgY2QgLi4vLi5cIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLiAtLWV4dCAudHMsLnRzeCwuanMsLmpzeCwudnVlXCIsXG4gICAgXCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3XCIsXG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0IHJ1blwiLFxuICAgIFwidGVzdDp3YXRjaFwiOiBcInZpdGVzdFwiLFxuICAgIFwidHlwZWNoZWNrXCI6IFwidnVlLXRzYyAtLW5vRW1pdCAtLXNraXBMaWJDaGVja1wiXG4gIH0sXG4gIFwiaW1wb3J0c1wiOiB7XG4gICAgXCIjLypcIjogXCIuL3NyYy8qXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHZiZW4vYWNjZXNzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL2NvbW1vbi11aVwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi9jb25zdGFudHNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vaG9va3NcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vaWNvbnNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vbGF5b3V0c1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi9sb2NhbGVzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL3BsdWdpbnNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vcHJlZmVyZW5jZXNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vcmVxdWVzdFwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi9zdG9yZXNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vc3R5bGVzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL3R5cGVzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL3V0aWxzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2dWV1c2UvY29yZVwiOiBcIl4xMy40LjBcIixcbiAgICBcImFudC1kZXNpZ24tdnVlXCI6IFwiXjQuMi42XCIsXG4gICAgXCJkYXlqc1wiOiBcIl4xLjExLjEzXCIsXG4gICAgXCJwaW5pYVwiOiBcIl4zLjAuM1wiLFxuICAgIFwidnVlXCI6IFwiXjMuNS4xN1wiLFxuICAgIFwidnVlLXJvdXRlclwiOiBcIl40LjUuMVwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjaGFuZ2VzZXRzL2NoYW5nZWxvZy1naXRodWJcIjogXCJeMC41LjFcIixcbiAgICBcIkBjaGFuZ2VzZXRzL2NsaVwiOiBcIl4yLjI5LjVcIixcbiAgICBcIkBlc2xpbnQvanNcIjogXCJeOS4zMC4xXCIsXG4gICAgXCJAZmFrZXItanMvZmFrZXJcIjogXCJjYXRhbG9nOlwiLFxuICAgIFwiQGljb25pZnkvdGFpbHdpbmRcIjogXCJeMS4yLjBcIixcbiAgICBcIkB0YWlsd2luZGNzcy90eXBvZ3JhcGh5XCI6IFwiXjAuNS4xNlwiLFxuICAgIFwiQHR5cGVzL2pzb253ZWJ0b2tlblwiOiBcImNhdGFsb2c6XCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yNC45LjJcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl42LjAuMVwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiOiBcIl41LjAuMVwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMjFcIixcbiAgICBcImNzc25hbm9cIjogXCJeNy4wLjdcIixcbiAgICBcImVzbGludFwiOiBcIl45LjMwLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tdnVlXCI6IFwiXjEwLjIuMFwiLFxuICAgIFwiQG1hbnlwa2cvZ2V0LXBhY2thZ2VzXCI6IFwiY2F0YWxvZzpcIixcbiAgICBcImdldC1wb3J0XCI6IFwiY2F0YWxvZzpcIixcbiAgICBcImdsb2JhbHNcIjogXCJeMTYuMy4wXCIsXG4gICAgXCJoM1wiOiBcImNhdGFsb2c6XCIsXG4gICAgXCJoYXBweS1kb21cIjogXCJeMTIuMTAuM1wiLFxuICAgIFwianNvbndlYnRva2VuXCI6IFwiY2F0YWxvZzpcIixcbiAgICBcIm5pdHJvcGFja1wiOiBcImNhdGFsb2c6XCIsXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNS42XCIsXG4gICAgXCJwb3N0Y3NzLWFudGQtZml4ZXNcIjogXCJeMC4yLjBcIixcbiAgICBcInBvc3Rjc3MtaW1wb3J0XCI6IFwiXjE2LjEuMVwiLFxuICAgIFwicG9zdGNzcy1wcmVzZXQtZW52XCI6IFwiXjEwLjIuNFwiLFxuICAgIFwic2Fzc1wiOiBcIl4xLjg5LjJcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xN1wiLFxuICAgIFwidGFpbHdpbmRjc3MtYW5pbWF0ZVwiOiBcIl4xLjAuN1wiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjguM1wiLFxuICAgIFwidHlwZXNjcmlwdC1lc2xpbnRcIjogXCJeOC4zLjBcIixcbiAgICBcInZpdGVcIjogXCJeNy4xLjJcIixcbiAgICBcInZpdGUtcGx1Z2luLWh0bWxcIjogXCJjYXRhbG9nOlwiLFxuICAgIFwidml0ZXN0XCI6IFwiXjMuMi40XCIsXG4gICAgXCJ2dWUtdHNjXCI6IFwiMi4yLjEwXCJcbiAgfSxcbiAgXCJwYWNrYWdlTWFuYWdlclwiOiBcInBucG1AMTAuMTQuMFwiXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLWFudGRcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tYW50ZFxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHNoYXJlZC5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaGFyZWQubXRzXCI7aW1wb3J0IHR5cGUgeyBQd2FPcHRpb25zIH0gZnJvbSAnQHZpdGUtcHdhL3ZpdGVwcmVzcyc7XG5pbXBvcnQgdHlwZSB7IEhlYWRDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJztcblxuaW1wb3J0IHtcbiAgdml0ZUFyY2hpdmVyUGx1Z2luLFxuICB2aXRlVnhlVGFibGVJbXBvcnRzUGx1Z2luLFxufSBmcm9tICdAdmJlbi92aXRlLWNvbmZpZyc7XG5cbmltcG9ydCB7XG4gIEdpdENoYW5nZWxvZyxcbiAgR2l0Q2hhbmdlbG9nTWFya2Rvd25TZWN0aW9uLFxufSBmcm9tICdAbm9sZWJhc2Uvdml0ZXByZXNzLXBsdWdpbi1naXQtY2hhbmdlbG9nL3ZpdGUnO1xuaW1wb3J0IHRhaWx3aW5kIGZyb20gJ3RhaWx3aW5kY3NzJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgcG9zdGNzc0lzb2xhdGVTdHlsZXMgfSBmcm9tICd2aXRlcHJlc3MnO1xuaW1wb3J0IHtcbiAgZ3JvdXBJY29uTWRQbHVnaW4sXG4gIGdyb3VwSWNvblZpdGVQbHVnaW4sXG59IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tZ3JvdXAtaWNvbnMnO1xuXG5pbXBvcnQgeyBkZW1vUHJldmlld1BsdWdpbiB9IGZyb20gJy4vcGx1Z2lucy9kZW1vLXByZXZpZXcnO1xuaW1wb3J0IHsgc2VhcmNoIGFzIHpoU2VhcmNoIH0gZnJvbSAnLi96aC5tdHMnO1xuXG5leHBvcnQgY29uc3Qgc2hhcmVkID0gZGVmaW5lQ29uZmlnKHtcbiAgYXBwZWFyYW5jZTogJ2RhcmsnLFxuICBoZWFkOiBoZWFkKCksXG4gICAgbWFya2Rvd246IHtcbiAgICAgIHByZUNvbmZpZyhtZCkge1xuICAgICAgICBtZC51c2UoZGVtb1ByZXZpZXdQbHVnaW4pO1xuICAgICAgICBtZC51c2UoZ3JvdXBJY29uTWRQbHVnaW4pO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHB3YTogcHdhKCksXG4gICAgc3JjRGlyOiAnc3JjJyxcbiAgICB0aGVtZUNvbmZpZzoge1xuICAgICAgaTE4blJvdXRpbmc6IHRydWUsXG4gICAgICBsb2dvOiAnaHR0cHM6Ly91bnBrZy5jb20vQHZiZW5qcy9zdGF0aWMtc291cmNlQDAuMS43L3NvdXJjZS9sb2dvLXYxLndlYnAnLFxuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBsb2NhbGVzOiB7XG4gICAgICAgICAgICAuLi56aFNlYXJjaCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcm92aWRlcjogJ2xvY2FsJyxcbiAgICAgIH0sXG4gICAgICBzaXRlVGl0bGU6ICdWYmVuIEFkbWluIEFudGQnLFxuICAgICAgc29jaWFsTGlua3M6IFtcbiAgICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9EdWNyL3Z1ZS12YmVuLWFkbWluLWFudGQnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgdGl0bGU6ICdWYmVuIEFkbWluIEFudGQnLFxuICAgIHZpdGU6IHtcbiAgICAgIGJ1aWxkOiB7XG4gICAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogSW5maW5pdHksXG4gICAgICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgICB9LFxuICAgICAgY3NzOiB7XG4gICAgICAgIHBvc3Rjc3M6IHtcbiAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICB0YWlsd2luZCgpLFxuICAgICAgICAgICAgcG9zdGNzc0lzb2xhdGVTdHlsZXMoeyBpbmNsdWRlRmlsZXM6IFsvdnAtZG9jXFwuY3NzL10gfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAgIHNjc3M6IHtcbiAgICAgICAgICAgIGFwaTogJ21vZGVybicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBqc29uOiB7XG4gICAgICAgIHN0cmluZ2lmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmluZDogJ0B2YmVuL3ZpdGUtY29uZmlnJyxcbiAgICAgICAgICAgIHJlcGxhY2VtZW50OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4uLy4uLy4uL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9pbmRleC50cycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICBHaXRDaGFuZ2Vsb2coe1xuICAgICAgICAgIG1hcEF1dGhvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWFwQnlOYW1lQWxpYXNlczogWydWYmVuJ10sXG4gICAgICAgICAgICAgIG5hbWU6ICd2YmVuJyxcbiAgICAgICAgICAgICAgdXNlcm5hbWU6ICdhbm5jd2InLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3ZpbmNlJyxcbiAgICAgICAgICAgICAgdXNlcm5hbWU6ICd2aW5jZTI5MjAwNycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnTGkgS3VpJyxcbiAgICAgICAgICAgICAgdXNlcm5hbWU6ICdsaWt1aTYyOCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVwb1VSTDogKCkgPT4gJ2h0dHBzOi8vZ2l0aHViLmNvbS9EdWNyL3Z1ZS12YmVuLWFkbWluLWFudGQnLFxuICAgICAgICB9KSxcbiAgICAgICAgR2l0Q2hhbmdlbG9nTWFya2Rvd25TZWN0aW9uKCksXG4gICAgICAgIGdyb3VwSWNvblZpdGVQbHVnaW4oKSxcbiAgICAgICAgdml0ZUFyY2hpdmVyUGx1Z2luKHsgb3V0cHV0RGlyOiAnLnZpdGVwcmVzcycgfSksXG4gICAgICAgIGF3YWl0IHZpdGVWeGVUYWJsZUltcG9ydHNQbHVnaW4oKSxcbiAgICAgIF0sXG4gICAgc2VydmVyOiB7XG4gICAgICBmczoge1xuICAgICAgICBhbGxvdzogWycuLi8uLiddLFxuICAgICAgfSxcbiAgICAgIGhvc3Q6IHRydWUsXG4gICAgICBwb3J0OiA2MTczLFxuICAgIH0sXG5cbiAgICBzc3I6IHtcbiAgICAgIGV4dGVybmFsOiBbJ0B2dWUvcmVwbCddLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gaGVhZCgpOiBIZWFkQ29uZmlnW10ge1xuICByZXR1cm4gW1xuICAgIFsnbWV0YScsIHsgY29udGVudDogJ0R1Y3InLCBuYW1lOiAnYXV0aG9yJyB9XSxcbiAgICBbXG4gICAgICAnbWV0YScsXG4gICAgICB7XG4gICAgICAgIGNvbnRlbnQ6ICd2YmVuLCB2aXRlanMsIHZpdGUsIHNoYWNkbi11aSwgdnVlJyxcbiAgICAgICAgbmFtZTogJ2tleXdvcmRzJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbJ2xpbmsnLCB7IGhyZWY6ICcvZmF2aWNvbi5pY28nLCByZWw6ICdpY29uJywgdHlwZTogJ2ltYWdlL3N2Zyt4bWwnIH1dLFxuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICAnd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSxtaW5pbXVtLXNjYWxlPTEuMCxtYXhpbXVtLXNjYWxlPTEuMCx1c2VyLXNjYWxhYmxlPW5vJyxcbiAgICAgICAgbmFtZTogJ3ZpZXdwb3J0JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbJ21ldGEnLCB7IGNvbnRlbnQ6ICd2YmVuIGFkbWluIGRvY3MnLCBuYW1lOiAna2V5d29yZHMnIH1dLFxuICAgIFsnbGluaycsIHsgaHJlZjogJy9mYXZpY29uLmljbycsIHJlbDogJ2ljb24nIH1dLFxuICAgIC8vIFtcbiAgICAvLyAgICdzY3JpcHQnLFxuICAgIC8vICAge1xuICAgIC8vICAgICBzcmM6ICdodHRwczovL2Nkbi50YWlsd2luZGNzcy5jb20nLFxuICAgIC8vICAgfSxcbiAgICAvLyBdLFxuICBdO1xufVxuXG5mdW5jdGlvbiBwd2EoKTogUHdhT3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgaW5jbHVkZU1hbmlmZXN0SWNvbnM6IGZhbHNlLFxuICAgIG1hbmlmZXN0OiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1ZiZW4gQWRtaW4gQW50ZCBpcyBhbiBBbnQgRGVzaWduIFZ1ZSB2ZXJzaW9uIFNQQSBpbmRlcGVuZGVudGx5IHNwbGl0IGZyb20gVnVlIFZiZW4gQWRtaW4gdjUuNS45LiBBIG1vZGVybiBhZG1pbiBkYXNoYm9hcmQgdGVtcGxhdGUgYmFzZWQgb24gVnVlIDMuJyxcbiAgICAgIGljb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vdW5wa2cuY29tL0B2YmVuanMvc3RhdGljLXNvdXJjZUAwLjEuNy9zb3VyY2UvcHdhLWljb24tMTkyLnBuZycsXG4gICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vdW5wa2cuY29tL0B2YmVuanMvc3RhdGljLXNvdXJjZUAwLjEuNy9zb3VyY2UvcHdhLWljb24tNTEyLnBuZycsXG4gICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgaWQ6ICcvJyxcbiAgICAgIG5hbWU6ICdWYmVuIEFkbWluIEFudGQgRG9jJyxcbiAgICAgIHNob3J0X25hbWU6ICd2YmVuX2FkbWluX2FudGRfZG9jJyxcbiAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICBvdXREaXI6IHJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy52aXRlcHJlc3MvZGlzdCcpLFxuICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgIHdvcmtib3g6IHtcbiAgICAgIGdsb2JQYXR0ZXJuczogWycqKi8qLntjc3MsanMsaHRtbCxzdmcscG5nLGljbyx0eHQsd29mZjJ9J10sXG4gICAgICBtYXhpbXVtRmlsZVNpemVUb0NhY2hlSW5CeXRlczogNSAqIDEwMjQgKiAxMDI0LFxuICAgIH0sXG4gIH07XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLWFudGRcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxccGx1Z2luc1xcXFxkZW1vLXByZXZpZXcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9wbHVnaW5zL2RlbW8tcHJldmlldy50c1wiO2ltcG9ydCB0eXBlIHsgTWFya2Rvd25FbnYsIE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgY3J5cHRvIGZyb20gJ25vZGU6Y3J5cHRvJztcbmltcG9ydCB7IHJlYWRkaXJTeW5jIH0gZnJvbSAnbm9kZTpmcyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAnbm9kZTpwYXRoJztcblxuZXhwb3J0IGNvbnN0IHJhd1BhdGhSZWdleHAgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLXN1cGVyLWxpbmVhci1iYWNrdHJhY2tpbmcsIHJlZ2V4cC9zdHJpY3RcbiAgL14oLis/KD86XFwuKFtcXGRhLXpdKykpPykoI1tcXHctXSspPyg/OiA/eyhcXGQrKD86WywtXVxcZCspKik/ID8oXFxTKyk/fSk/ID8oPzpcXFsoLispXSk/JC87XG5cbmZ1bmN0aW9uIHJhd1BhdGhUb1Rva2VuKHJhd1BhdGg6IHN0cmluZykge1xuICBjb25zdCBbXG4gICAgZmlsZXBhdGggPSAnJyxcbiAgICBleHRlbnNpb24gPSAnJyxcbiAgICByZWdpb24gPSAnJyxcbiAgICBsaW5lcyA9ICcnLFxuICAgIGxhbmcgPSAnJyxcbiAgICByYXdUaXRsZSA9ICcnLFxuICBdID0gKHJhd1BhdGhSZWdleHAuZXhlYyhyYXdQYXRoKSB8fCBbXSkuc2xpY2UoMSk7XG5cbiAgY29uc3QgdGl0bGUgPSByYXdUaXRsZSB8fCBmaWxlcGF0aC5zcGxpdCgnLycpLnBvcCgpIHx8ICcnO1xuXG4gIHJldHVybiB7IGV4dGVuc2lvbiwgZmlsZXBhdGgsIGxhbmcsIGxpbmVzLCByZWdpb24sIHRpdGxlIH07XG59XG5cbmV4cG9ydCBjb25zdCBkZW1vUHJldmlld1BsdWdpbiA9IChtZDogTWFya2Rvd25SZW5kZXJlcikgPT4ge1xuICBtZC5jb3JlLnJ1bGVyLmFmdGVyKCdpbmxpbmUnLCAnZGVtby1wcmV2aWV3JywgKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgaW5zZXJ0Q29tcG9uZW50SW1wb3J0ID0gKGltcG9ydFN0cmluZzogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnRva2Vucy5maW5kSW5kZXgoXG4gICAgICAgIChpKSA9PiBpLnR5cGUgPT09ICdodG1sX2Jsb2NrJyAmJiBpLmNvbnRlbnQubWF0Y2goLzxzY3JpcHQgc2V0dXA+L2cpLFxuICAgICAgKTtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgY29uc3QgaW1wb3J0Q29tcG9uZW50ID0gbmV3IHN0YXRlLlRva2VuKCdodG1sX2Jsb2NrJywgJycsIDApO1xuICAgICAgICBpbXBvcnRDb21wb25lbnQuY29udGVudCA9IGA8c2NyaXB0IHNldHVwPlxcbiR7aW1wb3J0U3RyaW5nfVxcbjwvc2NyaXB0PlxcbmA7XG4gICAgICAgIHN0YXRlLnRva2Vucy5zcGxpY2UoMCwgMCwgaW1wb3J0Q29tcG9uZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGF0ZS50b2tlbnNbaW5kZXhdKSB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IHN0YXRlLnRva2Vuc1tpbmRleF0uY29udGVudDtcbiAgICAgICAgICBzdGF0ZS50b2tlbnNbaW5kZXhdLmNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICAnPC9zY3JpcHQ+JyxcbiAgICAgICAgICAgIGAke2ltcG9ydFN0cmluZ31cXG48L3NjcmlwdD5gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIERlZmluZSB0aGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIHRoZSBkZXNpcmVkIHBhdHRlcm5cbiAgICBjb25zdCByZWdleCA9IC88RGVtb1ByZXZpZXdbXj5dKlxcc2Rpcj1cIihbXlwiXSopXCIvZztcbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIE1hcmtkb3duIGNvbnRlbnQgYW5kIHJlcGxhY2UgdGhlIHBhdHRlcm5cbiAgICBzdGF0ZS5zcmMgPSBzdGF0ZS5zcmMucmVwbGFjZUFsbChyZWdleCwgKF9tYXRjaCwgZGlyKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnREaXIgPSBqb2luKHByb2Nlc3MuY3dkKCksICdzcmMnLCBkaXIpLnJlcGxhY2VBbGwoXG4gICAgICAgICdcXFxcJyxcbiAgICAgICAgJy8nLFxuICAgICAgKTtcblxuICAgICAgbGV0IGNoaWxkRmlsZXM6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgZGlyRXhpc3RzID0gdHJ1ZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY2hpbGRGaWxlcyA9XG4gICAgICAgICAgcmVhZGRpclN5bmMoY29tcG9uZW50RGlyLCB7XG4gICAgICAgICAgICBlbmNvZGluZzogJ3V0ZjgnLFxuICAgICAgICAgICAgcmVjdXJzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHdpdGhGaWxlVHlwZXM6IGZhbHNlLFxuICAgICAgICAgIH0pIHx8IFtdO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGRpckV4aXN0cyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRpckV4aXN0cykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVuaXF1ZVdvcmQgPSBnZW5lcmF0ZUNvbnRlbnRIYXNoKGNvbXBvbmVudERpcik7XG5cbiAgICAgIGNvbnN0IENvbXBvbmVudE5hbWUgPSBgRGVtb0NvbXBvbmVudF8ke3VuaXF1ZVdvcmR9YDtcbiAgICAgIGluc2VydENvbXBvbmVudEltcG9ydChcbiAgICAgICAgYGltcG9ydCAke0NvbXBvbmVudE5hbWV9IGZyb20gJyR7Y29tcG9uZW50RGlyfS9pbmRleC52dWUnYCxcbiAgICAgICk7XG4gICAgICBjb25zdCB7IHBhdGg6IF9wYXRoIH0gPSBzdGF0ZS5lbnYgYXMgTWFya2Rvd25FbnY7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudG9rZW5zLmZpbmRJbmRleCgoaSkgPT4gaS5jb250ZW50Lm1hdGNoKHJlZ2V4KSk7XG5cbiAgICAgIGlmICghc3RhdGUudG9rZW5zW2luZGV4XSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBjb25zdCBmaXJzdFN0cmluZyA9ICdpbmRleC52dWUnO1xuICAgICAgY2hpbGRGaWxlcyA9IGNoaWxkRmlsZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYSA9PT0gZmlyc3RTdHJpbmcpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGIgPT09IGZpcnN0U3RyaW5nKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIGEubG9jYWxlQ29tcGFyZShiLCAnZW4nLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSk7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnRva2Vuc1tpbmRleF0uY29udGVudCA9XG4gICAgICAgIGA8RGVtb1ByZXZpZXcgZmlsZXM9XCIke2VuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjaGlsZEZpbGVzKSl9XCIgPjwke0NvbXBvbmVudE5hbWV9Lz5cbiAgICAgICAgYDtcblxuICAgICAgY29uc3QgX2R1bW15VG9rZW4gPSBuZXcgc3RhdGUuVG9rZW4oJycsICcnLCAwKTtcbiAgICAgIGNvbnN0IHRva2VuQXJyYXk6IEFycmF5PHR5cGVvZiBfZHVtbXlUb2tlbj4gPSBbXTtcbiAgICAgIGNoaWxkRmlsZXMuZm9yRWFjaCgoZmlsZW5hbWUpID0+IHtcbiAgICAgICAgLy8gY29uc3Qgc2xvdE5hbWUgPSBmaWxlbmFtZS5yZXBsYWNlKGV4dG5hbWUoZmlsZW5hbWUpLCAnJyk7XG5cbiAgICAgICAgY29uc3QgdGVtcGxhdGVTdGFydCA9IG5ldyBzdGF0ZS5Ub2tlbignaHRtbF9pbmxpbmUnLCAnJywgMCk7XG4gICAgICAgIHRlbXBsYXRlU3RhcnQuY29udGVudCA9IGA8dGVtcGxhdGUgIyR7ZmlsZW5hbWV9PmA7XG4gICAgICAgIHRva2VuQXJyYXkucHVzaCh0ZW1wbGF0ZVN0YXJ0KTtcblxuICAgICAgICBjb25zdCByZXNvbHZlZFBhdGggPSBqb2luKGNvbXBvbmVudERpciwgZmlsZW5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHsgZXh0ZW5zaW9uLCBmaWxlcGF0aCwgbGFuZywgbGluZXMsIHRpdGxlIH0gPVxuICAgICAgICAgIHJhd1BhdGhUb1Rva2VuKHJlc29sdmVkUGF0aCk7XG4gICAgICAgIC8vIEFkZCBjb2RlIHRva2VucyBmb3IgZWFjaCBsaW5lXG4gICAgICAgIGNvbnN0IHRva2VuID0gbmV3IHN0YXRlLlRva2VuKCdmZW5jZScsICdjb2RlJywgMCk7XG4gICAgICAgIHRva2VuLmluZm8gPSBgJHtsYW5nIHx8IGV4dGVuc2lvbn0ke2xpbmVzID8gYHske2xpbmVzfX1gIDogJyd9JHtcbiAgICAgICAgICB0aXRsZSA/IGBbJHt0aXRsZX1dYCA6ICcnXG4gICAgICAgIH1gO1xuXG4gICAgICAgIHRva2VuLmNvbnRlbnQgPSBgPDw8ICR7ZmlsZXBhdGh9YDtcbiAgICAgICAgKHRva2VuIGFzIGFueSkuc3JjID0gW3Jlc29sdmVkUGF0aF07XG4gICAgICAgIHRva2VuQXJyYXkucHVzaCh0b2tlbik7XG5cbiAgICAgICAgY29uc3QgdGVtcGxhdGVFbmQgPSBuZXcgc3RhdGUuVG9rZW4oJ2h0bWxfaW5saW5lJywgJycsIDApO1xuICAgICAgICB0ZW1wbGF0ZUVuZC5jb250ZW50ID0gJzwvdGVtcGxhdGU+JztcbiAgICAgICAgdG9rZW5BcnJheS5wdXNoKHRlbXBsYXRlRW5kKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZW5kVGFnID0gbmV3IHN0YXRlLlRva2VuKCdodG1sX2lubGluZScsICcnLCAwKTtcbiAgICAgIGVuZFRhZy5jb250ZW50ID0gJzwvRGVtb1ByZXZpZXc+JztcbiAgICAgIHRva2VuQXJyYXkucHVzaChlbmRUYWcpO1xuXG4gICAgICBzdGF0ZS50b2tlbnMuc3BsaWNlKGluZGV4ICsgMSwgMCwgLi4udG9rZW5BcnJheSk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgLy8gICBzdGF0ZS5tZC5yZW5kZXJlci5yZW5kZXIoc3RhdGUudG9rZW5zLCBzdGF0ZT8ub3B0aW9ucyA/PyBbXSwgc3RhdGUuZW52KSxcbiAgICAgIC8vICk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50SGFzaChpbnB1dDogc3RyaW5nLCBsZW5ndGg6IG51bWJlciA9IDEwKTogc3RyaW5nIHtcbiAgLy8gXHU0RjdGXHU3NTI4IFNIQS0yNTYgXHU3NTFGXHU2MjEwXHU1NEM4XHU1RTBDXHU1MDNDXG4gIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKGlucHV0KS5kaWdlc3QoJ2hleCcpO1xuXG4gIC8vIFx1NUMwNlx1NTRDOFx1NUUwQ1x1NTAzQ1x1OEY2Q1x1NjM2Mlx1NEUzQSBCYXNlMzYgXHU3RjE2XHU3ODAxXHVGRjBDXHU1RTc2XHU1M0Q2XHU2MzA3XHU1QjlBXHU5NTdGXHU1RUE2XHU3Njg0XHU1QjU3XHU3QjI2XHU0RjVDXHU0RTNBXHU3RUQzXHU2NzlDXG4gIHJldHVybiBOdW1iZXIucGFyc2VJbnQoaGFzaCwgMTYpLnRvU3RyaW5nKDM2KS5zbGljZSgwLCBsZW5ndGgpO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1hbnRkXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLWFudGRcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFx6aC5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLWFudGQvZG9jcy8udml0ZXByZXNzL2NvbmZpZy96aC5tdHNcIjtpbXBvcnQgdHlwZSB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5cbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nO1xuXG5leHBvcnQgY29uc3QgemggPSBkZWZpbmVDb25maWcoe1xuICBkZXNjcmlwdGlvbjogJ1ZiZW4gQWRtaW4gQW50ZCAtIFx1NTdGQVx1NEU4RSBWdWUgVmJlbiBBZG1pbiB2NS41LjkgXHU3MkVDXHU3QUNCXHU2MkM2XHU1MjA2XHU3Njg0IEFudCBEZXNpZ24gVnVlIFx1NzI0OFx1NjcyQ1x1NTM1NVx1OTg3NVx1NUU5NFx1NzUyOFx1RkYwOFNQQVx1RkYwOScsXG4gIGxhbmc6ICd6aC1IYW5zJyxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBkYXJrTW9kZVN3aXRjaExhYmVsOiAnXHU0RTNCXHU5ODk4JyxcbiAgICBkYXJrTW9kZVN3aXRjaFRpdGxlOiAnXHU1MjA3XHU2MzYyXHU1MjMwXHU2REYxXHU4MjcyXHU2QTIxXHU1RjBGJyxcbiAgICBkb2NGb290ZXI6IHtcbiAgICAgIG5leHQ6ICdcdTRFMEJcdTRFMDBcdTk4NzUnLFxuICAgICAgcHJldjogJ1x1NEUwQVx1NEUwMFx1OTg3NScsXG4gICAgfSxcbiAgICBlZGl0TGluazoge1xuICAgICAgcGF0dGVybjpcbiAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9EdWNyL3Z1ZS12YmVuLWFkbWluLWFudGQvZWRpdC9tYWluL2RvY3Mvc3JjLzpwYXRoJyxcbiAgICAgIHRleHQ6ICdcdTU3MjggR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVx1OTc2MicsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIGNvcHlyaWdodDogYENvcHlyaWdodCBcdTAwQTkgMjAyMC0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gRHVjcmAsXG4gICAgICBtZXNzYWdlOiAnXHU1N0ZBXHU0RThFIE1JVCBcdThCQjhcdTUzRUZcdTUzRDFcdTVFMDMuJyxcbiAgICB9LFxuICAgIGxhbmdNZW51TGFiZWw6ICdcdTU5MUFcdThCRURcdThBMDAnLFxuICAgIGxhc3RVcGRhdGVkOiB7XG4gICAgICBmb3JtYXRPcHRpb25zOiB7XG4gICAgICAgIGRhdGVTdHlsZTogJ3Nob3J0JyxcbiAgICAgICAgdGltZVN0eWxlOiAnbWVkaXVtJyxcbiAgICAgIH0sXG4gICAgICB0ZXh0OiAnXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU0RThFJyxcbiAgICB9LFxuICAgIGxpZ2h0TW9kZVN3aXRjaFRpdGxlOiAnXHU1MjA3XHU2MzYyXHU1MjMwXHU2RDQ1XHU4MjcyXHU2QTIxXHU1RjBGJyxcbiAgICBuYXY6IG5hdigpLFxuXG4gICAgb3V0bGluZToge1xuICAgICAgbGFiZWw6ICdcdTk4NzVcdTk3NjJcdTVCRkNcdTgyMkEnLFxuICAgIH0sXG4gICAgcmV0dXJuVG9Ub3BMYWJlbDogJ1x1NTZERVx1NTIzMFx1OTg3Nlx1OTBFOCcsXG5cbiAgICBzaWRlYmFyOiB7XG4gICAgICAnL2NvbW1lcmNpYWwvJzogeyBiYXNlOiAnL2NvbW1lcmNpYWwvJywgaXRlbXM6IHNpZGViYXJDb21tZXJjaWFsKCkgfSxcbiAgICAgICcvY29tcG9uZW50cy8nOiB7IGJhc2U6ICcvY29tcG9uZW50cy8nLCBpdGVtczogc2lkZWJhckNvbXBvbmVudHMoKSB9LFxuICAgICAgJy9ndWlkZS8nOiB7IGJhc2U6ICcvZ3VpZGUvJywgaXRlbXM6IHNpZGViYXJHdWlkZSgpIH0sXG4gICAgfSxcbiAgICBzaWRlYmFyTWVudUxhYmVsOiAnXHU4M0RDXHU1MzU1JyxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBzaWRlYmFyR3VpZGUoKTogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICB0ZXh0OiAnXHU3QjgwXHU0RUNCJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaW50cm9kdWN0aW9uL3ZiZW4nLFxuICAgICAgICAgIHRleHQ6ICdcdTUxNzNcdTRFOEUgVmJlbiBBZG1pbicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaW50cm9kdWN0aW9uL3doeScsXG4gICAgICAgICAgdGV4dDogJ1x1NEUzQVx1NEVDMFx1NEU0OFx1OTAwOVx1NjJFOVx1NjIxMVx1NEVFQz8nLFxuICAgICAgICB9LFxuICAgICAgICB7IGxpbms6ICdpbnRyb2R1Y3Rpb24vcXVpY2stc3RhcnQnLCB0ZXh0OiAnXHU1RkVCXHU5MDFGXHU1RjAwXHU1OUNCJyB9LFxuICAgICAgICB7IGxpbms6ICdpbnRyb2R1Y3Rpb24vdGhpbicsIHRleHQ6ICdcdTdDQkVcdTdCODBcdTcyNDhcdTY3MkMnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiYXNlOiAnLycsXG4gICAgICAgICAgbGluazogJ2NvbXBvbmVudHMvaW50cm9kdWN0aW9uJyxcbiAgICAgICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2XHU2NTg3XHU2ODYzJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1N0ZBXHU3ODQwJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvY29uY2VwdCcsIHRleHQ6ICdcdTU3RkFcdTc4NDBcdTY5ODJcdTVGRjUnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvZGV2ZWxvcG1lbnQnLCB0ZXh0OiAnXHU2NzJDXHU1NzMwXHU1RjAwXHU1M0QxJyB9LFxuICAgICAgICB7IGxpbms6ICdlc3NlbnRpYWxzL3JvdXRlJywgdGV4dDogJ1x1OERFRlx1NzUzMVx1NTQ4Q1x1ODNEQ1x1NTM1NScgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9zZXR0aW5ncycsIHRleHQ6ICdcdTkxNERcdTdGNkUnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvaWNvbnMnLCB0ZXh0OiAnXHU1NkZFXHU2ODA3JyB9LFxuICAgICAgICB7IGxpbms6ICdlc3NlbnRpYWxzL3N0eWxlcycsIHRleHQ6ICdcdTY4MzdcdTVGMEYnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvZXh0ZXJuYWwtbW9kdWxlJywgdGV4dDogJ1x1NTkxNlx1OTBFOFx1NkEyMVx1NTc1NycgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9idWlsZCcsIHRleHQ6ICdcdTY3ODRcdTVFRkFcdTRFMEVcdTkwRThcdTdGNzInIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvc2VydmVyJywgdGV4dDogJ1x1NjcwRFx1NTJBMVx1N0FFRlx1NEVBNFx1NEU5Mlx1NEUwRVx1NjU3MFx1NjM2RU1vY2snIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NkRGMVx1NTE2NScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9sb2dpbicsIHRleHQ6ICdcdTc2N0JcdTVGNTUnIH0sXG4gICAgICAgIC8vIHsgbGluazogJ2luLWRlcHRoL2xheW91dCcsIHRleHQ6ICdcdTVFMDNcdTVDNDAnIH0sXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL3RoZW1lJywgdGV4dDogJ1x1NEUzQlx1OTg5OCcgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvYWNjZXNzJywgdGV4dDogJ1x1Njc0M1x1OTY1MCcgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvbG9jYWxlJywgdGV4dDogJ1x1NTZGRFx1OTY0NVx1NTMxNicgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvZmVhdHVyZXMnLCB0ZXh0OiAnXHU1RTM4XHU3NTI4XHU1MjlGXHU4MEZEJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9jaGVjay11cGRhdGVzJywgdGV4dDogJ1x1NjhDMFx1NjdFNVx1NjZGNFx1NjVCMCcgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvbG9hZGluZycsIHRleHQ6ICdcdTUxNjhcdTVDNDBsb2FkaW5nJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC91aS1mcmFtZXdvcmsnLCB0ZXh0OiAnXHU3RUM0XHU0RUY2XHU1RTkzXHU1MjA3XHU2MzYyJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTVERTVcdTdBMEInLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC9zdGFuZGFyZCcsIHRleHQ6ICdcdTg5QzRcdTgzMDMnIH0sXG4gICAgICAgIHsgbGluazogJ3Byb2plY3QvY2xpJywgdGV4dDogJ0NMSScgfSxcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC9kaXInLCB0ZXh0OiAnXHU3NkVFXHU1RjU1XHU4QkY0XHU2NjBFJyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L3Rlc3QnLCB0ZXh0OiAnXHU1MzU1XHU1MTQzXHU2RDRCXHU4QkQ1JyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L3RhaWx3aW5kY3NzJywgdGV4dDogJ1RhaWx3aW5kIENTUycgfSxcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC9jaGFuZ2VzZXQnLCB0ZXh0OiAnQ2hhbmdlc2V0JyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L3ZpdGUnLCB0ZXh0OiAnVml0ZSBDb25maWcnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NTE3Nlx1NEVENicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IGxpbms6ICdvdGhlci9wcm9qZWN0LXVwZGF0ZScsIHRleHQ6ICdcdTk4NzlcdTc2RUVcdTY2RjRcdTY1QjAnIH0sXG4gICAgICAgIHsgbGluazogJ290aGVyL3JlbW92ZS1jb2RlJywgdGV4dDogJ1x1NzlGQlx1OTY2NFx1NEVFM1x1NzgwMScgfSxcbiAgICAgICAgeyBsaW5rOiAnb3RoZXIvZmFxJywgdGV4dDogJ1x1NUUzOFx1ODlDMVx1OTVFRVx1OTg5OCcgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gc2lkZWJhckNvbW1lcmNpYWwoKTogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGxpbms6ICdjb21tdW5pdHknLFxuICAgICAgdGV4dDogJ1x1NEVBNFx1NkQ0MVx1N0ZBNCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAndGVjaG5pY2FsLXN1cHBvcnQnLFxuICAgICAgdGV4dDogJ1x1NjI4MFx1NjcyRlx1NjUyRlx1NjMwMScsXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAnY3VzdG9taXplZCcsXG4gICAgICB0ZXh0OiAnXHU1QjlBXHU1MjM2XHU1RjAwXHU1M0QxJyxcbiAgICB9LFxuICBdO1xufVxuXG5mdW5jdGlvbiBzaWRlYmFyQ29tcG9uZW50cygpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdGV4dDogJ1x1N0VDNFx1NEVGNicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2ludHJvZHVjdGlvbicsXG4gICAgICAgICAgdGV4dDogJ1x1NEVDQlx1N0VDRCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIHRleHQ6ICdcdTVFMDNcdTVDNDBcdTdFQzRcdTRFRjYnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdsYXlvdXQtdWkvcGFnZScsXG4gICAgICAgICAgdGV4dDogJ1BhZ2UgXHU5ODc1XHU5NzYyJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgdGV4dDogJ1x1OTAxQVx1NzUyOFx1N0VDNFx1NEVGNicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2NvbW1vbi11aS92YmVuLWFwaS1jb21wb25lbnQnLFxuICAgICAgICAgIHRleHQ6ICdBcGlDb21wb25lbnQgQXBpXHU3RUM0XHU0RUY2XHU1MzA1XHU4OEM1XHU1NjY4JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdjb21tb24tdWkvdmJlbi1hbGVydCcsXG4gICAgICAgICAgdGV4dDogJ0FsZXJ0IFx1OEY3Qlx1OTFDRlx1NjNEMFx1NzkzQVx1Njg0NicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnY29tbW9uLXVpL3ZiZW4tbW9kYWwnLFxuICAgICAgICAgIHRleHQ6ICdNb2RhbCBcdTZBMjFcdTYwMDFcdTY4NDYnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2NvbW1vbi11aS92YmVuLWRyYXdlcicsXG4gICAgICAgICAgdGV4dDogJ0RyYXdlciBcdTYyQkRcdTVDNDknLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2NvbW1vbi11aS92YmVuLWZvcm0nLFxuICAgICAgICAgIHRleHQ6ICdGb3JtIFx1ODg2OFx1NTM1NScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnY29tbW9uLXVpL3ZiZW4tdnhlLXRhYmxlJyxcbiAgICAgICAgICB0ZXh0OiAnVnhlIFRhYmxlIFx1ODg2OFx1NjgzQycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnY29tbW9uLXVpL3ZiZW4tY291bnQtdG8tYW5pbWF0b3InLFxuICAgICAgICAgIHRleHQ6ICdDb3VudFRvQW5pbWF0b3IgXHU2NTcwXHU1QjU3XHU1MkE4XHU3NTNCJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdjb21tb24tdWkvdmJlbi1lbGxpcHNpcy10ZXh0JyxcbiAgICAgICAgICB0ZXh0OiAnRWxsaXBzaXNUZXh0IFx1NzcwMVx1NzU2NVx1NjU4N1x1NjcyQycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG59XG5cbmZ1bmN0aW9uIG5hdigpOiBEZWZhdWx0VGhlbWUuTmF2SXRlbVtdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBhY3RpdmVNYXRjaDogJ14vKGd1aWRlfGNvbXBvbmVudHMpLycsXG4gICAgICB0ZXh0OiAnXHU2NTg3XHU2ODYzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBhY3RpdmVNYXRjaDogJ14vZ3VpZGUvJyxcbiAgICAgICAgICBsaW5rOiAnL2d1aWRlL2ludHJvZHVjdGlvbi92YmVuJyxcbiAgICAgICAgICB0ZXh0OiAnXHU2MzA3XHU1MzU3JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGFjdGl2ZU1hdGNoOiAnXi9jb21wb25lbnRzLycsXG4gICAgICAgICAgbGluazogJy9jb21wb25lbnRzL2ludHJvZHVjdGlvbicsXG4gICAgICAgICAgdGV4dDogJ1x1N0VDNFx1NEVGNicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1Mzg2XHU1M0YyXHU3MjQ4XHU2NzJDJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kb2MudnZiaW4uY24nLFxuICAgICAgICAgICAgICB0ZXh0OiAnMi54XHU3MjQ4XHU2NzJDXHU2NTg3XHU2ODYzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2RjE0XHU3OTNBJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnVmJlbiBBZG1pbicsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZHVjcm9uZy5jb20vdnVlLXZiZW4tYWRtaW4tYW50ZCcsXG4gICAgICAgICAgICAgIHRleHQ6ICdBbnQgRGVzaWduIFZ1ZSBcdTcyNDhcdTY3MkNcdUZGMDhcdTVGNTNcdTUyNERcdUZGMDknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZHVjcm9uZy5jb20vdnVlLXZiZW4tYWRtaW4tZWxlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0VsZW1lbnQgUGx1cyBcdTcyNDhcdTY3MkMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZHVjcm9uZy5jb20vdnVlLXZiZW4tYWRtaW4tbmFpdmUnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTmFpdmUgVUkgXHU3MjQ4XHU2NzJDJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2R1Y3JvbmcuY29tL3Z1ZS12YmVuLWFkbWluLXRkZXNpZ24nLFxuICAgICAgICAgICAgICB0ZXh0OiAnVERlc2lnbiBcdTcyNDhcdTY3MkMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NTE3Nlx1NEVENicsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vdmJlbi52dmJpbi5jbicsXG4gICAgICAgICAgICAgIHRleHQ6ICdWYmVuIEFkbWluIDIueCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogdmVyc2lvbixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0R1Y3IvdnVlLXZiZW4tYWRtaW4tYW50ZC9yZWxlYXNlcycsXG4gICAgICAgICAgdGV4dDogJ1x1NjZGNFx1NjVCMFx1NjVFNVx1NUZENycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0R1Y3IvdnVlLXZiZW4tYWRtaW4tYW50ZCcsXG4gICAgICAgICAgdGV4dDogJ0dpdEh1YiBcdTRFRDNcdTVFOTMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9EdWNyL3Z1ZS12YmVuLWFkbWluLWFudGQvYmxvYi9tYWluLy5naXRodWIvY29udHJpYnV0aW5nLm1kJyxcbiAgICAgICAgICB0ZXh0OiAnXHU4RDIxXHU3MzJFJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAnL2NvbW1lcmNpYWwvdGVjaG5pY2FsLXN1cHBvcnQnLFxuICAgICAgdGV4dDogJ1x1RDgzRVx1REQ4NCBcdTYyODBcdTY3MkZcdTY1MkZcdTYzMDEnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGluazogJy9zcG9uc29yL3BlcnNvbmFsJyxcbiAgICAgIHRleHQ6ICdcdTI3MjggXHU4RDVFXHU1MkE5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICcvY29tbWVyY2lhbC9jb21tdW5pdHknLFxuICAgICAgdGV4dDogJ1x1RDgzRFx1REM2OFx1MjAwRFx1RDgzRFx1REM2Nlx1MjAwRFx1RDgzRFx1REM2NiBcdTRFQTRcdTZENDFcdTdGQTQnLFxuICAgICAgLy8gaXRlbXM6IFtcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGxpbms6ICdodHRwczovL3F1bi5xcS5jb20vcXF3ZWIvcXVucHJvL3NoYXJlP193dj0zJl93d3Y9MTI4JmFwcENoYW5uZWw9c2hhcmUmaW52aXRlQ29kZT0yMnlTemo3cEtpdyZidXNpbmVzc1R5cGU9OSZmcm9tPTI0NjYxMCZiaXo9a2EmbWFpblNvdXJjZUlkPXNoYXJlJnN1YlNvdXJjZUlkPW90aGVycyZqdW1wc291cmNlPXNob3J0dXJsIy9wYycsXG4gICAgICAvLyAgICAgdGV4dDogJ1FRXHU5ODkxXHU5MDUzJyxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGxpbms6ICdodHRwczovL3FtLnFxLmNvbS9jZ2ktYmluL3FtL3FyP193dj0xMDI3Jms9bWpabWxoZ1Z6elV4dmR4bGxCNkMxdkhwWDhPOFFSTDAmYXV0aEtleT1EQmRGYkJ3RVJtZmFLWTk1SnZSV3FMQ0pJUkdKQW1LeVpicnB6WjQxRUtETVo1U1I2TWZiak9CYWFOUk43M2ZyJm5vdmVyaWZ5PTAmZ3JvdXBfY29kZT00Mjg2MTA5JyxcbiAgICAgIC8vICAgICB0ZXh0OiAnUVFcdTdGQTQnLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgbGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy9WVTYyalRlY2FkJyxcbiAgICAgIC8vICAgICB0ZXh0OiAnRGlzY29yZCcsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyBdLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgbGluazogJy9mcmllbmQtbGlua3MvJyxcbiAgICAvLyAgIHRleHQ6ICdcdUQ4M0VcdUREMUQgXHU1M0NCXHU2MEM1XHU5NEZFXHU2M0E1JyxcbiAgICAvLyB9LFxuICBdO1xufVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoOiBEZWZhdWx0VGhlbWUuQWxnb2xpYVNlYXJjaE9wdGlvbnNbJ2xvY2FsZXMnXSA9IHtcbiAgcm9vdDoge1xuICAgIHBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcbiAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBidXR0b25BcmlhTGFiZWw6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnLFxuICAgICAgICBidXR0b25UZXh0OiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcbiAgICAgIH0sXG4gICAgICBtb2RhbDoge1xuICAgICAgICBlcnJvclNjcmVlbjoge1xuICAgICAgICAgIGhlbHBUZXh0OiAnXHU0RjYwXHU1M0VGXHU4MEZEXHU5NzAwXHU4OTgxXHU2OEMwXHU2N0U1XHU0RjYwXHU3Njg0XHU3RjUxXHU3RURDXHU4RkRFXHU2M0E1JyxcbiAgICAgICAgICB0aXRsZVRleHQ6ICdcdTY1RTBcdTZDRDVcdTgzQjdcdTUzRDZcdTdFRDNcdTY3OUMnLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICBjbG9zZVRleHQ6ICdcdTUxNzNcdTk1RUQnLFxuICAgICAgICAgIG5hdmlnYXRlVGV4dDogJ1x1NTIwN1x1NjM2MicsXG4gICAgICAgICAgc2VhcmNoQnlUZXh0OiAnXHU2NDFDXHU3RDIyXHU2M0QwXHU0RjlCXHU4MDA1JyxcbiAgICAgICAgICBzZWxlY3RUZXh0OiAnXHU5MDA5XHU2MkU5JyxcbiAgICAgICAgfSxcbiAgICAgICAgbm9SZXN1bHRzU2NyZWVuOiB7XG4gICAgICAgICAgbm9SZXN1bHRzVGV4dDogJ1x1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5QycsXG4gICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogJ1x1NzBCOVx1NTFGQlx1NTNDRFx1OTk4OCcsXG4gICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0OiAnXHU0RjYwXHU4QkE0XHU0RTNBXHU4QkU1XHU2N0U1XHU4QkUyXHU1RTk0XHU4QkU1XHU2NzA5XHU3RUQzXHU2NzlDXHVGRjFGJyxcbiAgICAgICAgICBzdWdnZXN0ZWRRdWVyeVRleHQ6ICdcdTRGNjBcdTUzRUZcdTRFRTVcdTVDMURcdThCRDVcdTY3RTVcdThCRTInLFxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2hCb3g6IHtcbiAgICAgICAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICdcdTUzRDZcdTZEODgnLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdcdTUzRDZcdTZEODgnLFxuICAgICAgICAgIHJlc2V0QnV0dG9uQXJpYUxhYmVsOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcbiAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRTY3JlZW46IHtcbiAgICAgICAgICBmYXZvcml0ZVNlYXJjaGVzVGl0bGU6ICdcdTY1MzZcdTg1Q0YnLFxuICAgICAgICAgIG5vUmVjZW50U2VhcmNoZXNUZXh0OiAnXHU2Q0ExXHU2NzA5XHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcbiAgICAgICAgICByZWNlbnRTZWFyY2hlc1RpdGxlOiAnXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcbiAgICAgICAgICByZW1vdmVGYXZvcml0ZVNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RUNFXHU2NTM2XHU4NUNGXHU0RTJEXHU3OUZCXHU5NjY0JyxcbiAgICAgICAgICByZW1vdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEVDRVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlx1NEUyRFx1NzlGQlx1OTY2NCcsXG4gICAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RkREXHU1QjU4XHU4MUYzXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNiLFNBQVMsZUFBZTtBQUM5YyxTQUFTLDZCQUE2Qjs7O0FDQ3RDLFNBQVMsb0JBQW9COzs7QUNBM0IsY0FBVzs7O0FESU4sSUFBTSxLQUFLLGFBQWE7QUFBQSxFQUM3QixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsSUFDWCxxQkFBcUI7QUFBQSxJQUNyQixxQkFBcUI7QUFBQSxJQUNyQixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsU0FD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QUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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Q3RCLFVBQVU7QUFBQSxNQUNSLGFBQ0U7QUFBQSxNQUNGLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLE1BQ0EsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFFBQVEsUUFBUSxRQUFRLElBQUksR0FBRyxpQkFBaUI7QUFBQSxJQUNoRCxjQUFjO0FBQUEsSUFDZCxTQUFTO0FBQUEsTUFDUCxjQUFjLENBQUMsMENBQTBDO0FBQUEsTUFDekQsK0JBQStCLElBQUksT0FBTztBQUFBLElBQzVDO0FBQUEsRUFDRjtBQUNGOzs7QUg3S0EsSUFBTyxpQkFBUTtBQUFBLEVBQ2Isc0JBQXNCO0FBQUEsSUFDcEIsR0FBRztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLFFBQ0YsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sR0FBRztBQUFBLE1BQ0w7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLEdBQUc7QUFBQSxNQUNMO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogWyJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIiwgImRlZmluZUNvbmZpZyIsICJuYXYiLCAic2lkZWJhckNvbW1lcmNpYWwiLCAic2lkZWJhckd1aWRlIiwgImRlZmluZUNvbmZpZyJdCn0K
