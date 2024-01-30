# Lesson4Future React App guideline:

# Commits:

Follow these git commits guidelines whilst working with this app:
https://www.conventionalcommits.org/en/v1.0.0/
e.g. branch: feat/featureBranch, commit: feat: added feature...

# Folder Structure:

- Each component should reside in its own folder within the main "components" folder.
- The folder name should correspond to the component's name. For example: /components/Header.
- Place component-related files inside the component folder, such as Header.tsx, Header.module.scss.
  
/src is divided by sections where we put different type of things:
- app -> here we serve page files responsible for serving page under specific url e.g. ./home/page.tsx (in it e.g. Header Main Footer tags ),
- assets -> here we store imgs, icons etc.,
- backend -> here we store serializers of data from and to backend. e.g. format created account to db model. (and other backend related stuff),
- components -> here we store components and their styling,
- contexts -> all context providers land here,
- data -> backend data mocks, and other data not related to db is stored here,
- hooks -> reusable hooks across the app land here. e.g. useOutsideClick,
- lib -> libraries like httpClient, apiClient (code responsible for sending http requests, and api communication) reside here,
- styles -> reusable(mixins)/global styles are here,
- utils -> other utility code is put in here.

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
