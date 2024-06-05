import {DocsThemeConfig} from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>NTAK.guru Docs</span>,
  docsRepositoryBase: 'https://github.com/TMRW-Life/docs.ntak.guru',
  project: {
    link: 'https://github.com/TMRW-Life/docs.ntak.guru'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – NTAK.guru Docs'
    }
  },
  footer: {
    text: "© 2024 TMRW Applications Ltd."
  }
}

export default config