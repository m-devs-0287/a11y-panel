
# Accessibility Tools Component

This **Accessibility Tools Component** provides users with essential features for improving the accessibility of a website. It includes options for font customization, layout adjustments, color contrast changes, and more, all in a user-friendly, interactive interface.

---

## Table of Contents

1. [Features Overview](#features-overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Customization](#customization)
5. [Event Handling](#event-handling)
6. [Dependencies](#dependencies)
7. [License](#license)

---

## Features Overview

### **1. Dark Mode**
- **Description:** Allows users to switch between light and dark themes.
- **Use:** Ideal for users who prefer low-light environments or want to reduce eye strain.
- **Improvement for Users:** Helps users with sensitivity to bright screens or those working in dimly lit settings.

### **2. Animations**
- **Description:** Enables or disables page animations.
- **Use:** Useful for users who may experience discomfort with motion effects.
- **Improvement for Users:** Provides a more static experience for users with vestibular disorders.

### **3. Text Reader(revision)**
- **Description:** Activates or deactivates a text reader.
- **Use:** Beneficial for users with visual impairments or reading difficulties.
- **Improvement for Users:** Ensures content is accessible via audio feedback.

### **4. Panel Icons**
- **Description:** Displays or hides icons within the accessibility panel.
- **Use:** Customizes the visual representation for improved user preferences.
- **Improvement for Users:** Simplifies navigation and allows for a cleaner interface.

### **5. Language Selector**
- **Description:** Provides options to select different languages.
- **Use:** Users can choose their preferred language for the panel.
- **Improvement for Users:** Enhances inclusivity for non-native speakers.

### **6. Font Size Adjustment**
- **Description:** Allows users to increase or decrease font size.
- **Use:** Ideal for users with visual impairments.
- **Improvement for Users:** Makes content more readable for users with limited vision.

### **7. Letter Spacing Control**
- **Description:** Adjusts the spacing between letters.
- **Use:** Helps users who struggle with closely packed text.
- **Improvement for Users:** Improves legibility for users with dyslexia.

### **8. Font Weight Adjustment**
- **Description:** Changes the boldness of text.
- **Use:** Helps users differentiate between different text elements.
- **Improvement for Users:** Enhances readability, particularly for users with weak vision.

### **9. Dyslexia-Friendly Font**
- **Description:** Toggles a font designed to aid users with dyslexia.
- **Use:** Designed to minimize common reading issues associated with dyslexia.
- **Improvement for Users:** Helps reduce letter confusion and improves reading speed.

### **10. High Contrast Mode**
- **Description:** Increases contrast between text and background.
- **Use:** Ideal for users with low vision.
- **Improvement for Users:** Makes text easier to distinguish and read.

### **11. Text Alignment Control**
- **Description:** Aligns text to the left, center, or right.
- **Use:** Allows users to choose their preferred text alignment.
- **Improvement for Users:** Provides a more personalized reading experience.

### **12. Line Height Adjustment**
- **Description:** Adjusts the spacing between lines of text.
- **Use:** Helps users who find tightly packed text difficult to read.
- **Improvement for Users:** Reduces eye strain and improves focus.

### **13. Text Color Customization**
- **Description:** Allows users to change the color of text.
- **Use:** Helps users with color blindness or sensitivity to certain colors.
- **Improvement for Users:** Enhances readability through personalized color settings.

### **14. Tooltip Accessibility**
- **Description:** Displays tooltips with helpful information when hovering over elements.
- **Use:** Provides additional context for users who need explanations.
- **Improvement for Users:** Assists users in understanding unfamiliar interface elements.

### **15. Reset Features**
- **Description:** Resets all applied accessibility settings to their defaults.
- **Use:** Allows users to easily return to the original settings.
- **Improvement for Users:** Simplifies the process of undoing customizations.

### **16. Reset Layout**
- **Description:** Reverts any layout changes made by the accessibility panel.
- **Use:** Restores the original layout of the page.
- **Improvement for Users:** Ensures users can quickly fix any undesired layout adjustments.

---

## Installation

1. Include the required **CSS** and **JavaScript** files using the following CDN links:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cbs-accessibility-panel@1.0.2/dist/styles.min.css">

<script src="https://cdn.jsdelivr.net/npm/cbs-accessibility-panel@1.0.2/dist/index.min.js"></script>
<script>AccessibilityPanel.initAccessibilityPanel({});</script>
```

2. Add the accessibility panel's container to your page where the panel should render:

```html
<div id="panel-container"></div>
```

---

## Usage

You can configure the accessibility panel using the following options in the `initAccessibilityPanel` method:

```javascript
export const initAccessibilityPanel = ({
  panelLocation = "#panel-container", // The location where the panel will be rendered
  theme,                               // Custom theme configuration (optional)
  environment = "production",          // Set environment (e.g., 'development', 'production')
  language,                            // Default language setting (optional)
}) => {
  AccessibilityPanel.initAccessibilityPanel({
    panelLocation,
    theme,
    environment,
    language
  });
};
```

Example initialization:

```javascript
initAccessibilityPanel({
  panelLocation: "#custom-panel-container", // Custom container
  theme: { path: './customeTheme.css' },                            // Custom theme path
  environment: "development",                // Development mode
  language: "en"                             // Default to English
});
```

---

## Customization

You can customize the look and feel of the accessibility panel by overriding its default styles using CSS.

### Example CSS Override

```css
.accessibility-panel {
    background-color: #f0f0f0;
    border-radius: 8px;
}

.accessibility-button {
    color: #333;
    font-size: 14px;
}
```

---

## Dependencies

- **CSS:** Custom styling for layout and design.
- **JavaScript:** Handles interaction and dynamic updates.
- **Icons:** Font icons or SVG icons for enhanced accessibility.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it in your projects.
