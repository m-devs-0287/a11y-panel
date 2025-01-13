export const modalNavigation = {
  id: "modal-navigation",
  className: "modal-navigation",
  children: [
    {
      type: "div",
      className: "modal-navigation-header",
      children: [
        {
          type: "h2",
          className: "modal-heading",
          label: "Keyboard Shortcuts",
        },
        {
          type: "div",
          className: "current-page",
          children: [
            {
              type: "p",
              label: "Columbia Business School | Home",
            },
          ],
        },
      ],
    },
    {
      type: "div",
      className: "modal-navigation-body",
      children: [
        {
          type: "div",
          className: "modal-navigation-container",
          children: [
            {
              type: "ul",
              className: "modal-navigation-list",
              children: [
                {
                  type: "li",
                  children: [
                    {
                      type: "a",
                      href: "#",
                      children: [
                        { type: "span", label: "›" },
                        { type: "span", label: "Accessibility Panel" },
                      ],
                    },
                  ],
                },
                {
                  type: "li",
                  children: [
                    {
                      type: "a",
                      href: "#main-header",
                      children: [
                        { type: "span", label: "›" },
                        { type: "span", label: "Main Header" },
                      ],
                    },
                  ],
                },
                {
                  type: "li",
                  children: [
                    {
                      type: "a",
                      href: "#",
                      children: [
                        { type: "span", label: "›" },
                        { type: "span", label: "Aside Navigation" },
                      ],
                    },
                  ],
                },
                {
                  type: "li",
                  children: [
                    {
                      type: "a",
                      href: "#",
                      children: [
                        { type: "span", label: "›" },
                        { type: "span", label: "Articles" },
                      ],
                    },
                  ],
                },
                {
                  type: "li",
                  children: [
                    {
                      type: "a",
                      href: "#",
                      children: [
                        { type: "span", label: "›" },
                        { type: "span", label: "Footer" },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "ul",
              className: "modal-navigation-list",
              children: [
                {
                  type: "li",
                  children: [
                    {
                      type: "a",
                      href: "#",
                      children: [
                        { type: "span", label: "›" },
                        { type: "span", label: "Centers & Programs" },
                      ],
                    },
                  ],
                },
                {
                  type: "li",
                  children: [
                    {
                      type: "a",
                      href: "#",
                      children: [
                        { type: "span", label: "›" },
                        { type: "span", label: "Current Students" },
                      ],
                    },
                  ],
                },
                {
                  type: "li",
                  children: [
                    {
                      type: "a",
                      href: "#",
                      children: [
                        { type: "span", label: "›" },
                        { type: "span", label: "Faculty & Staff" },
                      ],
                    },
                  ],
                },
                {
                  type: "li",
                  children: [
                    {
                      type: "a",
                      href: "#",
                      children: [
                        { type: "span", label: "›" },
                        { type: "span", label: "Corporate" },
                      ],
                    },
                  ],
                },
                {
                  type: "li",
                  children: [
                    {
                      type: "a",
                      href: "#",
                      children: [
                        { type: "span", label: "›" },
                        { type: "span", label: "Careers" },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "div",
      className: "modal-navigation-footer",
      children: [
        {
          type: "button",
          label: "Press ESC to close",
        },
      ],
    },
  ],
};
