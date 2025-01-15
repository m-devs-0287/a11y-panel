export const generateDynamicNavigationLinks = (ids) => {
  const links = ids
    .filter((id) => document.getElementById(id)) // Check if the element exists
    .map((id) => ({
      type: "li",
      children: [
        {
          type: "a",
          href: `#${id}`, // Anchor link to the ID
          children: [
            { type: "span", label: "›" },
            { type: "span", label: id.charAt(0).toUpperCase() + id.slice(1) }, // Capitalize the first letter of the ID
          ],
        },
      ],
    }));

  return links;
};
