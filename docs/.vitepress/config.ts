import {DefaultTheme, defineConfig} from "vitepress";

export default defineConfig({
    lang: "en-US",

    title: "NTAK.GURU by TMRW Applications",
    description: "REST API documentation for NTAK.GURU",

    lastUpdated: true,

    themeConfig: {

        nav: nav(),

        sidebar: {
            "/guide/": sidebarGuide(),
            "/config/": sidebarOpenapi(),
        },

        editLink: {
            repo: "TMRW-Life/docs.ntak.guru",
            text: "Edit this page on GitHub"
        },

        footer: {
            copyright: "Copyright © 2022-present TMRW Applications",
        },
    },

    markdown: {
        lineNumbers: true
    }
});

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Guide",
            link: "/guide/getting-started",
            activeMatch: "/guide/",
        },
        {
            text: "OpenAPI",
            link: "/openapi/download",
            activeMatch: "/openapi/",
        },
    ];
}

function sidebarGuide(): DefaultTheme.SidebarGroup[] {
    return [
        {
            text: "Introduction",
            collapsible: true,
            items: [
                {
                    text: "What is NTAK.GURU?",
                    link: "/guide/what-is-ntak.guru",
                },
                {
                    text: "Getting started",
                    link: "/guide/getting-started"
                },
                {text: "OpenAPI", link: "/guide/openapi"},
            ],
        },
        {
            text: "Headers",
            collapsible: true,
            items: [
                {
                    text: "Authorization",
                    link: "/guide/headers/authorization",
                },
                {
                    text: "Accept",
                    link: "/guide/headers/accept",
                },
                {
                    text: "Locale",
                    link: "/guide/headers/locale",
                },
            ],
        },
        {
            text: "Accommodation",
            collapsible: true,
            items: [
                {
                    text: "The accommodation object",
                    link: "/guide/accommodation/accommodation-object",
                },
                {
                    text: "Register the accommodation",
                    link: "/guide/accommodation/register",
                },
                {
                    text: "Retrieve the accommodation",
                    link: "/guide/accommodation/retrieve",
                },
                {
                    text: "Update the accommodation",
                    link: "/guide/accommodation/update",
                },
                {
                    text: "Activate the accommodation",
                    link: "/guide/accommodation/activate",
                },
                {
                    text: "Deactivate the accommodation",
                    link: "/guide/accommodation/deactivate",
                },
            ],
        },
        {
            text: "Certification",
            collapsible: true,
            items: [
                {
                    text: "Prologue",
                    link: "/guide/certification/prologue"
                },
                {
                    text: "Generate certifications",
                    link: "/guide/certification/generate"
                },
                {
                    text: "Download certification requests",
                    link: "/guide/certification/download"
                },
                {
                    text: "Upload certifications",
                    link: "/guide/certification/upload"
                },
                {
                    text: "Delete certifications",
                    link: "/guide/certification/delete"
                }
            ]
        },
        {
            text: "Reports",
            collapsible: true,
            items: [
                {
                    text: "Reservation",
                    link: "/guide/reports/reservation"
                },
                {
                    text: "Room change",
                    link: "/guide/reports/roomchange"
                },
                {
                    text: "Checkin",
                    link: "/guide/reports/checkin"
                },
                {
                    text: "Checkout",
                    link: "/guide/reports/checkout"
                }
            ]
        }
    ];
}

function sidebarOpenapi(): DefaultTheme.SidebarGroup[] {
    return [
        {
            text: "Config",
            items: [{text: "Introduction", link: "/openapi"}],
        },
    ];
}
