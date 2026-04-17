import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  branch: process.env.TINA_BRANCH || "main",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ─── HOME PAGE ───────────────────────────────────────────────
      {
        name: "home",
        label: "Home Page",
        path: "content/home",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title",
            required: true,
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "string",
            name: "missionStatement",
            label: "Mission Statement",
            ui: { component: "textarea" },
          },
        ],
      },

      // ─── ABOUT PAGE ──────────────────────────────────────────────
      {
        name: "about",
        label: "About Page",
        path: "content/about",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "pageTitle",
            label: "Page Title",
          },
          {
            type: "string",
            name: "pageSubtitle",
            label: "Page Subtitle",
          },
          {
            type: "string",
            name: "storyTitle",
            label: "Story Section Title",
          },
          {
            type: "rich-text",
            name: "storyContent",
            label: "Your Story",
          },
          {
            type: "image",
            name: "profileImage",
            label: "Profile Photo",
          },
          {
            type: "string",
            name: "profileCaption",
            label: "Profile Photo Caption (e.g. your name/bio)",
          },
          {
            type: "string",
            name: "missionIntro",
            label: "Mission Intro Text",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "missionPoints",
            label: "Mission Points",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.text }),
            },
            fields: [
              { type: "string", name: "emoji", label: "Emoji" },
              { type: "string", name: "text", label: "Text" },
            ],
          },
          {
            type: "string",
            name: "rebelSectionContent",
            label: "Why \"Rebel\"? Section",
            ui: { component: "textarea" },
          },
        ],
      },

      // ─── PLANTS ──────────────────────────────────────────────────
      {
        name: "plant",
        label: "Featured Plants",
        path: "content/plants",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Plant Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "scientificName",
            label: "Scientific Name",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "string",
            name: "benefits",
            label: "Benefits / Tags",
            list: true,
          },
          {
            type: "image",
            name: "image",
            label: "Plant Photo",
          },
        ],
      },

      // ─── RESOURCES ───────────────────────────────────────────────
      {
        name: "resource",
        label: "Resource Links",
        path: "content/resources",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "URL",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" },
          },
        ],
      },

      // ─── GALLERY ─────────────────────────────────────────────────
      {
        name: "gallery",
        label: "Gallery Photos",
        path: "content/gallery",
        format: "json",
        fields: [
          {
            type: "string",
            name: "caption",
            label: "Caption",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Photo",
            required: true,
          },
          {
            type: "string",
            name: "alt",
            label: "Alt text (for accessibility)",
          },
        ],
      },

      // ─── FAQ ─────────────────────────────────────────────────────
      {
        name: "faq",
        label: "Contact Page FAQ",
        path: "content/faq",
        format: "json",
        fields: [
          {
            type: "string",
            name: "question",
            label: "Question",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "answer",
            label: "Answer",
            ui: { component: "textarea" },
            required: true,
          },
        ],
      },
    ],
  },
});
