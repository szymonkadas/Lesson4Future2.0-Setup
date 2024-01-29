# Lesson4Future React App guideline:

# Commits:

Follow these git commits guidelines whilst working with this app:
https://www.conventionalcommits.org/en/v1.0.0/
e.g. branch: feat/featureBranch, commit: feat: added feature...

# Folder Structure:

- Each component should reside in its own folder within the main "components" folder.
- The folder name should correspond to the component's name. For example: /components/Header.
- Place component-related files inside the component folder, such as Header.tsx, Header.module.scss.

# Styling:

- We're using CSS MODULES enhanced with SCSS.
- For each component, create a CSS file named ComponentName.module.scss.
- For more demanding tasks we're using material UI: https://mui.com/material-ui/

# Class Naming:

- All classes and component names should be written in camelCase. For example: headerButton
- Avoid using underscores, hyphens, or other special characters in class and component names.
- Use names that clearly describe the functionality and purpose of the element

# Components:

We're dividing components by two distinct cathegories:

- simple components (they have one job, 0 logic in it) - they receive props deciding their behaviour e.g. onClick. e.g. button.tsx
- advanced components - they provide props for simple components created through it's logic, e.g. createProfileButton.tsx
