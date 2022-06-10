import {defineConfig} from "vitepress";

export default defineConfig({
    lang: "en-US",

    title: "NTAK.REST by TMRW Applications",
    description: "REST API documentation for NTAK.REST",

    lastUpdated: true,

    themeConfig: {

        nav: nav(),

        sidebar: {
            "/en/guide/": sidebarGuideEn(),
            "/en/config/": sidebarOpenapiEn(),
        },

        editLink: {
            repo: "TMRW-Life/docs.ntak.rest",
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

function nav() {
    return [
        {
            text: "Guide",
            link: "/en/guide/what-is-ntak.rest",
            activeMatch: "/en/guide/",
        },
        {
            text: "OpenAPI",
            link: "/en/openapi/download",
            activeMatch: "/en/openapi/",
        },
    ];
}

function sidebarGuideEn() {
    return [
        {
            text: "Introduction",
            collapsible: true,
            items: [
                {
                    text: "What is NTAK.REST?",
                    link: "/en/guide/what-is-ntak.rest",
                },
                {text: "OpenAPI", link: "/en/guide/openapi"},
            ],
        },
        {
            text: "Headers",
            collapsible: true,
            items: [
                {
                    text: "Authorization",
                    link: "/en/guide/headers/authorization",
                },
                {
                    text: "Accept",
                    link: "/en/guide/headers/accept",
                },
                {
                    text: "Locale",
                    link: "/en/guide/headers/locale",
                },
            ],
        },
        {
            text: "Accommodation",
            collapsible: true,
            items: [
                {
                    text: "The accommodation object",
                    link: "/en/guide/accommodation/accommodation-object",
                },
                {
                    text: "Register the accommodation",
                    link: "/en/guide/accommodation/register",
                },
                {
                    text: "Retrieve the accommodation",
                    link: "/en/guide/accommodation/retrieve",
                },
                {
                    text: "Update the accommodation",
                    link: "/en/guide/accommodation/update",
                },
                {
                    text: "Activate the accommodation",
                    link: "/en/guide/accommodation/activate",
                },
                {
                    text: "Deactivate the accommodation",
                    link: "/en/guide/accommodation/deactivate",
                },
            ],
        },
        {
            text: "Certification",
            collapsible: true,
            items: [
                {
                    text: "Generate certifications",
                    link: "/en/guide/certification/generate"
                },
                {
                    text: "Download certification requests",
                    link: "/en/guide/certification/download"
                },
                {
                    text: "Upload certifications",
                    link: "/en/guide/certification/upload"
                }
            ]
        }
    ];
}

function sidebarOpenapiEn() {
    return [
        {
            text: "Config",
            items: [{text: "Introduction", link: "/en/openapi"}],
        },
    ];
}
